import { useState, useEffect } from 'react';
import { CalendarCheck } from 'lucide-react';
import { ASSOCONNECT_URLS } from '../config/urls.js';

export default function FloatingTrialButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-20 md:bottom-6 right-6 z-[1300] transition-all duration-300 ${visible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
      <a
        href={ASSOCONNECT_URLS.TRIAL_BOOKING}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Réserver un cours d'essai"
        title="Réserver un cours d'essai"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-primary dark:bg-primary-dark text-white dark:text-brand-darkBg shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200"
      >
        <CalendarCheck size={24} />
      </a>
    </div>
  );
}
