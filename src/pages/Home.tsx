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

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

/* Floating particle dots for section backgrounds */
function FloatingDots() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-plasma/30"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.4}s`,
          }}
        />
      ))}
    </div>
  );
}

const featuredArticles = [
  { slug: 'llm-vs-coding-agent', key: 'llmVsAgent', icon: '🤖', color: 'plasma' as const },
  { slug: 'claude-code-guide', key: 'claudeCode', icon: '🔮', color: 'energy' as const },
  { slug: 'trae-guide', key: 'traeGuide', icon: '⚡', color: 'plasma' as const },
];

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

        {/* Grid overlay */}
        <div className="absolute inset-0 cyber-grid z-[1] pointer-events-none" />

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
                'Claude Code / Trae / Copilot',
              ]}
            />
          </motion.div>
          <motion.div {...fadeUp} transition={{ delay: 0.8 }} className="flex items-center justify-center gap-4">
            <Link
              to="/projects"
              className="inline-block px-8 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-plasma to-energy text-white hover:opacity-90 transition-all glow-plasma hover:shadow-[0_0_30px_rgba(0,210,255,0.3)]"
            >
              {t('hero.cta')}
            </Link>
            <Link
              to="/articles"
              className="inline-block px-8 py-3 rounded-xl font-semibold text-sm border border-plasma/30 text-plasma hover:bg-plasma/10 transition-all hover:border-plasma/50"
            >
              {t('sections.articles')}
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

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Projects Preview */}
      <section className="relative max-w-6xl mx-auto px-4 py-20">
        <FloatingDots />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-plasma/50" />
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-plasma to-energy bg-clip-text text-transparent">
            {t('sections.projects')}
          </h2>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-energy/50" />
        </motion.div>

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

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Featured Articles */}
      <section className="relative max-w-6xl mx-auto px-4 py-20 data-stream-bg">
        <FloatingDots />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-plasma/50" />
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-plasma to-energy bg-clip-text text-transparent">
            {t('sections.featured')}
          </h2>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-energy/50" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {featuredArticles.map((article) => (
            <motion.div key={article.slug} variants={staggerItem}>
              <Link to={`/articles/${article.slug}`}>
                <GlassCard glowColor={article.color} className="h-full">
                  <span className="text-3xl block mb-3">{article.icon}</span>
                  <h3 className={`text-lg font-bold mb-2 ${article.color === 'plasma' ? 'text-plasma' : 'text-energy'}`}>
                    {t(`articles.${article.key}.title`)}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {t(`articles.${article.key}.desc`)}
                  </p>
                  <div className="mt-4 text-right">
                    <span className={`text-sm font-medium ${article.color === 'plasma' ? 'text-plasma' : 'text-energy'}`}>
                      Read →
                    </span>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            to="/articles"
            className="inline-block px-6 py-2 rounded-lg text-sm font-medium border border-plasma/30 text-plasma hover:bg-plasma/10 transition-all hover:border-plasma/50"
          >
            View All Articles →
          </Link>
        </motion.div>
      </section>

      {/* Section Divider */}
      <div className="section-divider" />

      {/* Study Notes Preview */}
      <section className="relative max-w-6xl mx-auto px-4 py-20">
        <FloatingDots />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-12"
        >
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-plasma/50" />
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-plasma to-energy bg-clip-text text-transparent">
            {t('sections.notes')}
          </h2>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-energy/50" />
        </motion.div>

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

      {/* Tech stats section */}
      <div className="section-divider" />
      <section className="relative max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {[
            { label: 'Articles', value: '7+', icon: '📝' },
            { label: 'Technologies', value: '15+', icon: '⚡' },
            { label: 'AI Tools', value: '5+', icon: '🤖' },
            { label: 'Projects', value: '2+', icon: '🚀' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 border-glow-animate"
            >
              <span className="text-2xl block mb-2">{stat.icon}</span>
              <div className="text-2xl font-bold font-mono bg-gradient-to-r from-plasma to-energy bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs text-gray-500 mt-1 font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
