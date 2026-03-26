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
    title: 'Licensed academic programs',
    text: 'Middle professional education has been offered since 2019, with higher education programs added in 2021.',
  },
  {
    title: 'Clinical practice in Armenia',
    text: 'Students gain practical training through labs, simulation environments, and clinical placements.',
  },
  {
    title: 'International student support',
    text: 'The academy welcomes international applicants and guides them through admission and study preparation.',
  },
  {
    title: 'Qualified teaching staff',
    text: 'Students learn with lecturers and professors from Armenia and abroad across academic and practical subjects.',
  },
]

const programs = [
  {
    title: 'General Medicine',
    badge: 'Higher Education',
    text: 'Established in 2021 under License N 0082. A 6-year program leading to the qualification of Medical Doctor.',
    image: imageSet.programMedicine,
  },
  {
    title: 'Nursing',
    badge: 'Higher Education',
    text: 'Established in 2021 under License N 0082. A 4-year program leading to the qualification of Bachelor of Nursing.',
    image: imageSet.programNursing,
  },
  {
    title: 'Midwifery and Pharmacy',
    badge: 'Middle Professional',
    text: 'Professional programs built for hands-on healthcare training with duration based on prior education.',
    image: imageSet.programResearch,
  },
  {
    title: 'Dental Technician and Medical Cosmetology',
    badge: 'Middle Professional',
    text: 'Career-focused study pathways that prepare graduates for applied practice in specialized medical fields.',
    image:
      'https://images.pexels.com/photos/35645532/pexels-photo-35645532.jpeg?cs=srgb&dl=pexels-sahilcaptures-35645532.jpg&fm=jpg',
  },
]

const stats = [
  { value: '2019', label: 'middle professional programs established' },
  { value: '2021', label: 'higher education programs established' },
  { value: '6 Years', label: 'general medicine program duration' },
  { value: '4 Years', label: 'nursing program duration' },
]

const researchPillars = [
  'Advanced laboratories and simulation centers',
  'Modern classrooms with didactic materials',
  'Medical literature and online learning resources',
  'Hospital-based practical training and internships',
]

const newsItems = [
  {
    date: '27.02.2026',
    title: 'Memorandum of cooperation',
    text: 'The academy hosted a palliative care event and welcomed representatives from the Khnami Center for collaboration.',
  },
  {
    date: '13.02.2026',
    title: 'Visit of EMAF delegation to Georgia',
    text: 'A working visit to Grigol Robakidze University supported academic exchange and international cooperation.',
  },
  {
    date: '21.01.2026',
    title: 'Final examination in General Medicine',
    text: 'Foreign students in higher education completed final assessment activities, including OSCE-based evaluation.',
  },
]

const contactItems = [
  'Admissions Office: +374 (10) 47-07-60',
  'Student Services: +374 (99) 00-67-67',
  'Email: info@emaf.am',
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
              <h1>Erebuni Medical Academy Foundation</h1>
              <p className="hero-text">
                Providing middle professional medical educational programs and higher education pathways in General Medicine
                and Nursing for students preparing for careers in healthcare.
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
              <p className="eyebrow">Why choose EMAF</p>
              <h2>Medical education built around knowledge, practice, and patient-centered values.</h2>
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
              <h2>Preparing educated specialists for local and global healthcare.</h2>
              <p>
                Erebuni Medical Academy Foundation was established in 2019 under License N 0144 for middle educational
                programs including nursing, nursing administration, midwifery, dental technician, pharmacy, and medical
                cosmetology.
              </p>
              <p>
                In 2021, higher education programs were established under License N 0082, including General Medicine with the
                qualification of Medical Doctor and Nursing with the qualification of Bachelor of Nursing.
              </p>
            </div>

            <div className="academy-media-stack">
              <article className="academy-media-card media-quote-card">
                <div className="quote-mark">"</div>
                <div className="media-copy">
                  <p className="mini-kicker dark-kicker">Mission</p>
                  <h3>Training specialists who serve with competence and care.</h3>
                  <p>
                    The academy aims to prepare professionals with the skills, knowledge, and values needed to improve health
                    care in society and deliver patient-oriented service.
                  </p>
                </div>
              </article>
              <article className="academy-media-card media-abstract-card">
                <img className="section-photo" src={imageSet.programResearch} alt="Clinical instruction and bedside learning" />
                <div className="media-copy">
                  <p className="mini-kicker">Learning environment</p>
                  <h3>Study supported by practical training and academic resources.</h3>
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
                <h2>Academic programs for future healthcare professionals.</h2>
              </div>
              <p>Explore higher education and middle professional pathways offered by the academy.</p>
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
              <p className="eyebrow light-eyebrow">Facilities and resources</p>
              <h2>Academic study supported by practical learning environments.</h2>
              <p>
                Students study with access to learning resources, modern technologies, and practical training that strengthen
                academic preparation for medical professions.
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
              <h2>Begin your admission journey with the academy.</h2>
            </div>
            <div className="admissions-steps">
              <article>
                <span>01</span>
                <h3>Choose your academic route</h3>
                <p>Select the program that matches your previous education and professional goals.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Prepare documents and guidance</h3>
                <p>Prepare the required application documents and receive guidance for admission requirements.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Begin onboarding with confidence</h3>
                <p>Complete enrollment and continue with orientation, student support, and academic preparation.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="news-section" id="news">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow">Latest updates</p>
                <h2>Recent academy news and announcements.</h2>
              </div>
              <a className="text-link" href="#contact">
                Contact the academy
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
              <h2>Contact Erebuni Medical Academy Foundation.</h2>
              <p>
                Reach the academy for admissions guidance, student services, and general information about programs and study.
              </p>
            </div>
            <div className="contact-card">
              {contactItems.map((item) => (
                <p key={item}>{item}</p>
              ))}
              <a className="button button-primary" href="mailto:info@emaf.am">
                Contact Admissions
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-copy">
            <strong>Erebuni Medical Academy Foundation</strong>
            <p>Health is Wealth</p>
            <p>133 Titogradyan Street, Yerevan</p>
            <a className="footer-contact-link" href="mailto:info@emaf.am">
              info@emaf.am
            </a>
          </div>
          <div className="footer-brand">
            <img className="footer-logo" src="/erebuni-logo.png" alt="Erebuni Medical Academy Foundation" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
