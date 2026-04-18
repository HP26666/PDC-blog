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
            className="text-lg md:text-xl text-gray-400 mb-4"
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg text-gray-300 font-mono h-8 mb-8"
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
              className="inline-block px-8 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-plasma to-energy text-white hover:opacity-90 transition-opacity glow-plasma"
            >
              {t('hero.cta')}
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 z-10"
        >
          <div className="w-5 h-8 border-2 border-plasma/40 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-plasma rounded-full" />
          </div>
        </motion.div>
      </section>

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
          >
            <GlassCard glowColor="plasma">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🧠</span>
                <h3 className="text-xl font-bold text-plasma">{t('projects.medDualBrain.title')}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{t('projects.medDualBrain.desc')}</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {['RAG', 'Wan2.2-S2V', 'Digital Human', 'Multi-modal'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md text-xs font-mono bg-plasma/10 text-plasma border border-plasma/20">
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
          >
            <GlassCard glowColor="energy">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">👗</span>
                <h3 className="text-xl font-bold text-energy">{t('projects.virtualTryon.title')}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{t('projects.virtualTryon.desc')}</p>
              <div className="mt-4 flex gap-2 flex-wrap">
                {['3D Modeling', 'Cloth Simulation', 'WebGL', 'SaaS'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-md text-xs font-mono bg-energy/10 text-energy border border-energy/20">
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Study Notes Preview */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-plasma to-energy bg-clip-text text-transparent"
        >
          {t('sections.notes')}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Link to="/notes/compilers">
              <GlassCard>
                <h3 className="text-lg font-bold text-plasma mb-2">📖 {t('notes.compilers.title')}</h3>
                <p className="text-gray-400 text-sm">{t('notes.compilers.desc')}</p>
              </GlassCard>
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Link to="/notes/software-engineering">
              <GlassCard>
                <h3 className="text-lg font-bold text-plasma mb-2">📝 {t('notes.softwareEng.title')}</h3>
                <p className="text-gray-400 text-sm">{t('notes.softwareEng.desc')}</p>
              </GlassCard>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
