"use client";

import React from "react";
import { useInIntro } from "./InIntroContext";
import { useInPullQuote } from "./InPullQuoteContext";

const sans: React.CSSProperties = {
  fontFamily: "var(--font-hind), 'Hind Vadodara', system-ui, sans-serif",
};

export default function P({ children }: { children: React.ReactNode }) {
  const inIntro = useInIntro();
  const inPullQuote = useInPullQuote();

  // Inside a pull quote: render as a plain fragment so the PullQuote's own
  // font-size, weight, and colour apply without being overridden by P's styles.
  if (inPullQuote) {
    return <>{children}</>;
  }

  if (inIntro) {
    // Inside <Intro>: no grid placement (parent handles it), large intro text
    return (
      <p
        style={{
          ...sans,
          fontWeight: 500,
          fontSize: "21px",
          lineHeight: 1.5,
          color: "#5D6E77",
          margin: 0,
        }}
      >
        {children}
      </p>
    );
  }

  // Body paragraph: <div> is the grid item at cols 3–8 (must not be <p> —
  // MDX calls this component from inside other components whose children
  // are also processed as paragraphs, which would produce nested <p> tags)
  return (
    <div
      style={{
        ...sans,
        marginTop: "24px",
        fontSize: "18px",
        lineHeight: 1.75,
        color: "#5D6E77",
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
