import {
  Clock3,
  Users,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const batches = [
  {
    title: "Foundation Batch",
    level: "Classes 6 – 10",
    timing: "4:30 PM – 6:00 PM",
    mode: "Offline",
    students: "Limited Students",
  },
  {
    title: "Intermediate Batch",
    level: "Classes 11 – 12",
    timing: "6:00 PM – 8:00 PM",
    mode: "Offline",
    students: "Limited Students",
  },
  {
    title: "Competitive Batch",
    level: "Entrance Preparation",
    timing: "7:00 AM – 9:00 AM",
    mode: "Online + Offline",
    students: "Focused Batch",
  },
];

export default function Batches() {
  return (
    <section className="section batches-section" id="batches">
      <div className="container">

        <div className="section-heading batches-header">
          <span className="eyebrow">
            Batches & Timings
          </span>

          <h2>
            Find a batch that
            <br />
            <span>fits your schedule.</span>
          </h2>

          <p>
            Carefully planned batches designed around different
            academic levels, preparation goals and schedules.
          </p>
        </div>

        <div className="batches-grid">
          {batches.map((batch, index) => (
            <article
              className="batch-card"
              key={batch.title}
            >
              <div className="batch-top">
                <span className="batch-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="batch-mode">
                  {batch.mode}
                </span>
              </div>

              <div className="batch-content">
                <h3>{batch.title}</h3>

                <p className="batch-level">
                  {batch.level}
                </p>

                <div className="batch-details">

                  <div className="batch-detail">
                    <Clock3 size={17} />
                    <span>{batch.timing}</span>
                  </div>

                  <div className="batch-detail">
                    <Users size={17} />
                    <span>{batch.students}</span>
                  </div>

                  <div className="batch-detail">
                    <MapPin size={17} />
                    <span>Academy Campus</span>
                  </div>

                </div>

                <a
                  href="#contact"
                  className="batch-enquire"
                >
                  <span>Enquire About Batch</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="batches-note">
          Batch timings can be customised according to the
          academy's actual schedule.
        </div>

      </div>
    </section>
  );
}