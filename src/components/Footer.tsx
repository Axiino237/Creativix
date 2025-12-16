import { Link } from "react-router-dom";
import SvgIcon from "./SvgIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/30 pt-16 pb-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">C</span>
              </div>
              <span className="font-display font-bold text-xl gradient-text">Creativix</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Transforming brands through innovative design and strategic social media marketing. 
              We bring your vision to life with creativity and precision.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glow-primary transition-all duration-300">
                <SvgIcon name="social" size={20} className="text-foreground" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:glow-primary transition-all duration-300">
                <SvgIcon name="mail" size={20} className="text-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Portfolio", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-foreground hover:gradient-text transition-all duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {["Graphic Design", "Logo Design", "Branding", "Social Media", "Print Design"].map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground hover:text-foreground hover:gradient-text transition-all duration-300 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Creativix. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Developer Credit */}
        <div className="mt-6 text-center">
          <p className="text-muted-foreground/60 text-xs">
            Developed by{" "}
            <a
              href="https://axiino.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/80 hover:text-primary hover:underline transition-all duration-300"
            >
              Axiino
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
