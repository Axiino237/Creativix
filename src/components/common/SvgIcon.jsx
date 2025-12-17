const SvgIcon = ({ name, className = "", size = 48 }) => {
  const icons = {
    design: (
      <svg viewBox="0 0 64 64" fill="none" className={className} width={size} height={size}>
        <rect x="8" y="8" width="48" height="48" rx="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="32" r="12" stroke="url(#gradDesign)" strokeWidth="2" />
        <path d="M32 20v24M20 32h24" stroke="url(#gradDesign)" strokeWidth="2" />
        <defs>
          <linearGradient id="gradDesign" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
      </svg>
    ),
    branding: (
      <svg viewBox="0 0 64 64" fill="none" className={className} width={size} height={size}>
        <path d="M32 8L8 20v24l24 12 24-12V20L32 8z" stroke="currentColor" strokeWidth="2" />
        <path d="M32 32L8 20M32 32v24M32 32l24-12" stroke="url(#gradBrand)" strokeWidth="2" />
        <circle cx="32" cy="32" r="6" fill="url(#gradBrand)" />
        <defs>
          <linearGradient id="gradBrand" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
      </svg>
    ),
    social: (
      <svg viewBox="0 0 64 64" fill="none" className={className} width={size} height={size}>
        <circle cx="20" cy="20" r="8" stroke="url(#gradSocial)" strokeWidth="2" />
        <circle cx="44" cy="20" r="8" stroke="url(#gradSocial)" strokeWidth="2" />
        <circle cx="32" cy="44" r="8" stroke="url(#gradSocial)" strokeWidth="2" />
        <path d="M26 24l6 14M38 24l-6 14M20 28v8M44 28v8" stroke="currentColor" strokeWidth="2" />
        <defs>
          <linearGradient id="gradSocial" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
      </svg>
    ),
    logo: (
      <svg viewBox="0 0 64 64" fill="none" className={className} width={size} height={size}>
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" />
        <path d="M32 16v32M20 32l12-12 12 12-12 12-12-12z" stroke="url(#gradLogo)" strokeWidth="2" />
        <defs>
          <linearGradient id="gradLogo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
      </svg>
    ),
    poster: (
      <svg viewBox="0 0 64 64" fill="none" className={className} width={size} height={size}>
        <rect x="12" y="6" width="40" height="52" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="18" y="14" width="28" height="16" rx="1" stroke="url(#gradPoster)" strokeWidth="2" />
        <path d="M18 38h28M18 44h20M18 50h24" stroke="url(#gradPoster)" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="gradPoster" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
      </svg>
    ),
    analytics: (
      <svg viewBox="0 0 64 64" fill="none" className={className} width={size} height={size}>
        <rect x="8" y="8" width="48" height="48" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M16 44l10-12 8 6 14-18" stroke="url(#gradAnalytics)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="44" r="3" fill="url(#gradAnalytics)" />
        <circle cx="26" cy="32" r="3" fill="url(#gradAnalytics)" />
        <circle cx="34" cy="38" r="3" fill="url(#gradAnalytics)" />
        <circle cx="48" cy="20" r="3" fill="url(#gradAnalytics)" />
        <defs>
          <linearGradient id="gradAnalytics" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
      </svg>
    ),
    rocket: (
      <svg viewBox="0 0 64 64" fill="none" className={className} width={size} height={size}>
        <path d="M32 8c-12 8-16 24-16 32l8 8c8 0 24-4 32-16C48 16 40 8 32 8z" stroke="url(#gradRocket)" strokeWidth="2" />
        <circle cx="36" cy="28" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M12 52l8-4M20 56l4-8" stroke="url(#gradRocket)" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="gradRocket" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
      </svg>
    ),
    target: (
      <svg viewBox="0 0 64 64" fill="none" className={className} width={size} height={size}>
        <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="32" r="16" stroke="url(#gradTarget)" strokeWidth="2" />
        <circle cx="32" cy="32" r="8" stroke="url(#gradTarget)" strokeWidth="2" />
        <circle cx="32" cy="32" r="3" fill="url(#gradTarget)" />
        <defs>
          <linearGradient id="gradTarget" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
      </svg>
    ),
    palette: (
      <svg viewBox="0 0 64 64" fill="none" className={className} width={size} height={size}>
        <path d="M32 8C18.7 8 8 18.7 8 32c0 13.3 10.7 24 24 24 2.2 0 4-1.8 4-4 0-1-.4-2-1-2.8-.6-.8-1-1.8-1-2.8 0-2.2 1.8-4 4-4h4.7c7.7 0 14-6.3 14-14 0-11.8-11.2-20.4-24.7-20.4z" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="26" r="4" fill="hsl(var(--primary))" />
        <circle cx="32" cy="18" r="4" fill="hsl(var(--secondary))" />
        <circle cx="44" cy="26" r="4" fill="hsl(var(--accent))" />
        <circle cx="26" cy="38" r="4" fill="url(#gradPalette)" />
        <defs>
          <linearGradient id="gradPalette" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
      </svg>
    ),
    mail: (
      <svg viewBox="0 0 64 64" fill="none" className={className} width={size} height={size}>
        <rect x="8" y="14" width="48" height="36" rx="4" stroke="currentColor" strokeWidth="2" />
        <path d="M8 18l24 16 24-16" stroke="url(#gradMail)" strokeWidth="2" />
        <defs>
          <linearGradient id="gradMail" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
      </svg>
    ),
    user: (
      <svg viewBox="0 0 64 64" fill="none" className={className} width={size} height={size}>
        <circle cx="32" cy="20" r="12" stroke="url(#gradUser)" strokeWidth="2" />
        <path d="M12 56c0-11 9-20 20-20s20 9 20 20" stroke="currentColor" strokeWidth="2" />
        <defs>
          <linearGradient id="gradUser" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
      </svg>
    ),
    message: (
      <svg viewBox="0 0 64 64" fill="none" className={className} width={size} height={size}>
        <path d="M8 12h48v36H24l-12 8v-8H8V12z" stroke="currentColor" strokeWidth="2" />
        <path d="M18 28h28M18 36h20" stroke="url(#gradMsg)" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="gradMsg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 64 64" fill="none" className={className} width={size} height={size}>
        <path d="M14 10c-2 0-4 2-4 4v4c0 22 18 40 40 40h4c2 0 4-2 4-4v-8c0-2-2-4-4-4h-8c-2 0-4 2-4 4v2c-10-4-18-12-22-22h2c2 0 4-2 4-4v-8c0-2-2-4-4-4h-8z" stroke="url(#gradPhone)" strokeWidth="2" />
        <defs>
          <linearGradient id="gradPhone" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--secondary))" />
          </linearGradient>
        </defs>
      </svg>
    ),
  };

  return icons[name] || null;
};

export default SvgIcon;