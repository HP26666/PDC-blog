import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/notes', label: t('nav.notes') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/teaching', label: t('nav.teaching') },
  ];

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-plasma to-energy flex items-center justify-center text-xs font-bold">
              FC
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-plasma to-energy bg-clip-text text-transparent">
              Fusion-Core
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    active
                      ? 'text-plasma bg-plasma/10 glow-plasma'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              onClick={toggleLang}
              className="ml-4 px-3 py-1.5 rounded-lg text-sm font-mono font-bold border border-energy/40 text-energy hover:bg-energy/10 transition-all duration-300"
            >
              {t('lang.toggle')}
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass border-t border-white/5"
        >
          <div className="px-4 py-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-white hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="w-full text-left px-3 py-2 rounded-lg text-sm font-mono font-bold text-energy hover:bg-energy/10"
            >
              {t('lang.toggle')}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
