import { useState, type FormEvent } from "react";

const repositoryUrl = "https://github.com/Saif-Ali-109/auspify-personal-portfolio";

const projects = [
  {
    number: "01",
    name: "Personal Portfolio",
    type: "INTERNSHIP PROJECT",
    description:
      "A responsive portfolio built with React and TypeScript to introduce my work, share the tools I use, and make it easier to connect.",
    stack: ["React", "TypeScript", "Vite", "Responsive UI"],
    url: repositoryUrl,
    linkLabel: "View source repository",
  },
];

const skills = [
  "HTML & CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Git & GitHub",
];

type FormState = "idle" | "sending" | "success" | "error" | "not-configured";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState<FormState>("idle");
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();

  const closeMenu = () => setMenuOpen(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!endpoint) {
      setFormState("not-configured");
      return;
    }

    if (!endpoint.startsWith("https://formspree.io/f/")) {
      setFormState("error");
      return;
    }

    const form = event.currentTarget;
    setFormState("sending");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("The contact request was not accepted.");
      }

      form.reset();
      setFormState("success");
    } catch {
      setFormState("error");
    }
  }

  const statusMessage = {
    idle: "",
    sending: "Sending your message…",
    success: "Thanks for reaching out. Your message has been sent.",
    error: "Your message could not be sent. Please try again later or contact me through GitHub.",
    "not-configured":
      "The contact form is not connected yet. Please reach out through my GitHub profile for now.",
  }[formState];

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a
          className="wordmark"
          href="#home"
          onClick={closeMenu}
          aria-label="Saif Ali home"
        >
          saif<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={menuOpen ? "navigation navigation-open" : "navigation"}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          {[
            ["About", "#about"],
            ["Work", "#work"],
            ["Skills", "#skills"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's talk <Arrow />
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              FULL STACK DEVELOPMENT · 2026
            </p>
            <h1 id="hero-title">
              Building digital
              <br />
              things with <em>purpose.</em>
            </h1>
            <p className="hero-description">
              I'm Saif Ali — a full stack developer interested in turning
              thoughtful ideas into useful, polished web experiences.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <Arrow />
              </a>
              <a className="text-link" href="#contact">
                Get in touch <Arrow />
              </a>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="orbit-core">
              <span>S</span>
            </div>
            <span className="art-label label-top">
              CREATIVE
              <br />
              DEVELOPMENT
            </span>
            <span className="art-label label-bottom">PK · 2026</span>
            <span className="art-cross cross-one">+</span>
            <span className="art-cross cross-two">+</span>
          </div>

          <div className="hero-foot" aria-hidden="true">
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-line" />
            <span>01 / 04</span>
          </div>
        </section>

        <section
          className="about section-wrap section-block"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-kicker">
            <span>01</span>
            <span>ABOUT ME</span>
          </div>
          <div className="about-content">
            <h2 id="about-title">
              Curious by nature.
              <br />
              <span>Developer by choice.</span>
            </h2>
            <div className="about-text">
              <p>
                I enjoy building digital products that are clear, useful, and
                pleasant to use.
              </p>
              <p>
                My interests span the full stack — from shaping an accessible
                interface to connecting the logic and data behind it. I’m
                continuously learning, experimenting, and improving through
                practical projects.
              </p>
              <a className="text-link" href="#contact">
                Let's connect <Arrow />
              </a>
            </div>
          </div>
        </section>

        <section
          className="work section-wrap section-block"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-kicker">
            <span>02</span>
            <span>SELECTED WORK</span>
          </div>
          <div className="section-heading">
            <h2 id="work-title">
              Building things
              <br />
              <em>that matter.</em>
            </h2>
            <p>
              A growing collection of practical work.
              <br />
              More projects will be added as they are completed.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">{project.number}</div>
                <div className="project-main">
                  <p className="eyebrow">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-list">
                    {project.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={project.linkLabel}
                >
                  <Arrow />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          className="skills section-wrap section-block"
          id="skills"
          aria-labelledby="skills-title"
        >
          <div className="section-kicker">
            <span>03</span>
            <span>TOOLKIT</span>
          </div>
          <div className="skills-content">
            <h2 id="skills-title">
              Good tools.
              <br />
              <em>Better thinking.</em>
            </h2>
            <p className="skills-intro">
              Technologies I work with to bring ideas to life — alongside the
              curiosity to keep learning what comes next.
            </p>
            <div className="skill-grid">
              {skills.map((skill, index) => (
                <div className="skill-item" key={skill}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {skill}
                  <Arrow />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="contact section-wrap section-block"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="section-kicker">
            <span>04</span>
            <span>LET'S CONNECT</span>
          </div>
          <div className="contact-layout">
            <div>
              <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
              <h2 id="contact-title">
                Let's make
                <br />
                <em>it happen.</em>
              </h2>
              <p className="contact-note">
                Have an idea, an opportunity, or just want to say hello? I'd be
                glad to hear from you.
              </p>
              <a
                className="email-link"
                href="https://github.com/Saif-Ali-109"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on GitHub <Arrow />
              </a>
              <div className="social-links">
                <a
                  href="https://github.com/Saif-Ali-109"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <Arrow />
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">YOUR NAME</label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                placeholder="How should I call you?"
                required
                maxLength={100}
              />

              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                maxLength={254}
              />

              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me a little about your idea..."
                required
                maxLength={5000}
              />

              <button
                className="button button-primary submit-button"
                type="submit"
                disabled={formState === "sending"}
              >
                {formState === "sending" ? "Sending…" : "Send message"}{" "}
                <Arrow />
              </button>
              {statusMessage && (
                <p
                  className={`form-status form-status-${formState}`}
                  role="status"
                  aria-live="polite"
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="wordmark" href="#home" aria-label="Back to home">
          saif<span>.</span>
        </a>
        <p>Designed &amp; built with care.</p>
        <a href="#home">BACK TO TOP ↑</a>
        <span>© {new Date().getFullYear()} SAIF ALI</span>
      </footer>
    </>
  );
}
