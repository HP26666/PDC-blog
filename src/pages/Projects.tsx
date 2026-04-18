import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      key: 'medDualBrain',
      icon: '🧠',
      color: 'plasma' as const,
      tags: ['RAG', 'Wan2.2-S2V', 'Digital Human', 'Multi-modal', 'Medical AI'],
      links: { github: '#', demo: '#' },
    },
    {
      key: 'virtualTryon',
      icon: '👗',
      color: 'energy' as const,
      tags: ['3D Modeling', 'Cloth Simulation', 'WebGL', 'SaaS', 'Physics Engine'],
      links: { github: '#', demo: '#' },
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
        className="text-gray-400 mb-10"
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
                      className="px-4 py-2 rounded-lg text-sm font-medium border border-white/10 text-gray-300 hover:text-white hover:border-white/20 transition-all"
                    >
                      GitHub →
                    </a>
                    <a
                      href={proj.links.demo}
                      className={`px-4 py-2 rounded-lg text-sm font-medium text-white transition-all ${
                        proj.color === 'plasma'
                          ? 'bg-plasma/20 hover:bg-plasma/30'
                          : 'bg-energy/20 hover:bg-energy/30'
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
  );
}
