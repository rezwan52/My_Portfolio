import "./Experience.css";

function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      description:
        "Building modern, responsive applications using React and CSS.",
      duration: "2024 – Present",
    },
    {
      title: "Web Developer (Practice)",
      description:
        "Designed landing pages and UI components for personal projects.",
      duration: "2023 – 2024",
    },
  ];

  return (
    <section className="experience" id="experience">
      <h2 className="experience-title">Experience</h2>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h3>{exp.title}</h3>
            <span>{exp.duration}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
