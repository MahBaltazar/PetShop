interface LogoProps {
  className?: string;
  variant?: 'full' | 'mark';
  light?: boolean;
}

export function Logo({ className = '', variant = 'full', light = false }: LogoProps) {
  const primary = light ? '#faf5ec' : '#4a1d6e';
  const gold = '#d4af37';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className="h-11 w-11 shrink-0 drop-shadow-sm"
        aria-hidden="true"
      >
        <rect width="64" height="64" rx="16" fill={primary} />
        <g fill={gold}>
          <ellipse cx="32" cy="45" rx="12" ry="9" />
          <circle cx="20" cy="29" r="6" />
          <circle cx="44" cy="29" r="6" />
          <circle cx="12" cy="37" r="4.5" />
          <circle cx="52" cy="37" r="4.5" />
        </g>
        <circle cx="28" cy="43" r="1.6" fill={primary} />
        <circle cx="36" cy="43" r="1.6" fill={primary} />
      </svg>
      {variant === 'full' && (
        <div className="leading-none">
          <div
            className="font-display text-lg font-bold tracking-tight"
            style={{ color: primary }}
          >
            Bom Amigo
          </div>
          <div
            className="text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: gold }}
          >
            Estética Animal
          </div>
        </div>
      )}
    </div>
  );
}
