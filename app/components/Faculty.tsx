const faculty = [
  {
    name: "Faculty Name 1",
    subject: "Mathematics",
    experience: "12+ Years",
    image:
    "https://media.istockphoto.com/id/678420912/photo/portrait-of-an-indian-lady-teacher.webp?a=1&b=1&s=612x612&w=0&k=20&c=rChe-kZ_hWrfQ5Yu_vShFmizI7BW4PLNeMnvVnQbNPI=",
  },
    {
    name: "Faculty Name 2",
    subject: "Chemistry",
    experience: "10+ Years",
    image:
      "https://images.unsplash.com/photo-1601655781320-205e34c94eb1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwdGVhY2hlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Faculty Name 3",
    subject: "Physics",
    experience: "9+ Years",
    image:
      "https://media.istockphoto.com/id/2246479981/photo/confident-smiling-indian-teacher-in-sari-in-a-classroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=kLoxNXCOI5zoNch_62gcSyYxdx-_YGgV_8rGkAef35c=",
  },

  {
    name: "Faculty Name 4",
    subject: "Aptitude",
    experience: "8+ Years",
    image:
    "https://plus.unsplash.com/premium_photo-1682092105693-1a2566cf2ee1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwY29hY2hpbmd8ZW58MHx8MHx8fDA%3D"
  },
];

export default function Faculty() {
  return (
    <section className="section faculty-section" id="faculty">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">Our Faculty</span>

            <h2>
              Guidance from people
              <br />
              <span>who know the journey.</span>
            </h2>
          </div>

          <p>
            Experienced educators, approachable mentors and teachers
            who make difficult concepts easier to understand.
          </p>
        </div>

        <div className="faculty-grid">
          {faculty.map((person) => (
            <article className="faculty-card" key={person.name}>
              <div className="faculty-image">
                <img src={person.image} alt={person.name} />
              </div>

              <div className="faculty-info">
                <div>
                  <h3>{person.name}</h3>
                  <p>{person.subject}</p>
                </div>

                <span>{person.experience}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}