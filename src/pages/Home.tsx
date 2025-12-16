import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import SvgIcon from "@/components/SvgIcon";
import LogoMarquee from "@/components/LogoMarquee";

const Home = () => {
  const services = [
    {
      icon: "design",
      title: "Graphic Design",
      description: "Stunning visuals that capture attention and communicate your brand's essence.",
    },
    {
      icon: "branding",
      title: "Branding",
      description: "Complete brand identity systems that make lasting impressions.",
    },
    {
      icon: "social",
      title: "Social Media",
      description: "Strategic campaigns that engage audiences and drive meaningful results.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="min-h-[90vh] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Award-Winning Creative Agency</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              We Create
              <span className="block gradient-text text-glow">Bold Designs</span>
              That Inspire
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg mb-8">
              Transform your brand with cutting-edge graphic design and strategic social media marketing 
              that captivates audiences and drives growth.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="glass" size="xl">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <div className="relative glass rounded-3xl p-8 animate-float">
              <svg viewBox="0 0 400 400" className="w-full h-auto">
                {/* Main design canvas */}
                <rect x="50" y="50" width="300" height="300" rx="20" fill="none" stroke="url(#heroGrad)" strokeWidth="2" />
                
                {/* Design elements */}
                <circle cx="150" cy="150" r="50" fill="url(#heroGrad)" opacity="0.2" />
                <circle cx="150" cy="150" r="40" stroke="url(#heroGrad)" strokeWidth="2" fill="none" />
                
                <rect x="220" y="120" width="80" height="80" rx="8" fill="url(#heroGrad)" opacity="0.2" />
                <rect x="230" y="130" width="60" height="60" rx="4" stroke="url(#heroGrad)" strokeWidth="2" fill="none" />
                
                <path d="M100 280 L200 230 L300 280" stroke="url(#heroGrad)" strokeWidth="2" fill="none" />
                <circle cx="100" cy="280" r="8" fill="hsl(var(--primary))" />
                <circle cx="200" cy="230" r="8" fill="hsl(var(--secondary))" />
                <circle cx="300" cy="280" r="8" fill="hsl(var(--accent))" />
                
                {/* Floating elements */}
                <circle cx="80" cy="100" r="15" fill="hsl(var(--primary))" opacity="0.6" className="animate-pulse" />
                <rect x="300" cy="80" width="30" height="30" rx="4" fill="hsl(var(--secondary))" opacity="0.6" className="animate-pulse" style={{ animationDelay: "0.5s" }} />
                <polygon points="350,200 365,230 335,230" fill="hsl(var(--accent))" opacity="0.6" className="animate-pulse" style={{ animationDelay: "1s" }} />
                
                <defs>
                  <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </Section>

      {/* Client Logo Marquee */}
      <LogoMarquee />

      {/* Services Preview */}
      <Section>
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What We <span className="gradient-text">Create</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From stunning visuals to strategic campaigns, we deliver creative solutions that elevate your brand.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group glass rounded-2xl p-8 hover:glow-primary transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <SvgIcon name={service.icon} size={40} className="text-foreground" />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-3 group-hover:gradient-text transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="lg">
              Explore All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="gradient-bg rounded-3xl mx-4 md:mx-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "150+", label: "Projects Completed" },
            { value: "50+", label: "Happy Clients" },
            { value: "8+", label: "Years Experience" },
            { value: "25+", label: "Awards Won" },
          ].map((stat) => (
            <div key={stat.label} className="animate-fade-in-up">
              <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
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
              Ready to <span className="gradient-text">Transform</span> Your Brand?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's collaborate to create something extraordinary. Your vision, our expertise.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                <span>Get in Touch</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
