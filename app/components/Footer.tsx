export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#home" className="footer-logo">
            <span>U</span>
            Universal Academy
          </a>

          <p>
            Focused learning. Personal guidance.
            <br />
            Confident students.
          </p>
        </div>

        <div>
          <h4>Explore</h4>

          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#results">Results</a>
          <a href="#faculty">Faculty</a>
        </div>

        <div>
          <h4>Connect</h4>

          <a href="#contact">Contact</a>
          <a href="https://wa.me/919876543210">
            WhatsApp
          </a>
          <a href="mailto:hello@example.com">
            Email
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © 2026 Universal Academy
        </span>

        <span>
          Demo website — sample content and imagery.
        </span>
      </div>
    </footer>
  );
}