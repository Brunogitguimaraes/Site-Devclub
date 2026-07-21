import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Signal, Lock, Unlock } from 'lucide-react';
import { tracks } from '@/data/devclub';

export default function Tracks() {
  return (
    <section id="trilhas" className="relative mx-auto max-w-[90rem] px-5 py-24 md:px-8 md:py-32">
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">missões desbloqueáveis</span>
          <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none md:text-6xl">
            Trilhas de evolução
          </h2>
        </div>
        <p className="max-w-sm text-sm text-muted-foreground">
          Cada formação é uma rota com começo, meio e conquista. Escolha o próximo
          nível e avance com projetos que provam o que você sabe.
        </p>
      </div>

      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 dc-scrollbar-none md:grid md:grid-cols-3 md:overflow-visible">
        {tracks.map((t, i) => {
          const Icon = t.icon;
          const unlocked = t.progress > 60;
          return (
            <motion.article
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              data-cursor="hover"
              className="group relative min-w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-all hover:-translate-y-1 hover:border-foreground/25 md:min-w-0"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `hsl(${t.color} / 0.25)` }}
              />
              <div className="relative flex items-center justify-between">
                <span
                  className="grid h-12 w-12 place-items-center rounded-xl"
                  style={{ background: `hsl(${t.color} / 0.14)`, color: `hsl(${t.color})` }}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {unlocked ? <Unlock className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
                  {unlocked ? 'ativa' : 'em breve'}
                </span>
              </div>

              <h3 className="relative mt-6 font-display text-2xl font-bold">{t.name}</h3>

              <div className="relative mt-4 flex gap-5 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" />{t.duration}</span>
                <span className="flex items-center gap-1.5"><Signal className="h-3.5 w-3.5" />{t.level}</span>
              </div>

              <div className="relative mt-5 flex flex-wrap gap-2">
                {t.skills.map((s) => (
                  <span key={s} className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>

              <div className="relative mt-6">
                <div className="mb-1.5 flex justify-between font-mono text-[11px] text-muted-foreground">
                  <span>progresso da turma</span>
                  <span>{t.progress}%</span>
                </div>
                <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `hsl(${t.color})` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${t.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
