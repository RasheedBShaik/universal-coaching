const testimonials = [
  {
    quote:
      "The biggest difference was the confidence I gained. Teachers were always approachable whenever I had doubts.",
    name: "Sai Teja",
    role: "Student",
  },
  {
    quote:
      "The regular tests helped me understand exactly where I needed to improve instead of just studying more.",
    name: "Harika",
    role: "Student",
  },
  {
    quote:
      "We appreciated the communication and the personal attention given to the students throughout the year.",
    name: "S. Kumar",
    role: "Parent",
  },
];

export default function Testimonials() {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Student Voices</span>

          <h2>
            A few words from
            <br />
            <span>our learning community.</span>
          </h2>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="quote-mark">“</div>

              <p>{item.quote}</p>

              <div className="testimonial-person">
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}