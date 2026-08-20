import { Trophy, TrendingUp, Award } from "lucide-react";

export default function Results() {
  return (
    <section className="section results-section" id="results">
      <div className="container">
        <div className="results-layout">
          <div>
            <span className="eyebrow">Results & Progress</span>

            <h2>
              Results are built
              <br />
              <span>one step at a time.</span>
            </h2>

            <p>
              We believe good results come from consistent teaching,
              regular practice, timely feedback and the confidence to
              keep improving.
            </p>

            <a href="#contact" className="text-link">
              Talk to our team →
            </a>
          </div>

          <div className="results-cards">
            <div className="result-card large">
              <Trophy />
              <strong>95%</strong>
              <span>Overall academic success</span>
            </div>

            <div className="result-card">
              <TrendingUp />
              <strong>4.8×</strong>
              <span>Average improvement</span>
            </div>

            <div className="result-card">
              <Award />
              <strong>500+</strong>
              <span>Student achievements</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}