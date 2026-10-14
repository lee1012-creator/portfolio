import { useEffect, useState } from "react";
import { profile, projects, experience, hardSkills, softSkills, certificates, Cert } from "./data";

const links = [
  ["About", "about"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Certificates", "certificates"],
  ["Contact", "contact"],
] as const;

const scrollToId = (id: string) => {
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (!el) {
    console.warn(`No element with id "${id}"`);
    return;
  }
  const top = el.getBoundingClientRect().top + window.scrollY - 76;
  window.scrollTo({ top, behavior: "smooth" });
};

function Spiral() {
  return (
    <div className="spiral" aria-hidden="true">
      {Array.from({ length: 21 }).map((_, i) => (
        <span key={i} className="ring" />
      ))}
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState<Cert | null>(null);
  const [menu, setMenu] = useState(false);

  const go = (id: string) => {
    setMenu(false);
    scrollToId(id);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="topbar">
        <a
          className="brand"
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            go("top");
          }}
        >
          <span className="brand-mark">S</span>
          <span className="brand-text">
            {profile.firstName}'s
            <small>Welcome to my portfolio</small>
          </span>
        </a>
        <nav className={menu ? "nav open" : "nav"} aria-label="Main">
          {links.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                go(id);
              }}
            >
              {label}
            </a>
          ))}
        </nav>
        <button className="burger" aria-label="Toggle menu" aria-expanded={menu} onClick={() => setMenu(!menu)}>
          <span /><span /><span />
        </button>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="sheet hero">
          <div className="hero-meta">
            <p>Open for internship<br />4th year BSIT student</p>
            <p className="center">{profile.school}</p>
            <p className="right">Expected graduation<br />2027</p>
          </div>
          <div className="sticker">
            <img src="/images/portrait.jpg" alt="Portrait of Shaira Rabasto" />
          </div>
          <div className="hero-actions">
            <button type="button" className="btn solid" onClick={() => go("projects")}>
              View projects
            </button>
            <button type="button" className="btn" onClick={() => go("contact")}>
              Contact me
            </button>
          </div>
          <h1 className="title">SHAIRA</h1>
          <p className="fullname">{profile.fullName}</p>
          <p className="sub">
            {profile.role} · web and mobile<br />
            Looking for a UI/UX internship
          </p>
          <Spiral />
        </section>
        <div className="binder" aria-hidden="true" />

        {/* ABOUT */}
        <section className="sheet about" id="about">
          <div className="arch">
            <img src="/images/portrait.jpg" alt="Shaira Rabasto in a blazer and white collared shirt" />
          </div>
          <div className="about-body">
            <h2>About me</h2>
            <p className="lead">{profile.about}</p>
            <div className="meta-grid">
              <div>
                <h3>Education</h3>
                <p>{profile.school}</p>
                <p className="muted">BS Information Technology, 4th year</p>
              </div>
              <div>
                <h3>Leadership</h3>
                <p>{experience.org} (Logistics Committee)</p>
              </div>
            </div>
            <h3>Hard skills</h3>
            <ul className="chips">{hardSkills.map((s) => <li key={s}>{s}</li>)}</ul>
            <h3>Soft skills</h3>
            <ul className="chips soft">{softSkills.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </section>

        <div className="script-band" aria-hidden="true">
          <span>shaira's design portfolio</span>
        </div>

        {/* PROJECTS */}
        <section className="sheet" id="projects">
          <h2>Projects & academic experience</h2>
          <div className="projects">
            {projects.map((p, i) => (
              <article key={p.title} className={i === 0 ? "card feature" : "card"}>
                <h3>{p.title}</h3>
                <p className="role">{p.role}</p>
                <p className="summary">{p.summary}</p>
                <ul>{p.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
                {p.links.length > 0 && (
                  <div className="card-links">
                    {p.links.map((l) => (
                      <a key={l.href} className="btn small" href={l.href} target="_blank" rel="noreferrer">
                        {l.label}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="sheet" id="experience">
          <h2>Leadership & organizational experience</h2>
          <article className="card wide">
            <h3>{experience.role}</h3>
            <p className="role">{experience.org}</p>
            <ul>{experience.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
          </article>
        </section>

        {/* CERTIFICATES */}
        <section className="sheet" id="certificates">
          <h2>Badges & certificates</h2>
          <div className="certs">
            {certificates.map((c) => (
              <figure key={c.title} className="cert">
                <button onClick={() => setOpen(c)} aria-label={`View ${c.title}`}>
                  <img src={c.image} alt={`${c.title} certificate`} loading="lazy" />
                </button>
                <figcaption>
                  <strong>{c.title}</strong>
                  <span>{c.issuer}</span>
                  {c.href && (
                    <a href={c.href} target="_blank" rel="noreferrer">Verify badge</a>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer-inner">
          <h2>Let's work together</h2>
          <p>Available for a UI/UX design internship.</p>
          <ul className="contact">
            <li><span>Mobile</span><a href={`tel:${profile.mobile}`}>{profile.mobile}</a></li>
            <li><span>Email</span><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><span>Address</span>{profile.address}</li>
          </ul>
          <p className="made">Designed and built by {profile.fullName}</p>
        </div>
      </footer>

      {open && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={open.title} onClick={() => setOpen(null)}>
          <button className="close" aria-label="Close">×</button>
          <img src={open.image} alt={`${open.title} certificate`} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
}