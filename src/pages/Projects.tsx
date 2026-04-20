import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      key: 'bookManagement',
      icon: '📚',
      color: 'plasma' as const,
      tags: ['Spring Boot 3', 'Vue 3', 'PostgreSQL', 'Uni-App', 'Docker'],
      links: { github: 'https://github.com/HP26666/book-management-system', gitee: undefined as string | undefined, demo: undefined as string | undefined },
    },
    {
      key: 'eventManagement',
      icon: '🎉',
      color: 'energy' as const,
      tags: ['Spring Boot', 'Vue 3', 'Element Plus', 'Uni-App', 'MyBatis-Plus'],
      links: { github: undefined as string | undefined, gitee: 'https://gitee.com/fjy20110/event_management_system_jsjsjds', demo: undefined as string | undefined },
    },
    {
      key: 'studentWorker',
      icon: '🎓',
      color: 'plasma' as const,
      tags: ['Spring Boot 3', 'Vue 3', 'PostgreSQL', 'Docker', 'Element Plus'],
      links: { github: undefined as string | undefined, gitee: 'https://gitee.com/fjy20110/jxstnu_-student_-worker', demo: undefined as string | undefined },
    },
  ];

  return (
    <div className="pt-24 pb-16 max-w-5xl mx-auto px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-2 bg-gradient-to-r from-plasma to-energy bg-clip-text text-transparent"
      >
        {t('sections.projects')}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-fg-secondary mb-10"
      >
        Featured projects and research work.
      </motion.p>

      <div className="grid gap-8">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <GlassCard glowColor={proj.color} className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Left gradient vertical line */}
                <div className={`hidden md:block w-[3px] rounded-full self-stretch ${
                  proj.color === 'plasma'
                    ? 'bg-gradient-to-b from-plasma to-energy'
                    : 'bg-gradient-to-b from-energy to-plasma'
                }`} />
                <div className="text-5xl">{proj.icon}</div>
                <div className="flex-1">
                  <h2 className={`text-2xl font-bold mb-3 ${proj.color === 'plasma' ? 'text-plasma' : 'text-energy'}`}>
                    {t(`projects.${proj.key}.title`)}
                  </h2>
                  <p className="text-fg-secondary leading-relaxed mb-4 line-clamp-3" title={t(`projects.${proj.key}.desc`)}>
                    {t(`projects.${proj.key}.desc`)}
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 rounded-md text-xs font-mono border transition-colors duration-200 ${
                          proj.color === 'plasma'
                            ? 'bg-plasma/8 text-plasma border-plasma/20 hover:bg-plasma/20'
                            : 'bg-energy/8 text-energy border-energy/20 hover:bg-energy/20'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {proj.links.github && (
                      <a
                        href={proj.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium border border-[var(--border-glass)] text-fg-secondary hover:text-fg hover:border-[var(--border-glass-hover)] transition-all"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                        GitHub →
                      </a>
                    )}
                    {proj.links.gitee && (
                      <a
                        href={proj.links.gitee}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium border border-[var(--border-glass)] text-fg-secondary hover:text-fg hover:border-[var(--border-glass-hover)] transition-all"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M11.984 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 01-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .329.266.593.593.593h5.926c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 00-.592-.593h-4.15a.592.592 0 01-.592-.592v-1.482a.593.593 0 01.593-.592h6.518a.593.593 0 01.593.592v3.556a4 4 0 01-4 4H6.704a.593.593 0 01-.593-.593V8.74a4 4 0 014-4h7.963z"/></svg>
                        Gitee →
                      </a>
                    )}
                    {proj.links.demo && (
                      <a
                        href={proj.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2 rounded-lg text-sm font-medium text-white transition-all ${
                          proj.color === 'plasma'
                            ? 'bg-plasma/20 hover:bg-plasma/30'
                            : 'bg-energy/20 hover:bg-energy/30'
                        }`}
                      >
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
