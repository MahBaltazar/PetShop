import { Heart, Shield, PawPrint, Sparkles } from 'lucide-react';
import { BUSINESS } from '@/data/business';
import { useReveal } from '@/hooks/useReveal';

const VALUES = [
  {
    icon: Heart,
    title: 'Cuidado',
    desc: 'Cada atendimento é feito com atenção individual ao seu pet.',
  },
  {
    icon: Shield,
    title: 'Respeito',
    desc: 'Ambiente seguro e acolhedor, pensado para o bem-estar animal.',
  },
  {
    icon: Sparkles,
    title: 'Estética',
    desc: 'Banhos e tosa que valorizam a aparência e o conforto do seu amigo.',
  },
  {
    icon: PawPrint,
    title: 'Bem-estar',
    desc: 'Experiência pensada para o conforto desde a chegada até a saída.',
  },
];

export function About() {
  const { ref, visible } = useReveal();

  return (
    <section id="sobre" className="relative bg-cream-50 py-24 lg:py-32">
      <div className="container-x">
        <div
          ref={ref}
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
            visible ? 'is-visible' : ''
          } reveal`}
        >
          {/* Images */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-soft">
              <img
                src="https://images.pexels.com/photos/19145895/pexels-photo-19145895.jpeg?auto=compress&cs=tinysrgb&h=800&w=900"
                alt="Profissional do Bom Amigo banhando um cão com cuidado"
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 hidden w-48 overflow-hidden rounded-2xl border-4 border-cream-50 shadow-soft sm:block lg:w-60">
              <img
                src="https://images.pexels.com/photos/6816855/pexels-photo-6816855.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
                alt="Gato recebendo cuidados de estética"
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Gold badge */}
            <div className="absolute -left-4 -top-6 flex h-24 w-24 items-center justify-center rounded-full bg-accent-400 shadow-gold lg:h-28 lg:w-28">
              <div className="text-center font-display text-primary-900">
                <div className="text-2xl font-bold leading-none">Pet</div>
                <div className="text-[9px] font-semibold uppercase tracking-widest">com carinho</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="section-eyebrow">Sobre nós</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary-900 sm:text-4xl lg:text-5xl">
              Cuidado feito com{' '}
              <span className="text-accent-600">respeito e atenção</span> ao seu pet
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-700">
              {BUSINESS.tagline}
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {VALUES.map((v) => (
                <div
                  key={v.title}
                  className="group flex gap-4 rounded-2xl border border-primary-100 bg-white p-5 transition-all duration-300 hover:border-accent-300 hover:shadow-soft"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors group-hover:bg-accent-400 group-hover:text-primary-900">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-primary-900">
                      {v.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-primary-600">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
