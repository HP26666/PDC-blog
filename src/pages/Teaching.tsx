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
    {
      title: 'AI Coding Tools',
      titleZh: 'AI 编程工具',
      desc: 'Guide to using AI-powered coding assistants and agents effectively.',
      descZh: '高效使用 AI 编程助手和智能体的指南。',
      icon: '🔮',
      tags: ['Claude Code', 'Copilot', 'Trae'],
    },
  ];

  const isZh = t('nav.home') === '首页';

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
              {t('sections.teaching')}
            </h1>
          </div>
          <p className="text-gray-400 ml-4 pl-1">
            {isZh ? '教学材料与学习资源。' : 'Teaching materials and learning resources.'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((res, i) => (
            <motion.div
              key={res.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard glowColor={i % 2 === 0 ? 'plasma' : 'energy'}>
                <span className="text-3xl block mb-3">{res.icon}</span>
                <h3 className={`text-lg font-bold mb-2 ${i % 2 === 0 ? 'text-plasma' : 'text-energy'}`}>
                  {isZh ? res.titleZh : res.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {isZh ? res.descZh : res.desc}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {res.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 rounded-md text-xs font-mono border ${
                        i % 2 === 0
                          ? 'bg-plasma/10 text-plasma border-plasma/20'
                          : 'bg-energy/10 text-energy border-energy/20'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
