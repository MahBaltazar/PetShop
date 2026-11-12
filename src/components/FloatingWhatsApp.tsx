import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS, waLink, WA_MESSAGES } from '@/data/business';

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={waLink(WA_MESSAGES.schedule)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agende pelo WhatsApp"
      className={`group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-[0_8px_30px_-6px_rgba(37,211,102,0.6)] transition-all duration-500 hover:scale-105 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-16 opacity-0'
      }`}
    >
      <span className="relative flex h-10 w-10 items-center justify-center">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
        <MessageCircle className="relative h-6 w-6" />
      </span>
      <span className="hidden text-sm font-semibold sm:inline">Agende agora</span>
    </a>
  );
}
