const stats = [
  ["10+", "Years of Excellence"],
  ["5,000+", "Students Guided"],
  ["95%", "Success Rate"],
  ["50+", "Expert Mentors"],
];

export default function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map(([number, label]) => (
          <div className="stat" key={label}>
            <strong>{number}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}