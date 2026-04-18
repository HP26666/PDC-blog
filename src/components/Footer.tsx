import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-white/5 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-500">{t('footer.copyright')}</p>
        <p className="text-xs text-gray-600 mt-1">{t('footer.powered')}</p>
      </div>
    </footer>
  );
}
