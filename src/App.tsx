import { useState, type FormEvent } from "react";

const projects = [
  {
    number: "01",
    name: "Connext",
    type: "WEB APPLICATION",
    description: "A modern digital experience focused on bringing people and ideas together through a clean, intuitive interface.",
    stack: ["React", "TypeScript", "UI/UX"],
    url: "https://github.com/",
  },
  {
    number: "02",
    name: "FlyRank AI",
    type: "AI / PRODUCT",
    description: "An AI-powered product concept exploring smarter workflows, useful automation, and clear product experiences.",
    stack: ["React", "AI", "Product"],
    url: "https://github.com/",
  },
  {
    number: "03",
    name: "AI Chat",
    type: "INTERACTIVE APP",
    description: "A conversational interface concept designed around focused interactions and a lightweight user experience.",
    stack: ["JavaScript", "API", "Frontend"],
    url: "https://github.com/",
  },
];

const skills = ["HTML & CSS", "JavaScript", "TypeScript", "React", "Node.js", "Express", "MongoDB", "Git & GitHub"];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

  const closeMenu = () => setMenuOpen(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!endpoint) {
      setFormStatus("The contact form is ready. Add your Formspree endpoint to the environment settings to receive messages.");
      return;
    }

    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Request failed");
      form.reset();
      setFormStatus("Thanks for reaching out. Your message has been sent.");
    } catch {
      setFormStatus("Something went wrong. Please try again or email me directly.");
    }
  }

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Saif Ali home">saif<span>.</span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
        <nav className={menuOpen ? "navigation navigation-open" : "navigation"} aria-label="Main navigation">
          {[["About", "#about"], ["Work", "#work"], ["Skills", "#skills"], ["Contact", "#contact"]].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <Arrow /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</p>
            <h1>Building digital<br />things with <em>purpose.</em></h1>
            <p className="hero-description">I'm Saif Ali — a full stack developer who enjoys turning thoughtful ideas into useful, polished web experiences.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <Arrow /></a>
              <a className="text-link" href="#contact">Get in touch <Arrow /></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract decorative graphic">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
            <div className="orbit-core"><span>S</span></div>
            <span className="art-label label-top">CREATIVE<br />DEVELOPMENT</span>
            <span className="art-label label-bottom">PK · 2026</span>
            <span className="art-cross cross-one">+</span><span className="art-cross cross-two">+</span>
          </div>
          <div className="hero-foot"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>01 / 04</span></div>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-kicker"><span>01</span><span>ABOUT ME</span></div>
          <div className="about-content">
            <h2>Curious by nature.<br /><span>Developer by choice.</span></h2>
            <div className="about-text">
              <p>I’m a developer based in Rawalpindi, Pakistan, interested in building products that feel as good to use as they are to look at.</p>
              <p>I enjoy working across the stack — from shaping a clear interface to connecting the logic and data that make an experience work. I’m always learning, experimenting, and looking for the next meaningful problem to solve.</p>
              <a className="text-link" href="#contact">A little more about working together <Arrow /></a>
            </div>
          </div>
        </section>

        <section className="work section-wrap section-block" id="work">
          <div className="section-kicker"><span>02</span><span>SELECTED WORK</span></div>
          <div className="section-heading">
            <h2>Things I've<br /><em>worked on.</em></h2>
            <p>A selection of experiments and projects.<br />More ideas are always in progress.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <p className="eyebrow">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} project`}><Arrow /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <div className="section-kicker"><span>03</span><span>TOOLKIT</span></div>
          <div className="skills-content">
            <h2>Good tools.<br /><em>Better thinking.</em></h2>
            <p className="skills-intro">The technologies I use to bring ideas to life — and the curiosity to keep learning what comes next.</p>
            <div className="skill-grid">{skills.map((skill, index) => <div className="skill-item" key={skill}><span>0{index + 1}</span>{skill}<Arrow /></div>)}</div>
          </div>
        </section>

        <section className="contact section-wrap section-block" id="contact">
          <div className="section-kicker"><span>04</span><span>LET'S CONNECT</span></div>
          <div className="contact-layout">
            <div>
              <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
              <h2>Let's make<br /><em>it happen.</em></h2>
              <p className="contact-note">Have an idea, an opportunity, or just want to say hello? My inbox is open.</p>
              <a className="email-link" href="mailto:hello@saifali.dev">hello@saifali.dev <Arrow /></a>
              <div className="social-links">
                <a href="https://github.com/Saif-Ali-109" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">YOUR NAME</label>
              <input id="name" name="name" placeholder="How should I call you?" required />
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" required />
              <label htmlFor="message">MESSAGE</label>
              <textarea id="message" name="message" rows={4} placeholder="Tell me a little about your idea..." required />
              <button className="button button-primary submit-button" type="submit">Send message <Arrow /></button>
              {formStatus && <p className="form-status" role="status">{formStatus}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home">saif<span>.</span></a>
        <p>Designed & built with care.</p>
        <a href="#home">BACK TO TOP ↑</a>
        <span>© {new Date().getFullYear()} SAIF ALI</span>
      </footer>
    </>
  );
}