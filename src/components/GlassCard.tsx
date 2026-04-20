import { motion } from 'framer-motion';
import { ReactNode, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Props {
  children: ReactNode;
  className?: string;
  glowColor?: 'plasma' | 'energy';
}

export default function GlassCard({ children, className = '', glowColor = 'plasma' }: Props) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  const spotlightColor = theme === 'dark'
    ? (glowColor === 'plasma' ? 'rgba(0,210,255,0.08)' : 'rgba(157,80,187,0.08)')
    : (glowColor === 'plasma' ? 'rgba(0,210,255,0.06)' : 'rgba(157,80,187,0.06)');

  const hoverBorderColor = glowColor === 'plasma'
    ? 'rgba(0,210,255,0.3)' : 'rgba(157,80,187,0.3)';

  const hoverShadow = glowColor === 'plasma'
    ? '0 0 24px rgba(0,210,255,0.1), 0 8px 32px rgba(0,0,0,0.15)'
    : '0 0 24px rgba(157,80,187,0.1), 0 8px 32px rgba(0,0,0,0.15)';

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`glass rounded-xl p-4 sm:p-6 transition-all duration-300 ${className}`}
      style={isHovered ? {
        background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, var(--bg-glass) 70%)`,
        borderColor: hoverBorderColor,
        boxShadow: hoverShadow,
      } : undefined}
    >
      {children}
    </motion.div>
  );
}
