"use client";
import { useEffect, useState } from "react";
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => { setDark(document.documentElement.dataset.theme === "dark"); }, []);
  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try { window.localStorage.setItem("portfolio-theme", next ? "dark" : "light"); } catch {}
  }
  return <button className="theme-button" type="button" onClick={toggle} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"} title="Toggle theme"><span aria-hidden="true">{dark ? "☀" : "◐"}</span><span className="hide-small"> {dark ? "LIGHT" : "DARK"}</span></button>;
}
