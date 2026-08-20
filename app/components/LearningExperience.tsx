import {
  Presentation,
  ClipboardList,
  MessagesSquare,
  Library,
} from "lucide-react";

const experiences = [
  ["Interactive Classes", Presentation],
  ["Weekly Assessments", ClipboardList],
  ["Doubt Sessions", MessagesSquare],
  ["Study Resources", Library],
];

export default function LearningExperience() {
  return (
    <section className="section experience-section">
      <div className="container">
        <div className="experience-header">
          <span className="eyebrow">The Learning Experience</span>

          <h2>
            Learn. Practice.
            <br />
            <span>Improve. Repeat.</span>
          </h2>
        </div>

        <div className="experience-grid">
          {experiences.map(([title, Icon], index) => {
            const IconComponent = Icon as typeof Presentation;

            return (
              <div className="experience-item" key={title as string}>
                <span>0{index + 1}</span>

                <IconComponent size={25} />

                <h3>{title as string}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}