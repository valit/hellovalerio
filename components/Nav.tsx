"use client";
import Image from "next/image";

const links = [
  { href: "#case-studies", label: "case studies" },
  { href: "#about", label: "about me" },
  { href: "#contact", label: "contact" },
];

function scrollTo(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Nav() {
  return (
    <header className="site-header">
      <div className="container inner">
        <a
          href="#top"
          onClick={(e) => scrollTo(e, "#top")}
          className="wordmark"
        >
          <Image
            src="/hellovalerio.png"
            alt="hellovalerio"
            width={125}
            height={20}
            priority
          />
        </a>
        <nav aria-label="primary">
          <ul className="site-nav">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={(e) => scrollTo(e, href)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
