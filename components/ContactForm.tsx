"use client";

import { Send } from "lucide-react";
import { useState } from "react";

const inputClass =
  "focus-ring min-h-12 rounded-md border border-forest-100 bg-white px-4 text-sm text-charcoal outline-none transition placeholder:text-charcoal/40 hover:border-forest-200";

const inquiryTypes = [
  "Wholesale Inquiry",
  "Distribution Partnership",
  "Product Catalog Request",
  "Import/Export Partnership",
  "General Inquiry"
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Contact form submission failed");
      }

      event.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const isLoading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-md border border-forest-100 bg-white p-6 shadow-soft"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Full Name
          <input
            className={inputClass}
            name="fullName"
            type="text"
            autoComplete="name"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Company Name
          <input
            className={inputClass}
            name="companyName"
            type="text"
            autoComplete="organization"
            required
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Email
          <input
            className={inputClass}
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-charcoal">
          Phone
          <input
            className={inputClass}
            name="phone"
            type="tel"
            autoComplete="tel"
            required
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-charcoal">
        Inquiry Type
        <select className={inputClass} name="inquiryType" defaultValue="" required>
          <option value="" disabled>
            Select an inquiry type
          </option>
          {inquiryTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium text-charcoal">
        Message
        <textarea
          className={`${inputClass} min-h-36 py-3`}
          name="message"
          rows={6}
          required
        />
      </label>
      {status === "success" ? (
        <p className="rounded-md border border-forest-200 bg-forest-50 px-4 py-3 text-sm font-medium text-forest-800">
          Thank you. Your inquiry has been sent successfully.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          Something went wrong. Please try again or contact us directly.
        </p>
      ) : null}
      <button
        className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-forest-700 px-5 text-sm font-semibold text-white transition hover:bg-forest-800 disabled:cursor-not-allowed disabled:opacity-70 sm:w-max"
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? "Sending..." : "Send Inquiry"}
        <Send aria-hidden="true" className="h-4 w-4" />
      </button>
    </form>
  );
}
