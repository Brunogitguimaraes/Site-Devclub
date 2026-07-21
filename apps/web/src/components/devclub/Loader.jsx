import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDone(true);
      return;
    }
    const start = performance.now();
    const total = 1300;
    let raf = 0;
    const tick = (now) => {
      const p = Math.min((now - start) / total, 1);
      setPct(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 180);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <div className="flex items-center gap-3 font-mono text-sm text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: 'hsl(var(--dc-green))' }} />
            inicializando ecossistema
          </div>
          <div className="mt-6 font-display text-6xl md:text-7xl" style={{ color: 'hsl(var(--dc-green))' }}>
            {String(pct).padStart(3, '0')}
          </div>
          <div className="mt-6 h-px w-56 overflow-hidden bg-border">
            <div className="h-full" style={{ width: `${pct}%`, background: 'hsl(var(--dc-green))' }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
