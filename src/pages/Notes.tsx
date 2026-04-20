import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GlassCard from '../components/GlassCard';

const notes = [
  { slug: 'compilers', icon: '📖', key: 'compilers' },
  { slug: 'software-engineering', icon: '📝', key: 'softwareEng' },
];

export default function Notes() {
  const { t } = useTranslation();

  return (
    <div className="pt-20 sm:pt-24 pb-16 max-w-4xl mx-auto px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-plasma to-energy bg-clip-text text-transparent"
      >
        {t('sections.notes')}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-fg-secondary mb-10"
      >
        Course notes, study plans, and exam prep materials.
      </motion.p>

      <div className="space-y-4">
        {notes.map((note, i) => (
          <motion.div
            key={note.slug}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to={`/notes/${note.slug}`}>
              <GlassCard>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-plasma/20 to-energy/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{note.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-plasma">
                      {t(`notes.${note.key}.title`)}
                    </h3>
                    <p className="text-fg-secondary text-sm mt-1 line-clamp-2" title={t(`notes.${note.key}.desc`)}>
                      {t(`notes.${note.key}.desc`)}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
