"use client";

import React from "react";
import { MediaRegistryProvider, MediaItem } from "./mdx/MediaRegistry";
import ConfidentialityNotice from "./ConfidentialityNotice";

const serif: React.CSSProperties = { fontFamily: "var(--font-inria), 'Inria Serif', Georgia, serif" };
const sans: React.CSSProperties = { fontFamily: "var(--font-hind), 'Hind Vadodara', system-ui, sans-serif" };

function BackLink() {
  return (
    <a
      href="/"
      className="cs-back-link"
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#5d6e77")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#8a97a0")}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" style={{ width: 24, height: 24, flexShrink: 0 }}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
      </svg>
      Back
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
  showConfidentialityNotice?: boolean;
}

export default function CaseStudyContent({
  title,
  company,
  role,
  year,
  tags,
  mediaItems,
  children,
  showConfidentialityNotice = false,
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

            {/* Confidentiality notice (profile 1 only) */}
            {showConfidentialityNotice && (
              <div style={{ gridColumn: "1 / -1", marginTop: "32px" }}>
                <ConfidentialityNotice />
              </div>
            )}

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

            {/* Left column: metadata + back link */}
            <div className="cs-left-col">
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

              {/* Back (bottom) */}
              <div className="cs-back-bottom">
                <BackLink />
              </div>
            </div>

            {/* MDX body */}
            <div className="cs-body-col">
              {children}
              <div style={{ clear: "both" }} />
            </div>

          </div>
        </div>
      </main>
    </MediaRegistryProvider>
  );
}
