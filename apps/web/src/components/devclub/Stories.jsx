import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowUpRight } from 'lucide-react';
import { featuredStory, miniStories } from '@/data/devclub';

export default function Stories() {
  const dragRef = useRef(null);

  return (
    <section id="historias" className="relative border-y border-border/70 bg-secondary/20 py-24 md:py-32">
      <div className="mx-auto max-w-[90rem] px-5 md:px-8">
        <div className="mb-14 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">transformações reais</span>
          <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none md:text-6xl">
            Quem decidiu, <span style={{ color: 'hsl(var(--dc-green))' }}>mudou.</span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="group relative overflow-hidden rounded-2xl border border-border"
          >
            <img
              src={featuredStory.image}
              alt={`${featuredStory.name}, ${featuredStory.role}`}
              loading="lazy"
              className="h-full min-h-[360px] w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <div className="font-mono text-xs" style={{ color: 'hsl(var(--dc-green))' }}>{featuredStory.role}</div>
              <div className="mt-1 font-display text-2xl font-bold">{featuredStory.name}</div>
            </div>
          </motion.div>

          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card/60 p-6 md:p-9">
            <div>
              <Quote className="h-8 w-8" style={{ color: 'hsl(var(--dc-green))' }} />
              <p className="mt-4 font-display text-2xl font-bold leading-tight md:text-4xl">
                {featuredStory.headline}
              </p>
              <p className="mt-5 text-muted-foreground">{featuredStory.quote}</p>
            </div>

            <ol className="mt-8 grid gap-4 sm:grid-cols-2">
              {featuredStory.timeline.map((m, i) => (
                <motion.li
                  key={m.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="relative border-l pl-4"
                  style={{ borderColor: 'hsl(var(--dc-green) / 0.5)' }}
                >
                  <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full" style={{ background: 'hsl(var(--dc-green))' }} />
                  <div className="font-semibold">{m.label}</div>
                  <div className="text-xs text-muted-foreground">{m.detail}</div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-8">
          <div className="mb-4 flex items-center gap-3 font-mono text-xs text-muted-foreground">
            <span>arraste para ver mais histórias</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <motion.div ref={dragRef} className="overflow-hidden">
            <motion.div drag="x" dragConstraints={dragRef} dragElastic={0.08} className="flex cursor-grab gap-5 active:cursor-grabbing">
              {miniStories.map((s) => (
                <div
                  key={s.name}
                  className="w-[300px] shrink-0 select-none rounded-2xl border border-border bg-card/60 p-6 transition-colors hover:border-foreground/25 md:w-[360px]"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{s.name}</div>
                      <div className="font-mono text-xs text-muted-foreground">{s.role}</div>
                    </div>
                    <span className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-semibold" style={{ background: 'hsl(var(--dc-green) / 0.14)', color: 'hsl(var(--dc-green))' }}>
                      <ArrowUpRight className="h-3.5 w-3.5" />{s.delta}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
