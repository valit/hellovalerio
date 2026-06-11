"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { hash: "case-studies", label: "case studies" },
  { hash: "about",        label: "about me" },
  { hash: "contact",      label: "contact" },
];

function scrollToHash(hash: string) {
  const el = document.getElementById(hash);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Nav() {
  const pathname  = usePathname();
  const router    = useRouter();
  const isHome    = pathname === "/";
  const [open, setOpen] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  const [scrollingUp, setScrollingUp] = useState(true);
  const lastScrollY = useRef(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 576) {
        setTranslateY(0);
        setScrollingUp(true);
        return;
      }
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      const navHeight = headerRef.current?.offsetHeight ?? 60;

      if (delta > 0) {
        setScrollingUp(false);
        setTranslateY((prev) => Math.min(prev + delta, navHeight));
      } else {
        setScrollingUp(true);
        setTranslateY(0);
      }

      lastScrollY.current = currentY;
    };

    const handleResize = () => {
      if (window.innerWidth >= 576) {
        setTranslateY(0);
        setScrollingUp(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleSectionLink(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
    e.preventDefault();
    setOpen(false);
    if (isHome) {
      scrollToHash(hash);
    } else {
      router.push(`/#${hash}`);
    }
  }

  function handleLogoClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <>
      <header
        ref={headerRef}
        className="site-header"
        style={{
          transform: `translateY(-${translateY}px)`,
          transition: scrollingUp ? "transform 0.25s ease" : "none",
        }}
      >
        <div className="container inner">
          <a href="/" onClick={handleLogoClick} className="wordmark">
            <Image
              src="/hellovalerio.png"
              alt="hellovalerio"
              width={125}
              height={20}
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav aria-label="primary" className="desktop-nav">
            <ul className="site-nav">
              {links.map(({ hash, label }) => (
                <li key={hash}>
                  <a href={`/#${hash}`} onClick={(e) => handleSectionLink(e, hash)}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger button — mobile only */}
          <button
            type="button"
            className="hamburger"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={24} height={24}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={24} height={24}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div className="mobile-overlay" onClick={() => setOpen(false)}>
          <nav aria-label="mobile" onClick={(e) => e.stopPropagation()}>
            <ul className="mobile-nav">
              {links.map(({ hash, label }) => (
                <li key={hash}>
                  <a href={`/#${hash}`} onClick={(e) => handleSectionLink(e, hash)}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
