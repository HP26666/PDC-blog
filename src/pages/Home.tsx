import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import FusionCore from '../components/FusionCore';
import Typewriter from '../components/Typewriter';
import GlassCard from '../components/GlassCard';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <FusionCore />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 mt-[-60px]">
          <motion.p
            {...fadeUp}
            className="text-sm md:text-base text-plasma/80 font-mono mb-2"
          >
            {t('hero.greeting')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-plasma to-energy bg-clip-text text-transparent text-glow-plasma"
          >
            {t('hero.name')}
          </motion.h1>
          <motion.p
            {...fadeUp}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-fg-secondary mb-4"
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg text-fg-secondary font-mono h-8 mb-8"
          >
            <Typewriter
              texts={[
                t('hero.tagline'),
                'React / Three.js / AI',
                'Controlled Nuclear Fusion ⚛️',
              ]}
            />
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.8 }}>
            <Link
              to="/projects"
              className="relative inline-block px-8 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-plasma to-energy text-white hover:opacity-90 transition-opacity glow-plasma group"
            >
              {/* Pulse ring */}
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-plasma to-energy opacity-0 group-hover:opacity-100" style={{ animation: 'pulse-ring 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' }} />
              <span className="relative">{t('hero.cta')}</span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 z-10 flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 rounded-full bg-plasma/60"
          />
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            className="w-1.5 h-1.5 rounded-full bg-plasma/40"
          />
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* Projects Preview */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-plasma to-energy bg-clip-text text-transparent"
        >
          {t('sections.projects')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <GlassCard glowColor="plasma" className="h-full flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">📚</span>
                <h3 className="text-xl font-bold text-plasma">{t('projects.bookManagement.title')}</h3>
              </div>
              <p className="text-fg-secondary text-sm leading-relaxed line-clamp-3" title={t('projects.bookManagement.desc')}>
                {t('projects.bookManagement.desc')}
              </p>
              <div className="mt-auto pt-4 flex gap-2 flex-nowrap overflow-hidden">
                {['Spring Boot 3', 'Vue 3', 'PostgreSQL', 'Docker'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md text-xs font-mono bg-plasma/10 text-plasma border border-plasma/20 whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <GlassCard glowColor="energy" className="h-full flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🎉</span>
                <h3 className="text-xl font-bold text-energy">{t('projects.eventManagement.title')}</h3>
              </div>
              <p className="text-fg-secondary text-sm leading-relaxed line-clamp-3" title={t('projects.eventManagement.desc')}>
                {t('projects.eventManagement.desc')}
              </p>
              <div className="mt-auto pt-4 flex gap-2 flex-nowrap overflow-hidden">
                {['Spring Boot', 'Vue 3', 'Element Plus', 'Uni-App'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md text-xs font-mono bg-energy/10 text-energy border border-energy/20 whitespace-nowrap">
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/projects"
            className="text-sm text-fg-muted hover:text-plasma transition-colors duration-300"
          >
            查看全部项目 →
          </Link>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider" />

      {/* Study Notes Preview */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-plasma to-energy bg-clip-text text-transparent"
        >
          {t('sections.notes')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="h-full">
            <Link to="/notes/compilers" className="block h-full">
              <GlassCard className="h-full flex flex-col">
                <h3 className="text-lg font-bold text-plasma mb-2 line-clamp-2">📖 {t('notes.compilers.title')}</h3>
                <p className="text-fg-secondary text-sm line-clamp-3 flex-1" title={t('notes.compilers.desc')}>
                  {t('notes.compilers.desc')}
                </p>
              </GlassCard>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="h-full">
            <Link to="/notes/software-engineering" className="block h-full">
              <GlassCard className="h-full flex flex-col">
                <h3 className="text-lg font-bold text-plasma mb-2 line-clamp-2">📝 {t('notes.softwareEng.title')}</h3>
                <p className="text-fg-secondary text-sm line-clamp-3 flex-1" title={t('notes.softwareEng.desc')}>
                  {t('notes.softwareEng.desc')}
                </p>
              </GlassCard>
            </Link>
          </motion.div>
        </div>

        <div className="text-center mt-8">
          <Link
            to="/notes"
            className="text-sm text-fg-muted hover:text-plasma transition-colors duration-300"
          >
            查看全部笔记 →
          </Link>
        </div>
      </section>
    </div>
  );
}
