import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import StudioPage from "./pages/StudioPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [theme, setTheme] = useState("dark");
  const cursorRef = useRef(null);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // --- Custom cursor engine (shared across all pages) ---
  useEffect(() => {
    const cursorEl = cursorRef.current;
    if (!cursorEl) return;

    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;
    const isCoarse = window.matchMedia?.("(pointer: coarse)")?.matches;
    const noHover = window.matchMedia?.("(hover: none)")?.matches;
    const fine = window.matchMedia?.("(pointer: fine)")?.matches;

    const customCursorAllowed =
      fine && !isCoarse && !noHover && !prefersReduced;

    if (!customCursorAllowed) {
      cursorEl.style.display = "none";
      document.body.style.cursor = "";
      document.documentElement.style.cursor = "";
      return;
    }

    cursorEl.style.display = "block";
    document.body.style.cursor = "none";
    document.documentElement.style.cursor = "none";

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let rafId = 0;

    let lastHover = false;
    let magneticEl = null;

    const setCursorHover = (shouldHover) => {
      if (shouldHover === lastHover) return;
      lastHover = shouldHover;
      cursorEl.classList.toggle("cursor-hover", shouldHover);
      cursorEl.style.transform = shouldHover ? "scale(1.02)" : "";
    };

    const setMagneticTransform = (magEl, clientX, clientY) => {
      const rect = magEl.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      const dx = (clientX - cx) / rect.width;
      const dy = (clientY - cy) / rect.height;
      const clampedX = Math.max(-1, Math.min(1, dx));
      const clampedY = Math.max(-1, Math.min(1, dy));

      magEl.style.transform = `translate3d(${clampedX * 10}px, ${clampedY * 8}px, 0) scale(1.03)`;
    };

    const onPointerMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      const el = document.elementFromPoint(targetX, targetY);
      const overForm =
        Boolean(el?.closest?.("input, textarea, select, button")) ||
        Boolean(el?.closest?.('[contenteditable="true"]'));

      cursorEl.style.opacity = overForm ? "0" : "1";

      const hovering =
        !overForm &&
        Boolean(el?.closest?.(".hover-trigger, .magnetic-btn, a, button"));
      setCursorHover(hovering);

      const nextMag = el?.closest?.(".magnetic-btn");
      if (nextMag) {
        if (magneticEl !== nextMag) {
          if (magneticEl) magneticEl.style.transform = "";
          magneticEl = nextMag;
        }
        setMagneticTransform(magneticEl, targetX, targetY);
      } else if (magneticEl) {
        magneticEl.style.transform = "";
        magneticEl = null;
      }
    };

    const tick = () => {
      x += (targetX - x) * 0.22;
      y += (targetY - y) * 0.22;
      cursorEl.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      rafId = window.requestAnimationFrame(tick);
    };

    const hideCursor = () => {
      cursorEl.style.opacity = "0";
    };
    const showCursor = () => {
      cursorEl.style.opacity = "1";
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);
    window.addEventListener("blur", hideCursor);
    window.addEventListener("focus", showCursor);
    rafId = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", showCursor);
      window.removeEventListener("blur", hideCursor);
      window.removeEventListener("focus", showCursor);
      window.cancelAnimationFrame(rafId);
      cursorEl.classList.remove("cursor-hover");
      cursorEl.style.opacity = "1";
      cursorEl.style.display = "none";
      document.body.style.cursor = "";
      document.documentElement.style.cursor = "";
      if (magneticEl) magneticEl.style.transform = "";
    };
  }, []);

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @import url('https://api.fontshare.com/v2/css?f[]=clash-display@700,600,500&f[]=satoshi@400,500,700&display=swap');

        :root {
          --bg: #050505;
          --bg-alt: #0c0c0c;
          --fg: #ffffff;
          --fg-alt: rgba(255, 255, 255, 0.56);

          --accent: #ff4d00;
          --accent-glow: rgba(255, 77, 0, 0.3);
          --accent-bg: rgba(255, 77, 0, 0.14);
          --accent-border: rgba(255, 77, 0, 0.38);

          --border: rgba(255, 255, 255, 0.08);
          --stroke: rgba(255, 255, 255, 0.22);

          --nav-bg: rgba(5, 5, 5, 0.6);
          --input-bg: rgba(255, 255, 255, 0.06);
          --social-bg: rgba(255, 255, 255, 0.06);
          --text-h: rgba(255, 255, 255, 0.92);

          --shadow: 0 18px 60px rgba(0, 0, 0, 0.45);
          --shadow-soft: 0 10px 28px rgba(0, 0, 0, 0.28);
        }
        [data-theme="light"] {
          --bg: #f7f7f5;
          --bg-alt: #ffffff;
          --fg: #0b0b0c;
          --fg-alt: rgba(11, 11, 12, 0.62);

          --accent: #ff4d00;
          --accent-glow: rgba(255, 77, 0, 0.16);
          --accent-bg: rgba(255, 77, 0, 0.12);
          --accent-border: rgba(255, 77, 0, 0.26);

          --border: rgba(11, 11, 12, 0.18);
          --stroke: rgba(11, 11, 12, 0.38);

          --nav-bg: rgba(247, 247, 245, 0.82);
          --input-bg: rgba(255, 255, 255, 0.78);
          --social-bg: rgba(11, 11, 12, 0.045);
          --text-h: rgba(11, 11, 12, 0.92);

          --shadow: 0 18px 60px rgba(10, 10, 14, 0.14);
          --shadow-soft: 0 10px 26px rgba(10, 10, 14, 0.12);
        }
        
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: var(--bg); color: var(--fg); font-family: 'Satoshi', sans-serif; overflow-x: hidden; transition: background 0.4s ease, color 0.4s ease; }
        html { cursor: auto; }
        @media (pointer: fine) {
          body, html, * { cursor: none !important; }
          input, textarea, select, button, a, [role="button"] { cursor: auto !important; }
        }
        @media (pointer: coarse), (hover: none), (prefers-reduced-motion: reduce) {
          body, html, * { cursor: auto !important; }
          #cursor { display: none !important; }
        }
        h1, h2, h3, h4, h5, h6, .font-heading { font-family: 'Clash Display', sans-serif; text-transform: uppercase; }
        ::-webkit-scrollbar { display: none; }
        ::selection { background: var(--accent); color: #fff; }

        .process-sticky-desktop {
  display: block;
}

@media (max-width: 768px) {
  .process-sticky-desktop {
    display: none !important;
  }
}
        
        #cursor { position: fixed; top: 0; left: 0; width: 20px; height: 20px; border: 2px solid var(--accent); border-radius: 50%; pointer-events: none; z-index: 9999; background: rgba(255,77,0,0.16); mix-blend-mode: normal; transform: translate(-50%, -50%); opacity: 1; will-change: transform, width, height; transition: width 220ms ease, height 220ms ease, background-color 220ms ease, border-color 220ms ease, opacity 140ms ease; }
        #cursor.cursor-hover { width: 46px; height: 46px; background: rgba(255,77,0,0.55); border-color: rgba(255,77,0,0.85); }
        .noise-overlay { position: fixed; inset: 0; pointer-events: none; z-index: 9998; background: url('data:image/svg+xml;utf8,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E'); opacity: 0.04; mix-blend-mode: overlay; }
        
        .glass-panel { background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border); border-radius: 1.2rem; backdrop-filter: blur(12px); WebkitBackdropFilter: blur(12px); box-shadow: var(--shadow-soft); }
        [data-theme="light"] .glass-panel { background: rgba(0, 0, 0, 0.035); border: 1px solid var(--border); box-shadow: var(--shadow-soft); }

        /* Card variant (many pages use: glass-panel glass-card) */
        .glass-card {
          background: rgba(255, 255, 255, 0.08) !important;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.12) !important;
          transform: translateY(-8px);
          box-shadow: 0 20px 60px rgba(255, 77, 0, 0.15);
          border: 1px solid rgba(255, 77, 0, 0.3) !important;
        }
        [data-theme="light"] .glass-card {
          background: rgba(0, 0, 0, 0.05) !important;
          border: 1px solid rgba(0, 0, 0, 0.08) !important;
          box-shadow: var(--shadow-soft);
        }
        [data-theme="light"] .glass-card:hover {
          background: rgba(0, 0, 0, 0.08) !important;
          border: 1px solid rgba(255, 77, 0, 0.22) !important;
          box-shadow: 0 20px 60px rgba(10, 10, 14, 0.12);
        }

        /* Light-mode contrast fixes for hardcoded dark UI in Contact newsletter */
        [data-theme="light"] .newsletter-box p {
          color: rgba(11, 11, 12, 0.75) !important;
        }
        [data-theme="light"] .newsletter-form input {
          background: rgba(0, 0, 0, 0.05) !important;
          color: var(--fg) !important;
          border: 1px solid var(--border) !important;
        }
        [data-theme="light"] .newsletter-form input::placeholder {
          color: rgba(11, 11, 12, 0.45) !important;
        }

        /* Light-mode contrast for menu close button */
        [data-theme="light"] [aria-label="Close Menu"] {
          border: 1px solid var(--border) !important;
          color: var(--fg) !important;
        }
        
        .text-stroke { -webkit-text-stroke: 1px var(--accent); }
        .img-wrap { position: relative; overflow: hidden; border-radius: 1.5rem; }
        .img-wrap img { transition: transform 0.5s ease; width: 100%; height: 100%; object-fit: cover; }
        .img-wrap:hover img { transform: scale(1.08); }
        
        .magnetic-btn { transition: all 0.3s ease; padding: 0.8rem 2rem; border-radius: 100px; font-weight: 600; border: none; }
        .magnetic-btn:hover { transform: none; }
        
        @media (pointer: fine) {
          .hover-trigger { cursor: none; }
          .magnetic-btn { cursor: none; }
        }
        input, textarea, select, button { cursor: auto; }

        /* Home card system (image + gradient overlay) */
        .home-card {
          border-radius: 1.5rem;
          overflow: hidden;
          position: relative;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.03);
          box-shadow: var(--shadow);
          transition: transform 360ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 360ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .home-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 28px 90px rgba(0,0,0,0.55);
        }
        [data-theme="light"] .home-card {
          background: rgba(0, 0, 0, 0.03);
          border-color: var(--border);
          box-shadow: var(--shadow);
        }
        [data-theme="light"] .home-card:hover {
          box-shadow: 0 28px 90px rgba(10, 10, 14, 0.16);
        }
        .home-card-media {
          position: relative;
          overflow: hidden;
        }
        .home-card-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .home-card:hover .home-card-media img {
          transform: scale(1.07);
        }
        .home-card-overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 1.6rem 1.6rem 1.4rem;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.62) 35%, rgba(0,0,0,0.9) 100%);
        }
        .home-card-kicker {
          display: inline-flex;
          align-items: center;
          padding: 0.45rem 0.85rem;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: rgba(255,77,0,0.15);
          color: var(--accent);
        }
        .home-card-title {
          margin-top: 0.9rem;
          font-size: 1.15rem;
          line-height: 1.2;
          font-family: 'Clash Display', sans-serif;
          text-transform: uppercase;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .home-card-meta {
          margin-top: 0.7rem;
          font-size: 0.9rem;
          color: var(--fg-alt);
        }

        /* Stable responsive grids for Home page */
        .home-grid-3 {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 980px) {
          .home-grid-3 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .home-grid-3 {
            grid-template-columns: 1fr;
          }
        }

        /* Equal-height card utilities (Home page) */
        .home-eq-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .home-faq-card { min-height: 220px; }
        .home-testimonial-card { min-height: 280px; }
        .home-industry-card {
          min-height: 96px;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 640px) {
          .home-faq-card { min-height: 180px; }
          .home-testimonial-card { min-height: 240px; }
          .home-industry-card { min-height: 86px; }
        }
        
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .spin-badge { animation: spin 20s linear infinite; }
      `,
        }}
      />
      <div className="noise-overlay" />
      <div ref={cursorRef} id="cursor" />

      <BrowserRouter>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/studio" element={<StudioPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
