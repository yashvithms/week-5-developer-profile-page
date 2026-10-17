function Skills({ skills, categories, activeSkill, setActiveSkill }) {
  return (
    <section id="skills">
      <div className="section-header">
        <p>Skills</p>
        <h2>
          My <span>Stack</span>
        </h2>
      </div>

      <div className="skills-panel">
        <div className="filter-group">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`filter-chip ${activeSkill === category ? "active" : ""}`}
              onClick={() => setActiveSkill(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <article key={skill.name} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <p>{skill.category}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
