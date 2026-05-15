"use client";

import { useEffect, useRef } from "react";

const ORB_CONFIGS = [
  { color: "#b4cce8", size: "55vmax", ax: 0.15, ay: 0.20, rx: 0.20, ry: 0.16, spd: 0.30, ph: 0.0,  mw: 0.18 },
  { color: "#c2d8f0", size: "50vmax", ax: 0.72, ay: 0.55, rx: 0.18, ry: 0.14, spd: 0.22, ph: 1.4,  mw: 0.12 },
  { color: "#a8c4e0", size: "45vmax", ax: 0.45, ay: 0.75, rx: 0.22, ry: 0.18, spd: 0.35, ph: 2.8,  mw: 0.22 },
  { color: "#d0e2f4", size: "60vmax", ax: 0.80, ay: 0.15, rx: 0.16, ry: 0.20, spd: 0.18, ph: 4.2,  mw: 0.08 },
  { color: "#b8d4ec", size: "40vmax", ax: 0.30, ay: 0.40, rx: 0.24, ry: 0.15, spd: 0.40, ph: 1.0,  mw: 0.25 },
  { color: "#c8dcf0", size: "35vmax", ax: 0.60, ay: 0.88, rx: 0.19, ry: 0.13, spd: 0.27, ph: 3.3,  mw: 0.15 },
];

const BACKGROUND = "#E8EAED";
const BLUR = 90;
const OPACITY = 0.6;
const SPEED = 1;
const MOUSE_STRENGTH = 1;

export default function AnimatedGradient() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const mouse = useRef({ x: 0.5, y: 0.4 });
  const targetMouse = useRef({ x: 0.5, y: 0.4 });
  const raf = useRef<number | null>(null);
  const t = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      targetMouse.current.x = e.clientX / window.innerWidth;
      targetMouse.current.y = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      // Smooth-follow mouse
      mouse.current.x += (targetMouse.current.x - mouse.current.x) * 0.04;
      mouse.current.y += (targetMouse.current.y - mouse.current.y) * 0.04;

      ORB_CONFIGS.forEach((cfg, i) => {
        const el = refs.current[i];
        if (!el) return;

        const driftX =
          cfg.ax +
          Math.sin(t.current * cfg.spd * SPEED + cfg.ph) * cfg.rx +
          Math.sin(t.current * cfg.spd * SPEED * 0.61 + cfg.ph + 1.3) * cfg.rx * 0.35;

        const driftY =
          cfg.ay +
          Math.cos(t.current * cfg.spd * SPEED * 0.83 + cfg.ph + 0.7) * cfg.ry +
          Math.cos(t.current * cfg.spd * SPEED * 1.27 + cfg.ph + 2.1) * cfg.ry * 0.25;

        const mw = cfg.mw * MOUSE_STRENGTH;
        const mx = driftX + (mouse.current.x - driftX) * mw;
        const my = driftY + (mouse.current.y - driftY) * mw;

        // Map 0–1 to oversized blur-layer coords (inset -20% → 140% total)
        const px = ((mx * 100 + 20) / 1.4).toFixed(2);
        const py = ((my * 100 + 20) / 1.4).toFixed(2);

        el.style.transform = `translate(${px}vw, ${py}vh) translate(-50%, -50%)`;
      });

      t.current += 0.006;
      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: BACKGROUND,
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {/* Oversized blur layer so blurred edges don't reveal a hard boundary */}
      <div
        style={{
          position: "absolute",
          inset: "-20%",
          filter: `blur(${BLUR}px) saturate(1.1)`,
        }}
      >
        {ORB_CONFIGS.map((cfg, i) => (
          <div
            key={i}
            ref={(el) => { refs.current[i] = el; }}
            style={{
              position: "absolute",
              width: cfg.size,
              height: cfg.size,
              borderRadius: "50%",
              opacity: OPACITY,
              background: `radial-gradient(circle, ${cfg.color} 0%, transparent 70%)`,
              willChange: "transform",
            }}
          />
        ))}
      </div>
    </div>
  );
}
