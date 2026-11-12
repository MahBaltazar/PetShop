import { useEffect, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

interface Shot {
  src: string;
  alt: string;
  span?: 'wide' | 'tall';
}

const GALLERY: Shot[] = [
  {
    src: 'https://images.pexels.com/photos/19145874/pexels-photo-19145874.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
    alt: 'Poodle aguardando atendimento no salão',
    span: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/6222967/pexels-photo-6222967.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
    alt: 'Filhote Yorkshire pronto para o banho',
  },
  {
    src: 'https://images.pexels.com/photos/3712095/pexels-photo-3712095.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
    alt: 'Gato tabby bem cuidado',
  },
  {
    src: 'https://images.pexels.com/photos/19145895/pexels-photo-19145895.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
    alt: 'Banho em cão com cuidado profissional',
    span: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/12045863/pexels-photo-12045863.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
    alt: 'Pomeranian com pelagem bem cuidada',
  },
  {
    src: 'https://images.pexels.com/photos/422212/pexels-photo-422212.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
    alt: 'Filhote Shih Tzu após cuidado de estética',
  },
  {
    src: 'https://images.pexels.com/photos/6816855/pexels-photo-6816855.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000',
    alt: 'Gato recebendo grooming profissional',
    span: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/13062569/pexels-photo-13062569.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
    alt: 'Cão feliz durante o banho',
  },
  {
    src: 'https://images.pexels.com/photos/11380178/pexels-photo-11380178.jpeg?auto=compress&cs=tinysrgb&h=600&w=600',
    alt: 'Pomeranian durante tosa',
  },
];

export function Gallery() {
  const { ref, visible } = useReveal();
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () => setLightbox((i) => (i === null ? null : (i - 1 + GALLERY.length) % GALLERY.length)),
    []
  );
  const next = useCallback(
    () => setLightbox((i) => (i === null ? null : (i + 1) % GALLERY.length)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, close, prev, next]);

  return (
    <section id="galeria" className="relative bg-cream-100 py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Galeria</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary-900 sm:text-4xl lg:text-5xl">
            Momentos de cuidado e carinho
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-primary-600">
            Uma amostra dos serviços, dos animais atendidos e do ambiente preparado para o seu pet.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4 ${
            visible ? 'is-visible' : ''
          } reveal`}
        >
          {GALLERY.map((shot, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-2xl shadow-soft focus:outline-none focus:ring-2 focus:ring-accent-400 ${
                shot.span === 'wide' ? 'col-span-2 row-span-1 aspect-[5/4] md:row-span-2 md:aspect-auto' : 'aspect-square'
              }`}
              aria-label={`Ampliar foto: ${shot.alt}`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-50/90 text-primary-800 shadow-soft">
                  <ZoomIn className="h-5 w-5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-primary-950/90 backdrop-blur-sm animate-fadeUp"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cream-50 transition-colors hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Anterior"
            className="absolute left-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cream-50 transition-colors hover:bg-white/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <figure className="max-w-4xl px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={GALLERY[lightbox].src}
              alt={GALLERY[lightbox].alt}
              className="max-h-[80vh] w-auto rounded-2xl object-contain shadow-2xl"
            />
            <figcaption className="mt-4 text-center text-sm text-cream-100/80">
              {GALLERY[lightbox].alt}
            </figcaption>
          </figure>
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Próxima"
            className="absolute right-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-cream-50 transition-colors hover:bg-white/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
