import { useState } from 'react'
import './App.css'

const imageSet = {
  hero: '/erebuni-hero.png',
  programMedicine:
    'https://images.pexels.com/photos/30902100/pexels-photo-30902100.jpeg?cs=srgb&dl=pexels-duy-tan-d-i-h-c-842966226-30902100.jpg&fm=jpg',
  programNursing:
    'https://images.pexels.com/photos/35645529/pexels-photo-35645529.jpeg?cs=srgb&dl=pexels-sahilcaptures-35645529.jpg&fm=jpg',
  programResearch:
    'https://images.pexels.com/photos/35645519/pexels-photo-35645519.jpeg?cs=srgb&dl=pexels-sahilcaptures-35645519.jpg&fm=jpg',
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Academy', href: '#academy' },
  { label: 'Programs', href: '#programs' },
  { label: 'Admissions', href: '#admissions' },
  { label: 'Research', href: '#research' },
  { label: 'News', href: '#news' },
  { label: 'Contact', href: '#contact' },
]

const highlights = [
  {
    title: 'Clinically grounded learning',
    text: 'Foundational science, supervised practice, and case-based teaching work together from the start.',
  },
  {
    title: 'Global student pathways',
    text: 'Multilingual support, guided onboarding, and academic advising for local and international applicants.',
  },
  {
    title: 'Simulation-first training',
    text: 'Modern lab-based learning environments help students build confidence before entering live settings.',
  },
  {
    title: 'Faculty-led mentoring',
    text: 'Students learn in smaller academic communities with clearer feedback and closer faculty access.',
  },
]

const programs = [
  {
    title: 'Medicine',
    badge: 'Flagship',
    text: 'A rigorous physician training track with early clinical exposure, integrated sciences, and guided rotations.',
    image: imageSet.programMedicine,
  },
  {
    title: 'Nursing and Midwifery',
    badge: 'Applied Care',
    text: 'Hands-on education focused on patient care, safety, communication, and evidence-based practice.',
    image: imageSet.programNursing,
  },
  {
    title: 'Preparatory Foundation',
    badge: 'Bridge Year',
    text: 'Academic and language preparation for students transitioning into professional medical study.',
    image: imageSet.programResearch,
  },
  {
    title: 'Advanced Skills Labs',
    badge: 'Practice',
    text: 'Simulation, emergency response, and procedural training designed around real clinical readiness.',
    image:
      'https://images.pexels.com/photos/35645532/pexels-photo-35645532.jpeg?cs=srgb&dl=pexels-sahilcaptures-35645532.jpg&fm=jpg',
  },
]

const stats = [
  { value: '12+', label: 'simulation and lab environments' },
  { value: '20+', label: 'clinical and institutional partners' },
  { value: '1:8', label: 'faculty mentoring ratio' },
  { value: '30+', label: 'research and volunteer initiatives' },
]

const researchPillars = [
  'Clinical reasoning and diagnostics',
  'Community health and prevention',
  'Simulation-based education',
  'Interdisciplinary medical training',
]

const newsItems = [
  {
    date: 'March 2026',
    title: 'Emergency simulation week expanded across departments',
    text: 'Students now train through a coordinated skills sequence spanning emergency care, communication, and triage.',
  },
  {
    date: 'February 2026',
    title: 'International applicant guidance portal updated',
    text: 'Document support, admissions guidance, and relocation information are now organized into a clearer onboarding flow.',
  },
  {
    date: 'January 2026',
    title: 'Faculty workshops introduce new teaching modules',
    text: 'Academic teams are rolling out refreshed modules focused on patient-centered learning and assessment design.',
  },
]

const contactItems = [
  'Admissions Office: +374 (10) 47-07-60',
  'Student Services: +374 (99) 00-67-67',
  'Email: info@medicalacademy.example',
  'Campus: 133 Titogradyan Street, Yerevan',
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = () => setMobileMenuOpen(false)

  return (
    <div className="site-shell">
      <nav className="navbar">
        <div className="container navbar-inner">
          <div className="nav-links desktop-nav">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <a className="desktop-cta desktop-nav" href="#admissions">
            Apply Now
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="mobile-nav">
            <div className="container mobile-nav-inner">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={handleNavClick}>
                  {item.label}
                </a>
              ))}
              <a className="desktop-cta mobile-cta" href="#admissions" onClick={handleNavClick}>
                Apply Now
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <section className="hero-section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Health is wealth</p>
              <h1>Modern medical education with a sharper digital identity.</h1>
              <p className="hero-text">
                This redesign uses your provided logo and clinical photography more selectively, then builds a more advanced
                institutional homepage around them with clearer hierarchy, modern card layouts, and stronger visual polish.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#programs">
                  Explore Programs
                </a>
                <a className="button button-secondary" href="#academy">
                  Discover the Academy
                </a>
              </div>
              <div className="hero-metrics">
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="metric-card">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-image-frame">
                <img src={imageSet.hero} alt="Medical academy clinical training" />
              </div>
              <div className="floating-panel accent-panel">
                <span className="panel-kicker">Admissions 2026</span>
                <p>Applications, document guidance, and orientation planning available now.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="feature-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">Why this feels more current</p>
              <h2>A homepage built for trust, clarity, and a premium medical institution presence.</h2>
            </div>
            <div className="feature-grid">
              {highlights.map((item) => (
                <article key={item.title} className="feature-card">
                  <span className="feature-icon" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="academy-section" id="academy">
          <div className="container academy-grid">
            <div className="academy-panel narrative-panel">
              <p className="eyebrow">Academy overview</p>
              <h2>Designed to feel established, but not visually outdated.</h2>
              <p>
                Rather than enlarging the provided assets to copy the reference site, this version treats them as brand anchors
                inside a more modern interface with structured spacing, lighter surfaces, and stronger editorial rhythm.
              </p>
              <p>
                The result feels more like a current international institution site while still preserving the recognizable
                medical-academy character you wanted.
              </p>
            </div>

            <div className="academy-media-stack">
              <article className="academy-media-card media-quote-card">
                <div className="quote-mark">"</div>
                <div className="media-copy">
                  <p className="mini-kicker dark-kicker">Student experience</p>
                  <h3>Health is wealth, but clarity matters too.</h3>
                  <p>
                    The page now uses the student photograph once in the hero, then shifts to cleaner abstract panels instead
                    of repeating the same image across the layout.
                  </p>
                </div>
              </article>
              <article className="academy-media-card media-abstract-card">
                <img className="section-photo" src={imageSet.programResearch} alt="Clinical instruction and bedside learning" />
                <div className="media-copy">
                  <p className="mini-kicker">Institutional quality</p>
                  <h3>Advanced visual treatment without overusing a single image.</h3>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="program-section" id="programs">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Programs</p>
                <h2>Academic routes presented with a more modern, applicant-friendly layout.</h2>
              </div>
              <p>Cards are clearer, faster to scan, and visually closer to current education and healthcare websites.</p>
            </div>
            <div className="program-grid">
              {programs.map((program) => (
                <article key={program.title} className="program-card">
                  <img className="program-image" src={program.image} alt={program.title} />
                  <span className="program-badge">{program.badge}</span>
                  <h3>{program.title}</h3>
                  <p>{program.text}</p>
                  <a href="#admissions">View Pathway</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="research-section" id="research">
          <div className="container research-grid">
            <div className="research-panel dark-panel">
              <p className="eyebrow light-eyebrow">Research and innovation</p>
              <h2>Medical learning supported by practical inquiry.</h2>
              <p>
                From simulation pedagogy to community health and clinical decision-making, the research story now feels more
                intentional and future-facing.
              </p>
            </div>
            <div className="research-panel list-panel">
              {researchPillars.map((item) => (
                <div key={item} className="research-item">
                  <span />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="admissions-section" id="admissions">
          <div className="container admissions-grid">
            <div className="section-heading">
              <p className="eyebrow">Admissions</p>
              <h2>A cleaner path from interest to enrollment.</h2>
            </div>
            <div className="admissions-steps">
              <article>
                <span>01</span>
                <h3>Choose your academic route</h3>
                <p>Identify the program that fits your background, language readiness, and professional goals.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Prepare documents and guidance</h3>
                <p>Receive support for transcripts, eligibility, application steps, and international preparation.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Begin onboarding with confidence</h3>
                <p>Move into orientation, faculty guidance, and student services through a more welcoming digital experience.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="news-section" id="news">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Latest updates</p>
                <h2>News and academy updates framed like a modern institutional magazine grid.</h2>
              </div>
              <a className="text-link" href="#contact">
                Speak with the communications office
              </a>
            </div>
            <div className="news-grid">
              {newsItems.map((item) => (
                <article key={item.title} className="news-card">
                  <span>{item.date}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>Ready to turn this into a full academy website.</h2>
              <p>
                The homepage now has a stronger visual system. From here we can extend the same direction into departments,
                admissions, faculty, foreign students, and article detail pages.
              </p>
            </div>
            <div className="contact-card">
              {contactItems.map((item) => (
                <p key={item}>{item}</p>
              ))}
              <a className="button button-primary" href="mailto:info@medicalacademy.example">
                Contact Admissions
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>Erebuni Medical Academy Foundation</strong>
            <p>Modernized homepage concept using your provided assets with a cleaner contemporary UI.</p>
          </div>
          <div className="footer-brand">
            <img className="footer-logo" src="/erebuni-logo.png" alt="Erebuni Medical Academy Foundation" />
          </div>
          <div className="footer-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
