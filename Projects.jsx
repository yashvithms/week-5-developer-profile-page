function Projects({ projects }) {
  return (
    <section id="projects">
      <div className="section-header">
        <p>Projects</p>
        <h2>
          What I&apos;ve Been <span>Building</span>
        </h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-stack">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
