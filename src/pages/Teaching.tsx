import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

export default function Teaching() {
  const { t } = useTranslation();

  const resources = [
    {
      title: 'Data Structures & Algorithms',
      titleZh: '数据结构与算法',
      desc: 'Tutorials and practice problems for fundamental CS concepts.',
      descZh: '基础计算机科学概念的教程与练习题。',
      icon: '🔢',
      tags: ['Binary Trees', 'Graphs', 'Dynamic Programming'],
    },
    {
      title: 'Web Development Basics',
      titleZh: 'Web 开发基础',
      desc: 'Introduction to HTML, CSS, JavaScript, and modern frameworks.',
      descZh: 'HTML、CSS、JavaScript 及现代框架入门。',
      icon: '🌐',
      tags: ['React', 'TypeScript', 'Tailwind'],
    },
    {
      title: 'Machine Learning 101',
      titleZh: '机器学习入门',
      desc: 'Beginner-friendly introduction to ML concepts and PyTorch basics.',
      descZh: '面向初学者的机器学习概念与 PyTorch 基础。',
      icon: '🤖',
      tags: ['PyTorch', 'Neural Networks', 'NLP'],
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
        className="text-gray-400 mb-10"
      >
        {isZh ? '教学材料与学习资源。' : 'Teaching materials and learning resources.'}
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((res, i) => (
          <motion.div
            key={res.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard glowColor={i % 2 === 0 ? 'plasma' : 'energy'}>
              <span className="text-3xl block mb-3">{res.icon}</span>
              <h3 className="text-lg font-bold text-white mb-2">
                {isZh ? res.titleZh : res.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {isZh ? res.descZh : res.desc}
              </p>
              <div className="flex gap-2 flex-wrap">
                {res.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded-md text-xs font-mono bg-white/5 text-gray-400 border border-white/10"
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
  );
}
