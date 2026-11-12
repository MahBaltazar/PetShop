export const BUSINESS = {
  name: 'Bom Amigo Estética Animal',
  shortName: 'Bom Amigo',
  tagline:
    'Banhos, tosa, estética e atendimento com atenção e respeito, em ambiente seguro e acolhedor, pensado para o bem-estar do seu pet.',
  address: 'Rua Lopes de Oliveira, 125 – Centro, Itapetininga – SP',
  phoneDisplay: '(15) 98827-9316',
  whatsappNumber: '5515988279316',
  whatsappUrl: 'https://wa.me/5515988279316',
  catalogUrl: 'https://wa.me/c/5515988279316',
  email: 'contato@bomamigopetshop.com.br',
  instagram: 'https://instagram.com/bomamigo_bt',
  instagramHandle: '@bomamigo_bt',
  facebook: 'https://facebook.com/banhoetosabomamigo',
  facebookHandle: 'BANHOETOSABOMAMIGO',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+Lopes+de+Oliveira+125+Centro+Itapetininga+SP',
  hours: [
    { day: 'Segunda-feira', time: '08h30 às 18h' },
    { day: 'Terça-feira', time: '08h30 às 18h' },
    { day: 'Quarta-feira', time: '08h30 às 18h' },
    { day: 'Quinta-feira', time: '08h30 às 18h' },
    { day: 'Sexta-feira', time: '08h30 às 18h' },
    { day: 'Sábado', time: '09h às 13h' },
    { day: 'Domingo', time: 'Fechado' },
  ],
} as const;

export function waLink(message: string) {
  return `https://wa.me/${BUSINESS.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  general:
    'Olá! Conheci o Bom Amigo Estética Animal pelo site e gostaria de mais informações.',
  schedule:
    'Olá! Conheci o Bom Amigo Estética Animal pelo site e gostaria de consultar a disponibilidade para agendar um atendimento para meu pet.',
  service:
    'Olá! Conheci o Bom Amigo Estética Animal pelo site e gostaria de mais informações sobre os serviços de banho, tosa e estética.',
  products:
    'Olá! Conheci o Bom Amigo Estética Animal pelo site e gostaria de saber mais sobre os produtos disponíveis, incluindo rações.',
  bath:
    'Olá! Vi o serviço de banho no site do Bom Amigo Estética Animal e gostaria de consultar mais informações e disponibilidade.',
  grooming:
    'Olá! Vi o serviço de tosa no site do Bom Amigo Estética Animal e gostaria de consultar mais informações e disponibilidade.',
  aesthetics:
    'Olá! Vi o serviço de estética animal no site do Bom Amigo Estética Animal e gostaria de consultar mais informações e disponibilidade.',
};
