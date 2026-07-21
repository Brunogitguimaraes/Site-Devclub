import React from 'react';
import { motion } from 'framer-motion';
import { companies, impactMetrics } from '@/data/devclub';
import Counter from './Counter';

export default function Companies() {
  const row1 = companies.slice(0, 6);
  const row2 = companies.slice(6);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 dc-grid opacity-20" />
      <div className="relative mx-auto max-w-[90rem] px-5 md:px-8">
        <h2 className="mx-auto max-w-4xl text-center font-display text-4xl font-black uppercase leading-[0.95] md:text-7xl">
          Quem aprende a construir,
          <br />
          <span style={{ color: 'hsl(var(--dc-green))' }}>começa a ser procurado.</span>
        </h2>

        <div className="mt-16 space-y-4">
          {[row1, row2].map((row, r) => (
            <div key={r} className="overflow-hidden">
              <motion.div
                className="flex gap-4"
                animate={{ x: r === 0 ? ['0%', '-50%'] : ['-50%', '0%'] }}
                transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
              >
                {[...row, ...row, ...row].map((c, i) => (
                  <div
                    key={`${c}-${i}`}
                    className="flex min-w-[180px] items-center justify-center gap-3 rounded-xl border border-border bg-card/50 px-8 py-6"
                  >
                    <span className="h-2 w-2 rounded-full" style={{ background: 'hsl(var(--dc-green))', animation: 'dc-pulse-dot 3s ease-in-out infinite' }} />
                    <span className="font-display text-xl font-bold tracking-tight text-foreground/80">{c}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {impactMetrics.map((m) => (
            <div key={m.label} className="bg-background p-8 text-center">
              <div className="font-display text-5xl font-black md:text-6xl" style={{ color: 'hsl(var(--dc-green))' }}>
                <Counter value={m.value} suffix={m.suffix} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
