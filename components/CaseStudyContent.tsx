"use client";

import React from "react";
import { MediaRegistryProvider, MediaItem } from "./mdx/MediaRegistry";

const COL_GAP = "48px";
const serif: React.CSSProperties = { fontFamily: "var(--font-inria), 'Inria Serif', Georgia, serif" };
const sans: React.CSSProperties = { fontFamily: "var(--font-hind), 'Hind Vadodara', system-ui, sans-serif" };

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

interface CaseStudyContentProps {
  title: string;
  company: string;
  role: string;
  year: string;
  tags: string[];
  mediaItems: MediaItem[];
  children: React.ReactNode;
}

export default function CaseStudyContent({
  title,
  company,
  role,
  year,
  tags,
  mediaItems,
  children,
}: CaseStudyContentProps) {
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
    <MediaRegistryProvider items={mediaItems}>
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
              {title}
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
              {tags.map((tag) => (
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

            {/* ── Full-width rule (below tags) ── */}
            <hr
              style={{
                gridColumn: "1 / -1",
                border: "none",
                borderTop: "1px solid #8a97a0",
                margin: 0,
                marginTop: "48px",
              }}
            />

            {/* ── Metadata sidebar (cols 1–2) ── */}
            <div
              style={{
                gridColumn: "1 / 3",
                marginTop: "48px",
                alignSelf: "start",
              }}
            >
              {[
                { label: "COMPANY", value: company },
                { label: "ROLE", value: role },
                { label: "YEAR", value: year },
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

            {/* ── MDX body — block container at cols 3–8; float-based layout inside ── */}
            <div style={{ gridColumn: "3 / 9" }}>
              {children}
              {/* clearfix: ensures container height encompasses any floated pull quotes */}
              <div style={{ clear: "both" }} />
            </div>

            {/* ── Back (bottom) ── */}
            <div style={{ gridColumn: "1 / 3", marginTop: "48px" }}>
              <BackLink />
            </div>

          </div>
        </div>
      </main>
    </MediaRegistryProvider>
  );
}
