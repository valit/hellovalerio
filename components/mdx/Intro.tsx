"use client";

import React from "react";
import { InIntroContext } from "./InIntroContext";

const sans: React.CSSProperties = {
  fontFamily: "var(--font-hind), 'Hind Vadodara', system-ui, sans-serif",
};

export default function Intro({ children }: { children: React.ReactNode }) {
  return (
    <InIntroContext.Provider value={true}>
      <div
        style={{
          marginTop: "48px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          minWidth: 0,
          ...sans,
        }}
      >
        {children}
      </div>
    </InIntroContext.Provider>
  );
}
