"use client";

import { useEffect, useRef } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";
export default function ThemeToggle() {
  const preference = useRef<Theme | null>(null);

  useEffect(() => {
    const media = typeof window.matchMedia === "function" ? window.matchMedia("(prefers-color-scheme: dark)") : null;
    const apply = () => { document.documentElement.dataset.theme = preference.current ?? (media?.matches ? "dark" : "light"); };
    const read = () => {
      let saved: string | null = null;
      try { saved = localStorage.getItem("plottersul-theme"); } catch {}
      preference.current = saved === "light" || saved === "dark" ? saved : null;
      apply();
    };
    read();
    media?.addEventListener?.("change", apply);
    window.addEventListener("storage", read);
    return () => { media?.removeEventListener?.("change", apply); window.removeEventListener("storage", read); };
  }, []);

  function toggleTheme() {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    preference.current = next;
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("plottersul-theme", next); } catch {}
  }

  return <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label="Alternar entre tema claro e escuro" title="Alternar tema">
    <Moon className="theme-moon" size={19} aria-hidden="true" />
    <Sun className="theme-sun" size={19} aria-hidden="true" />
  </button>;
}
