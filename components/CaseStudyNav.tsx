"use client";
import { useState } from "react";

const CARD_SHADOW =
  "-10px -10px 20px 0 rgba(255,255,255,0.4), 10px 10px 20px 0 rgba(0,0,0,0.07)";

const BORDER_RADIUS = "14px";
const BORDER_COLOR = "#98abb3"; // Nevada 400

const ORDER = [
  {
    slug: "campaigns",
    title: "Built to bend: untangling campaign creation in Google Ads",
    image: "/case-01-campaigns-card.jpg",
  },
  {
    slug: "measurement",
    title: "Creating a more coherent measurement ecosystem",
    image: "/case-02-google-ads-measurement.jpg",
  },
  {
    slug: "service-app",
    title: "The good after the bad: designing service recovery",
    image: "/case-03-sky-service-recovery.jpeg",
  },
  {
    slug: "content-discovery",
    title: "What's on tonight: the invisible architecture of content discovery",
    image: "/case-04-sky-content-discovery.jpg",
  },
];

function NavCard({
  slug,
  title,
  image,
  direction,
}: {
  slug: string;
  title: string;
  image: string;
  direction: "prev" | "next";
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`/work/${slug}`}
      className="cs-nav-card"
      style={{
        display: "flex",
        alignItems: "stretch",
        gap: "24px",
        padding: "0 23px 0 0",
        borderRadius: BORDER_RADIUS,
        border: `0.5px solid ${BORDER_COLOR}`,
        background: "#E4E8EA",
        boxShadow: hovered ? CARD_SHADOW : "none",
        transition: "box-shadow 0.2s ease",
        textDecoration: "none",
        flex: 1,
        minWidth: 0,
        overflow: "hidden",
        height: "126px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <img
        src={image}
        alt={title}
        className="cs-nav-thumb"
        style={{
          width: "169px",
          objectFit: "cover",
          flexShrink: 0,
          alignSelf: "stretch",
          borderRadius: BORDER_RADIUS,
        }}
      />

      {/* Text + arrow */}
      <div
        className={`cs-nav-text${direction === "next" ? " cs-nav-text--next" : ""}`}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          minWidth: 0,
          paddingTop: "16px",
          paddingBottom: "16px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-hind), system-ui, sans-serif",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: 1.35,
            color: "#2f3a44",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {title}
        </span>

        {direction === "prev" ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 24, height: 24, color: "#8a97a0", flexShrink: 0 }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 24, height: 24, color: "#8a97a0", flexShrink: 0 }}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        )}
      </div>
    </a>
  );
}

export default function CaseStudyNav({ slug }: { slug: string }) {
  const index = ORDER.findIndex((s) => s.slug === slug);
  if (index === -1) return null;

  const prev = ORDER[(index - 1 + ORDER.length) % ORDER.length];
  const next = ORDER[(index + 1) % ORDER.length];

  return (
    <div
      style={{
        display: "flex",
        gap: "24px",
        margin: "40px 0 48px",
      }}
    >
      <NavCard {...prev} direction="prev" />
      <NavCard {...next} direction="next" />
    </div>
  );
}
