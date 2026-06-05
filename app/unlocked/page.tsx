"use client";

import { useEffect } from "react";

export default function UnlockedPage() {
  useEffect(() => {
    localStorage.setItem("newsletterUnlocked", "true");

    setTimeout(() => {
      window.location.href = "/";
    }, 1200);
  }, []);

  return (
    <main className="min-h-screen bg-[#fff8f3] px-6 py-24 text-center text-[#3b071d]">
      <div className="mx-auto max-w-2xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#8b6f3d]">
          Welcome to Aurorium
        </p>

        <h1
          className="mt-4 text-5xl font-bold"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          The Mother Remembers
        </h1>

        <p className="mt-6 text-lg text-[#5b2034]">
          Your hidden lore has been unlocked.
        </p>
      </div>
    </main>
  );
}