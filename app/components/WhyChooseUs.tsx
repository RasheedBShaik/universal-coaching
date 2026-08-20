import {
  UserRoundCheck,
  ClipboardCheck,
  MessageCircleQuestion,
  FileText,
  Brain,
  HeartHandshake,
} from "lucide-react";

const items = [
  [
    "Expert Faculty",
    UserRoundCheck,
    "Learn from experienced educators who understand student needs.",
  ],
  [
    "Regular Tests",
    ClipboardCheck,
    "Frequent assessments help students stay prepared and confident.",
  ],
  [
    "Doubt Support",
    MessageCircleQuestion,
    "Students get dedicated opportunities to ask, discuss and understand.",
  ],
  [
    "Study Material",
    FileText,
    "Organised learning resources support classroom teaching and revision.",
  ],
  [
    "Concept Clarity",
    Brain,
    "Strong fundamentals help students approach difficult questions with confidence.",
  ],
  [
    "Mentorship",
    HeartHandshake,
    "Consistent guidance keeps students moving toward their academic goals.",
  ],
];

export default function WhyChooseUs() {
  return (
    <section className="section why-section" id="why-us">
      <div className="container">

        <div className="section-heading centered">
          <span className="eyebrow">
            Why Students Choose Us
          </span>

          <h2>
            A learning system
            <br />
            <span>built around progress.</span>
          </h2>
        </div>

        <div className="why-grid">
          {items.map(([title, Icon, text], index) => {
            const IconComponent = Icon as typeof Brain;

            return (
              <div
                className="why-item"
                key={title as string}
              >
                <div className="why-meta">
                  <span className="why-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="why-icon">
                    <IconComponent size={20} />
                  </div>
                </div>

                <div className="why-content">
                  <h3>{title as string}</h3>

                  <p>{text as string}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}