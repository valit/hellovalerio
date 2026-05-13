"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "case studies", id: "work" },
  { href: "#about", label: "about", id: "about" },
  { href: "#contact", label: "contact", id: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", "work", "about", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(id);
          });
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-card-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <a
          href="/"
          className="font-serif text-[17px] tracking-tight text-near-black select-none"
        >
          <span className="font-normal">hello</span>
          <span className="font-bold">valerio</span>
        </a>

        <ul className="flex items-center gap-8">
          {links.map(({ href, label, id }) => (
            <li key={id}>
              <a
                href={href}
                className={`text-sm font-sans transition-colors duration-200 ${
                  activeSection === id
                    ? "text-accent"
                    : "text-muted hover:text-near-black"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
