"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NewsletterSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("newsletterUnlocked", "true");
    router.push("/quiz");
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#3b071d] px-6 text-center text-white">
      <div>
        <h1 className="text-4xl font-bold">The Mother remembers.</h1>
        <p className="mt-4 text-lg">Unlocking your quiz...</p>
      </div>
    </main>
  );
}