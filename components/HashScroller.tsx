"use client";
import { useEffect } from "react";

/**
 * After the home page mounts, if the URL contains a hash (e.g. /#about),
 * scroll the target element into view so scroll-margin-top is respected.
 * Without this, the browser's native hash-scroll fires before React hydrates.
 */
export default function HashScroller() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const el = document.getElementById(hash);
    if (!el) return;
    // Small delay to let layout settle after hydration.
    const id = setTimeout(() => {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => clearTimeout(id);
  }, []);

  return null;
}
