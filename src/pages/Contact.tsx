import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import SvgIcon from "@/components/SvgIcon";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      if (formState.email && formState.name && formState.message) {
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    }, 1500);
  };

  const contactInfo = [
    {
      icon: "mail",
      title: "Email Us",
      value: "hello@creativix.studio",
      description: "We'll respond within 24 hours",
      link: "mailto:hello@creativix.studio",
    },
    {
      icon: "phone",
      title: "Call Us",
      value: "+1 (555) 123-4567",
      description: "Mon-Fri, 9am-6pm EST",
      link: "tel:+15551234567",
    },
    {
      icon: "social",
      title: "Social Media",
      value: "@creativixstudio",
      description: "Follow us for inspiration",
      link: null,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="min-h-[40vh] flex items-center">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm text-muted-foreground">Get in Touch</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Let's Start
            <span className="block gradient-text text-glow">Something Great</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            Have a project in mind? We'd love to hear about it. Send us a message 
            and let's create something amazing together.
          </p>
        </div>
      </Section>

      {/* Contact Info Cards */}
      <Section className="py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => {
            const CardContent = (
              <>
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <SvgIcon name={info.icon} size={32} className="text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-1">{info.title}</h3>
                <p className="gradient-text font-medium mb-1">{info.value}</p>
                <p className="text-muted-foreground text-sm">{info.description}</p>
              </>
            );

            return info.link ? (
              <a
                key={info.title}
                href={info.link}
                target={info.link.startsWith("mailto") ? undefined : "_blank"}
                rel={info.link.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="group glass rounded-2xl p-6 text-center animate-fade-in-up hover:glow-primary transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {CardContent}
              </a>
            ) : (
              <div
                key={info.title}
                className="group glass rounded-2xl p-6 text-center animate-fade-in-up hover:glow-primary transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </Section>

      {/* Contact Form */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="glass rounded-3xl p-8 md:p-10 animate-fade-in-up">
            <h2 className="text-3xl font-display font-bold mb-6">
              Send Us a <span className="gradient-text">Message</span>
            </h2>
            
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-2xl mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">
                  Thanks for reaching out. We'll get back to you within 24 hours.
                </p>
                <Button variant="outline" onClick={() => setStatus("idle")}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <SvgIcon name="user" size={20} className="text-muted-foreground" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full bg-muted/50 border border-border rounded-lg pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <SvgIcon name="mail" size={20} className="text-muted-foreground" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full bg-muted/50 border border-border rounded-lg pl-12 pr-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Subject Select */}
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <SvgIcon name="message" size={20} className="text-muted-foreground" />
                    </div>
                    <select
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full bg-muted/50 border border-border rounded-lg pl-12 pr-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="">Select a subject</option>
                      <option value="branding">Branding Project</option>
                      <option value="logo">Logo Design</option>
                      <option value="social">Social Media Marketing</option>
                      <option value="print">Print Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    required
                    rows={5}
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                {/* Error State */}
                {status === "error" && (
                  <div className="flex items-center gap-2 text-destructive">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm">Please fill in all required fields.</span>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          {/* Illustration */}
          <div className="hidden lg:block">
            <div className="sticky top-32">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
                <div className="relative glass rounded-3xl p-8 animate-float">
                  <svg viewBox="0 0 400 400" className="w-full h-auto">
                    {/* Message/Communication illustration */}
                    <defs>
                      <linearGradient id="contactGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--secondary))" />
                      </linearGradient>
                    </defs>
                    
                    {/* Main envelope */}
                    <path d="M50 120 L200 40 L350 120 L350 300 L50 300 Z" fill="none" stroke="url(#contactGrad)" strokeWidth="2" />
                    <path d="M50 120 L200 220 L350 120" stroke="url(#contactGrad)" strokeWidth="2" fill="none" />
                    <path d="M50 300 L150 200 M350 300 L250 200" stroke="hsl(var(--foreground) / 0.2)" strokeWidth="2" />
                    
                    {/* Flying messages */}
                    <g className="animate-float" style={{ animationDelay: "0s" }}>
                      <rect x="80" y="180" width="60" height="40" rx="4" fill="hsl(var(--primary))" opacity="0.3" />
                      <line x1="90" y1="195" x2="130" y2="195" stroke="hsl(var(--foreground))" strokeWidth="2" opacity="0.5" />
                      <line x1="90" y1="205" x2="120" y2="205" stroke="hsl(var(--foreground))" strokeWidth="2" opacity="0.5" />
                    </g>
                    
                    <g className="animate-float" style={{ animationDelay: "0.5s" }}>
                      <rect x="260" y="240" width="60" height="40" rx="4" fill="hsl(var(--secondary))" opacity="0.3" />
                      <line x1="270" y1="255" x2="310" y2="255" stroke="hsl(var(--foreground))" strokeWidth="2" opacity="0.5" />
                      <line x1="270" y1="265" x2="300" y2="265" stroke="hsl(var(--foreground))" strokeWidth="2" opacity="0.5" />
                    </g>
                    
                    {/* Decorative dots */}
                    <circle cx="30" cy="80" r="8" fill="hsl(var(--primary))" opacity="0.5" className="animate-pulse" />
                    <circle cx="370" cy="180" r="6" fill="hsl(var(--secondary))" opacity="0.5" className="animate-pulse" style={{ animationDelay: "0.3s" }} />
                    <circle cx="180" cy="350" r="10" fill="hsl(var(--accent))" opacity="0.4" className="animate-pulse" style={{ animationDelay: "0.6s" }} />
                    
                    {/* Connection lines */}
                    <path d="M30 80 Q 100 100 80 180" stroke="url(#contactGrad)" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="5 5" />
                    <path d="M370 180 Q 340 240 320 240" stroke="url(#contactGrad)" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="5 5" />
                  </svg>
                </div>
              </div>
              
              {/* Quick info */}
              <div className="mt-8 glass rounded-2xl p-6">
                <h3 className="font-display font-semibold text-lg mb-4">Why Work With Us?</h3>
                <ul className="space-y-3">
                  {[
                    "8+ years of creative experience",
                    "150+ successful projects delivered",
                    "Fast turnaround times",
                    "Dedicated project manager",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
