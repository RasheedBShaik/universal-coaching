"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const questions = [
  {
    q: "Which courses are available?",
    a: "Our demo includes foundation, subject-focused and competitive preparation programs. The final website can be customised according to the centre's actual courses.",
  },
  {
    q: "Are demo classes available?",
    a: "Demo classes can be arranged based on the centre's schedule and availability.",
  },
  {
    q: "How can I enquire about admission?",
    a: "Students or parents can use the enquiry section or contact the academy directly through WhatsApp or phone.",
  },
  {
    q: "Do you provide study material?",
    a: "Study material and learning resources can be included according to the selected program.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="section faq-section">
      <div className="container faq-layout">
        <div>
          <span className="eyebrow">Frequently Asked Questions</span>

          <h2>
            Have questions?
            <br />
            <span>Let's make it simple.</span>
          </h2>
        </div>

        <div className="faq-list">
          {questions.map((item, index) => (
            <div
              className={`faq-item ${
                active === index ? "active" : ""
              }`}
              key={item.q}
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
              >
                <span>{item.q}</span>
                <Plus size={19} />
              </button>

              {active === index && (
                <p>{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}