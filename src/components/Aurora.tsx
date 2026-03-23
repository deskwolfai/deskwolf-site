"use client";

export default function Aurora() {
  return (
    <>
      {/* Multi-layered radial gradient background */}
      <div
        className="absolute inset-0 z-0 animate-aurora-drift"
        style={{
          background: [
            "radial-gradient(ellipse 70% 55% at 15% 25%, rgba(59,130,246,0.25) 0%, transparent 50%)",
            "radial-gradient(ellipse 55% 45% at 85% 15%, rgba(139,92,246,0.2) 0%, transparent 50%)",
            "radial-gradient(ellipse 50% 55% at 75% 75%, rgba(245,158,11,0.18) 0%, transparent 45%)",
            "radial-gradient(ellipse 40% 35% at 25% 70%, rgba(6,182,212,0.12) 0%, transparent 40%)",
            "radial-gradient(ellipse 80% 60% at 50% 45%, rgba(139,92,246,0.04) 0%, transparent 60%)",
          ].join(", "),
        }}
      />
      {/* Floating orbs */}
      <div className="absolute rounded-full pointer-events-none z-[1] w-[450px] h-[450px] -top-[100px] -right-[80px] animate-orb-1"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)", filter: "blur(50px)" }} />
      <div className="absolute rounded-full pointer-events-none z-[1] w-[350px] h-[350px] bottom-[5%] -left-[60px] animate-orb-2"
        style={{ background: "radial-gradient(circle, rgba(245,158,11,0.15) 0%, rgba(6,182,212,0.05) 40%, transparent 70%)", filter: "blur(40px)" }} />
      <div className="absolute rounded-full pointer-events-none z-[1] w-[220px] h-[220px] top-[35%] right-[12%] animate-orb-3"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 60%)", filter: "blur(35px)" }} />
      <div className="absolute rounded-full pointer-events-none z-[1] w-[180px] h-[180px] top-[55%] left-[18%] animate-orb-1"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 60%)", filter: "blur(28px)", animationDuration: "12s", animationDelay: "3s" }} />
    </>
  );
}
