import Image from "next/image";
import Nav from "@/components/Nav";
import CaseStudyCard from "@/components/CaseStudyCard";
import AnimatedGradient from "@/components/AnimatedGradient";
import { cardData } from "@/data/caseStudies";

export default function Home() {
  return (
    <>
      {/* Fixed gradient background — home page only */}
      <AnimatedGradient />

      {/* All content sits above the gradient */}
      <div className="relative" style={{ zIndex: 1 }}>
      <Nav />

      {/* ── HERO ── */}
      <section id="hero" className="min-h-screen flex items-center pt-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 w-full py-24 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Text */}
            <div>
              <h1 className="font-serif text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem] font-normal leading-[1.15] text-near-black">
                Hi, my name is Valerio and I design product experiences and
                systems that help complex products grow and scale
              </h1>
              <p className="mt-8 text-lg lg:text-xl italic text-muted leading-relaxed max-w-xl">
                With more than 20 years in digital product design, I connect
                product strategy and user needs by defining the frameworks that
                guide how products are built and evolve over time
              </p>
            </div>

            {/* Photo placeholder */}
            <div className="hidden lg:block">
              <div className="w-full aspect-[4/5] bg-placeholder rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WORK ── */}
      <section id="work" className="py-[120px]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-sans font-medium tracking-widest text-muted uppercase mb-12">
            Case studies
          </p>

          {/* Mobile: horizontal scroll | Desktop: 2-col grid */}
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-2 lg:overflow-visible lg:pb-0">
            {cardData.map((card, i) => (
              <div key={i} className="min-w-[300px] snap-start lg:min-w-0">
                <CaseStudyCard card={card} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-[120px]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-sans font-medium tracking-widest text-muted uppercase mb-12">
            About
          </p>

          <div className="bg-card-bg border border-card-border rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-[1fr_280px] gap-10 lg:gap-16 items-start">
              {/* Bio text */}
              <div>
                <p className="text-[17px] leading-[1.8] text-near-black mb-5">
                  Born in Rome, grown up in London, and now my family and I call
                  the Bay Area home.
                </p>
                <p className="text-[17px] leading-[1.8] text-near-black mb-5">
                  I spent over 20 years designing digital products &mdash; across
                  online advertising, broadcast media, and service design. For
                  much of the last decade, that work has been at Google, helping
                  shape the advertising tools used by millions of businesses
                  worldwide.
                </p>
                <p className="text-[17px] leading-[1.8] text-near-black">
                  What drives me is finding the beauty of the simple idea hiding
                  inside a complicated system &mdash; and building the frameworks
                  that help products scale without losing their clarity.
                </p>

                <a
                  href="/Valerio_Italiano_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 text-[17px] text-near-black hover:text-accent transition-colors"
                >
                  Download resume →
                </a>
              </div>

              {/* Photo */}
              <div className="order-first lg:order-last">
                <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:h-[340px] rounded-xl overflow-hidden">
                  <Image
                    src="/valerio-photo.jpg"
                    alt="Valerio Italiano"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 280px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-[120px]">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <p className="text-xs font-sans font-medium tracking-widest text-muted uppercase mb-12">
            Contact
          </p>

          <p className="font-serif text-3xl lg:text-4xl font-normal text-near-black">
            Open to the right conversation.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <a
              href="mailto:hello@hellovaler.io"
              className="text-[17px] text-accent hover:underline underline-offset-4 transition-colors"
            >
              hello@hellovaler.io
            </a>

            <span className="text-card-border select-none">·</span>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-near-black transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted hover:text-near-black transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pb-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <p className="text-sm text-muted">© 2025 Valerio</p>
        </div>
      </footer>
      </div>{/* end content wrapper */}
    </>
  );
}
