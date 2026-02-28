"use client";

import { useState, FormEvent } from "react";

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      company: (form.elements.namedItem("company") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setStatus("error");
        setErrorMessage(json.error || "Something went wrong. Please try again.");
      } else {
        setStatus("success");
        form.reset();
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-xl mx-auto text-center p-8 bg-navy-900 border border-navy-800 rounded-lg">
          <h3 className="text-xl font-semibold text-white mb-2">Message Sent</h3>
          <p className="text-gray-400">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-sm text-accent hover:text-accent-light transition-colors"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-2 text-center">Get in Touch</h2>
        <p className="text-gray-500 mb-8 text-center">
          Have a question or need help choosing the right solution? Drop us a line.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
              Name <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2.5 bg-navy-900 border border-navy-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
              Email <span className="text-accent">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2.5 bg-navy-900 border border-navy-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1">
              Company <span className="text-accent">*</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              required
              className="w-full px-4 py-2.5 bg-navy-900 border border-navy-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors"
              placeholder="Your company"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-1">
              Phone <span className="text-gray-600">(optional)</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2.5 bg-navy-900 border border-navy-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
              Message <span className="text-accent">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-2.5 bg-navy-900 border border-navy-800 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-accent/60 transition-colors resize-y"
              placeholder="Tell us what you're looking for..."
            />
          </div>

          {status === "error" && (
            <p className="text-sm text-red-400">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full px-6 py-3 bg-accent hover:bg-accent-dark text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
