import { ShoppingBag, ArrowRight, Bone } from 'lucide-react';
import { BUSINESS, waLink, WA_MESSAGES } from '@/data/business';
import { useReveal } from '@/hooks/useReveal';

const CATEGORIES = [
  {
    name: 'Rações',
    image:
      'https://images.pexels.com/photos/8434633/pexels-photo-8434633.jpeg?auto=compress&cs=tinysrgb&h=500&w=600',
    desc: 'Opções de ração para diferentes necessidades do seu pet.',
  },
  {
    name: 'Acessórios',
    image:
      'https://images.pexels.com/photos/37559533/pexels-photo-37559533.jpeg?auto=compress&cs=tinysrgb&h=500&w=600',
    desc: 'Coleiras, potes e itens para o dia a dia.',
  },
  {
    name: 'Pet Shop',
    image:
      'https://images.pexels.com/photos/39283097/pexels-photo-39283097.jpeg?auto=compress&cs=tinysrgb&h=500&w=600',
    desc: 'Produtos variados para o cuidado do seu animal.',
  },
];

export function Products() {
  const { ref, visible } = useReveal();

  return (
    <section id="produtos" className="relative bg-primary-950 py-24 lg:py-32 overflow-hidden">
      {/* decorative */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full border border-accent-400/10" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-primary-800/40 blur-3xl" />

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow text-accent-400">Produtos</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
            Produtos para o seu melhor amigo
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-cream-100/80">
            Trabalhamos com ração e uma seleção de produtos para o cuidado do seu pet.
            Confira nosso catálogo completo pelo WhatsApp.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${
            visible ? 'is-visible' : ''
          } reveal`}
        >
          {CATEGORIES.map((c) => (
            <article
              key={c.name}
              className="card-hover group relative overflow-hidden rounded-3xl border border-primary-700/40"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center gap-2 text-accent-300">
                    <Bone className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-widest">Categoria</span>
                  </div>
                  <h3 className="mt-1 font-display text-2xl font-bold text-cream-50">{c.name}</h3>
                  <p className="mt-1 text-sm text-cream-100/70">{c.desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="max-w-lg text-sm text-cream-100/70">
            A vitrine acima é uma amostra. Para ver todos os produtos disponíveis, marcas e
            disponibilidade, acesse nosso catálogo completo.
          </p>
          <a
            href={BUSINESS.catalogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <ShoppingBag className="h-4 w-4" />
            Confira nosso catálogo completo
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={waLink(WA_MESSAGES.products)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-accent-300 underline-offset-4 hover:underline"
          >
            Ou consulte os produtos pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
