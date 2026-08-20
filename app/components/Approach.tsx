import {
  BookOpen,
  PencilRuler,
  LineChart,
} from "lucide-react";

interface ApproachProps {
  language: "en" | "te";
}

export default function Approach({
  language,
}: ApproachProps) {
  const te = language === "te";

  const steps = [
    {
      icon: BookOpen,
      title: te ? "Teaching that explains" : "Teaching that explains",
      text: te
        ? "Teachers encourage questions and make difficult concepts easier to understand."
        : "Clear explanations, questions and examples help students develop genuine understanding.",
    },
    {
      icon: PencilRuler,
      title: te ? "Practice that builds" : "Practice that builds",
      text: te
        ? "Regular practice helps students apply concepts and become more confident."
        : "Assignments and guided practice help students turn understanding into ability.",
    },
    {
      icon: LineChart,
      title: te ? "Feedback that improves" : "Feedback that improves",
      text: te
        ? "Regular feedback helps students identify areas that need more attention."
        : "Assessments and feedback help students understand their strengths and areas for improvement.",
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-blue-600">
            {te ? "మా విధానం" : "OUR APPROACH"}
          </p>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            {te
              ? "Three simple ideas behind everyday learning."
              : "Three simple ideas behind everyday learning."}
          </h2>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="border-t border-slate-200 pt-6"
              >
                <div className="flex items-center justify-between">
                  <Icon size={22} className="text-blue-600" />

                  <span className="text-xs font-bold text-slate-300">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}