import { MessageCircle, Droplets, Scissors, Sparkles } from 'lucide-react';
import { waLink, WA_MESSAGES } from '@/data/business';
import { useReveal } from '@/hooks/useReveal';

const SERVICES = [
  {
    icon: Droplets,
    name: 'Banho',
    image:
      'https://images.pexels.com/photos/19145897/pexels-photo-19145897.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    description:
      'Cuidado e higiene para o seu animal, com produtos adequados e atenção a cada detalhe para deixar o pet limpo, cheiroso e confortável.',
    message: WA_MESSAGES.bath,
  },
  {
    icon: Scissors,
    name: 'Tosa',
    image:
      'https://images.pexels.com/photos/19145874/pexels-photo-19145874.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    description:
      'Cuidados estéticos que mantêm a pelagem bem cuidada, valorizando a aparência e o bem-estar do seu melhor amigo.',
    message: WA_MESSAGES.grooming,
  },
  {
    icon: Sparkles,
    name: 'Estética Animal',
    image:
      'https://images.pexels.com/photos/3299907/pexels-photo-3299907.jpeg?auto=compress&cs=tinysrgb&h=600&w=800',
    description:
      'Cuidado com a aparência, o conforto e o bem-estar dos pets, em um ambiente preparado para receber cada animal com atenção.',
    message: WA_MESSAGES.aesthetics,
  },
];

export function Services() {
  const { ref, visible } = useReveal();

  return (
    <section id="servicos" className="relative bg-white py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Nossos serviços</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary-900 sm:text-4xl lg:text-5xl">
            Tudo para o cuidado do seu melhor amigo
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-primary-600">
            Banhos, tosa e estética com atenção e respeito, em ambiente seguro e acolhedor.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3 ${
            visible ? 'is-visible' : ''
          } reveal`}
        >
          {SERVICES.map((s) => (
            <article
              key={s.name}
              className="card-hover group flex flex-col overflow-hidden rounded-3xl border border-primary-100 bg-cream-50"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={s.image}
                  alt={`${s.name} no Bom Amigo Estética Animal`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-950/50 to-transparent" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cream-50/95 text-primary-700 shadow-soft backdrop-blur-sm">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="absolute bottom-4 left-5 font-display text-2xl font-bold text-cream-50">
                  {s.name}
                </h3>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="flex-1 text-sm leading-relaxed text-primary-700">
                  {s.description}
                </p>
                <a
                  href={waLink(s.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-primary-200 px-5 py-2.5 text-sm font-semibold text-primary-800 transition-all duration-300 hover:border-accent-400 hover:bg-accent-400 hover:text-primary-900"
                >
                  <MessageCircle className="h-4 w-4" />
                  Consultar pelo WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
