import { Link } from "react-router-dom";
import { ArrowRight, Check, Globe, Palette, Code, Pen, Printer, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Digital Marketing",
      description: "Marketing your business in the online world is as crucial as your product or service itself.",
      subServices: [
        "Search Engine Optimization",
        "Search Engine Marketing",
        "Social Media Marketing",
        "Influencer Marketing",
        "Performance Marketing",
      ],
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "An engrossing design is a gateway to communicate your brand to your customers. We have completed design projects to our credit.",
      subServices: [
        "Logo",
        "Brochure",
        "Poster And Flex",
        "Album Design",
        "Product Design",
      ],
    },
    {
      icon: Code,
      title: "Website Design",
      description: "An engaging website can retain your customer's attention and make your business grow.",
      subServices: [
        "E-commerce Website",
        "Business Website",
        "ERP Software",
        "Travel Booking",
        "Software Design",
      ],
    },
    {
      icon: Pen,
      title: "Content Writing",
      description: "Stories have the potential to get into the hearts of your clients and captivate their interests.",
      subServices: [
        "Copywriting",
        "Blogging",
        "Social Media Posts",
        "Video Production Scripts",
        "Screen Writing",
      ],
    },
    {
      icon: Printer,
      title: "Printing",
      description: "A physical reminder of your moments / your products is more enjoyable than mere pixels on a screen.",
      subServices: [
        "Surface Printing",
        "Flexographic Printing",
        "Screen Printing",
        "Rotary Screen",
        "Gravure Printing",
      ],
    },
    {
      icon: Camera,
      title: "Photography",
      description: "As cliché as it may sound, \"A picture speaks thousand words\", it is the undeniable truth.",
      subServices: [
        "Events",
        "Marketing / Promotional",
        "Corporate",
        "Short Films",
        "Product Shoot",
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <Section className="min-h-[50vh] flex items-center">
        <div className="max-w-4xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="text-sm text-muted-foreground">Our Services</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Creative Solutions
            <span className="block gradient-text text-glow">For Every Need</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            From concept to creation, we offer comprehensive design and marketing services 
            tailored to elevate your brand and achieve your business goals.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className="group glass rounded-2xl p-8 hover:glow-primary transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-semibold mb-3 group-hover:gradient-text transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Sub-services with hover reveal animation */}
                  <div className="space-y-0 overflow-hidden">
                    <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Services Include:
                    </div>
                    <ul className="space-y-2">
                      {service.subServices.map((subService, subIndex) => (
                        <li
                          key={subService}
                          className="flex items-center gap-2 text-sm text-muted-foreground opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                          style={{ transitionDelay: `${150 + subIndex * 50}ms` }}
                        >
                          <Check className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{subService}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Process Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven approach that delivers exceptional results every time.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Discovery", description: "We dive deep into your brand, goals, and target audience." },
            { step: "02", title: "Strategy", description: "Develop a creative roadmap aligned with your objectives." },
            { step: "03", title: "Design", description: "Bring your vision to life with stunning visuals." },
            { step: "04", title: "Deliver", description: "Finalize and launch with ongoing support." },
          ].map((process, index) => (
            <div
              key={process.step}
              className="relative text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {index < 3 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary to-secondary opacity-30" />
              )}
              <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4 relative z-10">
                <span className="font-display font-bold text-xl">{process.step}</span>
              </div>
              <h4 className="font-display font-semibold text-xl mb-2">{process.title}</h4>
              <p className="text-muted-foreground text-sm">{process.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing Preview */}
      <Section>
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">
              Flexible <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you need a one-time project or ongoing support, we have options that fit your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Project Based",
                description: "Perfect for specific deliverables with defined scope.",
                price: "Custom Quote",
              },
              {
                title: "Monthly Retainer",
                description: "Ideal for ongoing design and marketing needs.",
                price: "From $2,500/mo",
                featured: true,
              },
              {
                title: "Hourly",
                description: "Flexible support for smaller tasks and revisions.",
                price: "$150/hour",
              },
            ].map((plan) => (
              <div
                key={plan.title}
                className={`rounded-2xl p-8 text-center transition-all duration-300 ${
                  plan.featured
                    ? "bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 hover:border-primary/50"
                    : "bg-muted/30 hover:bg-muted/50"
                }`}
              >
                {plan.featured && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display font-semibold text-xl mb-2">{plan.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <p className="font-display font-bold text-2xl gradient-text">{plan.price}</p>
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
              Ready to <span className="gradient-text">Get Started?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Services;
