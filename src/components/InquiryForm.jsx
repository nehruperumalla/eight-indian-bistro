import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { SUBMITTED_KEY } from "./ThankYou";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

// Returns a field -> message map; empty object means the form is valid.
const validate = (form) => {
  const errors = {};

  const name = form.name.trim();
  if (!name) errors.name = "Please enter your name.";
  else if (name.length < 2) errors.name = "Please enter your full name.";

  const email = form.email.trim();
  if (!email) errors.email = "Please enter your email.";
  else if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address.";

  const digits = form.phone.replace(/\D/g, "");
  if (!digits) errors.phone = "Please enter your phone number.";
  else if (digits.length < 10 || digits.length > 15)
    errors.phone = "Please enter a valid phone number.";

  return errors;
};

export default function InquiryForm({ subject }) {

  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form,[name]: value});
    // Clear the field's error as soon as the user starts fixing it.
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const fieldErrors = validate(form);
    if (Object.keys(fieldErrors).length) {
      setErrors(fieldErrors);
      setStatus("Please correct the highlighted fields.");
      return;
    }

    setErrors({});
    setStatus("");
    setLoading(true);

    const templateParams = {
      subject: subject,
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      message: form.message.trim()
    };

    try{

      if (isConfigured) {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      } else if (import.meta.env.DEV) {
        // No .env.local on this machine: simulate the send so the success path
        // (dataLayer event + Thank You redirect) can be tested locally.
        console.warn(
          "[InquiryForm] VITE_EMAILJS_* not set — simulating a successful send (dev only).",
          templateParams
        );
      } else {
        throw new Error("EmailJS is not configured.");
      }

      // Conversion signal for GTM. This runs only after the email is actually
      // accepted — never on a plain "Submit Request" click or a failed send.
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "form_submission_success",
        form_name: subject,
        form_location: pathname
      });

      // Survives a refresh of the Thank You page.
      try {
        sessionStorage.setItem(SUBMITTED_KEY, subject || "1");
      } catch {
        // Private browsing can block storage; the route state still carries it.
      }

      setForm({
        name:"",
        email:"",
        phone:"",
        message:""
      });

      navigate("/thank-you", { state: { submitted: true, subject } });
      return;

    }catch(err){
      setStatus("❌ Failed to send request. Try again.");
      console.error(err);
    }

    setLoading(false);
  };

  const fieldClass = (name) =>
    `p-3 rounded bg-white/10 border ${
      errors[name] ? "border-chilli" : "border-white/20"
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-8 max-w-2xl mx-auto">

      <div className="grid gap-4">

        <div className="text-left">
          <input
            name="name"
            placeholder="Name *"
            value={form.name}
            onChange={handleChange}
            aria-invalid={!!errors.name}
            className={`w-full ${fieldClass("name")}`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-chilli">{errors.name}</p>
          )}
        </div>

        <div className="text-left">
          <input
            name="email"
            type="email"
            inputMode="email"
            placeholder="Email *"
            value={form.email}
            onChange={handleChange}
            aria-invalid={!!errors.email}
            className={`w-full ${fieldClass("email")}`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-chilli">{errors.email}</p>
          )}
        </div>

        <div className="text-left">
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="Phone *"
            value={form.phone}
            onChange={handleChange}
            aria-invalid={!!errors.phone}
            className={`w-full ${fieldClass("phone")}`}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-chilli">{errors.phone}</p>
          )}
        </div>

        <textarea
          name="message"
          rows="4"
          placeholder="Message (optional)"
          value={form.message}
          onChange={handleChange}
          className="p-3 rounded bg-white/10 border border-white/20"
        />

      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-5 bg-turmeric text-black px-6 py-3 rounded font-semibold hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Sending..." : "Submit Request"}
      </button>

      {status && (
        <p className="mt-4 text-center text-sm" role="alert">
          {status}
        </p>
      )}

    </form>
  );
}
