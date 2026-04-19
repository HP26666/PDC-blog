import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative border-t border-white/5 py-10 mt-auto overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-[1px] bg-gradient-to-r from-transparent via-plasma/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">{t('footer.copyright')}</p>
            <p className="text-xs text-gray-600 mt-1">{t('footer.powered')}</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-gray-600">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>SYSTEM ONLINE</span>
            </div>
            <div className="text-xs font-mono text-gray-600">
              v2.0.0
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
