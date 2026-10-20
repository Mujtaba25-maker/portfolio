import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { personalInfo } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

const initialForm = {
  name: "",
  email: "",
  subject: "",
  message: ""
};

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setFormError("");
  };

  const validate = () => {
    const nextErrors = {};
    if (form.name.trim().length < 2) nextErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Please enter a valid email.";
    if (form.subject.trim().length < 3) nextErrors.subject = "Subject must be at least 3 characters.";
    if (form.message.trim().length < 10) nextErrors.message = "Message must be at least 10 characters.";
    return nextErrors;
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setIsSubmitting(true);
    setSuccess(false);
    setFormError("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalInfo.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          _captcha: "false",
          _template: "table"
        })
      });

      if (!response.ok) {
        throw new Error("Message service rejected the request.");
      }

      setSuccess(true);
      setForm(initialForm);
      window.setTimeout(() => setSuccess(false), 5000);
    } catch {
      setFormError(
        "Message could not be sent right now. Please email me directly at mujtabasekandari470@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-pad mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let us build something professional."
        text="Send a message for dashboards, APIs, full-stack apps, or database-driven business systems."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass min-w-0 rounded-lg p-6">
          {[
            [Mail, personalInfo.email, `mailto:${personalInfo.email}`],
            [FiGithub, "GitHub profile", personalInfo.github],
            [FiLinkedin, "LinkedIn profile", personalInfo.linkedin],
            [MapPin, personalInfo.location, null]
          ].map(([Icon, label, href]) => {
            const content = (
              <>
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-blue-400/10 text-blue-200 light:bg-blue-50 light:text-blue-700">
                  <Icon size={20} />
                </span>
                <span className="min-w-0 break-words font-bold [overflow-wrap:anywhere]">{label}</span>
              </>
            );

            return href ? (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="mb-4 flex items-center gap-4 rounded-lg border border-slate-500/20 bg-white/[0.05] p-4 text-slate-300 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-200 light:border-slate-900/10 light:bg-slate-50 light:text-slate-700">
                {content}
              </a>
            ) : (
              <div key={label} className="mb-4 flex items-center gap-4 rounded-lg border border-slate-500/20 bg-white/[0.05] p-4 text-slate-300 light:border-slate-900/10 light:bg-slate-50 light:text-slate-700">
                {content}
              </div>
            );
          })}
        </motion.div>

        <motion.form initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} onSubmit={submitForm} className="glass min-w-0 rounded-lg p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" value={form.name} error={errors.name} onChange={updateField} />
            <Field label="Email" name="email" type="email" value={form.email} error={errors.email} onChange={updateField} />
          </div>
          <div className="mt-4">
            <Field label="Subject" name="subject" value={form.subject} error={errors.subject} onChange={updateField} />
          </div>
          <label className="mt-4 block">
            <span className="text-sm font-black text-slate-200 light:text-slate-700">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              rows="6"
              className="mt-2 min-w-0 w-full resize-none rounded-xl border border-slate-500/20 bg-slate-950/50 px-4 py-3 text-white outline-none transition focus:border-blue-300 light:border-slate-900/10 light:bg-white light:text-slate-950"
              placeholder="Tell me about your project..."
            />
            {errors.message && <span className="mt-2 block text-sm font-bold text-rose-300 light:text-rose-600">{errors.message}</span>}
          </label>
          {success && <p className="mt-4 rounded-xl bg-emerald-300/10 p-4 text-sm font-black text-emerald-200 light:text-emerald-700">Message sent successfully. Thank you for reaching out.</p>}
          {formError && <p className="mt-4 rounded-xl bg-rose-300/10 p-4 text-sm font-black text-rose-200 light:text-rose-700">{formError}</p>}
          <button type="submit" disabled={isSubmitting} className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 font-black text-white transition hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-200 disabled:cursor-not-allowed disabled:opacity-60">
            <Send size={18} />
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, name, value, onChange, error, type = "text" }) {
  return (
    <label className="block">
      <span className="text-sm font-black text-slate-200 light:text-slate-700">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="mt-2 min-w-0 w-full rounded-xl border border-slate-500/20 bg-slate-950/50 px-4 py-3 text-white outline-none transition focus:border-blue-300 light:border-slate-900/10 light:bg-white light:text-slate-950"
        placeholder={label} aria-invalid={Boolean(error)}
      />
      {error && <span className="mt-2 block text-sm font-bold text-rose-300 light:text-rose-600">{error}</span>}
    </label>
  );
}

export default Contact;
