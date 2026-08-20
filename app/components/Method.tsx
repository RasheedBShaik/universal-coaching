const steps = [
  {
    number: "01",
    title: "Learn",
    text: "Understand concepts through clear and structured teaching.",
  },
  {
    number: "02",
    title: "Practice",
    text: "Strengthen concepts through guided questions and assignments.",
  },
  {
    number: "03",
    title: "Test",
    text: "Measure preparation through regular tests and mock exams.",
  },
  {
    number: "04",
    title: "Improve",
    text: "Analyse performance and work on areas that need attention.",
  },
];

export default function Method() {
  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <span className="font-semibold text-blue-200">OUR METHOD</span>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            A Simple Process That Keeps Students Moving Forward
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="border-t border-white/20 pt-6">
              <div className="text-sm font-bold text-blue-200">
                {step.number}
              </div>

              <h3 className="mt-4 text-2xl font-bold">{step.title}</h3>

              <p className="mt-3 leading-7 text-blue-100">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}