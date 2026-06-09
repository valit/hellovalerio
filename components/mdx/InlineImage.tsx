"use client";

import React, { useState } from "react";
import { useMediaRegistry } from "./MediaRegistry";

const sans: React.CSSProperties = {
  fontFamily: "var(--font-hind), 'Hind Vadodara', system-ui, sans-serif",
};

export default function InlineImage({
  src,
  alt,
  side = "right",
  caption,
}: {
  src: string;
  alt: string;
  side?: "left" | "right";
  caption?: string;
}) {
  const { items, openLightbox } = useMediaRegistry();
  const [hovered, setHovered] = useState(false);

  const index = items.findIndex((item) => item.src === src);

  return (
    <figure className={`cs-inline-img cs-inline-img--${side}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          cursor: index >= 0 ? "pointer" : "default",
          opacity: hovered ? 0.88 : 1,
          transition: "opacity 0.2s",
        }}
        onClick={() => index >= 0 && openLightbox(index)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      {caption && (
        <figcaption
          className="cs-media-caption"
          style={{
            ...sans,
            marginTop: "8px",
            marginBottom: 0,
            fontSize: "13px",
            color: "#8a97a0",
            textAlign: "center",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
