const clientLogos = [
  "TechVision",
  "BrandWave",
  "NexGen",
  "Artistry Co",
  "MediaPulse",
  "CreativeHub",
  "DesignForge",
  "PixelPerfect",
  "VibrantStudio",
  "IdeaLab",
];

const LogoMarquee = () => {
  return (
    <div className="relative overflow-hidden py-12 border-y border-border/30">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex animate-marquee hover:[animation-play-state:paused] group">
        {[...clientLogos, ...clientLogos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-12 flex items-center justify-center"
          >
            <div className="glass px-8 py-4 rounded-lg transition-all duration-300 group-hover:opacity-100 hover:!opacity-100 hover:glow-primary">
              <span className="text-xl font-display font-semibold text-muted-foreground hover:gradient-text transition-all duration-300">
                {logo}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;