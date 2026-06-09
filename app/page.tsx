
"use client";

import { useEffect, useState } from "react";

import NewsletterForm from "./components/NewsletterForm";

import NewsletterModal from "./components/NewsletterModal";

export default function Home() {

const releaseDate = new Date("2026-12-01T00:00:00");

const [timeLeft, setTimeLeft] = useState({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const [newsletterUnlocked, setNewsletterUnlocked] = useState(false);
const [showNewsletterModal, setShowNewsletterModal] = useState(false);

useEffect(() => {
  const unlocked = localStorage.getItem("newsletterUnlocked") === "true";
  setNewsletterUnlocked(unlocked);
}, []);

function openNewsletterModal() {
  setShowNewsletterModal(true);
}

function closeNewsletterModal() {
  setShowNewsletterModal(false);
}

function handleNewsletterSuccess() {
  localStorage.setItem("newsletterUnlocked", "true");
  setNewsletterUnlocked(true);
  setShowNewsletterModal(false);
}

function handleQuizClick(e: React.MouseEvent<HTMLAnchorElement>) {
  if (!newsletterUnlocked) {
    e.preventDefault();
    setShowNewsletterModal(true);
  }
}

useEffect(() => {
  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = releaseDate.getTime() - now;

    setTimeLeft({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      ),
      minutes: Math.floor(
        (distance % (1000 * 60 * 60)) /
          (1000 * 60)
      ),
      seconds: Math.floor(
        (distance % (1000 * 60)) /
          1000
      ),
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);


  return (
    <main className="min-h-screen bg-[#3b071d]/80 backdrop-blur-md border border-white/10 text-[#3b071d]">
      <nav className="fixed top-4 right-4 left-4 z-50">
  {/* Mobile navbar */}
  <div className="flex items-center justify-between rounded-full border border-white/20 bg-[#3b071d]/85 px-5 py-3 text-white shadow-xl backdrop-blur-md md:hidden">
    <a href="/" className="text-lg font-semibold tracking-[0.18em] text-[#d6b26e]">
      ELLA NOVELL
    </a>

    <div className="flex items-center gap-4 text-xs uppercase tracking-[0.14em]">
      <a href="/" className="hover:text-[#d6b26e]">
        Home
      </a>
      <a href="/world" className="hover:text-[#d6b26e]">
        World
      </a>
      <a href="/quiz" className="hover:text-[#d6b26e]">
        Quiz
      </a>
    </div>
  </div>

  {/* Desktop navbar */}
  <div className="group fixed top-6 right-6 hidden md:block">
    <div className="flex flex-row-reverse items-center overflow-hidden rounded-full border border-white/20 bg-[#3b071d]/75 text-white shadow-xl backdrop-blur-md transition-all duration-500 ease-out w-14 group-hover:w-[1080px]">
      <a
        href="/"
        className="flex h-14 w-14 shrink-0 items-center justify-center text-4xl text-[#d6b26e]"
        style={{
          textShadow: "0 0 10px rgba(214,178,110,.4)",
        }}
      >
        ❂
      </a>

      <div className="flex w-[1020px] items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <a
          href="/"
          className="ml-8 w-[320px] shrink-0 whitespace-nowrap text-2xl font-semibold tracking-[0.25em]"
        >
          ELLA NOVELL
        </a>

        <div className="flex flex-1 items-center justify-end gap-8 pr-10 text-sm uppercase tracking-[0.18em] whitespace-nowrap">
          <a href="/" className="hover:text-[#d6b26e]">
            Home
          </a>

          <a href="/#book" className="hover:text-[#d6b26e]">
            The Book
          </a>

          <a href="/#author" className="hover:text-[#d6b26e]">
            About Ella
          </a>

          <a href="/#quiz" className="hover:text-[#d6b26e]">
            Quiz
          </a>

          <a href="/world" className="hover:text-[#d6b26e]">
            World
          </a>

          <a href="/#newsletter" className="hover:text-[#d6b26e]">
            Newsletter
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
 
      <section
      data-aos="fade-up"
        className="min-h-screen flex items-center justify-center px-6 text-center relative overflow-hidden "
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="max-w-4xl relative z-10 text-white">
<p
  className="mb-4 text-base tracking-[0.35em] uppercase text-white"
  style={{
    textShadow: "0 2px 8px rgba(0,0,0,0.8)",
  }}
>            A New Fantasy Novel
          </p>

 <h1
  className="text-5xl md:text-8xl font-black leading-tight tracking-[0.08em]"
  style={{
    fontFamily: "Cinzel, serif",
    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
  }}
>
            Where Dusk and Dawn Bleed
          </h1>

          <p className="mt-6 text-xl md:text-2xl italic">
            Coming December 2026
          </p>
<p
  className="mt-8 text-lg md:text-xl italic leading-relaxed max-w-2xl mx-auto"
  style={{
    textShadow: "0 2px 8px rgba(0,0,0,0.8)",
  }}
>
  The Mother remembers. The Sun and Moon stir.
  <br />
  The Prophecy is a Lie.
</p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            {newsletterUnlocked ? (
  <a
    href="/quiz"
    className="rounded-full bg-[#6e0f33] px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-[#5a0c2a]"
  >
    Take the Quiz
  </a>
) : (
  <button
    onClick={openNewsletterModal}
    className="rounded-full bg-[#6e0f33] px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-[#5a0c2a]"
  >
    Join the Newsletter
  </button>
)}

            <a
              href="#book"
              className="rounded-full border border-white px-8 py-4 font-semibold"
            >
              Explore the Book
            </a>
          </div>
        </div>
      </section>
<section className="bg-[#4b001f] py-20 pb-32">
  <div className="text-center mb-12">
  <p className="text-sm uppercase tracking-[0.35em] text-[#d6b26e]">
    Release Countdown
  </p>

  <h2
    className="mt-4 text-4xl md:text-6xl font-bold text-white"
    style={{ fontFamily: "Cinzel, serif" }}
  >
    Where Dusk and Dawn Bleed
  </h2>

  <div className="mt-6 flex items-center justify-center gap-4">
    <div className="h-px w-20 bg-[#d6b26e]" />
    <span className="text-[#d6b26e]">✦</span>
    <div className="h-px w-20 bg-[#d6b26e]" />
  </div>

  <p className="mt-6 text-lg text-[#f7dfe5] italic">
    The Mother remembers. The Sun and Moon stir.
  </p>

  <p className="mt-2 text-[#d6b26e]">
    Releasing December 1, 2026
  </p>
</div>
<div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">




  <div className="rounded-3xl bg-white p-6 shadow-xl">
    <div className="text-5xl font-bold text-[#6e0f33]">
      {timeLeft.days}
    </div>
    <p className="mt-2 text-[#8b6f3d] uppercase">
      Days
    </p>
  </div>

  <div className="rounded-3xl bg-white p-6 shadow-xl">
    <div className="text-5xl font-bold text-[#6e0f33]">
      {timeLeft.hours}
    </div>
    <p className="mt-2 text-[#8b6f3d] uppercase">
      Hours
    </p>
  </div>

  <div className="rounded-3xl bg-white p-6 shadow-xl">
    <div className="text-5xl font-bold text-[#6e0f33]">
      {timeLeft.minutes}
    </div>
    <p className="mt-2 text-[#8b6f3d] uppercase">
      Minutes
    </p>
  </div>

  <div className="rounded-3xl bg-white p-6 shadow-xl">
    <div className="text-5xl font-bold text-[#6e0f33]">
      {timeLeft.seconds}
    </div>
    <p className="mt-2 text-[#8b6f3d] uppercase">
      Seconds
    </p>
  </div>

</div>
</section>
<div className="flex items-center justify-center py-10 bg-[#fff8f3]">
  <div className="h-px w-24 bg-[#d6b26e]" />
  <span className="mx-4 text-[#d6b26e]">✦</span>
  <div className="h-px w-24 bg-[#d6b26e]" />
</div>
     <section data-aos="fade-up" id="book" className="px-6 py-24 bg-[#fff8f3]">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="relative overflow-hidden rounded-3xl shadow-2xl">
  <img
src="/images/book-cover.jpg?v=2"    alt="Where Dusk and Dawn Bleed"
    className="w-full blur-xl scale-110"
  />

  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
    <div className="rounded-full border border-white/30 bg-white/10 px-6 py-3 text-white backdrop-blur-sm">
      Cover Reveal Coming Soon
    </div>
  </div>
</div>

<div>
  <p className="text-sm tracking-[0.3em] uppercase text-[#8b6f3d]">
    About the Book
  </p>

  <h2 className="mt-4 text-4xl md:text-5xl font-bold">
    A story of shadows, secrets, survival, and sacrifice.
  </h2>

  <div className="mt-6 flex flex-wrap gap-3">
    <span className="rounded-full bg-[#f7e8ea] px-4 py-2 text-sm font-medium text-[#6e0f33]">
      Sisterhood
    </span>
    <span className="rounded-full bg-[#f7e8ea] px-4 py-2 text-sm font-medium text-[#6e0f33]">
      Ancient Magic
    </span>
    <span className="rounded-full bg-[#f7e8ea] px-4 py-2 text-sm font-medium text-[#6e0f33]">
      Gods & Prophecy
    </span>
    <span className="rounded-full bg-[#f7e8ea] px-4 py-2 text-sm font-medium text-[#6e0f33]">
      Slow Burn Romance
    </span>
    <span className="rounded-full bg-[#f7e8ea] px-4 py-2 text-sm font-medium text-[#6e0f33]">
      Political Intrigue
    </span>
  </div>

  <p className="mt-8 text-lg leading-8 text-[#5b2034]">
    For a generation, the kingdom of Aurorium has celebrated a prophecy
    that promises salvation. When Princesses Effie and Enna Odile are
    chosen to awaken the sacred ley lines, they must travel to where
    magic converges beneath the continent and be judged by power older
    than written history.
  </p>

  <p className="mt-6 text-lg leading-8 text-[#5b2034]">
    As forgotten magic awakens and buried truths claw their way to the
    surface, the sisters discover that the kingdom's history has been
    carefully rewritten, and those they trust most may be behind it all.
  </p>

  <p className="mt-6 text-lg leading-8 text-[#5b2034]">
    With war looming on the horizon and gods stirring beyond the veil,
    Effie and Enna must decide whether to save the kingdom they love—or
    destroy the lie it was built upon.
  </p>
</div>


  </div>
</section>
<div className="flex items-center justify-center py-10 bg-[#fff8f3]">
  <div className="h-px w-24 bg-[#d6b26e]" />
  <span className="mx-4 text-[#d6b26e]">✦</span>
  <div className="h-px w-24 bg-[#d6b26e]" />
</div>
<section data-aos="fade-up"id="author" className="px-6 py-24 bg-[#f7e8ea]">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
    <div className="rounded-3xl bg-[#6e0f33] p-8 text-white shadow-2xl">
      <p className="text-sm tracking-[0.3em] uppercase text-[#d6b26e]">
        Meet the Author
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-bold">
        Ella Novell
      </h2>

      <p className="mt-6 text-lg leading-8 text-[#f7dfe5]">
        Ella Novell is a fantasy author, traveler, and mother with a lifelong love of storytelling. Her passion for reading was nurtured by her parents from an early age, while her uncle, Philip, encouraged her to pursue writing and bring her own worlds to life.

A devoted fan of epic and high fantasy, Ella draws inspiration from sweeping adventures, complex characters, and richly imagined worlds. Sarah J. Maas’s Throne of Glass remains one of her favorite series and a major influence on her love of fantasy storytelling.

When she isn’t writing, Ella can usually be found exploring a new destination, planning her family’s next adventure, or spending time with her husband and son. Her stories are shaped by a love of mythology, travel, found family, and the enduring belief that hope can survive even the darkest of times.

      </p>

      <p className="mt-6 text-lg leading-8 text-[#f7dfe5]">
        <em>Where Dusk and Dawn Bleed</em>, her debut novel, is coming December 2026.
      </p>
    </div>

    <div className="h-full min-h-[650px] overflow-hidden rounded-3xl shadow-2xl">
  <img
    src="/images/ella.jpg"
    alt="Ella Novell"
className="h-full w-full object-cover object-[75%_center]"  />
</div>
  </div>
</section>
<div className="flex items-center justify-center py-10 bg-[#f7e8ea]">
  <div className="h-px w-24 bg-[#d6b26e]" />
  <span className="mx-4 text-[#d6b26e]">✦</span>
  <div className="h-px w-24 bg-[#d6b26e]" />
</div>
<section data-aos="fade-up"id="quiz" className="px-6 py-24 bg-[#fff8f3]">
  <div className="max-w-6xl mx-auto text-center">
    <p className="text-sm tracking-[0.3em] uppercase text-[#8b6f3d]">
      Character Quiz
    </p>

    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-[#3b071d]">
      Which Dawn & Dusk character are you?
    </h2>

    <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-[#5b2034]">
      Are you sun-blessed, shadow-touched, fiercely loyal, dangerously charming,
      or carrying secrets of your own?
    </p>

    <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
  {[
    {
      name: "Effie",
      tidbit: "Sun-blessed, hopeful, and far braver than she realizes.",
    },
    {
      name: "Enna",
      tidbit: "Shadow-touched, observant, and impossible to control.",
    },
    {
      name: "Harper",
      tidbit: "Bold, sharp-tongued, and loyal to the people she loves.",
    },
    {
      name: "Hunter",
      tidbit: "Quiet, steady, and protective when it matters most.",
    },
    {
      name: "Tess",
      tidbit: "Gentle-hearted, empathetic, and stronger than she seems.",
    },
    {
      name: "Jupiter",
      tidbit: "Dependable, hardworking, and fiercely protective.",
    },
    {
      name: "Rhaymius",
      tidbit: "Charismatic, ambitious, and always several moves ahead.",
    },
    {
      name: "Wisteria",
      tidbit: "Resilient, clever, and impossible to cage.",
    },
    {
      name: "Martin",
      tidbit: "Witty, practical, and keeper of dangerous truths.",
    },
    {
      name: "Vaedin",
      tidbit: "Adaptable, secretive, and never fully predictable.",
    },
  ].map((character, index) => (
    <div
  key={character.name}
  data-aos="zoom-in-up"
  data-aos-delay={index * 75}
  className="group relative overflow-hidden rounded-3xl bg-[#f7e8ea] shadow-lg transition duration-300 hover:-translate-y-3  hover:shadow-2xl hover:shadow-[0_0_35px_rgba(214,178,110,0.35)]"
>
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={`/images/characters/${character.name.toLowerCase()}.jpg`}
          alt={character.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-4 text-center">
        <p className="text-lg font-bold text-[#6e0f33]">
          {character.name}
        </p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-[#3b071d]/85 p-6 text-center text-white opacity-0 transition duration-300 group-hover:opacity-100">
        <div>
          <p className="text-2xl font-bold">{character.name}</p>
          <p className="mt-4 text-base leading-6 text-[#f7dfe5]">
            {character.tidbit}
          </p>
        </div>
      </div>
    </div>
  ))}

   
  </div>

<a
  href="/quiz"
  onClick={handleQuizClick}
  className="mt-8 inline-flex items-center justify-center rounded-full bg-[#6e0f33] px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#5a0c2a]"
>
  {newsletterUnlocked ? "Take the Quiz" : "Join the Newsletter"}
</a>
</div>
</section>
<div className="flex items-center justify-center py-10 bg-[#6e0f33]">
  <div className="h-px w-24 bg-[#d6b26e]" />
  <span className="mx-4 text-[#d6b26e]">✦</span>
  <div className="h-px w-24 bg-[#d6b26e]" />
</div>
      <section id="newsletter" className="px-6 py-24 bg-[#fff8f3]">
  {newsletterUnlocked ? (
    <div className="mx-auto max-w-2xl rounded-3xl border border-[#d6b26e]/30 bg-[#fff8f3] p-8 text-center shadow-2xl">
      <h2
        className="text-4xl font-bold text-[#3b071d]"
        style={{ fontFamily: "Cinzel, serif" }}
      >
        You're In.
      </h2>

      <p className="mt-4 text-lg leading-8 text-[#5b2034]">
        Thank you for joining Ella Novell's newsletter. Your character quiz is now unlocked as well as hidden content and exclusive updates leading up to the release of <em>Where Dusk and Dawn Bleed</em> in December 2026. Stay tuned for more news, sneak peeks, and behind-the-scenes insights into the world of Aurorium!
      </p>

    </div>
  ) : (
    <NewsletterForm onSuccess={handleNewsletterSuccess} />
  )}
</section>

{showNewsletterModal && (
  <NewsletterModal
    onClose={closeNewsletterModal}
    onSuccess={handleNewsletterSuccess}
  />
)}

    </main>
  );
}