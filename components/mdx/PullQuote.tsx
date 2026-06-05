"use client";

import React from "react";
import { InPullQuoteContext } from "./InPullQuoteContext";

const serif: React.CSSProperties = {
  fontFamily: "var(--font-inria), 'Inria Serif', Georgia, serif",
};

interface PullQuoteProps {
  children: React.ReactNode;
  /** Space below the pull quote before normal column flow resumes. Default 48px. */
  bottomSpacing?: number;
}

export default function PullQuote({ children, bottomSpacing = 48 }: PullQuoteProps) {
  return (
    <InPullQuoteContext.Provider value={true}>
      <div
        style={{
          // Float left so subsequent paragraphs wrap to the right for as long
          // as the pull quote is tall, then naturally revert to full width.
          float: "left",
          clear: "left",
          // Visual content width = cols 1–3 (3 tracks + 2 gaps).
          // 100% = MDX container width (cols 3–8 = 6 tracks + 5 gaps).
          // Derived: calc(50% - 24px) ← exact at any responsive width.
          width: "calc(50% - 24px)",
          // Negative margin reaches back from col 3's left edge to col 1's left edge.
          // Distance = 2 col-widths + 2 gaps = calc(-100%/3 - 16px).
          marginLeft: "calc(-100% / 3 - 16px)",
          // Align top with the first following paragraph (P has marginTop: 24px).
          marginTop: "24px",
          // Space below the quote before full-width flow resumes.
          marginBottom: `${bottomSpacing}px`,
          // Right padding acts as the column gap between the quote and adjacent text,
          // pushing line boxes in following paragraphs to start at col 4's left edge.
          paddingRight: "48px",
          boxSizing: "content-box",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/quotes.png" alt="" aria-hidden="true" width={64} height={43} />
        {/* Must be <div>, not <p>: MDX processes children through the custom P
            component which already renders a block element, so a <p> here would
            produce invalid nested block elements. */}
        <div
          style={{
            ...serif,
            fontWeight: 700,
            fontSize: "23px",
            lineHeight: 1.4,
            color: "#5D6E77",
            margin: 0,
            marginTop: "16px",
            paddingRight: "20px",
          }}
        >
          {children}
        </div>
      </div>
    </InPullQuoteContext.Provider>
  );
}
