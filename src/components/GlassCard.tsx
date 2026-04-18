import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  glowColor?: 'plasma' | 'energy';
}

export default function GlassCard({ children, className = '', glowColor = 'plasma' }: Props) {
  const glowClass = glowColor === 'plasma'
    ? 'hover:border-plasma/30 hover:shadow-[0_0_20px_rgba(0,210,255,0.1)]'
    : 'hover:border-energy/30 hover:shadow-[0_0_20px_rgba(157,80,187,0.1)]';

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className={`glass rounded-xl p-6 transition-all duration-300 ${glowClass} ${className}`}
    >
      {children}
    </motion.div>
  );
}
