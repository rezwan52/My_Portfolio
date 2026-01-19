import "./Projects.css";
import project1 from "../assets/e-ui.jpg";


function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built using React and modern CSS.",
      tech: "React, CSS",
      link: "#",
      image:project1,
    },
    {
      title: "E-commerce UI",
      description: "Responsive e-commerce frontend with product listing.",
      tech: "React, Tailwind",
      link: "#",
      image:project1,
    },
    {
      title: "Landing Page",
      description: "Modern landing page design with animations.",
      tech: "HTML, CSS, JavaScript",
      link: "#",
      image:project1,
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
              <img
    src={project.image}
    alt={project.title}
    className="project-img"
  />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span>{project.tech}</span>

            <a href={project.link} target="_blank" rel="noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

