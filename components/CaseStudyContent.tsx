"use client";

import React from "react";
import { MediaRegistryProvider, MediaItem } from "./mdx/MediaRegistry";

const serif: React.CSSProperties = { fontFamily: "var(--font-inria), 'Inria Serif', Georgia, serif" };
const sans: React.CSSProperties = { fontFamily: "var(--font-hind), 'Hind Vadodara', system-ui, sans-serif" };

function BackLink() {
  return (
    <a
      href="/"
      className="cs-back-link"
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
  return (
    <MediaRegistryProvider items={mediaItems}>
      <main>
        <div className="cs-wrap">
          <div className="cs-grid">

            {/* Back (top) */}
            <div className="cs-back-top">
              <BackLink />
            </div>

            {/* Title */}
            <h1 className="cs-title" style={serif}>
              {title}
            </h1>

            {/* Tags */}
            <div className="cs-taglist">
              {tags.map((tag) => (
                <span key={tag} className="cs-tag-pill" style={sans}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Divider */}
            <hr className="cs-rule" />

            {/* Metadata sidebar */}
            <div className="cs-meta">
              {[
                { label: "COMPANY", value: company },
                { label: "ROLE", value: role },
                { label: "YEAR", value: year },
              ].map(({ label, value }) => (
                <div key={label} className="cs-meta-item">
                  <p className="cs-meta-label" style={sans}>{label}</p>
                  <p className="cs-meta-value" style={sans}>{value}</p>
                </div>
              ))}
            </div>

            {/* Rule between metadata and body — mobile only */}
            <hr className="cs-body-rule" />

            {/* MDX body */}
            <div className="cs-body-col">
              {children}
              <div style={{ clear: "both" }} />
            </div>

            {/* Back (bottom) */}
            <div className="cs-back-bottom">
              <BackLink />
            </div>

          </div>
        </div>
      </main>
    </MediaRegistryProvider>
  );
}
