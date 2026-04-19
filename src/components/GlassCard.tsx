import { motion } from 'framer-motion';
import { ReactNode, useRef, useState } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  glowColor?: 'plasma' | 'energy';
}

export default function GlassCard({ children, className = '', glowColor = 'plasma' }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowRgb = glowColor === 'plasma' ? '0, 210, 255' : '157, 80, 187';

  return (
    <motion.div
      ref={cardRef}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative glass rounded-xl p-6 transition-all duration-300 overflow-hidden tech-corner rgb-border ${className}`}
      style={{
        borderColor: isHovered ? `rgba(${glowRgb}, 0.4)` : undefined,
        boxShadow: isHovered
          ? `0 0 30px rgba(${glowRgb}, 0.15), 0 0 60px rgba(${glowRgb}, 0.05), inset 0 0 30px rgba(${glowRgb}, 0.03)`
          : undefined,
      }}
    >
      {/* Mouse-following spotlight */}
      {isHovered && (
        <div
          className="absolute pointer-events-none z-0 transition-opacity duration-300"
          style={{
            left: mousePos.x - 100,
            top: mousePos.y - 100,
            width: 200,
            height: 200,
            background: `radial-gradient(circle, rgba(${glowRgb}, 0.12) 0%, transparent 70%)`,
          }}
        />
      )}
      {/* Top scan line */}
      {isHovered && (
        <div
          className="absolute left-0 right-0 h-[1px] z-10 pointer-events-none"
          style={{
            top: `${((Date.now() / 20) % 100)}%`,
            background: `linear-gradient(90deg, transparent, rgba(${glowRgb}, 0.4), transparent)`,
            animation: 'hScan 3s linear infinite',
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
