"use client";

export default function NewsletterForm() {
  return (
    <form
      className="flex gap-1.5 max-w-[420px] mx-auto bg-white/10 backdrop-blur-[12px] border border-white/15 rounded-[100px] p-[5px] max-[480px]:flex-col max-[480px]:rounded-[var(--radius-std)] max-[480px]:p-3"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 bg-transparent border-none outline-none px-5 py-3 font-sans text-sm text-white placeholder:text-white/40"
      />
      <button
        type="submit"
        className="bg-white text-[#0F172A] font-semibold text-sm px-6 py-3 border-none rounded-[100px] cursor-pointer transition-all duration-200 whitespace-nowrap hover:bg-[#F0F4F8] hover:scale-[1.02] max-[480px]:w-full max-[480px]:py-3.5 max-[480px]:rounded-[var(--radius-sm)]"
      >
        Subscribe
      </button>
    </form>
  );
}
