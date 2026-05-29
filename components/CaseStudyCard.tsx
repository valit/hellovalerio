import Image from "next/image";
import { CardData } from "@/data/caseStudies";

const CARD_RADIUS = "26px";
const CARD_SHADOW =
  "-16px -16px 20px 0 rgba(255,255,255,0.25), 16px 16px 20px 0 rgba(0,0,0,0.08)";

export default function CaseStudyCard({ card }: { card: CardData }) {
  const inner = (
    /* Outer card */
    <div
      style={{
        background: "#e4e9ec",
        borderRadius: CARD_RADIUS,
        border: "none",
        boxShadow: CARD_SHADOW,
        overflow: "hidden",
      }}
    >
      {/* Image container — fixed height, all four corners rounded */}
      <div
        className="card-img-wrap"
        style={{
          position: "relative",
          height: "302px",
          background: "#d8dde2",
          borderRadius: "26px",
          overflow: "hidden",
        }}
      >
        {card.image && (
          <Image
            src={card.image}
            alt={card.title}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            sizes="(max-width: 820px) 100vw, 50vw"
          />
        )}

        {/* Logo chip — bottom-right of image */}
        {card.logo && (
          <span
            style={{
              position: "absolute",
              right: "16px",
              bottom: "16px",
              background: "#ffffff",
              borderRadius: "15px",
              padding: "7px 12px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={card.logo}
              alt={card.company}
              style={{ height: "24px", width: "auto", display: "block" }}
            />
          </span>
        )}
      </div>

      {/* Content — title + tags */}
      <div style={{ padding: "20px 24px 28px" }}>
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontWeight: 700,
            fontSize: "20px",
            lineHeight: 1.35,
            color: "#2f3a44",
            margin: "0 0 16px",
            textWrap: "pretty",
          } as React.CSSProperties}
        >
          {card.title}
        </h3>

        {card.tags && card.tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {card.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  background: "#98abb3",
                  color: "#ffffff",
                  padding: "4px 6px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: 1.4,
                  fontFamily: "var(--font-sans)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (card.slug) {
    return (
      <a href={`/work/${card.slug}`} className="case-card">
        {inner}
      </a>
    );
  }

  return <div className="case-card">{inner}</div>;
}
