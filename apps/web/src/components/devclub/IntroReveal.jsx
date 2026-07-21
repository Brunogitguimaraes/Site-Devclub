import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

/**
 * Memorable entrance sequence (~3s): geometric lines + particles converge,
 * "top esse site" locks in with a scan sweep, then the whole panel lifts away
 * to reveal the hero. Fully skipped / instant for prefers-reduced-motion.
 */
export default function IntroReveal() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce) {
      setDone(true);
      return undefined;
    }
    const t = setTimeout(() => setDone(true), 3400);
    return () => clearTimeout(t);
  }, [reduce]);

  if (reduce) return null;

  const particles = Array.from({ length: 16 });

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="absolute inset-0 dc-grid opacity-20" />

          {/* Converging scan lines */}
          <motion.span
            className="absolute left-0 top-1/2 h-px w-full"
            style={{ background: 'linear-gradient(to right, transparent, hsl(var(--dc-green)), transparent)' }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: [0, 1, 0.5] }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          />
          <motion.span
            className="absolute left-1/2 top-0 h-full w-px"
            style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--dc-green) / 0.6), transparent)' }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: [0, 0.8, 0.35] }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.25 }}
          />

          {/* Particles converging to center */}
          {particles.map((_, i) => {
            const angle = (i / particles.length) * Math.PI * 2;
            const r = 220 + (i % 4) * 40;
            return (
              <motion.span
                key={i}
                className="absolute h-1 w-1 rounded-full"
                style={{ background: 'hsl(var(--dc-green))', boxShadow: '0 0 8px hsl(var(--dc-green))' }}
                initial={{ x: Math.cos(angle) * r, y: Math.sin(angle) * r, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: [0, 1, 0] }}
                transition={{ duration: 1.4, ease: 'easeIn', delay: 0.2 + (i % 5) * 0.05 }}
              />
            );
          })}

          {/* Expanding ring pulse */}
          <motion.span
            className="absolute rounded-full border"
            style={{ borderColor: 'hsl(var(--dc-green) / 0.5)' }}
            initial={{ width: 0, height: 0, opacity: 0.8 }}
            animate={{ width: 520, height: 520, opacity: 0 }}
            transition={{ duration: 1.6, ease: 'easeOut', delay: 1.1 }}
          />

          <div className="relative text-center">
            <motion.div
              className="mb-4 font-mono text-[11px] uppercase tracking-[0.4em] text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              devclub
            </motion.div>

            <div className="relative inline-block overflow-hidden">
              <motion.h2
                className="font-display text-[13vw] font-black uppercase leading-none sm:text-7xl"
                initial={{ opacity: 0, scale: 0.9, letterSpacing: '0.2em' }}
                animate={{ opacity: 1, scale: 1, letterSpacing: '-0.02em' }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
              >
                Sua jornada começa{' '}
                <span className="text-glow" style={{ color: 'hsl(var(--dc-green))' }}>
                  aqui
                </span>
              </motion.h2>

              {/* Scan sweep over the text */}
              <motion.span
                className="absolute inset-y-0 w-1/3"
                style={{ background: 'linear-gradient(to right, transparent, hsl(var(--dc-green) / 0.4), transparent)' }}
                initial={{ x: '-150%' }}
                animate={{ x: '350%' }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 1.5 }}
              />
            </div>

            <motion.div
              className="mx-auto mt-6 h-px"
              style={{ background: 'hsl(var(--dc-green))' }}
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 1.7 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
