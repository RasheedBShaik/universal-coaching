"use client";

import {
  CheckCircle2,
  Send,
} from "lucide-react";

import { FormEvent, useState } from "react";
import { academy } from "@/data/academy";

interface EnquiryFormProps {
  language: "en" | "te";
}

export default function EnquiryForm({
  language,
}: EnquiryFormProps) {
  const te = language === "te";

  const [sent, setSent] = useState(false);

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") || "");
    const phone = String(form.get("phone") || "");
    const course = String(form.get("course") || "");
    const message = String(form.get("message") || "");

    const text = `
Hello ${academy.name},

I would like to make an admission enquiry.

Name: ${name}
Phone: ${phone}
Course: ${course}

Message:
${message}
    `.trim();

    const whatsappUrl =
      `https://wa.me/${academy.whatsapp}` +
      `?text=${encodeURIComponent(text)}`;

    setSent(true);

    window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    event.currentTarget.reset();
  }

  return (
    <section
      id="enquiry"
      className="bg-slate-50 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-blue-600">
              {te ? "ఎంక్వైరీ" : "ADMISSION ENQUIRY"}
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              {te
                ? "Let's talk about your learning goals."
                : "Let's talk about your learning goals."}
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
              {te
                ? "మీ వివరాలను పంపండి. WhatsApp ద్వారా academy team తో enquiry కొనసాగుతుంది."
                : "Leave your details and your enquiry will continue directly through WhatsApp."}
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-9 max-w-xl space-y-4"
          >
            <input
              required
              name="name"
              placeholder={
                te
                  ? "Student / Parent Name"
                  : "Student / Parent Name"
              }
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />

            <input
              required
              name="phone"
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />

            <select
              required
              name="course"
              defaultValue=""
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-600 outline-none focus:border-blue-500"
            >
              <option value="" disabled>
                {te
                  ? "Select Course"
                  : "Select Course"}
              </option>

              {academy.courses.map((course) => (
                <option
                  key={course.title}
                  value={course.title}
                >
                  {course.title}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              rows={4}
              placeholder={
                te
                  ? "Your enquiry..."
                  : "Your enquiry..."
              }
              className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-4 text-sm font-bold text-white transition hover:bg-blue-700"
            >
              <Send size={17} />

              {te
                ? "WhatsApp ద్వారా Enquiry పంపండి"
                : "Send Enquiry via WhatsApp"}
            </button>

            {sent && (
              <div className="flex items-center justify-center gap-2 pt-2 text-sm text-green-600">
                <CheckCircle2 size={16} />
                WhatsApp opening...
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}