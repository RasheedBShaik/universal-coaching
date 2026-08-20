import {
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import { academy } from "@/data/academy";

interface AdmissionsProps {
  language: "en" | "te";
}

export default function Admissions({
  language,
}: AdmissionsProps) {
  const te = language === "te";

  const steps = [
    te ? "Send an enquiry" : "Send an enquiry",
    te ? "Talk to our team" : "Talk to our team",
    te ? "Understand the programme" : "Understand the programme",
    te ? "Choose the right course" : "Choose the right course",
  ];

  return (
    <section
      id="admissions"
      className="bg-blue-50 py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold tracking-widest text-blue-600">
              {te ? "అడ్మిషన్స్" : "ADMISSIONS"}
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              {te
                ? "Take the first step."
                : "Take the first step toward better learning."}
            </h2>

            <p className="mt-5 max-w-lg leading-7 text-slate-600">
              {te
                ? "Courses, batches మరియు admission process గురించి తెలుసుకోవడానికి మాతో సంప్రదించండి."
                : "Get in touch to understand courses, batches and the learning experience before making your decision."}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                {te ? "Enquiry పంపండి" : "Start an Enquiry"}
                <ArrowRight size={17} />
              </a>

              <a
                href={`https://wa.me/${academy.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-blue-100 bg-white p-6"
              >
                <div className="text-sm font-bold text-blue-600">
                  0{index + 1}
                </div>

                <h3 className="mt-5 font-semibold text-slate-900">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}