import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-auto relative">
      {/* Aurora glow at footer */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-plasma/30 to-transparent" />
      <div className="absolute inset-x-0 -top-16 h-16 bg-gradient-to-t from-[var(--bg-base)] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-plasma to-energy flex items-center justify-center text-[10px] font-bold">
              FC
            </div>
            <span className="text-base font-bold bg-gradient-to-r from-plasma to-energy bg-clip-text text-transparent">
              Fusion-Core
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/HP26666"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted hover:text-fg transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://gitee.com/fjy20110"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fg-muted hover:text-fg transition-colors duration-300"
              aria-label="Gitee"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.984 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 01-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .329.266.593.593.593h5.926c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 00-.592-.593h-4.15a.592.592 0 01-.592-.592v-1.482a.593.593 0 01.593-.592h6.518a.593.593 0 01.593.592v3.556a4 4 0 01-4 4H6.704a.593.593 0 01-.593-.593V8.74a4 4 0 014-4h7.963z"/>
              </svg>
            </a>
            <a
              href="mailto:fjy20110@qq.com"
              className="text-fg-muted hover:text-fg transition-colors duration-300"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-fg-muted">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
