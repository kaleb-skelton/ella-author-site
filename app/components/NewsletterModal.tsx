"use client";

import NewsletterForm from "./NewsletterForm";

type NewsletterModalProps = {
  onClose: () => void;
  onSuccess: () => void;
};

export default function NewsletterModal({
  onClose,
  onSuccess,
}: NewsletterModalProps) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-md rounded-2xl border border-white/20 bg-[#1b1320] p-6 text-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-3 z-[10000] text-3xl leading-none text-white hover:text-yellow-200"
          aria-label="Close newsletter modal"
        >
          ×
        </button>

        <h2 className="mb-2 text-2xl font-bold">Join the Newsletter</h2>

        <p className="mb-5 text-sm text-white/80">
          Join Ella Novell’s newsletter to unlock the character quiz and receive
          book updates.
        </p>

<NewsletterForm />      </div>
    </div>
  );
}