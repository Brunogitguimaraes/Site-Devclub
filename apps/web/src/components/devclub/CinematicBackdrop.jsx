import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const SCENES = [
  {
    src: 'https://images.hostinger.com/d9b0e96f-090f-435a-8022-e2ada2cfa3e1.png',
    label: 'o começo',
    origin: 'scale-[1.15] translate-x-0 translate-y-0',
  },
  {
    src: 'https://images.hostinger.com/b25edbe4-0946-4ecc-90ed-b98e55ad699e.png',
    label: 'a colaboração',
    origin: 'scale-[1.2] -translate-x-4',
  },
  {
    src: 'https://images.hostinger.com/1b753579-acac-44b6-9029-e2a7bded8a34.png',
    label: 'a construção',
    origin: 'scale-[1.25] translate-y-3',
  },
  {
    src: 'https://images.hostinger.com/38491e9b-58cd-4c63-b2ba-5a5e7f25bcd6.png',
    label: 'a conquista',
    origin: 'scale-[1.18] translate-x-3',
  },
];

/**
 * Cinematic image-montage backdrop that plays like a short film:
 * slow Ken Burns push on each scene, crossfading through the DevClub story.
 * Dark green-graded overlay keeps overlaid text legible.
 */
export default function CinematicBackdrop() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    // Preload scenes so crossfades never flash white.
    SCENES.forEach((s) => {
      const img = new Image();
      img.src = s.src;
    });
  }, []);

  useEffect(() => {
    if (reduce) return undefined;
    timer.current = setInterval(() => {
      setIndex((i) => (i + 1) % SCENES.length);
    }, 5200);
    return () => clearInterval(timer.current);
  }, [reduce]);

  const scene = SCENES[index];

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={scene.src}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8, ease: 'easeInOut' }}
        >
          <motion.img
            src={scene.src}
            alt=""
            aria-hidden="true"
            draggable={false}
            className="h-full w-full object-cover"
            initial={reduce ? false : { scale: 1.08 }}
            animate={reduce ? {} : { scale: 1.28 }}
            transition={{ duration: 8, ease: 'linear' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Green cinematic grade + dark legibility overlays */}
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(120% 90% at 50% 30%, hsl(var(--dc-green) / 0.12), transparent 60%)' }} />
      <div className="pointer-events-none absolute inset-0 bg-background/70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/45 to-background/70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />

      {/* Scene chapter marker — subtle "film" cue */}
      <div className="pointer-events-none absolute bottom-6 right-5 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground md:flex md:bottom-8 md:right-8">
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'hsl(var(--dc-green))', boxShadow: '0 0 10px hsl(var(--dc-green))' }} />
        {scene.label}
        <span className="ml-2 flex gap-1">
          {SCENES.map((s, i) => (
            <span
              key={s.src}
              className="h-px w-4 transition-colors duration-500"
              style={{ background: i === index ? 'hsl(var(--dc-green))' : 'hsl(var(--border))' }}
            />
          ))}
        </span>
      </div>
    </div>
  );
}
