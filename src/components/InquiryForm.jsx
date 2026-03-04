import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function InquiryForm({ subject }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({...form,[e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!form.name || !form.email || !form.phone){
      setStatus("Please fill all required fields.");
      return;
    }

    setLoading(true);

    const templateParams = {
      subject: subject,
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message
    };

    try{

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("✅ Request sent successfully!");
      setForm({
        name:"",
        email:"",
        phone:"",
        message:""
      });

    }catch(err){
      setStatus("❌ Failed to send request. Try again.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 max-w-2xl mx-auto">

      <div className="grid gap-4">

        <input
          name="name"
          placeholder="Name *"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded bg-white/10 border border-white/20"
        />

        <input
          name="email"
          placeholder="Email *"
          value={form.email}
          onChange={handleChange}
          className="p-3 rounded bg-white/10 border border-white/20"
        />

        <input
          name="phone"
          placeholder="Phone *"
          value={form.phone}
          onChange={handleChange}
          className="p-3 rounded bg-white/10 border border-white/20"
        />

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
        className="mt-5 bg-turmeric text-black px-6 py-3 rounded font-semibold hover:opacity-90"
      >
        {loading ? "Sending..." : "Submit Request"}
      </button>

      {status && (
        <p className="mt-4 text-center text-sm">
          {status}
        </p>
      )}

    </form>
  );
}