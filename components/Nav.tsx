"use client";
import Image from "next/image";
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
  const pathname = usePathname();
  const router   = useRouter();
  const isHome   = pathname === "/";

  function handleSectionLink(e: React.MouseEvent<HTMLAnchorElement>, hash: string) {
    e.preventDefault();
    if (isHome) {
      // Already on the home page — just scroll.
      scrollToHash(hash);
    } else {
      // Navigate to home, then scroll once the page has loaded.
      router.push(`/#${hash}`);
    }
  }

  function handleLogoClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // On case study pages, let the default href="/" navigate normally.
  }

  return (
    <header className="site-header">
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
        <nav aria-label="primary">
          <ul className="site-nav">
            {links.map(({ hash, label }) => (
              <li key={hash}>
                <a
                  href={`/#${hash}`}
                  onClick={(e) => handleSectionLink(e, hash)}
                >
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
