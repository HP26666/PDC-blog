import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const articles = [
  {
    slug: 'llm-vs-coding-agent',
    icon: '🤖',
    key: 'llmVsAgent',
    color: 'plasma' as const,
    tags: ['LLM', 'Coding Agent', 'AI Tools'],
    readTime: '10 min',
  },
  {
    slug: 'claude-code-guide',
    icon: '🔮',
    key: 'claudeCode',
    color: 'energy' as const,
    tags: ['Claude Code', 'Terminal', 'Anthropic'],
    readTime: '12 min',
  },
  {
    slug: 'trae-guide',
    icon: '⚡',
    key: 'traeGuide',
    color: 'plasma' as const,
    tags: ['Trae', 'IDE', 'ByteDance'],
    readTime: '10 min',
  },
  {
    slug: 'dev-environment-setup',
    icon: '🛠️',
    key: 'devEnvSetup',
    color: 'energy' as const,
    tags: ['Setup', 'Node.js', 'Git', 'Python'],
    readTime: '15 min',
  },
  {
    slug: 'coding-agent-examples',
    icon: '💻',
    key: 'codingExamples',
    color: 'plasma' as const,
    tags: ['Examples', 'React', 'Python', 'API'],
    readTime: '18 min',
  },
];

export default function Articles() {
  const { t } = useTranslation();

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
              {t('sections.articles')}
            </h1>
          </div>
          <p className="text-gray-400 ml-4 pl-1">
            {t('articles.subtitle')}
          </p>
        </motion.div>

        {/* Featured article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Link to={`/articles/${articles[0].slug}`}>
            <GlassCard glowColor="plasma" className="p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-0.5 rounded text-xs font-mono bg-plasma/10 text-plasma border border-plasma/20">
                  FEATURED
                </span>
                <span className="text-xs text-gray-500 font-mono">{articles[0].readTime} read</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-4xl">{articles[0].icon}</span>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-plasma mb-2">
                    {t(`articles.${articles[0].key}.title`)}
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    {t(`articles.${articles[0].key}.desc`)}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {articles[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-xs font-mono bg-plasma/10 text-plasma border border-plasma/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 text-right">
                <span className="text-sm text-plasma font-medium">
                  Read Article →
                </span>
              </div>
            </GlassCard>
          </Link>
        </motion.div>

        {/* Articles grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {articles.slice(1).map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <Link to={`/articles/${article.slug}`}>
                <GlassCard glowColor={article.color} className="h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl">{article.icon}</span>
                    <span className="text-xs text-gray-500 font-mono">{article.readTime}</span>
                  </div>
                  <h3
                    className={`text-lg font-bold mb-2 ${
                      article.color === 'plasma' ? 'text-plasma' : 'text-energy'
                    }`}
                  >
                    {t(`articles.${article.key}.title`)}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {t(`articles.${article.key}.desc`)}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 rounded-md text-xs font-mono border ${
                          article.color === 'plasma'
                            ? 'bg-plasma/10 text-plasma border-plasma/20'
                            : 'bg-energy/10 text-energy border-energy/20'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
