"use client";

import React, { useState, useEffect } from "react";
import { CaseStudy, ImageSection, VideoSection } from "@/data/caseStudies";

const COL_GAP = "48px";

const serif: React.CSSProperties = { fontFamily: "var(--font-inria), 'Inria Serif', Georgia, serif" };
const sans: React.CSSProperties = { fontFamily: "var(--font-hind), 'Hind Vadodara', system-ui, sans-serif" };

// Container styling
const MEDIA_BG = "linear-gradient(180deg, #CDD3D6 0%, #E8B4B2 100%)";
const MEDIA_PADDING = "28px";
const MEDIA_CONTAINER_RADIUS = "14px";
const MEDIA_INNER_RADIUS = "10px";
const MEDIA_SHADOW = "0px 11px 14px 0px rgba(0,0,0,0.25)";

type MediaSection = ImageSection | VideoSection;

function sectionMarginTop(cs: CaseStudy, i: number): string {
  if (i === 0) return "48px";
  const prev = cs.sections[i - 1];
  const curr = cs.sections[i];
  if (prev.type === "image" || prev.type === "video") return "48px";
  if (curr.type === "image" || curr.type === "video") return "48px";
  if (curr.type === "paragraph" && curr.pullquote) return "48px";
  if (curr.type === "rule") return "48px";
  if (prev.type === "rule") return "48px";
  return "24px";
}

function BackLink() {
  return (
    <a
      href="/"
      style={{
        ...sans,
        display: "inline-flex",
        alignItems: "center",
        gap: "14px",
        fontSize: "16px",
        color: "#5d6e77",
        textDecoration: "none",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#2f3a44")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#5d6e77")}
    >
      ← Back
    </a>
  );
}

// Styled container with gradient background + padding
function MediaContainer({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        background: MEDIA_BG,
        borderRadius: MEDIA_CONTAINER_RADIUS,
        padding: MEDIA_PADDING,
        cursor: "pointer",
        opacity: hovered ? 0.9 : 1,
        transition: "opacity 0.2s",
      }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          borderRadius: MEDIA_INNER_RADIUS,
          overflow: "hidden",
          boxShadow: MEDIA_SHADOW,
          lineHeight: 0, // prevents inline gap below media elements
        }}
      >
        {children}
      </div>
    </div>
  );
}

// Lightbox — shows only the raw image or video, no container
function Lightbox({
  items,
  index,
  onClose,
  onNav,
}: {
  items: MediaSection[];
  index: number;
  onClose: () => void;
  onNav: (i: number) => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onNav((index - 1 + items.length) % items.length);
      else if (e.key === "ArrowRight") onNav((index + 1) % items.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [index, items.length, onClose, onNav]);

  const item = items[index];
  const aspectRatio = item.aspectRatio === "4/3" ? "4 / 3" : "16 / 9";

  const btnStyle: React.CSSProperties = {
    position: "absolute",
    background: "none",
    border: "none",
    color: "rgba(255,255,255,0.8)",
    fontSize: "28px",
    cursor: "pointer",
    padding: "16px",
    lineHeight: 1,
    transition: "color 0.15s",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.88)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 200,
      }}
      onClick={onClose}
    >
      {/* Prev */}
      <button
        style={{ ...btnStyle, left: "24px", top: "50%", transform: "translateY(-50%)" }}
        onClick={(e) => { e.stopPropagation(); onNav((index - 1 + items.length) % items.length); }}
        aria-label="Previous"
      >
        ←
      </button>

      {/* Media */}
      <div
        style={{ maxWidth: "80vw", textAlign: "center" }}
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "video" ? (
          <video
            src={item.src}
            autoPlay
            loop
            muted
            playsInline
            style={{
              maxWidth: "80vw",
              maxHeight: "72vh",
              borderRadius: "12px",
              display: "block",
              aspectRatio,
            }}
          />
        ) : item.src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.src}
            alt={item.caption ?? ""}
            style={{ maxWidth: "80vw", maxHeight: "72vh", borderRadius: "12px", display: "block" }}
          />
        ) : (
          <div
            style={{
              width: "min(800px, 80vw)",
              aspectRatio,
              background: "#d8dde2",
              borderRadius: "12px",
            }}
          />
        )}
        {item.caption && (
          <p
            style={{
              ...sans,
              color: "rgba(255,255,255,0.65)",
              fontSize: "13px",
              marginTop: "14px",
              marginBottom: 0,
            }}
          >
            {item.caption}
          </p>
        )}
      </div>

      {/* Next */}
      <button
        style={{ ...btnStyle, right: "24px", top: "50%", transform: "translateY(-50%)" }}
        onClick={(e) => { e.stopPropagation(); onNav((index + 1) % items.length); }}
        aria-label="Next"
      >
        →
      </button>

      {/* Close */}
      <button
        style={{ ...btnStyle, top: "20px", right: "24px" }}
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
}

export default function CaseStudyContent({ cs }: { cs: CaseStudy }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Collect all image + video sections for the lightbox
  const mediaItems = cs.sections.filter(
    (s): s is MediaSection => s.type === "image" || s.type === "video"
  );

  const sectionMediaIndex = new Map<number, number>();
  let mediaCount = 0;
  cs.sections.forEach((s, i) => {
    if (s.type === "image" || s.type === "video") sectionMediaIndex.set(i, mediaCount++);
  });

  const grid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(8, 1fr)",
    columnGap: COL_GAP,
    minWidth: 0,
  };

  const wrap: React.CSSProperties = {
    maxWidth: "980px",
    margin: "0 auto",
    padding: "0 28px",
  };

  return (
    <main>
      <div style={wrap}>
        <div style={grid}>

          {/* ── Back (top) ── */}
          <div style={{ gridColumn: "1 / -1", marginTop: "40px" }}>
            <BackLink />
          </div>

          {/* ── Title ── */}
          <h1
            style={{
              ...serif,
              gridColumn: "1 / -1",
              fontWeight: 400,
              fontSize: "80px",
              lineHeight: 1.12,
              letterSpacing: "-0.005em",
              color: "#2f3a44",
              margin: 0,
              marginTop: "28px",
            } as React.CSSProperties}
          >
            {cs.title}
          </h1>

          {/* ── Tags ── */}
          <div
            style={{
              gridColumn: "1 / -1",
              marginTop: "40px",
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {cs.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  ...sans,
                  background: "#98abb3",
                  color: "#ffffff",
                  padding: "4px 6px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* ── Rule ── */}
          <hr
            style={{
              gridColumn: "1 / -1",
              border: "none",
              borderTop: "1px solid #8a97a0",
              margin: 0,
              marginTop: "48px",
            }}
          />

          {/* ── Metadata ── */}
          <div style={{ gridColumn: "1 / 3", gridRow: "auto / span 10", marginTop: "48px", alignSelf: "start" }}>
            {[
              { label: "COMPANY", value: cs.company },
              { label: "ROLE", value: cs.role },
              { label: "YEAR", value: cs.year },
            ].map(({ label, value }) => (
              <div key={label} style={{ marginBottom: "24px" }}>
                <p
                  style={{
                    ...sans,
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#D95C5B",
                    margin: "0 0 4px",
                  }}
                >
                  {label}
                </p>
                <p style={{ ...sans, color: "#5D6E77", margin: 0, fontSize: "14px", lineHeight: 1.5 }}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          {/* ── Sections ── */}
          {(() => {
            const firstRuleIdx = cs.sections.findIndex((s) => s.type === "rule");
            return cs.sections.map((section, i) => {
              const isIntro = firstRuleIdx !== -1 && i < firstRuleIdx;
              const mt = sectionMarginTop(cs, i);

              if (section.type === "paragraph") {
                if (section.pullquote) {
                  return (
                    <div key={i} style={{ display: "contents" }}>
                      {/* Pullquote — cols 1–2 */}
                      <div
                        style={{
                          gridColumn: "1 / 4",
                          gridRow: "auto / span 2",
                          marginTop: mt,
                          alignSelf: "start",
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/quotes.png" alt="" aria-hidden="true" width={64} height={43} />
                        <p
                          style={{
                            ...serif,
                            fontWeight: 700,
                            fontSize: "24px",
                            lineHeight: 1.3,
                            color: "#5D6E77",
                            margin: 0,
                            marginTop: "16px",
                          }}
                        >
                          {section.pullquote}
                        </p>
                      </div>

                      {/* Paragraph — cols 4–8 */}
                      <div style={{ gridColumn: "4 / 9", marginTop: mt, minWidth: 0 }}>
                        <p style={{ ...sans, fontSize: "16px", lineHeight: 1.75, color: "#5D6E77", margin: 0 }}>
                          {section.text}
                        </p>
                      </div>
                    </div>
                  );
                }

                const prevSection = i > 0 ? cs.sections[i - 1] : null;
                const followsPullquote = prevSection?.type === "paragraph" && !!prevSection.pullquote;
                const colSpan = followsPullquote ? "4 / 9" : "3 / 9";
                const isLast = i === cs.sections.length - 1;
                const para = (
                  <div style={{ gridColumn: colSpan, marginTop: mt, minWidth: 0 }}>
                    <p
                      style={
                        isIntro
                          ? { ...sans, fontWeight: 500, fontSize: "20px", lineHeight: 1.5, color: "#5D6E77", margin: 0 }
                          : { ...sans, fontSize: "16px", lineHeight: 1.75, color: "#5D6E77", margin: 0 }
                      }
                    >
                      {section.text}
                    </p>
                  </div>
                );
                if (isLast) {
                  return (
                    <React.Fragment key={i}>
                      <div style={{ gridColumn: "1 / 3", alignSelf: "end" }}>
                        <BackLink />
                      </div>
                      {para}
                    </React.Fragment>
                  );
                }
                return <React.Fragment key={i}>{para}</React.Fragment>;
              }

              if (section.type === "rule") {
                return (
                  <hr
                    key={i}
                    style={{
                      gridColumn: "3 / 9",
                      border: "none",
                      borderTop: "1px solid #8a97a0",
                      margin: 0,
                      marginTop: mt,
                    }}
                  />
                );
              }

              if (section.type === "image") {
                const lightboxIdx = sectionMediaIndex.get(i)!;
                return (
                  <div key={i} style={{ gridColumn: "3 / 9", marginTop: mt }}>
                    <MediaContainer onClick={() => setLightboxIndex(lightboxIdx)}>
                      {section.src ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={section.src}
                          alt={section.caption ?? ""}
                          style={{ width: "100%", height: "auto", display: "block", borderRadius: MEDIA_INNER_RADIUS }}
                        />
                      ) : (
                        <div style={{ width: "100%", aspectRatio: section.aspectRatio === "4/3" ? "4/3" : "16/9", background: "#c2ced5", borderRadius: MEDIA_INNER_RADIUS }} />
                      )}
                    </MediaContainer>
                    {section.caption && (
                      <p
                        style={{
                          ...sans,
                          marginTop: "12px",
                          marginBottom: 0,
                          fontSize: "13px",
                          color: "#8a97a0",
                          textAlign: "center",
                        }}
                      >
                        {section.caption}
                      </p>
                    )}
                  </div>
                );
              }

              if (section.type === "video") {
                const lightboxIdx = sectionMediaIndex.get(i)!;
                return (
                  <div key={i} style={{ gridColumn: "3 / 9", marginTop: mt }}>
                    <MediaContainer onClick={() => setLightboxIndex(lightboxIdx)}>
                      <video
                        src={section.src}
                        autoPlay
                        loop
                        muted
                        playsInline
                        style={{ width: "100%", height: "auto", display: "block", borderRadius: MEDIA_INNER_RADIUS }}
                      />
                    </MediaContainer>
                    {section.caption && (
                      <p
                        style={{
                          ...sans,
                          marginTop: "12px",
                          marginBottom: 0,
                          fontSize: "13px",
                          color: "#8a97a0",
                          textAlign: "center",
                        }}
                      >
                        {section.caption}
                      </p>
                    )}
                  </div>
                );
              }

              return null;
            });
          })()}

        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <Lightbox
          items={mediaItems}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNav={setLightboxIndex}
        />
      )}
    </main>
  );
}
