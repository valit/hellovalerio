"use client";

import React from "react";
import { InPullQuoteContext } from "./InPullQuoteContext";

interface PullQuoteProps {
  children: React.ReactNode;
  /** Space below the pull quote before normal column flow resumes. Default 48px. */
  bottomSpacing?: number;
}

export default function PullQuote({ children, bottomSpacing = 48 }: PullQuoteProps) {
  return (
    <InPullQuoteContext.Provider value={true}>
      <div
        className="cs-pull-quote"
        style={{ marginBottom: `${bottomSpacing}px` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/quotes.png" alt="" aria-hidden="true" width={64} height={43} />
        <div className="cs-pull-quote-text">
          {children}
        </div>
      </div>
    </InPullQuoteContext.Provider>
  );
}
