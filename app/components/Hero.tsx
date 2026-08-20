import {
  ArrowRight,
  Play,
  CheckCircle2,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1800&q=85"
      >
        <source
          src="https://cdn.coverr.co/videos/coverr-students-studying-1573/1080p.mp4"
          type="video/mp4"
        />
      </video>

      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="hero-badge">
          <span />
          Admissions Open 2026–27
        </div>

        <h1>
          Prepare With Purpose.
          <br />
          <em>Perform With Confidence.</em>
        </h1>

        <p>
          Focused coaching, expert guidance and a learning
          environment designed to help students take their next
          step with confidence.
        </p>

        <div className="hero-buttons">
          <a href="#courses" className="primary-btn">
            Explore Courses
            <ArrowRight size={18} />
          </a>

          <a href="#contact" className="secondary-btn">
            <Play size={17} />
            Enquire Now
          </a>
        </div>

        <div className="hero-trust">
          <span>
            <CheckCircle2 size={17} />
            Experienced Faculty
          </span>

          <span>
            <CheckCircle2 size={17} />
            Regular Assessments
          </span>

          <span>
            <CheckCircle2 size={17} />
            Personal Mentorship
          </span>
        </div>
      </div>

      <div className="hero-bottom">
        <span>Academic Excellence</span>
        <span>•</span>
        <span>Career Preparation</span>
        <span>•</span>
        <span>Student Success</span>
      </div>
    </section>
  );
}