import Image from "next/image";
import Nav from "@/components/Nav";
import CaseStudyCard from "@/components/CaseStudyCard";
import ContactForm from "@/components/ContactForm";
import HashScroller from "@/components/HashScroller";
import { cardData } from "@/data/caseStudies";

export default function Home() {
  return (
    <>
      <Nav />
      <HashScroller />

      {/* ── HERO ── */}
      <section id="top" className="hero">
        <Image
          src="/hero-desktop.png"
          alt=""
          aria-hidden={true}
          width={1440}
          height={677}
          priority
          sizes="100vw"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "auto",
            zIndex: -1,
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
        <div className="hero-inner">
          <h1>
            Hello, I&apos;m Valerio and I design product experiences that make
            complex systems feel natural and intuitive
          </h1>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section id="case-studies" className="case-studies">
        <div className="container">
          <p className="section-label">Case studies</p>
          <div className="case-grid">
            {cardData.map((card, i) => (
              <CaseStudyCard key={i} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="about">
        <div className="container">
          <p className="section-label">About me</p>
          <div className="about-card">
            <div className="about-copy">
              <p>
                Born in Rome, I lived in London for over two decades and now
                call the Bay Area home with my family.
              </p>
              <p>
                I spent over 20 years designing digital products — across online
                advertising, broadcast media, and service design. For much of
                the last decade, that work has been at Google, helping shape the
                advertising tools used by millions of businesses worldwide.
              </p>
              <p>
                What drives me is finding the simple ideas that help people make
                sense of complex systems. As products grow, they often become
                reflections of the technologies and processes behind them, asking
                users to adapt to the way the system works. I enjoy reversing
                that relationship — creating experiences organized around human
                goals and decisions while preserving the power and flexibility of
                the systems behind them.
              </p>
              <div className="about-actions">
                <a href="/resume.pdf" download className="resume-link">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/file-download.png" alt="" aria-hidden="true" width={36} height={36} />
                  <span>Download resume</span>
                </a>
                <div className="about-actions-divider" />
                <div className="socials">
                  <a href="https://www.linkedin.com/in/valerioitaliano/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/social-LinkedIn.png" alt="LinkedIn" width={36} height={36} />
                  </a>
                  <a href="https://www.instagram.com/valit/?hl=en" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/social-Instagram.png" alt="Instagram" width={36} height={36} />
                  </a>
                </div>
              </div>
            </div>

            <div className="polaroid">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/portrait.jpg" alt="Portrait of Valerio Italiano" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="contact">
        <div className="container">
          <p className="section-label">Contact</p>
          <div className="contact-card">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <h2 className="contact-heading">Open to the right<br />conversation</h2>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container">© 2026 Valerio Italiano</div>
      </footer>
    </>
  );
}
