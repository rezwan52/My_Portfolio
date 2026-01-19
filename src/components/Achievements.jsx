import "./Achievements.css";

function Achievements() {
  const achievements = [
    {
      title: "Completed Multiple React Projects",
      desc: "Built portfolio websites, UI components, and interactive sections using React.",
    },
    {
      title: "Strong UI & Animation Skills",
      desc: "Created modern layouts with smooth hover effects and CSS animations.",
    },
    {
      title: "Version Control Experience",
      desc: "Used Git & GitHub for project management and code collaboration.",
    },
  ];

  return (
    <section className="achievements" id="achievements">
      <h2 className="achievements-title">Achievements</h2>

      <div className="achievements-container">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
