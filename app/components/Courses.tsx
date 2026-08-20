import {
  ArrowUpRight,
  BookOpen,
  Atom,
  Calculator,
  GraduationCap,
} from "lucide-react";

const courses = [
  {
    number: "01",
    icon: BookOpen,
    title: "Foundation Program",
    description:
      "Build strong academic fundamentals and develop disciplined learning habits.",
    tags: ["Classes 6–10", "Concept Building"],
  },
  {
    number: "02",
    icon: Atom,
    title: "Science & Competitive",
    description:
      "Focused preparation for students aiming for competitive academic pathways.",
    tags: ["Intermediate", "Competitive"],
  },
  {
    number: "03",
    icon: Calculator,
    title: "Mathematics Mastery",
    description:
      "Strengthen problem-solving ability through structured practice and mentoring.",
    tags: ["Maths", "Problem Solving"],
  },
  {
    number: "04",
    icon: GraduationCap,
    title: "Entrance Preparation",
    description:
      "Focused preparation with mock tests, revision plans and performance analysis.",
    tags: ["Entrance Exams", "Mock Tests"],
  },
];

export default function Courses() {
  return (
    <section className="section courses-section" id="courses">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Our Programs</span>

          <h2>
            Choose the path
            <br />
            <span>that fits your goal.</span>
          </h2>

          <p>
            Flexible programs designed for different academic stages,
            learning needs and future ambitions.
          </p>
        </div>

        <div className="courses-grid">
          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <article className="course-card" key={course.title}>
                <div className="course-top">
                  <span>{course.number}</span>

                  <div className="course-icon">
                    <Icon size={22} />
                  </div>
                </div>

                <h3>{course.title}</h3>

                <p>{course.description}</p>

                <div className="course-tags">
                  {course.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a href="#contact">
                  Know More
                  <ArrowUpRight size={17} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}