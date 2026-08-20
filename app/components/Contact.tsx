import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  ArrowUpRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-layout">
          <div>
            <span className="eyebrow">Get In Touch</span>

            <h2>
              Let's talk about
              <br />
              <span>your next step.</span>
            </h2>

            <p>
              Have questions about courses, batches or admissions?
              Reach out to our team.
            </p>

            <div className="contact-details">
              <a href="tel:+919876543210">
                <Phone size={19} />
                <span>
                  <small>Call Us</small>
                  +91 98765 43210
                </span>
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={19} />
                <span>
                  <small>WhatsApp</small>
                  Chat with us
                </span>
              </a>

              <a href="mailto:hello@example.com">
                <Mail size={19} />
                <span>
                  <small>Email</small>
                  hello@example.com
                </span>
              </a>

              <div>
                <Clock size={19} />
                <span>
                  <small>Office Hours</small>
                  Monday – Saturday · 9 AM – 6 PM
                </span>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-top">
              <span>Admissions & Enquiries</span>
              <ArrowUpRight size={19} />
            </div>

            <h3>Start a conversation.</h3>

            <p>
              Send us a WhatsApp message and our team can help you
              with courses, batches and admissions.
            </p>

            <a
              href="https://wa.me/919876543210?text=Hello%20Universal%20Academy,%20I%20would%20like%20to%20know%20about%20your%20courses."
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn full"
            >
              Send Enquiry on WhatsApp
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}