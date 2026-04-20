import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

export default function Teaching() {
  const { t } = useTranslation();

  const resources = [
    {
      slug: 'ai-coding-agent',
      title: 'AI Coding Agent 实战进阶',
      titleZh: 'AI Coding Agent 实战进阶',
      desc: '让 AI 成为你的全栈开发搭档：从 Vibe Coding 工作流到实战项目落地的完整指南。',
      descZh: '让 AI 成为你的全栈开发搭档：从 Vibe Coding 工作流到实战项目落地的完整指南。',
      icon: '🚀',
      tags: ['AI Agent', 'Vibe Coding', 'Full Stack'],
      badge: '教程',
    },
    {
      slug: 'project-adaptation-analysis',
      title: '竞赛项目 AI Coding Agent 适配度分析',
      titleZh: '竞赛项目 AI Coding Agent 适配度分析',
      desc: '基于 172 个软件应用类竞赛项目的系统分析，判断哪些项目最适合用 AI Coding Agent 开发。',
      descZh: '基于 172 个软件应用类竞赛项目的系统分析，判断哪些项目最适合用 AI Coding Agent 开发。',
      icon: '📊',
      tags: ['Data Analysis', 'Project Evaluation', 'Best Practices'],
      badge: '分析报告',
    },
  ];

  const isZh = t('nav.home') === '首页';

  return (
    <div className="pt-24 pb-16 max-w-5xl mx-auto px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-2 bg-gradient-to-r from-plasma to-energy bg-clip-text text-transparent"
      >
        {t('sections.teaching')}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-fg-secondary mb-10"
      >
        {isZh ? '教学材料与学习资源。' : 'Teaching materials and learning resources.'}
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res, i) => (
          <motion.div
            key={res.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="h-full"
          >
            <Link to={`/teaching/${res.slug}`} className="block h-full">
              <GlassCard glowColor={i % 2 === 0 ? 'plasma' : 'energy'} className="h-full flex flex-col relative">
                {/* Badge */}
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-mono bg-gradient-to-r from-plasma/20 to-energy/20 text-fg-secondary border border-[var(--border-glass)]">
                  {res.badge}
                </span>
                {/* Icon with gradient background */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-plasma/20 to-energy/20 flex items-center justify-center mb-3">
                  <span className="text-2xl">{res.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-fg mb-2 line-clamp-2">
                  {isZh ? res.titleZh : res.title}
                </h3>
                <div className="relative group mb-4">
                  <p className="text-fg-secondary text-sm line-clamp-2">
                    {isZh ? res.descZh : res.desc}
                  </p>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-50 w-64 pointer-events-none">
                    <div className="tooltip-card rounded-lg px-3 py-2 text-xs shadow-lg">
                      {isZh ? res.descZh : res.desc}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 flex-nowrap overflow-hidden mt-auto">
                  {res.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-xs font-mono bg-[var(--bg-glass)] text-fg-muted border border-[var(--border-glass)] whitespace-nowrap"
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
  );
}
