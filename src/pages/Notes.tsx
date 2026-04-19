import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const notes = [
  { slug: 'compilers', icon: '📖', key: 'compilers', color: 'plasma' as const },
  { slug: 'software-engineering', icon: '📝', key: 'softwareEng', color: 'energy' as const },
];

export default function Notes() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16 max-w-4xl mx-auto px-4 relative">
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
              {t('sections.notes')}
            </h1>
          </div>
          <p className="text-gray-400 ml-4 pl-1">
            Course notes, study plans, and exam prep materials.
          </p>
        </motion.div>

        <div className="space-y-4">
          {notes.map((note, i) => (
            <motion.div
              key={note.slug}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/notes/${note.slug}`}>
                <GlassCard glowColor={note.color}>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{note.icon}</span>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold ${note.color === 'plasma' ? 'text-plasma' : 'text-energy'}`}>
                        {t(`notes.${note.key}.title`)}
                      </h3>
                      <p className="text-gray-400 text-sm mt-1">
                        {t(`notes.${note.key}.desc`)}
                      </p>
                    </div>
                    <span className={`text-sm font-medium ${note.color === 'plasma' ? 'text-plasma' : 'text-energy'}`}>
                      Read →
                    </span>
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
