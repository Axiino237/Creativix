import { useEffect, useState } from "react";

const AnimatedBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted" />

      {/* Animated gradient orbs */}
      <div
        className="absolute w-[800px] h-[800px] rounded-full animate-float opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)",
          left: "-20%",
          top: `${10 + scrollY * 0.05}%`,
          transform: `translateY(${scrollY * -0.1}px)`,
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full animate-float-delayed opacity-25"
        style={{
          background: "radial-gradient(circle, hsl(var(--secondary) / 0.4) 0%, transparent 70%)",
          right: "-10%",
          top: `${30 + scrollY * 0.03}%`,
          transform: `translateY(${scrollY * -0.15}px)`,
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full animate-float-slow opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.3) 0%, transparent 70%)",
          left: "30%",
          bottom: `${-10 + scrollY * 0.02}%`,
          transform: `translateY(${scrollY * -0.08}px)`,
        }}
      />

      {/* Floating SVG shapes */}
      <svg
        className="absolute animate-float opacity-20"
        style={{
          left: "10%",
          top: `${20 + scrollY * 0.04}%`,
          transform: `translateY(${scrollY * -0.12}px) rotate(${scrollY * 0.02}deg)`,
        }}
        width="120"
        height="120"
        viewBox="0 0 120 120"
      >
        <polygon
          points="60,10 110,90 10,90"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
        />
      </svg>

      <svg
        className="absolute animate-spin-slow opacity-15"
        style={{
          right: "15%",
          top: `${15 + scrollY * 0.03}%`,
          transform: `translateY(${scrollY * -0.1}px)`,
        }}
        width="80"
        height="80"
        viewBox="0 0 80 80"
      >
        <circle
          cx="40"
          cy="40"
          r="35"
          fill="none"
          stroke="hsl(var(--secondary))"
          strokeWidth="2"
          strokeDasharray="10 5"
        />
      </svg>

      <svg
        className="absolute animate-float-delayed opacity-15"
        style={{
          left: "60%",
          top: `${60 + scrollY * 0.02}%`,
          transform: `translateY(${scrollY * -0.08}px) rotate(${45 + scrollY * 0.01}deg)`,
        }}
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <rect
          x="15"
          y="15"
          width="70"
          height="70"
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          rx="10"
        />
      </svg>

      <svg
        className="absolute animate-float-slow opacity-10"
        style={{
          left: "80%",
          bottom: `${30 + scrollY * 0.03}%`,
          transform: `translateY(${scrollY * -0.06}px)`,
        }}
        width="150"
        height="150"
        viewBox="0 0 150 150"
      >
        <path
          d="M75 10 L95 60 L145 60 L105 90 L120 140 L75 110 L30 140 L45 90 L5 60 L55 60 Z"
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
        />
      </svg>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          transform: `translateY(${scrollY * -0.05}px)`,
        }}
      />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
