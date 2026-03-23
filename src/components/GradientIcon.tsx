interface GradientIconProps {
  color: "blue" | "green" | "amber" | "purple";
  children: React.ReactNode;
  className?: string;
}

const colorMap = {
  blue: "from-blue-light to-brand-purple shadow-[0_4px_16px_rgba(59,130,246,0.25)]",
  green: "from-brand-green to-brand-cyan shadow-[0_4px_16px_rgba(16,185,129,0.25)]",
  amber: "from-brand-amber to-[#EF4444] shadow-[0_4px_16px_rgba(245,158,11,0.25)]",
  purple: "from-brand-purple to-[#EC4899] shadow-[0_4px_16px_rgba(139,92,246,0.25)]",
};

export default function GradientIcon({ color, children, className = "" }: GradientIconProps) {
  return (
    <div
      className={`w-12 h-12 rounded-[14px] flex items-center justify-center text-white shrink-0 bg-gradient-to-br transition-all duration-300 group-hover:scale-[1.08] group-hover:shadow-[0_8px_24px_rgba(59,130,246,0.3)] ${colorMap[color]} ${className}`}
    >
      {children}
    </div>
  );
}
