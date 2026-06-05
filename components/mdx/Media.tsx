"use client";

import React, { useState } from "react";
import { useMediaRegistry } from "./MediaRegistry";

const ZOOM_TRANSITION = "transform 300ms ease, opacity 0.2s";

const sans: React.CSSProperties = {
  fontFamily: "var(--font-hind), 'Hind Vadodara', system-ui, sans-serif",
};

const MEDIA_BG: Record<"before" | "after", string> = {
  before: "linear-gradient(180deg, #B5B5B5 0%, #DCDCDC 100%)",
  after:  "linear-gradient(180deg, #CDD3D6 0%, #E8B4B2 100%)",
};
const MEDIA_PADDING = "28px";
const MEDIA_CONTAINER_RADIUS = "14px";
const MEDIA_INNER_RADIUS = "10px";
const MEDIA_SHADOW = "0px 11px 14px 0px rgba(0,0,0,0.25)";

export default function Media({
  src,
  caption,
  variant = "after",
}: {
  src: string;
  caption?: string;
  variant?: "before" | "after";
}) {
  const { items, openLightbox } = useMediaRegistry();
  const [hovered, setHovered] = useState(false);

  const index = items.findIndex((item) => item.src === src);
  const isVideo = /\.(mp4|mov|webm)$/i.test(src);

  return (
    <div style={{ clear: "both", marginTop: "48px" }}>
      {/* Outer container — clips the scaling inner container */}
      <div
        style={{
          background: MEDIA_BG[variant],
          borderRadius: MEDIA_CONTAINER_RADIUS,
          padding: MEDIA_PADDING,
          cursor: "pointer",
          overflow: "hidden",
          opacity: hovered ? 0.92 : 1,
          transition: "opacity 0.2s",
        }}
        onClick={() => index >= 0 && openLightbox(index)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Inner container — scales on hover, clipped by outer rounded corners */}
        <div
          style={{
            borderRadius: MEDIA_INNER_RADIUS,
            overflow: "hidden",
            boxShadow: MEDIA_SHADOW,
            lineHeight: 0,
            transform: hovered ? "scale(1.02)" : "scale(1)",
            transition: ZOOM_TRANSITION,
          }}
        >
          {isVideo ? (
            <video
              src={src}
              autoPlay
              loop
              muted
              playsInline
              style={{ width: "100%", height: "auto", display: "block", borderRadius: MEDIA_INNER_RADIUS }}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={src}
              alt={caption ?? ""}
              style={{ width: "100%", height: "auto", display: "block", borderRadius: MEDIA_INNER_RADIUS }}
            />
          )}
        </div>
      </div>

      {/* Caption */}
      {caption && (
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
          {caption}
        </p>
      )}
    </div>
  );
}
