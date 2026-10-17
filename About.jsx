
import "./About.css";

function About({ name, role, description }) {
  const tags = ["Python", "JavaScript", "React", "Flask", "AI & ML"];

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <p className="about-label">GET TO KNOW ME</p>

          <h2>
            About <span>Me</span>
          </h2>

          <h3>{name}</h3>
          <p className="about-role">{role}</p>

          <p className="about-description">{description}</p>

          <div className="about-tags">
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <a href="#projects" className="about-button">
            Explore My Projects <span>→</span>
          </a>
        </div>

        <div className="about-visual">
          <div className="avatar-card">
            <div className="avatar-circle">
              <svg
                viewBox="0 0 200 200"
                role="img"
                aria-label="Developer avatar illustration"
              >
                <circle cx="100" cy="100" r="96" fill="#102a43" />
                <path
                  d="M38 178 Q40 125 82 122 L118 122 Q160 125 162 178"
                  fill="#22d3ee"
                />
                <path
                  d="M80 111 L80 133 L100 151 L120 133 L120 111"
                  fill="#e8b08a"
                />
                <ellipse cx="100" cy="83" rx="39" ry="46" fill="#f2c29b" />
                <path
                  d="M61 83 Q49 31 101 31 Q151 29 140 83
                     L130 65 Q100 77 71 61 Z"
                  fill="#17212f"
                />
                <circle cx="86" cy="84" r="3" fill="#17212f" />
                <circle cx="114" cy="84" r="3" fill="#17212f" />
                <path
                  d="M89 102 Q100 111 111 102"
                  fill="none"
                  stroke="#a75d45"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="avatar-caption">
              <span className="status-dot"></span>
              <span>Student Developer</span>
            </div>
            <div className="floating-code code-one">&lt;/&gt;</div>
            <div className="floating-code code-two">{'{ }'}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
