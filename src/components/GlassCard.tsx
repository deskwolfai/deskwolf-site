interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`relative overflow-hidden bg-glass-strong backdrop-blur-[16px] saturate-[1.4] border border-white/[0.07] rounded-[var(--radius-std)] shadow-[var(--shadow-std),inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-[400ms] cursor-pointer group hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg),var(--shadow-glow),inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-brand-purple/20 ${className}`}
    >
      {/* Gradient border glow on hover */}
      <div className="absolute -inset-px rounded-[var(--radius-std)] bg-gradient-to-br from-brand-blue via-brand-purple to-brand-cyan opacity-0 transition-opacity duration-[400ms] -z-[1] blur-[1px] group-hover:opacity-15" />
      {/* Shimmer sweep on hover */}
      <div className="absolute top-0 -left-full w-[60%] h-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-[left] duration-[600ms] pointer-events-none group-hover:left-[150%]" />
      {children}
    </div>
  );
}
