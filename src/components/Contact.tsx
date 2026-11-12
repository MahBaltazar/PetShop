import { useState, type FormEvent } from 'react';
import { MessageCircle, Send, CheckCircle2, CalendarClock } from 'lucide-react';
import { BUSINESS, waLink, WA_MESSAGES } from '@/data/business';
import { useReveal } from '@/hooks/useReveal';

const PET_TYPES = ['Cão', 'Gato', 'Outro'];
const SERVICE_OPTIONS = ['Banho', 'Tosa', 'Estética Animal', 'Banho e Tosa'];

export function Contact() {
  const { ref, visible } = useReveal();
  const [form, setForm] = useState({
    tutor: '',
    pet: '',
    type: PET_TYPES[0],
    service: SERVICE_OPTIONS[0],
    date: '',
    time: '',
    notes: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      'Olá! Gostaria de solicitar um agendamento pelo site do Bom Amigo Estética Animal.',
      '',
      `*Tutor:* ${form.tutor}`,
      `*Pet:* ${form.pet}`,
      `*Tipo de animal:* ${form.type}`,
      `*Serviço desejado:* ${form.service}`,
      `*Data de preferência:* ${form.date || '—'}`,
      `*Horário de preferência:* ${form.time || '—'}`,
      `*Observações:* ${form.notes || '—'}`,
      '',
      'Aguardo a confirmação do atendimento. Obrigado!',
    ];
    window.open(waLink(lines.join('\n')), '_blank', 'noopener,noreferrer');
  };

  const field =
    'w-full rounded-xl border border-primary-200 bg-white px-4 py-3 text-sm text-primary-900 placeholder:text-primary-400 transition-colors focus:border-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400/30';

  return (
    <section id="contato" className="relative bg-white py-24 lg:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Contato e agendamento</span>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-primary-900 sm:text-4xl lg:text-5xl">
            Agende o cuidado do seu pet
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-primary-600">
            Preencha os dados abaixo e enviamos sua solicitação direto para o nosso WhatsApp.
            A confirmação do horário será feita pelo estabelecimento.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-14 grid gap-8 lg:grid-cols-5 ${
            visible ? 'is-visible' : ''
          } reveal`}
        >
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-primary-100 bg-cream-50 p-6 shadow-soft sm:p-8 lg:col-span-3"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-800 text-accent-300">
                <CalendarClock className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-primary-900">
                  Solicitação de agendamento
                </h3>
                <p className="text-sm text-primary-600">
                  Envio via WhatsApp — sem compromisso de horário.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="tutor" className="mb-1.5 block text-sm font-medium text-primary-800">
                  Nome do tutor *
                </label>
                <input
                  id="tutor"
                  required
                  value={form.tutor}
                  onChange={(e) => setForm({ ...form, tutor: e.target.value })}
                  className={field}
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label htmlFor="pet" className="mb-1.5 block text-sm font-medium text-primary-800">
                  Nome do pet *
                </label>
                <input
                  id="pet"
                  required
                  value={form.pet}
                  onChange={(e) => setForm({ ...form, pet: e.target.value })}
                  className={field}
                  placeholder="Nome do seu pet"
                />
              </div>
              <div>
                <label htmlFor="type" className="mb-1.5 block text-sm font-medium text-primary-800">
                  Tipo de animal
                </label>
                <select
                  id="type"
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className={field}
                >
                  {PET_TYPES.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-primary-800">
                  Serviço desejado
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className={field}
                >
                  {SERVICE_OPTIONS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="date" className="mb-1.5 block text-sm font-medium text-primary-800">
                  Data de preferência
                </label>
                <input
                  id="date"
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="time" className="mb-1.5 block text-sm font-medium text-primary-800">
                  Horário de preferência
                </label>
                <input
                  id="time"
                  type="time"
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className={field}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="notes" className="mb-1.5 block text-sm font-medium text-primary-800">
                  Observações adicionais
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className={field}
                  placeholder="Conte-nos detalhes sobre o seu pet ou o atendimento desejado."
                />
              </div>
            </div>

            <button type="submit" className="btn-gold mt-6 w-full">
              <Send className="h-4 w-4" />
              Enviar solicitação pelo WhatsApp
            </button>

            <p className="mt-4 flex items-start gap-2 text-xs text-primary-500">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
              O envio representa uma solicitação. A confirmação do agendamento será feita pelo estabelecimento.
            </p>
          </form>

          {/* Info + map */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="rounded-3xl border border-primary-100 bg-cream-50 p-6 shadow-soft">
              <h3 className="font-display text-xl font-bold text-primary-900">Fale conosco</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <a href={waLink(WA_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-700 transition-colors hover:text-accent-600">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-700"><MessageCircle className="h-5 w-5" /></span>
                    <span>
                      <span className="block text-xs text-primary-500">WhatsApp / Telefone</span>
                      <span className="font-semibold">{BUSINESS.phoneDisplay}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-primary-700 transition-colors hover:text-accent-600">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-700">📍</span>
                    <span>
                      <span className="block text-xs text-primary-500">Endereço</span>
                      <span className="font-semibold">{BUSINESS.address}</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-3 text-primary-700 transition-colors hover:text-accent-600">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-700">✉️</span>
                    <span>
                      <span className="block text-xs text-primary-500">E-mail</span>
                      <span className="font-semibold">{BUSINESS.email}</span>
                    </span>
                  </a>
                </li>
              </ul>

              <div className="mt-5 flex gap-3">
                <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-xl border border-primary-200 px-3 py-2.5 text-center text-xs font-semibold text-primary-800 transition-colors hover:border-accent-400 hover:bg-accent-400 hover:text-primary-900">
                  Instagram
                </a>
                <a href={BUSINESS.facebook} target="_blank" rel="noopener noreferrer" className="flex-1 rounded-xl border border-primary-200 px-3 py-2.5 text-center text-xs font-semibold text-primary-800 transition-colors hover:border-accent-400 hover:bg-accent-400 hover:text-primary-900">
                  Facebook
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="rounded-3xl border border-primary-100 bg-cream-50 p-6 shadow-soft">
              <h3 className="font-display text-xl font-bold text-primary-900">Horário de funcionamento</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {BUSINESS.hours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between border-b border-primary-100 pb-2 last:border-0">
                    <span className="text-primary-700">{h.day}</span>
                    <span className={`font-medium ${h.time === 'Fechado' ? 'text-primary-400' : 'text-primary-900'}`}>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-primary-100 shadow-soft">
          <iframe
            title="Mapa — Bom Amigo Estética Animal"
            src="https://maps.google.com/maps?width=100%25&height=380&hl=pt-BR&q=Rua%20Lopes%20de%20Oliveira%2C%20125%20-%20Centro%2C%20Itapetininga%20-%20SP&t=&z=16&ie=UTF8&iwloc=B&output=embed"
            className="h-[380px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-4 text-center">
          <a href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-purple">
            🧭 Como chegar
          </a>
        </div>
      </div>
    </section>
  );
}
