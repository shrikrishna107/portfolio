"use client";

import { useEffect, useCallback } from "react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function KonamiCode() {
  const triggerEasterEgg = useCallback(() => {
    if (typeof document === "undefined") return;
    if (document.getElementById("konami-overlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "konami-overlay";
    overlay.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 99999;
      background: rgba(10, 10, 10, 0.95);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    `;

    const terminal = document.createElement("div");
    terminal.style.cssText = `
      background: #111111;
      border: 1px solid #2A2A2A;
      border-radius: 16px;
      padding: 2rem;
      max-width: 520px;
      width: 90%;
      font-family: 'Courier New', monospace;
      color: #D4A843;
      font-size: 14px;
      line-height: 1.8;
      box-shadow: 0 0 60px rgba(212, 168, 67, 0.1);
    `;

    terminal.innerHTML = `
      <div style="color: #6B6560; margin-bottom: 0.5rem;">// You found it. The Konami Code.</div>
      <div style="color: #F5F0E8; margin-bottom: 1rem;">
        <span style="color: #D4A843;">&gt;</span> Welcome to the secret terminal.
      </div>
      <div style="margin-bottom: 0.5rem;"><span style="color: #A8A29E;">name:</span> Shri Krishna Pandey</div>
      <div style="margin-bottom: 0.5rem;"><span style="color: #A8A29E;">role:</span> Full-Stack Developer &amp; AI Systems Builder</div>
      <div style="margin-bottom: 0.5rem;"><span style="color: #A8A29E;">location:</span> Gorakhpur, UP, India</div>
      <div style="margin-bottom: 0.5rem;"><span style="color: #A8A29E;">education:</span> MCA @ JSS Noida | BCA @ SRM (8.41 CGPA)</div>
      <div style="margin-bottom: 0.5rem;"><span style="color: #A8A29E;">hackathon:</span> SRM Builds 5.0 Winner 🏆</div>
      <div style="margin-bottom: 1.5rem;"><span style="color: #A8A29E;">status:</span> <span style="color: #4ade80;">ready to engineer impactful software ✓</span></div>
      <div style="color: #6B6560; font-size: 12px;">Click anywhere to close this terminal.</div>
    `;

    overlay.appendChild(terminal);
    document.body.appendChild(overlay);

    overlay.addEventListener("click", () => {
      overlay.remove();
    });
  }, []);

  useEffect(() => {
    let index = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === KONAMI_CODE[index]) {
        index++;
        if (index === KONAMI_CODE.length) {
          index = 0;
          triggerEasterEgg();
        }
      } else {
        index = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [triggerEasterEgg]);

  useEffect(() => {
    // Console easter egg
    console.log(
      "%c👋 Hey there, curious developer!",
      "font-size: 18px; font-weight: bold; color: #D4A843;"
    );
    console.log(
      "%cWelcome to Shri Krishna Pandey's portfolio. Try entering the Konami Code on the page (↑ ↑ ↓ ↓ ← → ← → B A) for a surprise.",
      "font-size: 13px; color: #A8A29E;"
    );
  }, []);

  return null;
}
