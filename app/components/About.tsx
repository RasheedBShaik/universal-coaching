import {
  Target,
  Users,
  Lightbulb,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Focused Preparation",
    text: "Structured learning plans that keep students focused on their academic goals.",
  },
  {
    icon: Users,
    title: "Personal Attention",
    text: "Smaller learning groups and regular interaction help students receive the guidance they need.",
  },
  {
    icon: Lightbulb,
    title: "Concept-Based Learning",
    text: "We focus on understanding concepts instead of simply memorising answers.",
  },
  {
    icon: TrendingUp,
    title: "Track Your Progress",
    text: "Regular tests and feedback help students understand where they are and where to improve.",
  },
];

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">About Universal Academy</span>
            <h2>
              More than coaching.
              <br />
              <span>A path toward confidence.</span>
            </h2>
          </div>

          <p>
            Every student has different strengths, challenges and
            goals. Our approach combines strong academic foundations
            with personal guidance, regular practice and consistent
            feedback.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <article className="feature-card" key={item.title}>
                <div className="icon-box">
                  <Icon size={21} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}