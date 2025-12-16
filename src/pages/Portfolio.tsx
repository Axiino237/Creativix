import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";

const Portfolio = () => {
  const categories = ["All", "Branding", "Social Media", "Print Design", "Logo Design"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      title: "NexGen Tech Rebrand",
      category: "Branding",
      description: "Complete brand identity overhaul for a tech startup",
      colors: ["#ec4899", "#8b5cf6"],
    },
    {
      title: "Artistry Coffee Campaign",
      category: "Social Media",
      description: "Viral social media campaign for artisan coffee brand",
      colors: ["#f59e0b", "#ef4444"],
    },
    {
      title: "EcoLife Print Series",
      category: "Print Design",
      description: "Sustainable lifestyle brand print materials",
      colors: ["#10b981", "#06b6d4"],
    },
    {
      title: "Momentum Fitness Logo",
      category: "Logo Design",
      description: "Dynamic logo for premium fitness brand",
      colors: ["#6366f1", "#ec4899"],
    },
    {
      title: "Urban Threads Identity",
      category: "Branding",
      description: "Streetwear brand visual identity system",
      colors: ["#84cc16", "#22c55e"],
    },
    {
      title: "Wanderlust Travel Campaign",
      category: "Social Media",
      description: "Immersive social campaign for travel agency",
      colors: ["#0ea5e9", "#6366f1"],
    },
    {
      title: "Bloom Cosmetics Packaging",
      category: "Print Design",
      description: "Luxury cosmetics packaging design",
      colors: ["#f472b6", "#c084fc"],
    },
    {
      title: "TechWave Logo Suite",
      category: "Logo Design",
      description: "Versatile logo system for tech company",
      colors: ["#14b8a6", "#3b82f6"],
    },
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="min-h-[50vh] flex items-center">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm text-muted-foreground">Our Work</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Creative Work
            <span className="block gradient-text text-glow">That Inspires</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore our portfolio of brand identities, marketing campaigns, and design 
            projects that have helped businesses stand out and succeed.
          </p>
        </div>
      </Section>

      {/* Filter Tabs */}
      <Section className="py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-secondary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </Section>

      {/* Portfolio Grid */}
      <Section className="pt-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* SVG Project Visual */}
              <div className="aspect-[4/3] relative">
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <defs>
                    <linearGradient id={`grad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={project.colors[0]} />
                      <stop offset="100%" stopColor={project.colors[1]} />
                    </linearGradient>
                    <filter id={`glow-${index}`}>
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Background */}
                  <rect width="400" height="300" fill="hsl(var(--card))" />
                  
                  {/* Gradient shape */}
                  <circle cx="200" cy="150" r="80" fill={`url(#grad-${index})`} opacity="0.2" />
                  
                  {/* Design elements based on category */}
                  {project.category === "Branding" && (
                    <>
                      <rect x="140" y="100" width="120" height="100" rx="8" stroke={`url(#grad-${index})`} strokeWidth="2" fill="none" filter={`url(#glow-${index})`} />
                      <text x="200" y="160" textAnchor="middle" fill={project.colors[0]} fontFamily="Arial" fontWeight="bold" fontSize="32" filter={`url(#glow-${index})`}>
                        {project.title.charAt(0)}
                      </text>
                    </>
                  )}
                  
                  {project.category === "Social Media" && (
                    <>
                      <rect x="120" y="80" width="160" height="140" rx="12" stroke={`url(#grad-${index})`} strokeWidth="2" fill="none" filter={`url(#glow-${index})`} />
                      <circle cx="155" cy="115" r="15" stroke={project.colors[0]} strokeWidth="2" fill="none" />
                      <path d="M180 115 L265 115 M180 150 L245 150 M180 185 L225 185" stroke={`url(#grad-${index})`} strokeWidth="2" strokeLinecap="round" />
                    </>
                  )}
                  
                  {project.category === "Print Design" && (
                    <>
                      <rect x="100" y="70" width="100" height="140" rx="4" stroke={`url(#grad-${index})`} strokeWidth="2" fill="none" transform="rotate(-5, 150, 140)" filter={`url(#glow-${index})`} />
                      <rect x="200" y="90" width="100" height="140" rx="4" stroke={`url(#grad-${index})`} strokeWidth="2" fill="none" transform="rotate(5, 250, 160)" filter={`url(#glow-${index})`} />
                      <rect x="115" y="100" width="70" height="40" rx="2" fill={`url(#grad-${index})`} opacity="0.5" transform="rotate(-5, 150, 120)" />
                    </>
                  )}
                  
                  {project.category === "Logo Design" && (
                    <>
                      <circle cx="200" cy="150" r="60" stroke={`url(#grad-${index})`} strokeWidth="2" fill="none" filter={`url(#glow-${index})`} />
                      <path d="M160 150 L200 110 L240 150 L200 190 Z" stroke={project.colors[0]} strokeWidth="2" fill={project.colors[1]} opacity="0.5" />
                      <circle cx="200" cy="150" r="20" fill={`url(#grad-${index})`} />
                    </>
                  )}
                  
                  {/* Floating elements */}
                  <circle cx="60" cy="50" r="20" fill={project.colors[0]} opacity="0.3" className="animate-pulse" />
                  <rect x="320" y="230" width="30" height="30" rx="6" fill={project.colors[1]} opacity="0.3" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
                </svg>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary mb-2">
                      {project.category}
                    </span>
                    <h3 className="font-display font-semibold text-xl mb-1">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section>
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "40+", label: "Industries Served" },
              { value: "15+", label: "Design Awards" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Like What <span className="gradient-text">You See?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's create something amazing together. Your project could be our next showcase piece.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Portfolio;
