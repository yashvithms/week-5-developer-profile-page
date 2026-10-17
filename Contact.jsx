function Contact({ email, location, github, linkedin }) {
  return (
    <section id="contact">
      <div className="contact-card">
        <div className="contact-copy">
          <p className="about-label">Contact</p>
          <h2>Let&apos;s build something meaningful.</h2>
          <p>
            {location} · {email}
          </p>
        </div>

        <div className="contact-links">
          <a href={`mailto:${email}`}>Email Me</a>
          <a href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
