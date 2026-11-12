import { MessageCircle, Sparkles, ChevronRight, Star } from 'lucide-react';
import { BUSINESS, waLink, WA_MESSAGES } from '@/data/business';

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/30265696/pexels-photo-30265696.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1900"
          alt="Cão bem cuidado e feliz após banho e tosa"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-900/70 to-primary-800/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />
      </div>

      {/* Decorative gold ring */}
      <div className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full border border-accent-400/20 animate-floatY" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-64 w-64 rounded-full border border-accent-400/10" />

      <div className="container-x relative flex min-h-screen flex-col justify-center pt-28 pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-400/40 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-accent-300 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5" />
            Estética Animal em Itapetininga
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.15] text-cream-50 sm:text-5xl lg:text-6xl">
            Seu pet merece cuidado, carinho e{' '}
            <span className="bg-gradient-to-r from-accent-300 to-accent-500 bg-clip-text text-transparent">
              atenção especial
            </span>
            .
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-100/90">
            {BUSINESS.tagline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#servicos" className="btn-gold">
              Conheça nossos serviços
              <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href={waLink(WA_MESSAGES.schedule)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream-100/30 bg-white/5 px-6 py-3 text-sm font-semibold text-cream-50 backdrop-blur-sm transition-all duration-300 hover:border-accent-400/60 hover:bg-white/10"
            >
              <MessageCircle className="h-4 w-4 text-accent-300" />
              Agende pelo WhatsApp
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent-400 text-accent-400"
                  />
                ))}
              </div>
              <span className="text-sm text-cream-100/80">
                Atenção e respeito ao seu pet
              </span>
            </div>
            <div className="hidden h-8 w-px bg-cream-100/20 sm:block" />
            <div className="text-sm text-cream-100/80">
              <span className="font-semibold text-accent-300">Seg–Sex</span> 08h30 às 18h
              <span className="mx-2 text-cream-100/30">•</span>
              <span className="font-semibold text-accent-300">Sáb</span> 09h às 13h
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#sobre"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-cream-100/60 transition-colors hover:text-accent-300 sm:flex"
        aria-label="Rolar para baixo"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Saiba mais</span>
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-cream-100/30 p-1">
          <div className="h-1.5 w-1 animate-floatY rounded-full bg-accent-400" />
        </div>
      </a>
    </section>
  );
}
