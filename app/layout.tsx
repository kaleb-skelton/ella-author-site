import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AOSInit from "./components/AOSInit";
import { Analytics } from '@vercel/analytics/react'

export const metadata = {
  title: "Ella Novell",
  description:
    "Enter the world of Aurorium, a realm of prophecy, gods, hidden magic, and buried truths.",

  openGraph: {
    title: "Ella Novell",
    description:
      "Enter the world of Aurorium, a realm of prophecy, gods, hidden magic, and buried truths.",
    images: ["/images/hero.jpg"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ella Novell",
    description:
      "Enter the world of Aurorium, a realm of prophecy, gods, hidden magic, and buried truths.",
    images: ["/images/hero.jpg"],
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><AOSInit />{children}<Analytics /></body>
    </html>
  );
}
