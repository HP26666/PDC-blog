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
    <div className="pt-24 pb-16 max-w-5xl mx-auto px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 cyber-grid pointer-events-none opacity-50" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-8 w-1 rounded-full bg-gradient-to-b from-plasma to-energy" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-plasma to-energy bg-clip-text text-transparent">
              {t('sections.projects')}
            </h1>
          </div>
          <p className="text-gray-400 ml-4 pl-1">
            Featured projects and research work.
          </p>
        </motion.div>

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
                  <div className="text-5xl">{proj.icon}</div>
                  <div className="flex-1">
                    <h2 className={`text-2xl font-bold mb-3 ${proj.color === 'plasma' ? 'text-plasma' : 'text-energy'}`}>
                      {t(`projects.${proj.key}.title`)}
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-4">
                      {t(`projects.${proj.key}.desc`)}
                    </p>
                    <div className="flex gap-2 flex-wrap mb-4">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 rounded-md text-xs font-mono border ${
                            proj.color === 'plasma'
                              ? 'bg-plasma/10 text-plasma border-plasma/20'
                              : 'bg-energy/10 text-energy border-energy/20'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={proj.links.github}
                        className="px-4 py-2 rounded-lg text-sm font-medium border border-white/10 text-gray-300 hover:text-white hover:border-white/30 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                      >
                        GitHub →
                      </a>
                      <a
                        href={proj.links.demo}
                        className={`px-4 py-2 rounded-lg text-sm font-medium text-white transition-all ${
                          proj.color === 'plasma'
                            ? 'bg-plasma/20 hover:bg-plasma/30 hover:shadow-[0_0_15px_rgba(0,210,255,0.2)]'
                            : 'bg-energy/20 hover:bg-energy/30 hover:shadow-[0_0_15px_rgba(157,80,187,0.2)]'
                        }`}
                      >
                        Live Demo →
                      </a>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
