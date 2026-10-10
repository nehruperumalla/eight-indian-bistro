import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import Contact from "./Contact";

export const SUBMITTED_KEY = "eib_inquiry_submitted";

// sessionStorage throws in some privacy modes, so every access is guarded.
const readSubmitted = () => {
  try {
    return sessionStorage.getItem(SUBMITTED_KEY);
  } catch {
    return null;
  }
};

export default function ThankYou() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // The form hands us state on navigate; sessionStorage is the fallback so a
  // refresh (or the back/forward cache) doesn't bounce a real submitter home.
  const stored = readSubmitted();
  const submitted = state?.submitted === true || stored !== null;
  const subject = state?.subject || (stored && stored !== "1" ? stored : "");

  // Direct hits (pasted link, bots) are not conversions — send them home so
  // "/thank-you" only ever means the form went through. Allowed in dev so the
  // page can be opened directly while working on it.
  const allowDirect = import.meta.env.DEV;

  useEffect(() => {
    if (!submitted && !allowDirect) navigate("/", { replace: true });
  }, [submitted, allowDirect, navigate]);

  if (!submitted && !allowDirect) return null;

  return (
    <main className="pt-10">
      <section
        style={{ backgroundColor: "#5F4A2F" }}
        className="min-h-[70vh] flex items-center py-16"
      >
        {/* GTM: this block only ever renders after a successful submission.
            id / data attribute are stable hooks for an Element Visibility trigger. */}
        <div
          id="form-success"
          data-gtm="form-success"
          data-form-name={subject || ""}
          className="mx-auto max-w-3xl px-6 text-center"
        >
          <CheckCircle2 className="mx-auto text-turmeric" size={64} />

          <h1 className="mt-6 font-primary text-3xl sm:text-4xl md:text-5xl font-bold text-turmeric">
            Thank you — your request has been sent!
          </h1>

          <p className="mt-4 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
            {subject
              ? `We've received your ${subject.toLowerCase()} inquiry and our team will get back to you shortly.`
              : "We've received your inquiry and our team will get back to you shortly."}
            {" "}If it's urgent, give us a call and we'll help right away.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+17325159466"
              className="rounded-xl bg-turmeric px-5 py-3 font-semibold text-black hover:opacity-90"
            >
              Call Us: 732 515-9466
            </a>

            <Link
              to="/"
              className="rounded-xl border border-white/20 px-5 py-3 font-semibold text-white hover:bg-white/10"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </main>
  );
}
