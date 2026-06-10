"use client";

import React, { useState, useRef } from "react";
import { useMediaRegistry } from "./MediaRegistry";

const ZOOM_TRANSITION = "transform 300ms ease, opacity 0.2s";

const sans: React.CSSProperties = {
  fontFamily: "var(--font-hind), 'Hind Vadodara', system-ui, sans-serif",
};

const MEDIA_BG: Record<"before" | "after", string> = {
  before: "linear-gradient(180deg, #B5B5B5 0%, #DCDCDC 100%)",
  after:  "linear-gradient(180deg, #CDD3D6 0%, #E8B4B2 100%)",
};
const MEDIA_INNER_RADIUS = "10px";
const MEDIA_SHADOW = "0px 11px 14px 0px rgba(0,0,0,0.25)";

// Speaker icons as inline SVG
function IconSpeakerOn() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
    </svg>
  );
}

function IconSpeakerOff() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
    </svg>
  );
}

export default function Media({
  src,
  caption,
  variant = "after",
  hasAudio = false,
}: {
  src: string;
  caption?: string;
  variant?: "before" | "after";
  hasAudio?: boolean;
}) {
  const { items, openLightbox } = useMediaRegistry();
  const [hovered, setHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const index = items.findIndex((item) => item.src === src);
  const isVideo = /\.(mp4|mov|webm)$/i.test(src);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation(); // don't open lightbox
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div style={{ clear: "both", marginTop: "48px" }}>
      {/* Outer container */}
      <div
        className="cs-media-outer"
        style={{
          background: MEDIA_BG[variant],
          cursor: "pointer",
          opacity: hovered ? 0.92 : 1,
          transition: "opacity 0.2s",
        }}
        onClick={() => index >= 0 && openLightbox(index)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Inner container — scales on hover */}
        <div
          style={{
            position: "relative",
            borderRadius: MEDIA_INNER_RADIUS,
            overflow: "hidden",
            boxShadow: MEDIA_SHADOW,
            lineHeight: 0,
            transform: hovered ? "scale(1.02)" : "scale(1)",
            transition: ZOOM_TRANSITION,
          }}
        >
          {isVideo ? (
            <>
              <video
                ref={videoRef}
                src={src}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: "100%", height: "auto", display: "block", borderRadius: MEDIA_INNER_RADIUS }}
              />
              {hasAudio && (
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    width: "32px",
                    height: "32px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.55)",
                    border: "none",
                    borderRadius: "50%",
                    cursor: "pointer",
                    padding: 0,
                    lineHeight: 0,
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                    transition: "background 0.15s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(0,0,0,0.75)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(0,0,0,0.55)")}
                >
                  {isMuted ? <IconSpeakerOff /> : <IconSpeakerOn />}
                </button>
              )}
            </>
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
          className="cs-media-caption"
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
