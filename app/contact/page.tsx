"use client";

import Link from "next/link";
import { useState } from "react";
import { contact } from "@/lib/data";

interface FormState {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const services = [
  "Industrial Maintenance",
  "Outage Services",
  "Welding & Fabrication",
  "Emergency Response",
  "Capital Projects",
  "Resource Solutions",
  "Other / Not Sure",
];

const FORMSPREE_ACTION = "https://formspree.io/f/mkovplev";

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch(FORMSPREE_ACTION, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
      setForm(INITIAL_FORM);
    } catch {
      setSubmitError("Submission failed. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Page header */}
      <section className="pt-36 pb-16 bg-mac-dark relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-mac-red" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-400 text-xs uppercase tracking-widest transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-700 text-xs">/</span>
            <span className="text-mac-red text-xs uppercase tracking-widest">
              Contact
            </span>
          </div>
          <div className="w-12 h-0.5 bg-mac-red mb-5" />
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Tell us about your project. We&apos;ll get back to you fast — and if
            it&apos;s an emergency, call directly.
          </p>
        </div>
      </section>

      <section className="py-16 bg-mac-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info sidebar */}
            <div className="space-y-8">
              {/* Direct contact card */}
              <div className="bg-mac-gray border border-mac-gray-light rounded-xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-px h-7 bg-mac-red" />
                  <h2 className="text-white font-bold">Direct Contact</h2>
                </div>

                <div className="mb-5">
                  <p className="text-white font-bold text-lg">{contact.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5 uppercase tracking-wide">
                    {contact.title}
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-mac-red/10 border border-mac-red/20 flex items-center justify-center text-mac-red group-hover:bg-mac-red group-hover:text-white transition-all duration-200 flex-shrink-0">
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">{contact.phone}</span>
                  </a>

                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-mac-red/10 border border-mac-red/20 flex items-center justify-center text-mac-red group-hover:bg-mac-red group-hover:text-white transition-all duration-200 flex-shrink-0">
                      <svg
                        className="w-3.5 h-3.5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium break-all">
                      {contact.email}
                    </span>
                  </a>
                </div>
              </div>

              {/* Emergency */}
              <div className="bg-mac-red/10 border border-mac-red/30 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <svg
                    className="w-4 h-4 text-mac-red"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                  </svg>
                  <p className="text-mac-red text-xs font-bold uppercase tracking-widest">
                    Emergency?
                  </p>
                </div>
                <p className="text-gray-300 text-sm mb-3">
                  For forced outages and critical failures, call directly —
                  24/7.
                </p>
                <a
                  href={`tel:${contact.phone}`}
                  className="btn-primary w-full justify-center text-xs"
                >
                  Call Now: {contact.phone}
                </a>
              </div>

              {/* Response time */}
              <div className="bg-mac-gray border border-mac-gray-light rounded-xl p-6">
                <p className="text-mac-red text-xs font-bold uppercase tracking-widest mb-3">
                  What to Expect
                </p>
                <ul className="space-y-3">
                  {[
                    "Response within 1 business day",
                    "Detailed scope discussion",
                    "Fast, no-obligation quote",
                    "Dedicated point of contact",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-gray-400 text-sm"
                    >
                      <span className="w-1 h-1 rounded-full bg-mac-red flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-mac-gray border border-mac-red/30 rounded-xl p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-mac-red/10 border border-mac-red/30 flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-mac-red"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <h2 className="text-white text-2xl font-bold mb-3">
                    Message Received
                  </h2>
                  <p className="text-gray-400 mb-6">
                    We&apos;ll get back to you within 1 business hour. For
                    urgent matters, call Jayr directly at {contact.phone}.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm(INITIAL_FORM);
                    }}
                    className="btn-outline text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <div className="bg-mac-gray border border-mac-gray-light rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-px h-7 bg-mac-red" />
                    <h2 className="text-white font-bold text-xl">
                      Request a Quote
                    </h2>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    action={FORMSPREE_ACTION}
                    method="POST"
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          className="block text-gray-400 text-xs uppercase tracking-wider mb-2"
                          htmlFor="name"
                        >
                          Full Name <span className="text-mac-red">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          className="w-full bg-mac-dark border border-mac-gray-light rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-mac-red transition-colors duration-200"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-gray-400 text-xs uppercase tracking-wider mb-2"
                          htmlFor="company"
                        >
                          Company <span className="text-mac-red">*</span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={form.company}
                          onChange={handleChange}
                          className="w-full bg-mac-dark border border-mac-gray-light rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-mac-red transition-colors duration-200"
                          placeholder="Acme Power Plant"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          className="block text-gray-400 text-xs uppercase tracking-wider mb-2"
                          htmlFor="email"
                        >
                          Email <span className="text-mac-red">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          className="w-full bg-mac-dark border border-mac-gray-light rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-mac-red transition-colors duration-200"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div>
                        <label
                          className="block text-gray-400 text-xs uppercase tracking-wider mb-2"
                          htmlFor="phone"
                        >
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full bg-mac-dark border border-mac-gray-light rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-mac-red transition-colors duration-200"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        className="block text-gray-400 text-xs uppercase tracking-wider mb-2"
                        htmlFor="service"
                      >
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full bg-mac-dark border border-mac-gray-light rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-mac-red transition-colors duration-200 text-white"
                      >
                        <option value="" className="text-gray-600">
                          Select a service...
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        className="block text-gray-400 text-xs uppercase tracking-wider mb-2"
                        htmlFor="message"
                      >
                        Project Details <span className="text-mac-red">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className="w-full bg-mac-dark border border-mac-gray-light rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-mac-red transition-colors duration-200 resize-none"
                        placeholder="Describe your project, timeline, and any specific requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full justify-center"
                    >
                      {isSubmitting ? "Sending..." : "Send Request"}
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                    {submitError ? (
                      <p className="text-mac-red text-sm" role="alert">
                        {submitError}
                      </p>
                    ) : null}
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
