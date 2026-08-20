import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">
          <div>
            <span className="eyebrow">Your Next Step</span>

            <h2>
              Ready to take your
              <br />
              <span>preparation seriously?</span>
            </h2>

            <p>
              Talk to our team about courses, batches and admissions.
            </p>
          </div>

          <div className="cta-buttons">
            <a href="#contact" className="primary-btn">
              Enquire Now
              <ArrowRight size={18} />
            </a>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}