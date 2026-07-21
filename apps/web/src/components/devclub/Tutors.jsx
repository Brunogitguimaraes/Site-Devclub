import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tutors } from '@/data/devclub';

export default function Tutors() {
  const [active, setActive] = useState(0);
  const t = tutors[active];

  return (
    <section id="tutores" className="relative py-24 md:py-32" style={{ background: `radial-gradient(50% 60% at 20% 20%, hsl(${t.color} / 0.1), transparent 70%)`, transition: 'background 0.6s ease' }}>
      <div className="mx-auto max-w-[90rem] px-5 md:px-8">
        <div className="mb-14 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">canais ativos da comunidade</span>
          <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none md:text-6xl">
            Você não aprende sozinho.
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="flex flex-col divide-y divide-border border-y border-border">
            {tutors.map((tu, i) => {
              const on = i === active;
              return (
                <button
                  key={tu.name}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  data-cursor="hover"
                  className="group flex items-center justify-between gap-4 py-5 text-left transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className="font-mono text-sm transition-colors"
                      style={{ color: on ? `hsl(${tu.color})` : 'hsl(var(--muted-foreground))' }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className="font-display text-2xl font-bold transition-all md:text-3xl"
                      style={{ color: on ? 'hsl(var(--foreground))' : 'hsl(var(--muted-foreground))', paddingLeft: on ? '0.5rem' : 0 }}
                    >
                      {tu.name}
                    </span>
                  </div>
                  <span className="hidden text-sm text-muted-foreground sm:block">{tu.specialty}</span>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-2xl border border-border"
              >
                <div className="relative">
                  <img
                    src={t.image}
                    alt={`${t.name}, ${t.specialty}`}
                    loading="lazy"
                    className="h-[300px] w-full object-cover md:h-[360px]"
                  />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, hsl(var(--background)), transparent 55%), radial-gradient(70% 50% at 80% 20%, hsl(${t.color} / 0.25), transparent)` }} />
                </div>
                <div className="p-6">
                  <div className="font-mono text-xs" style={{ color: `hsl(${t.color})` }}>{t.specialty}</div>
                  <p className="mt-3 font-display text-2xl font-bold leading-tight">“{t.phrase}”</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
