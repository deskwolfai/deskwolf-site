"use client";

interface Props {
  url: string;
}

export default function CalendlyEmbed({ url }: Props) {
  return (
    <div className="w-full h-[650px] rounded-[var(--radius-std)] overflow-hidden">
      <iframe
        src={url}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Book a demo"
      />
    </div>
  );
}
