import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "@/components/common/Section";
import SvgIcon from "@/components/common/SvgIcon";

const About = () => {
  const values = [
    {
      icon: "palette",
      title: "Creative Excellence",
      description: "We push boundaries and challenge conventions to deliver designs that stand out and make an impact.",
    },
    {
      icon: "target",
      title: "Strategic Thinking",
      description: "Every design decision is backed by research and aligned with your business objectives.",
    },
    {
      icon: "rocket",
      title: "Innovation First",
      description: "We stay ahead of trends and embrace new technologies to keep your brand future-ready.",
    },
  ];

  const team = [
    { name: "Alex Rivera", role: "Creative Director", icon: "user" },
    { name: "Jordan Chen", role: "Lead Designer", icon: "user" },
    { name: "Sam Williams", role: "Social Media Strategist", icon: "user" },
    { name: "Morgan Lee", role: "Brand Specialist", icon: "user" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="min-h-[60vh] flex items-center">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm text-muted-foreground">Our Story</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Crafting Visual
            <span className="block gradient-text text-glow">Excellence</span>
            Since 2016
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            We're a passionate team of designers, strategists, and storytellers dedicated to 
            transforming brands through exceptional design and strategic marketing.
          </p>
        </div>
      </Section>

      {/* Story Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-display font-bold mb-6">
              The <span className="gradient-text">Creativix</span> Story
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2016 by a group of passionate designers who believed that exceptional 
                design should be accessible to every business, Creativix started as a small studio 
                with big dreams.
              </p>
              <p>
                Today, we've grown into a full-service creative agency, partnering with brands 
                across industries to deliver stunning visual identities and impactful marketing 
                campaigns that drive real results.
              </p>
              <p>
                Our philosophy is simple: blend creativity with strategy. Every pixel we push, 
                every campaign we launch is designed to not just look beautiful, but to achieve 
                your business goals.
              </p>
            </div>
          </div>

          {/* SVG Illustration */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <div className="relative glass rounded-3xl p-8 animate-float">
              <svg viewBox="0 0 400 300" className="w-full h-auto">
                {/* Creative workspace illustration */}
                <rect x="50" y="50" width="300" height="200" rx="10" fill="none" stroke="url(#aboutGrad)" strokeWidth="2" />
                
                {/* Monitor */}
                <rect x="100" y="80" width="120" height="90" rx="4" fill="none" stroke="hsl(var(--foreground) / 0.3)" strokeWidth="2" />
                <rect x="110" y="90" width="100" height="60" rx="2" fill="url(#aboutGrad)" opacity="0.2" />
                <rect x="145" y="170" width="30" height="10" fill="hsl(var(--foreground) / 0.3)" />
                <rect x="135" y="180" width="50" height="5" rx="2" fill="hsl(var(--foreground) / 0.3)" />
                
                {/* Design elements on screen */}
                <circle cx="135" cy="110" r="15" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" />
                <rect x="160" y="100" width="35" height="25" rx="2" stroke="hsl(var(--secondary))" strokeWidth="2" fill="none" />
                
                {/* Color palette */}
                <circle cx="270" cy="100" r="12" fill="hsl(var(--primary))" />
                <circle cx="300" cy="100" r="12" fill="hsl(var(--secondary))" />
                <circle cx="330" cy="100" r="12" fill="hsl(var(--accent))" />
                
                {/* Pen/stylus */}
                <line x1="260" y1="150" x2="320" y2="200" stroke="url(#aboutGrad)" strokeWidth="3" strokeLinecap="round" />
                <circle cx="260" cy="150" r="5" fill="hsl(var(--primary))" />
                
                {/* Floating shapes */}
                <circle cx="80" cy="230" r="20" fill="hsl(var(--primary))" opacity="0.3" className="animate-pulse" />
                <rect x="320" y="60" width="25" height="25" rx="4" fill="hsl(var(--secondary))" opacity="0.3" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
                
                <defs>
                  <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="gradient-text">Values</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The principles that guide every project we undertake.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group glass rounded-2xl p-8 hover:glow-primary transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <SvgIcon name={value.icon} size={40} className="text-foreground" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-3 group-hover:gradient-text transition-all duration-300">
                {value.title}
              </h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass rounded-2xl p-8 md:p-12 animate-fade-in-up">
            <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-6">
              <SvgIcon name="target" size={28} className="text-foreground" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower businesses with exceptional design that communicates their unique value, 
              connects with their audience, and drives measurable growth. We believe every brand 
              deserves a visual identity that truly represents who they are.
            </p>
          </div>
          
          <div className="glass rounded-2xl p-8 md:p-12 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-6">
              <SvgIcon name="rocket" size={28} className="text-foreground" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the creative partner of choice for businesses seeking transformation through 
              design excellence. We envision a world where every brand can express its authentic 
              self through powerful, purposeful visual communication.
            </p>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Meet Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The creative minds behind Creativix.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="group text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full glass mb-4 flex items-center justify-center group-hover:glow-primary transition-all duration-500">
                <SvgIcon name={member.icon} size={48} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              </div>
              <h4 className="font-display font-semibold text-lg group-hover:gradient-text transition-all duration-300">
                {member.name}
              </h4>
              <p className="text-muted-foreground text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's Create <span className="gradient-text">Together</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Ready to start your creative journey? We'd love to hear about your project.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                <span>Start a Conversation</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;