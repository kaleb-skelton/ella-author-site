"use client";

import { useEffect, useState } from "react";
const [newsletterUnlocked, setNewsletterUnlocked] = useState(false);

useEffect(() => {
  const unlocked = localStorage.getItem("newsletterUnlocked");
  setNewsletterUnlocked(unlocked === "true");
}, []);

type Answer = {
  text: string;
  branch?: string;
  scores: string[];
};

type Question = {
  text: string;
  answers: Answer[];
};

const questions: Record<string, Question | Question[]> = {
  start: {
    text: "A kingdom stands on the edge of ruin. What do you save first?",
    answers: [
      { text: "The people", branch: "A", scores: ["Effie", "Hunter", "Luc"] },
      {
        text: "The knowledge",
        branch: "B",
        scores: ["Martin", "Tess", "Harper", "Vaedin"],
      },
      {
        text: "The freedom of its citizens",
        branch: "C",
        scores: ["Jupiter", "Wisteria"],
      },
      {
        text: "The source of power itself",
        branch: "D",
        scores: ["Rhaymius", "Enna"],
      },
    ],
  },

  A: [
    {
      text: "A stranger arrives at your door in the middle of the night. They’re injured and being hunted.",
      answers: [
        { text: "Bring them inside, but keep watch through the night.", scores: ["Hunter"] },
        { text: "Ask who is hunting them before making a decision.", scores: ["Luc"] },
        { text: "Help them, but prepare for the consequences.", scores: ["Effie", "Hunter"] },
      ],
    },
    {
      text: "When people come to you for help, they usually want…",
      answers: [
        { text: "Compassion.", scores: ["Effie"] },
        { text: "Protection.", scores: ["Luc"] },
        { text: "Guidance.", scores: ["Hunter"] },
        { text: "Reassurance.", scores: ["Effie"] },
      ],
    },
    {
      text: "A child asks what makes someone truly great. What do you tell them?",
      answers: [
        { text: "Loving people despite the risk.", scores: ["Effie"] },
        { text: "Protecting those who cannot protect themselves.", scores: ["Hunter"] },
        { text: "Doing what is right, even when it is difficult.", scores: ["Luc"] },
        { text: "Leaving the world better than you found it.", scores: ["Effie", "Hunter"] },
      ],
    },
  ],

  B: [
    {
      text: "You uncover a secret hidden for centuries.",
      answers: [
        { text: "Preserve it.", scores: ["Martin"] },
        { text: "Use it to help people.", scores: ["Tess"] },
        { text: "Use it to challenge those in power.", scores: ["Harper"] },
        { text: "Keep it until it benefits me.", scores: ["Vaedin"] },
      ],
    },
    {
      text: "Which skill is most important?",
      answers: [
        { text: "Wisdom.", scores: ["Martin"] },
        { text: "Empathy.", scores: ["Tess"] },
        { text: "Courage.", scores: ["Harper"] },
        { text: "Adaptability.", scores: ["Vaedin"] },
      ],
    },
    {
      text: "In the Hall of Trials, four doors appear before you. Which do you enter?",
      answers: [
        { text: "A vast archive of forgotten histories.", scores: ["Martin"] },
        { text: "A sanctuary filled with wounded travelers.", scores: ["Tess"] },
        { text: "An armory guarded by warriors.", scores: ["Harper"] },
        { text: "A locked vault with no key in sight.", scores: ["Vaedin"] },
      ],
    },
  ],

  C: [
    {
      text: "What would make you leave everything behind?",
      answers: [
        { text: "Someone I love.", scores: ["Jupiter"] },
        { text: "The promise of a new life.", scores: ["Wisteria"] },
        { text: "A chance to protect someone.", scores: ["Jupiter"] },
        { text: "The chance to be completely free.", scores: ["Wisteria"] },
      ],
    },
    {
      text: "What does freedom mean to you?",
      answers: [
        { text: "The ability to choose one’s own path.", scores: ["Jupiter"] },
        { text: "A responsibility every generation must protect.", scores: ["Jupiter"] },
        { text: "Never again having someone decide your fate for you.", scores: ["Wisteria"] },
        { text: "Being able to breathe without constantly looking over your shoulder.", scores: ["Wisteria"] },
      ],
    },
    {
      text: "The gods offer you one gift.",
      answers: [
        { text: "The strength to protect those I love.", scores: ["Jupiter"] },
        { text: "A map to every corner of the world.", scores: ["Wisteria"] },
        { text: "The courage to stand against impossible odds.", scores: ["Jupiter"] },
        { text: "A life free from obligation.", scores: ["Wisteria"] },
      ],
    },
  ],

  D: [
    {
      text: "What is power for?",
      answers: [
        { text: "Protecting yourself from those who would use it against you.", scores: ["Enna"] },
        { text: "Shaping the world into something better.", scores: ["Rhaymius"] },
        { text: "Ensuring you can never be controlled.", scores: ["Enna"] },
        { text: "Maintaining order.", scores: ["Rhaymius"] },
      ],
    },
    {
      text: "A rival stands in your way.",
      answers: [
        { text: "Outsmart them.", scores: ["Enna"] },
        { text: "Remove them from the board.", scores: ["Rhaymius"] },
        { text: "Learn what they want first.", scores: ["Enna"] },
        { text: "Make an example of them.", scores: ["Rhaymius"] },
      ],
    },
    {
      text: "Which trait do you respect most?",
      answers: [
        { text: "Intelligence.", scores: ["Enna"] },
        { text: "Leadership.", scores: ["Rhaymius"] },
        { text: "Self-control.", scores: ["Enna"] },
        { text: "Vision.", scores: ["Rhaymius"] },
      ],
    },
    {
      text: "What is your greatest fear?",
      answers: [
        { text: "Becoming vulnerable.", scores: ["Enna"] },
        { text: "Losing control.", scores: ["Rhaymius"] },
        { text: "Trusting the wrong person.", scores: ["Enna"] },
        { text: "Watching everything I’ve built collapse.", scores: ["Rhaymius"] },
      ],
    },
  ],
};

const titles: Record<string, string> = {
  Effie: "The Sun-Blessed Princess",
  Enna: "The Shadow-Touched Heir",
  Harper: "The Fearless Challenger",
  Hunter: "The Quiet Guardian",
  Tess: "The Gentle Scholar",
  Jupiter: "The Loyal Protector",
  Luc: "The Honorable Sentinel",
  Martin: "The Patient Healer",
  Wisteria: "The Unbroken Survivor",
  Rhaymius: "The Golden King",
  Vaedin: "The Scholar of Secrets",
};

const quotes: Record<string, string> = {
  Enna:
    "She was willing to be moulded into whoever she needed to be, so long as the crown fit atop her head.",
  Effie:
    "She enjoyed sunrises, specifically. The quiet warmth before the world fully woke. The feeling that everything was beginning again.",
  Harper: "Power without service rots people from the inside out.",
  Hunter: "I liked that people came in frightened and left breathing easier.",
  Jupiter:
    "There was something sinful in the desperation of it. Something ugly and intoxicating in the way years of restrained longing unraveled between them all at once.",
  Tess:
    "Her calming presence was more grounding than anything else ever could have been.",
  Rhaymius:
    "There was a distant quality to it that made people feel small without him ever needing to look directly at them.",
  Luc: "A true asset is never left in waiting.",
  Vaedin:
    "Just Vaedin, Your Highness. I forsook my nobility to become a Keep scholar.",
  Wisteria: "I won’t apologize for surviving.",
  Martin: "Most healing isn’t blessed work. It’s patience.",
};

const descriptions: Record<string, string> = {
  Enna:
    "Highly perceptive and endlessly strategic, Enna is always three steps ahead, piecing together truths others fail to see. Driven by ambition and a relentless curiosity, she trusts her mind above all else and refuses to accept the world at face value.",

  Effie:
    "Compassionate, fiercely loyal, and endlessly hopeful, Effie carries the weight of her responsibilities without ever losing sight of the people she loves. Though duty often pulls her in one direction and her heart in another, she remains guided by kindness, friendship, and an unwavering belief that freedom is worth fighting for.",

  Harper:
    "Warm, vibrant, and impossible to ignore, Harper embodies the color red: passionate, courageous, and full of life. Beneath her easy charm lies a deeply observant mind, one that finds beauty in stories, people, and the truths hidden between the lines.",

  Hunter:
    "Reserved and enigmatic, Hunter possesses a quiet strength that draws others in without ever demanding attention. Deeply intelligent and endlessly curious, he finds meaning in ancient remedies, elemental magic, and the wisdom hidden within nature. Though gentle by nature, he will stop at nothing to protect the people he calls family.",

  Jupiter:
    "Passionate, competitive, and fiercely loyal, Jupiter throws himself into everything he does with unrelenting intensity. Though his temper can be as quick as his smile, his greatest strengths are his courage and devotion to those he loves. Whether protecting his family, serving his homeland, or charging into danger, Jupiter refuses to stand by when something worth fighting for is on the line.",

  Tess:
    "Intelligent, disciplined, and wise beyond her years, Tess approaches life with careful thought and unwavering dedication. Deeply devoted to her studies, her faith, and the gifts bestowed upon her by the Mother, she strives to use her knowledge in service of others. Though often overlooked in louder company, her steady loyalty, quiet strength, and ability to find common ground make her the voice of reason when conflict threatens to divide those she loves.",

  Rhaymius:
    "Calculated, ambitious, and utterly unyielding, Rhaymius believes that power belongs to those willing to do what others cannot. He approaches every decision with ruthless logic, convinced that the ends will always justify the means. To him, compassion is a weakness, sacrifice is a necessity, and greatness is earned through control rather than kindness.",

  Luc:
    "Sharp-tongued, quick-witted, and impossible to intimidate, Luc rarely misses an opportunity for a sarcastic comment. Yet behind the humor is a man defined by loyalty, integrity, and an unshakable sense of responsibility. When chaos erupts, he is the one others can count on to stand his ground and protect what matters most.",

  Vaedin:
    "Sophisticated, adaptable, and endlessly curious, Vaedin traded the comforts of nobility for a life devoted to knowledge. Beneath his polished manners and effortless charm lies a mind sharpened by years of study, collecting wisdom, secrets, and stories wherever he travels. Though often the smartest person in the room, he carries his intelligence with a teasing grin and a mischievous sense of humor that keeps others guessing.",

  Wisteria:
    "Fearless, fiercely independent, and impossible to control, Wisteria lives life on her own terms. A born leader with an untamed spirit, she commands every room she steps into with effortless confidence. Though hardship has left its scars, it has never broken her. Resourceful, resilient, and stubborn to her core, Wisteria has survived every storm the world has thrown at her and dares it to try again.",

  Martin:
    "Kind-hearted, wise, and endlessly generous, Martin has built his life through perseverance, hard work, and a relentless pursuit of knowledge. Though his education was earned rather than inherited, he carries himself with quiet confidence and a deep understanding of the world around him. Above all else, he treasures his family, offering unwavering support, guidance, and love to those fortunate enough to call him their own.",
};

const characterStyles: Record<string, { color: string; bg: string }> = {
  Effie: { color: "#d6b26e", bg: "#fff8e7" },
  Enna: { color: "#8f8fa3", bg: "#f1f1f6" },
  Harper: { color: "#9f1d35", bg: "#f8e6ea" },
  Hunter: { color: "#31546f", bg: "#e8f0f5" },
  Tess: { color: "#7a9b76", bg: "#eef6ec" },
  Jupiter: { color: "#9b6a3a", bg: "#f6eee7" },
  Luc: { color: "#617080", bg: "#edf1f4" },
  Martin: { color: "#8a5a35", bg: "#f4eadf" },
  Wisteria: { color: "#6f3d7a", bg: "#f1e8f5" },
  Rhaymius: { color: "#1f1b18", bg: "#efe4d2" },
  Vaedin: { color: "#2f6f5e", bg: "#e5f2ee" },
};

export default function QuizPage() {
  const [branch, setBranch] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [result, setResult] = useState<string | null>(null);

  const addScores = (characters: string[]) => {
    const nextScores = { ...scores };

    characters.forEach((character) => {
      nextScores[character] = (nextScores[character] || 0) + 1;
    });

    setScores(nextScores);
    return nextScores;
  };

  const chooseStart = (answer: Answer) => {
    addScores(answer.scores);
    setBranch(answer.branch || null);
    setStep(0);
  };

  const chooseAnswer = (answer: Answer) => {
    const nextScores = addScores(answer.scores);
    const branchQuestions = questions[branch as string] as Question[];

    if (step + 1 >= branchQuestions.length) {
      const winner = Object.entries(nextScores).sort((a, b) => b[1] - a[1])[0][0];
      setResult(winner);
    } else {
      setStep(step + 1);
    }
  };

  const restart = () => {
    setBranch(null);
    setStep(0);
    setScores({});
    setResult(null);
  };

if (!newsletterUnlocked) {
  return (
    <main className="min-h-screen bg-[#fff8f3] px-6 py-24 text-center text-[#3b071d]">
      <div className="mx-auto max-w-2xl rounded-3xl bg-[#f7e8ea] p-10 shadow-2xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#8b6f3d]">
          Newsletter Exclusive
        </p>

        <h1
          className="mt-4 text-4xl font-bold md:text-5xl"
          style={{ fontFamily: "Cinzel, serif" }}
        >
          Unlock the Character Quiz
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#5b2034]">
          Join Ella Novell’s newsletter to unlock the character quiz and hidden lore from Aurorium.
        </p>

        <a
          href="/#newsletter"
          className="mt-8 inline-block rounded-full bg-[#6e0f33] px-8 py-4 font-semibold text-white shadow-lg"
        >
          Join the Newsletter
        </a>
      </div>
    </main>
  );
}

  if (result) {
    const style = characterStyles[result];

    return (
      <main
        className="min-h-screen px-6 py-24 text-[#3b071d]"
        style={{
          background: `linear-gradient(to bottom, ${style.bg}, #fffdf8)`,
        }}
      >
        <div className="mx-auto max-w-5xl py-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#8b6f3d]">
            Discovered Character
          </p>

          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-[#d6b26e]" />
            <span className="text-xl text-[#d6b26e]">✦</span>
            <div className="h-px w-20 bg-[#d6b26e]" />
          </div>

          <p className="mt-10 text-sm uppercase tracking-[0.35em] text-[#8b6f3d]">
            You Are
          </p>

          <h1
            className="mt-4 text-6xl font-black tracking-[0.08em] md:text-8xl"
            style={{
              fontFamily: "Cinzel, serif",
              color: style.color,
            }}
          >
            {result}
          </h1>

          <p
            className="mt-4 text-xl italic md:text-2xl"
            style={{ color: style.color }}
          >
            {titles[result]}
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-[#d6b26e]" />
            <span className="text-lg text-[#d6b26e]">✦</span>
            <div className="h-px w-20 bg-[#d6b26e]" />
          </div>

          <div
            className="mx-auto mt-12 flex h-80 w-80 items-center justify-center overflow-hidden rounded-full border-4"
            style={{ borderColor: style.color }}
          >
            <img
              src={`/images/characters/${result.toLowerCase()}.jpg`}
              alt={result}
              className="h-full w-full object-cover object-top"
            />
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-center text-2xl italic text-[#8b6f3d] md:text-3xl">
            “{quotes[result]}”
          </p>

          <p className="mx-auto mt-12 max-w-3xl text-xl leading-9 text-[#5b2034]">
            {descriptions[result]}
          </p>

          <div className="mt-14 flex flex-col justify-center gap-4 pb-10 sm:flex-row">
            <button
              onClick={restart}
              className="rounded-full bg-[#6e0f33] px-8 py-4 font-semibold text-white shadow-lg"
            >
              Take the Quiz Again
            </button>

            <a
              href="/"
              className="rounded-full border border-[#6e0f33] px-8 py-4 font-semibold text-[#6e0f33]"
            >
              Back Home
            </a>
          </div>
        </div>
      </main>
    );
  }

  const currentQuestion = branch
    ? (questions[branch] as Question[])[step]
    : (questions.start as Question);

  const questionNumber = branch ? step + 2 : 1;
  const totalQuestions = branch === "D" ? 5 : 4;

  return (
    <main className="min-h-screen bg-[#fff8f3] px-6 py-24 text-[#3b071d]">
      <div className="mx-auto max-w-4xl py-10 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#8b6f3d]">
          Character Quiz
        </p>

        <h1 className="mt-4 text-5xl font-bold md:text-7xl">
          Which Dawn & Dusk Character Are You?
        </h1>

        <div className="mt-12 rounded-3xl bg-[#f7e8ea] p-8 text-left shadow-xl">
          <p className="text-sm uppercase tracking-[0.25em] text-[#8b6f3d]">
            Question {questionNumber} of {totalQuestions}
          </p>

          <h2 className="mt-4 text-3xl font-bold">{currentQuestion.text}</h2>

          <div className="mt-8 grid gap-4">
            {currentQuestion.answers.map((answer) => (
              <button
                key={answer.text}
                onClick={() => (branch ? chooseAnswer(answer) : chooseStart(answer))}
                className="rounded-2xl border border-[#6e0f33]/20 bg-white px-6 py-4 text-left text-lg transition hover:-translate-y-1 hover:bg-[#6e0f33] hover:text-white"
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>

        <a
          href="/"
          className="mt-10 inline-block rounded-full bg-[#6e0f33] px-8 py-4 font-semibold text-white"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}