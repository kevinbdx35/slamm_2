import { useState, useEffect, useCallback } from 'react';
import {
  Home, Calendar, Users, Newspaper, Mail, HelpCircle, SprayCan,
  Sun, Moon, Menu as MenuIcon, CalendarCheck
} from 'lucide-react';
import { ASSOCONNECT_URLS } from '../config/urls.js';

const routes = [
  { label: 'Accueil', icon: Home, path: '/' },
  { label: 'Cours', icon: Calendar, path: '/cours' },
  { label: 'Équipe', icon: Users, path: '/equipe' },
  { label: 'Événements', icon: Newspaper, path: '/evenements' },
  { label: 'Contact', icon: Mail, path: '/contact' },
  { label: 'FAQ', icon: HelpCircle, path: '/faq' },
  { label: 'Hygiène', icon: SprayCan, path: '/hygiene' },
];

const bottomNavRoutes = ['/', '/cours', '/equipe', '/contact', '/faq'];

export default function Navigation() {
  const [pathname, setPathname] = useState('/');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setPathname(window.location.pathname);
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = useCallback(() => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('darkMode', JSON.stringify(newDark));
  }, [isDark]);

  const handleNav = useCallback((path) => {
    setDrawerOpen(false);
    if (path !== pathname) {
      window.location.href = path;
    }
  }, [pathname]);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <div className="overflow-x-hidden">
      {/* Mobile: Fixed top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[1300] bg-primary dark:bg-primary-dark text-white dark:text-brand-darkBg"
           style={{ paddingTop: 'env(safe-area-inset-top)', paddingLeft: 'env(safe-area-inset-left)', paddingRight: 'env(safe-area-inset-right)' }}>
        <div className="flex items-center justify-between h-16 px-4">
          <button onClick={() => setDrawerOpen(true)} aria-label="Ouvrir le menu de navigation" className="p-2">
            <MenuIcon size={24} />
          </button>
          <span className="text-sm font-bold tracking-wide cursor-pointer" onClick={() => handleNav('/')}>
            SLAMM
          </span>
          <button onClick={toggleTheme} aria-label={isDark ? 'Passer au thème clair' : 'Passer au thème sombre'} className="p-2 transition-transform duration-300 hover:scale-110">
            <span className={`inline-flex transition-transform duration-400 ${isDark ? 'rotate-180' : 'rotate-0'}`}>
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile: spacer for fixed top bar */}
      <div className="md:hidden" style={{ height: 'calc(64px + env(safe-area-inset-top))' }} />

      {/* Mobile: Drawer */}
      {drawerOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[1400]" onClick={() => setDrawerOpen(false)} />
          <div className="fixed top-0 left-0 bottom-0 w-full max-w-[320px] z-[1500] bg-surface dark:bg-surface-dark overflow-y-auto">
            <div className="p-2">
              {routes.map((item) => {
                const isActive = pathname === item.path;
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNav(item.path)}
                    className={`w-full flex items-center gap-4 px-4 py-3 text-left rounded transition-colors ${
                      isActive
                        ? 'bg-primary/10 dark:bg-primary-dark/10 text-primary dark:text-primary-dark font-bold'
                        : 'hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    <Icon size={20} className={isActive ? 'text-primary dark:text-primary-dark' : ''} />
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis">{item.label}</span>
                  </button>
                );
              })}
              <button
                onClick={toggleTheme}
                className="w-full flex items-center justify-between px-4 py-3 text-left rounded hover:bg-brand-neonGreen/10 transition-colors"
              >
                <span className="pl-9">{isDark ? 'Thème clair' : 'Thème sombre'}</span>
                <span className={`text-primary dark:text-primary-dark transition-transform duration-400 ${isDark ? 'rotate-180' : 'rotate-0'}`}>
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </span>
              </button>
              <a
                href={ASSOCONNECT_URLS.TRIAL_BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3 text-left rounded bg-brand-neonGreen/10 hover:bg-brand-neonGreen/20 transition-colors text-primary dark:text-primary-dark font-bold pl-[52px]"
              >
                Réserver un essai
              </a>
            </div>
          </div>
        </>
      )}

      {/* Mobile: Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[1300] bg-surface dark:bg-surface-dark border-t-2 border-primary dark:border-primary-dark flex"
           style={{ paddingBottom: 'env(safe-area-inset-bottom)', minHeight: 'calc(56px + env(safe-area-inset-bottom))' }}>
        {routes
          .filter((r) => bottomNavRoutes.includes(r.path))
          .map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={() => handleNav(item.path)}
                className="flex-1 flex flex-col items-center justify-center py-1.5 relative"
              >
                {isActive && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-[3px] rounded-b bg-primary dark:bg-primary-dark" />
                )}
                <span className={`transition-transform duration-300 ${isActive ? 'scale-[1.2] text-primary dark:text-primary-dark' : 'opacity-70'}`}>
                  <Icon size={20} />
                </span>
                <span className={`text-[0.75rem] mt-0.5 transition-all duration-300 ${
                  isActive ? 'font-bold text-primary dark:text-primary-dark -translate-y-0.5' : 'opacity-70'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
      </div>
      {/* Mobile: Bottom spacer */}
      <div className="md:hidden" style={{ height: 'calc(56px + env(safe-area-inset-bottom))' }} />

      {/* Desktop: App Bar */}
      <div className="hidden md:block bg-primary dark:bg-surface-dark text-white dark:text-text-dark border-b-2 border-transparent dark:border-primary-dark">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center min-h-[64px] px-4 lg:px-8">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-lg font-bold tracking-wide no-underline text-inherit hover:text-brand-neonGreen transition-colors">
              SLAMM
            </a>
          </div>

          {/* Navigation */}
          <div className="flex gap-1 items-center bg-white/10 dark:bg-white/5 rounded-[20px] p-1">
            {routes.map((item) => {
              const isActive = pathname === item.path;
              return (
                <a
                  key={item.label}
                  href={item.path}
                  className={`px-3 py-1.5 rounded-2xl text-sm font-medium no-underline transition-all duration-300 ${
                    isActive
                      ? 'bg-brand-neonGreen text-brand-darkBg'
                      : 'text-white/90 dark:text-text-dark/80 hover:bg-white/15 dark:hover:bg-white/10 hover:scale-[1.02]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right section */}
          <div className="flex justify-end items-center gap-4">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Passer au thème clair' : 'Passer au thème sombre'}
              className="p-2 transition-all duration-300 hover:scale-110 hover:text-brand-neonGreen relative overflow-hidden"
            >
              <span className={`inline-flex transition-transform duration-400 ${isDark ? 'rotate-180' : 'rotate-0'}`}>
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </span>
            </button>
            <a
              href={ASSOCONNECT_URLS.TRIAL_BOOKING}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[20px] px-3 py-1.5 text-sm font-medium no-underline border border-brand-neonGreen text-brand-neonGreen hover:bg-brand-neonGreen hover:text-brand-darkBg hover:scale-105 transition-all duration-200"
            >
              Réserver un essai
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
