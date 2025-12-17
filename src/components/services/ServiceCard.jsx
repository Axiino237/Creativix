import { Check } from "lucide-react";

const ServiceCard = ({ service, index }) => {
  const IconComponent = service.icon;
  
  return (
    <div
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
};

export default ServiceCard;