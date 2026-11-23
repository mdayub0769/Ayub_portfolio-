import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target;
      const isClickable = target.closest('button, a, input, textarea, select, [role="button"]');
      setIsPointer(!!isClickable);
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Tiny Center Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-blue-600 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
        }}
      />
      {/* Smooth Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-blue-500/50 pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - (isPointer ? 22 : 15),
          y: mousePosition.y - (isPointer ? 22 : 15),
          width: isPointer ? 44 : 30,
          height: isPointer ? 44 : 30,
          borderColor: isPointer ? '#2563EB' : 'rgba(37, 99, 235, 0.4)',
          backgroundColor: isPointer ? 'rgba(37, 99, 235, 0.08)' : 'transparent'
        }}
        transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.5 }}
      />
    </>
  );
}
