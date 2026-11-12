import { useEffect, useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
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

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 shadow-soft backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <a href="#inicio" aria-label={`${BUSINESS.name} — início`}>
          <Logo light={!scrolled} />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? 'text-primary-800 hover:bg-primary-50'
                  : 'text-cream-50 hover:bg-white/10'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={waLink(WA_MESSAGES.schedule)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <MessageCircle className="h-4 w-4" />
            Agende pelo WhatsApp
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
            scrolled ? 'text-primary-800 bg-primary-50' : 'text-cream-50 bg-white/10'
          }`}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-cream-50 transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[480px] opacity-100 shadow-soft' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-primary-800 transition-colors hover:bg-primary-50"
            >
              {item.label}
            </a>
          ))}
          <a
            href={waLink(WA_MESSAGES.schedule)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-gold mt-2 w-full"
          >
            <MessageCircle className="h-4 w-4" />
            Agende pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
