"use client";

import React, { createContext, useContext, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface MediaItem {
  src: string;
  caption?: string;
}

interface RegistryCtx {
  items: MediaItem[];
  openLightbox: (index: number) => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const MediaRegistryContext = createContext<RegistryCtx>({
  items: [],
  openLightbox: () => {},
});

export const useMediaRegistry = () => useContext(MediaRegistryContext);

// ─── Lightbox ─────────────────────────────────────────────────────────────────

function Lightbox({
  items,
  index,
  onClose,
  onNav,
}: {
  items: MediaItem[];
  index: number;
  onClose: () => void;
  onNav: (i: number) => void;
}) {
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onNav((index - 1 + items.length) % items.length);
      else if (e.key === "ArrowRight") onNav((index + 1) % items.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [index, items.length, onClose, onNav]);

  const item = items[index];
  const isVideo = /\.(mp4|mov|webm)$/i.test(item.src);

  const btnStyle: React.CSSProperties = {
    position: "absolute",
    background: "none",
    border: "none",
    color: "rgba(255,255,255,0.8)",
    fontSize: "28px",
    cursor: "pointer",
    padding: "16px",
    lineHeight: 1,
    transition: "color 0.15s",
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.88)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 200,
      }}
      onClick={onClose}
    >
      {/* Prev */}
      <button
        style={{ ...btnStyle, left: "24px", top: "50%", transform: "translateY(-50%)" }}
        onClick={(e) => { e.stopPropagation(); onNav((index - 1 + items.length) % items.length); }}
        aria-label="Previous"
      >
        ←
      </button>

      {/* Media */}
      <div
        style={{ maxWidth: "80vw", textAlign: "center" }}
        onClick={(e) => e.stopPropagation()}
      >
        {isVideo ? (
          <video
            src={item.src}
            autoPlay
            loop
            muted
            playsInline
            style={{ maxWidth: "80vw", maxHeight: "72vh", borderRadius: "12px", display: "block" }}
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.src}
            alt={item.caption ?? ""}
            style={{ maxWidth: "80vw", maxHeight: "72vh", borderRadius: "12px", display: "block" }}
          />
        )}
        {item.caption && (
          <p
            style={{
              fontFamily: "var(--font-hind), 'Hind Vadodara', system-ui, sans-serif",
              color: "rgba(255,255,255,0.65)",
              fontSize: "14px",
              fontWeight: 500,
              marginTop: "14px",
              marginBottom: 0,
            }}
          >
            {item.caption}
          </p>
        )}
      </div>

      {/* Next */}
      <button
        style={{ ...btnStyle, right: "24px", top: "50%", transform: "translateY(-50%)" }}
        onClick={(e) => { e.stopPropagation(); onNav((index + 1) % items.length); }}
        aria-label="Next"
      >
        →
      </button>

      {/* Close */}
      <button
        style={{ ...btnStyle, top: "20px", right: "24px" }}
        onClick={onClose}
        aria-label="Close"
      >
        ✕
      </button>
    </div>
  );
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function MediaRegistryProvider({
  items,
  children,
}: {
  items: MediaItem[];
  children: React.ReactNode;
}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <MediaRegistryContext.Provider value={{ items, openLightbox: setLightboxIndex }}>
      {children}
      {lightboxIndex !== null && (
        <Lightbox
          items={items}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNav={setLightboxIndex}
        />
      )}

    </MediaRegistryContext.Provider>
  );
}
