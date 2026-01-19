import "./Skills.css";

function Skills() {
  const skills = [
    {
      title: "Frontend",
      items: "HTML, CSS, JavaScript, React",
    },
    {
      title: "UI & Styling",
      items: "Tailwind CSS, Bootstrap, CSS Animations",
    },
    {
      title: "Tools",
      items: "Git, GitHub, Vite, Figma",
    },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.title}</h3>
            <p>{skill.items}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
