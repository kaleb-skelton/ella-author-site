"use client";

import { useEffect, useState } from "react";

type Location = {
  name: string;
  text: string;
  top?: string;
  left?: string;
};

export default function WorldPage() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const [newsletterUnlocked, setNewsletterUnlocked] = useState(false);

  useEffect(() => {
    const unlocked = localStorage.getItem("newsletterUnlocked");

    if (unlocked === "true") {
      setNewsletterUnlocked(true);
    }
  }, []);

  const mapPins: Location[] = [
    {
      name: "The Capital City",
      text: "The glittering heart of Aurorium, the Capital City is home to the gilded Golden Palace, where the Odiles hold court. A symbol of prosperity and progress, the city shines with wealth and grandeur. Yet beneath its towering spires and intricate political web, dangerous ambitions threaten to unravel the kingdom from within.",
      top: "32%",
      left: "63%",
    },
    {
      name: "Arvandor",
      text: "Nestled beneath the Ice Tips mountains, Arvandor—often called the Kingdom of Thieves—is home to those exiled by the crown for criminal acts, political dissent, or simply being in the wrong place at the wrong time. An enchanted boundary encircles the city, permanently trapping its inhabitants within the lawless land and ensuring that few who enter ever leave.",
      top: "31%",
      left: "16.5%",
    },
    {
      name: "The Sun Wielder’s Keep",
      text: "Perched on the edge of the Cutlass River, the Sun Wielder’s Keep serves as both fortress and sanctuary to the religious scholars who have gathered there. Built atop the very point where the ley lines converge, the Keep stands as one of the most sacred sites in Aurorium, devoted to the study of magic, history, and the gods themselves.",
      top: "55%",
      left: "61%",
    },
    {
      name: "Eldridoria",
      text: "A territory of the Southern States ruled by House Caeldrin, Eldridoria serves as the textile capital of Aurorium. For generations, it has remained locked in conflict with its neighboring territory, Valtara.",
      top: "70%",
      left: "20%",
    },
    {
      name: "Valtara",
      text: "A territory of the Southern States ruled by House Tain. Long plagued by war, Valtara has spent centuries in conflict with neighboring Eldridoria, leaving much of the region scarred by violence and loss.",
      top: "67%",
      left: "40%",
    },
    {
      name: "Tide Cross",
      text: "A southeastern territory ruled by House Laroue. As the center of Aurorium’s naval power, Tide Cross is home to the majority of the kingdom’s fleet and serves as a vital hub of trade and commerce.",
      top: "68%",
      left: "82%",
    },
    {
      name: "The Griege Islands",
      text: "A scattered chain of islands belonging to the Southern States, with the city of Virdis serving as their capital. The islands are not governed by any noble house and maintain a complicated, often strained relationship with the crown.",
      top: "89%",
      left: "45%",
    },
    {
      name: "The Ice Tips",
      text: "The northernmost mountain range in Aurorium, its peaks are capped with translucent ice that glimmers beneath the sun. At the base of the mountains lies a small winterbound settlement known as the Outpost, ruled by House Avenelle—the ancestral line of the late Queen Lilian.",
      top: "19%",
      left: "49%",
    },
    {
      name: "The Cutlass River",
      text: "A vast river that flows inland from the Southern Sea, cutting through the heart of the continent. Near the Ice Tips, its waters freeze beneath the region’s harsh climate. Many believe the river continues beneath the mountains and into lands beyond Aurorium, though no expedition has ever confirmed the claim.",
      top: "50%",
      left: "54%",
    },
    {
      name: "The Southern Sea",
      text: "The great sea that borders Aurorium’s southern coast and surrounds the Griege Islands. For centuries, it has served as the continent’s primary route for trade, travel, and exploration.",
      top: "77%",
      left: "55%",
    },
    {
      name: "Mirewood",
      text: "A vast central-western territory of rolling plains, marshland, and barren wilderness. Sparsely populated and largely untamed, Mirewood is home to the majority of Aurorium’s wildlife and remains one of the continent’s last true frontiers.",
      top: "51%",
      left: "14.5%",
    },
  ];

  const divineCreators = [
   {
      name: "The Sun",
      domain: "Warmth • Flame • Seasons",
      colors: "from-[#fff8d6] to-[#ffe9a8]",
      text: "The Sun is one of the three divine creators and the goddess of warmth, flame, and the changing seasons. She is credited with bringing light to the world after its creation, teaching the land to bloom, the harvest to grow, and the cold earth to awaken each spring. Her fire is both gentle and fierce—capable of nurturing life or reducing kingdoms to ash. Though she is celebrated for the warmth she provides, ancient tales tell of a love so profound that it forever altered the heavens. Her followers honor her as a symbol of passion, vitality, and renewal, believing that every sunrise is a promise that even the darkest night will end.",
    },
    {
      name: "The Mother",
      domain: "Life • Healing • Remembrance",
      colors: "from-[#e8f5e7] to-[#cce8c8]",
      text: "The Mother is one of the three divine creators and the goddess of life, healing, and remembrance. It is said that every living thing carries a thread of her magic, woven into the world at the moment of its creation. She governs growth, renewal, and the sacred act of mending what has been broken, whether flesh, vitality, or heart. Ancient legends claim that nothing entrusted to the Mother is ever truly lost, for she remembers every life lived, every soul departed, and every truth buried by time. Her followers believe that healing begins not with forgetting, but with remembering.",
    },
    {
      name: "The Moon",
      domain: "Darkness • Shadow • Cold • Death",
      colors: "from-[#eef0ff] to-[#d9defc]",
      text: "The Moon is one of the three divine creators and the god of darkness, shadow, cold, and death. He watches over the quiet hours, the winter months, and the souls that pass beyond the veil. Though often feared by mortals, he is not a god of malice, but of balance, ensuring that every ending makes way for a new beginning. It is said that the stars are lanterns he hung in the sky so that no soul would ever walk into the darkness alone. Yet despite his solemn duties, the oldest stories remember him not for death, but for love, for the Moon has spent eternity chasing the Sun across the heavens, forever reaching for what he can never hold.",
    },
  ];

         return (
<main className="min-h-screen bg-[#fff8f3] text-[#3b071d]">    
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
      <section data-aos="fade-up" className="px-6 py-24 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#8b6f3d]">
          Explore the Realm
        </p>

        <h1
          className="mt-4 text-5xl font-black tracking-[0.08em] md:text-7xl"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          The World of Aurorium
        </h1>

        <p className="mx-auto mt-6 max-w-4xl text-xl leading-8 text-[#5b2034]">
          Aurorium is a continent shaped by gods, prophecy, magic, and the
          ancient lineage of the Odiles.
        </p>

        <p className="mx-auto mt-4 max-w-4xl text-lg leading-8 text-[#5b2034]">
          From the Ice Tips mountain range in the north to the Griege Islands
          scattered across the Southern Sea, Aurorium stands on the brink of
          transformation. Hidden truths are rising to the surface, and powers
          older than recorded history are beginning to stir.
        </p>
      </section>

      <section data-aos="zoom-in" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl border border-[#d6b26e]/40 bg-[#f7e8ea] p-4 shadow-2xl">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/images/hero.jpg"
              alt="Map of Aurorium"
              className="w-full object-cover"
            />

            {mapPins.map((pin) => (
              <button
                key={pin.name}
                onClick={() => setSelectedLocation(pin)}
                className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d6b26e] shadow-[0_0_20px_rgba(214,178,110,0.9)] transition hover:scale-125"
                style={{ top: pin.top, left: pin.left }}
                aria-label={pin.name}
              >
                <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d6b26e] animate-ping" />
              </button>
            ))}
          </div>
        </div>

        {selectedLocation && (
  <div className="fixed inset-0 z-[9998] overflow-visible flex items-center justify-center bg-black/75 p-4">
    <div className="relative max-h-[80vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-[#fff8f3] p-6 text-center shadow-2xl">
      <p className="text-xs uppercase tracking-[0.3em] text-[#8b6f3d]">
        Explore the Realm
      </p>

      <h2
        className="mt-4 text-3xl font-bold text-[#3b071d] md:text-4xl"
        style={{ fontFamily: "Cinzel, serif" }}
      >
        {selectedLocation.name}
      </h2>

      <p className="mt-6 text-base leading-8 text-[#5b2034] md:text-lg">
        {selectedLocation.text}
      </p>

     <button
  onClick={() => setSelectedLocation(null)}
  className="absolute top-4 right-4 z-[9999] flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white"
>
  x
</button>
    </div>
  </div>
)}
      </section>

      <section data-aos="fade-up" className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={
                newsletterUnlocked
                  ? "/images/mother-tapestry-secret.jpg"
                  : "/images/mother-tapestry.jpg"
              }
              alt="The Mother tapestry"
              className="w-full object-cover"
            />
          </div>

          {!newsletterUnlocked && (
            <div className="mt-10 text-center">
              <p
                className="text-2xl italic text-[#5b2034]"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                Some truths are reserved for those who seek them.
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-lg text-[#5b2034]">
                Join the newsletter to unlock hidden lore, exclusive artwork,
                character reveals, and secrets buried deep within Aurorium.
              </p>

              <button
                onClick={() => {
                  // TODO: Replace this with Brevo success callback later.
                  localStorage.setItem("newsletterUnlocked", "true");
                  setNewsletterUnlocked(true);
                }}
                className="mt-8 rounded-full bg-[#6e0f33] px-10 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#5a0c2a]"
              >
                Join the Newsletter
              </button>
            </div>
          )}

          {newsletterUnlocked && (
            <div className="mt-8 text-center">
              <p
                className="text-lg italic text-[#8b6f3d]"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                The Mother remembers.
              </p>
            </div>
          )}
        </div>
      </section>

      

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#8b6f3d]">
            Divine Creators
          </p>

          <h2
            className="mt-4 text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            The Mother, The Sun, and The Moon
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-10 md:grid-cols-3">
          {divineCreators.map((deity, index) => (
            <div
              key={deity.name}
              data-aos="fade-up"
              data-aos-delay={index * 125}
              className={`rounded-3xl bg-gradient-to-br ${deity.colors} p-10 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl`}
            >
              <p className="text-sm uppercase tracking-[0.25em] text-[#8b6f3d]">
                {deity.domain}
              </p>

              <h3
                className="mt-4 text-4xl font-bold"
                style={{ fontFamily: "Cinzel, serif" }}
              >
                {deity.name}
              </h3>

              <p className="mt-6 text-lg leading-8 text-[#5b2034]">
                {deity.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#6e0f33] px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#d6b26e]">
            Magic & Prophecy
          </p>

          <h2
            className="mt-4 text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "Cinzel, serif" }}
          >
            The Ley Lines Are Waking
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#f7dfe5]">
            Beneath Aurorium, sacred ley lines pulse with power older than
            written history. They converge beneath the Sun Wielder’s Keep, where
            magic, prophecy, and the gods themselves become impossible to
            separate.
          </p>

          <p className="mt-6 text-lg leading-8 text-[#f7dfe5]">
            For generations, the kingdom believed the prophecy promised
            salvation. But some truths were buried for a reason.
          </p>

          <a
            href="/"
            className="mt-10 inline-block rounded-full bg-[#d6b26e] px-8 py-4 font-semibold text-[#3b071d]"
          >
            Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}