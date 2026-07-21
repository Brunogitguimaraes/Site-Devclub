import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ecosystem } from '@/data/devclub';

function Demo({ type }) {
  if (type === 'terminal') {
    const lines = ['$ git init devclub-app', '$ npm run build', '✓ deploy concluído', '→ app no ar em 1.2s'];
    return (
      <div className="rounded-lg border border-border bg-background/80 p-4 font-mono text-xs">
        <div className="mb-3 flex gap-1.5">
          {['#ff5f56', '#ffbd2e', '#27c93f'].map((c) => (
            <span key={c} className="h-2.5 w-2.5 rounded-full" style={{ background: c }} />
          ))}
        </div>
        {lines.map((l, i) => (
          <motion.div
            key={l}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 + i * 0.35 }}
            className={l.startsWith('✓') || l.startsWith('→') ? '' : 'text-muted-foreground'}
            style={l.startsWith('✓') ? { color: 'hsl(var(--dc-green))' } : {}}
          >
            {l}
          </motion.div>
        ))}
      </div>
    );
  }
  if (type === 'avatars') {
    return (
      <div className="relative h-40 rounded-lg border border-border bg-background/60">
        {[...Array(9)].map((_, i) => {
          const angle = (i / 9) * Math.PI * 2;
          const cx = 50 + Math.cos(angle) * 34;
          const cy = 50 + Math.sin(angle) * 34;
          return (
            <motion.span
              key={i}
              className="absolute h-6 w-6 rounded-full border-2"
              style={{
                left: `${cx}%`,
                top: `${cy}%`,
                borderColor: 'hsl(var(--dc-green) / 0.5)',
                background: `hsl(${210 - i * 12} 30% 22%)`,
                translate: '-50% -50%',
              }}
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
            />
          );
        })}
        <span className="absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-xs font-bold text-background" style={{ background: 'hsl(var(--dc-green))' }}>
          you
        </span>
      </div>
    );
  }
  if (type === 'chat') {
    const msgs = [
      { who: 'mentor', t: 'Manda seu código, vamos revisar juntos.' },
      { who: 'you', t: 'Travei na autenticação :(' },
      { who: 'mentor', t: 'Relaxa. Em 15 min a gente resolve.' },
    ];
    return (
      <div className="space-y-2 rounded-lg border border-border bg-background/60 p-4">
        {msgs.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.4 }}
            className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${m.who === 'you' ? 'ml-auto bg-secondary' : ''}`}
            style={m.who === 'mentor' ? { background: 'hsl(var(--dc-green) / 0.14)' } : {}}
          >
            {m.t}
          </motion.div>
        ))}
      </div>
    );
  }
  if (type === 'hire') {
    return (
      <div className="rounded-lg border border-border bg-background/60 p-5">
        <div className="mb-2 flex justify-between font-mono text-xs text-muted-foreground">
          <span>candidatura</span>
          <span style={{ color: 'hsl(var(--dc-green))' }}>contratado</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-secondary">
          <motion.div
            className="h-full rounded-full"
            style={{ background: 'hsl(var(--dc-green))' }}
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          />
        </div>
        <div className="mt-4 flex justify-between text-[11px] text-muted-foreground">
          {['triagem', 'técnico', 'cultural', 'proposta'].map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
      </div>
    );
  }
  // progress (formacoes)
  return (
    <div className="space-y-3 rounded-lg border border-border bg-background/60 p-5">
      {[['Front-end', 90], ['Back-end', 72], ['Deploy & DevOps', 58]].map(([label, v], i) => (
        <div key={label}>
          <div className="mb-1 flex justify-between text-xs text-muted-foreground">
            <span>{label}</span>
            <span>{v}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'hsl(var(--dc-green))' }}
              initial={{ width: 0 }}
              animate={{ width: `${v}%` }}
              transition={{ duration: 1, delay: i * 0.15 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Ecosystem() {
  const [active, setActive] = useState(0);
  const item = ecosystem[active];

  return (
    <section id="ecossistema" className="relative border-y border-border/70 bg-secondary/20 py-24 md:py-32">
      <div className="mx-auto max-w-[90rem] px-5 md:px-8">
        <div className="mb-14 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">o sistema operacional da sua carreira</span>
          <h2 className="mt-4 font-display text-4xl font-black uppercase leading-none md:text-6xl">
            Ecossistema <span style={{ color: 'hsl(var(--dc-green))' }}>DevClub</span>
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
          <div className="flex gap-3 overflow-x-auto dc-scrollbar-none lg:flex-col lg:overflow-visible">
            {ecosystem.map((e, i) => {
              const Icon = e.icon;
              const on = i === active;
              return (
                <button
                  key={e.id}
                  onClick={() => setActive(i)}
                  data-cursor="hover"
                  className={`group flex min-w-[220px] items-center gap-4 rounded-xl border p-4 text-left transition-all lg:min-w-0 ${
                    on ? 'bg-card' : 'border-border bg-transparent hover:bg-card/60'
                  }`}
                  style={on ? { borderColor: 'hsl(var(--dc-green) / 0.6)' } : {}}
                >
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-lg transition-colors"
                    style={{
                      background: on ? 'hsl(var(--dc-green))' : 'hsl(var(--secondary))',
                      color: on ? 'hsl(var(--dc-ink))' : 'hsl(var(--foreground))',
                    }}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <div className="font-semibold">{e.label}</div>
                    <div className="font-mono text-xs text-muted-foreground">{e.status}</div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="min-h-[420px] rounded-2xl border border-border bg-card/70 p-6 md:p-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="grid h-full gap-8 md:grid-cols-2 md:items-center"
              >
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-5xl font-black" style={{ color: 'hsl(var(--dc-green))' }}>
                      {item.metric}
                    </span>
                    <span className="text-sm text-muted-foreground">{item.metricLabel}</span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold leading-tight md:text-3xl">{item.title}</h3>
                  <p className="mt-4 text-muted-foreground">{item.desc}</p>
                </div>
                <Demo type={item.demo} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
