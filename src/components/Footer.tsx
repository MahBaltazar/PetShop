import { Instagram, Facebook, MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS, waLink, WA_MESSAGES } from '@/data/business';

const NAV = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre nós', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Contato', href: '#contato' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-cream-100/80">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-100/70">
              {BUSINESS.tagline}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={waLink(WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-800 text-accent-300 transition-colors hover:bg-accent-400 hover:text-primary-900"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-800 text-accent-300 transition-colors hover:bg-accent-400 hover:text-primary-900"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-800 text-accent-300 transition-colors hover:bg-accent-400 hover:text-primary-900"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                aria-label="E-mail"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-800 text-accent-300 transition-colors hover:bg-accent-400 hover:text-primary-900"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-accent-400">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-cream-100/70 transition-colors hover:text-accent-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-accent-400">
              Contato
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" />
                <a href={waLink(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="text-cream-100/70 transition-colors hover:text-accent-300">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" />
                <a href={`mailto:${BUSINESS.email}`} className="text-cream-100/70 transition-colors hover:text-accent-300">
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" />
                <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-cream-100/70 transition-colors hover:text-accent-300">
                  {BUSINESS.address}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-accent-400">
              Horário
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {BUSINESS.hours.map((h) => (
                <li key={h.day} className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-300/70" />
                  <span>
                    <span className="text-cream-100/90">{h.day}</span>
                    <span className="ml-2 text-cream-100/60">{h.time}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-800 pt-8 text-center text-xs text-cream-100/50 sm:flex-row sm:text-left">
          <p>
            © {year} {BUSINESS.name}. Todos os direitos reservados.
          </p>
          <p>Itapetininga — São Paulo</p>
        </div>
      </div>
    </footer>
  );
}
