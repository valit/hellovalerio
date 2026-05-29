import Image from "next/image";
import Nav from "@/components/Nav";
import CaseStudyCard from "@/components/CaseStudyCard";
import ContactForm from "@/components/ContactForm";
import { cardData } from "@/data/caseStudies";

export default function Home() {
  return (
    <>
      <Nav />

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
                Born in Rome, grown up in London, and now my family and I call
                the Bay Area home.
              </p>
              <p>
                I spent over 20 years designing digital products — across online
                advertising, broadcast media, and service design. For much of
                the last decade, that work has been at Google, helping shape the
                advertising tools used by millions of businesses worldwide.
              </p>
              <p>
                What drives me is finding the beauty of the simple idea hiding
                inside a complicated system — and building the frameworks that
                help products scale without losing their clarity.
              </p>
              <a href="/resume.pdf" download className="resume-link">
                <svg
                  width="22"
                  height="26"
                  viewBox="0 0 22 26"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 1h11l5 5v18a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path d="M14 1v5h5" stroke="currentColor" strokeWidth="1.4" />
                  <path
                    d="M6 11h10M6 15h10M6 19h7"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Download resume</span>
              </a>
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
                <h2 className="contact-heading">Open to the right conversation</h2>
                <span className="contact-email">hello@hellovaler.io</span>
              </div>
              <div className="socials" style={{ marginTop: "auto" }}>
                <a href="#" aria-label="LinkedIn">
                  <Image src="/social-LinkedIn.png" alt="LinkedIn" width={36} height={36} />
                </a>
                <a href="#" aria-label="Instagram">
                  <Image src="/social-Instagram.png" alt="Instagram" width={36} height={36} />
                </a>
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
