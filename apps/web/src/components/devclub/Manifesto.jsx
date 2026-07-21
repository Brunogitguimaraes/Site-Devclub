import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const line1 = 'Tecnologia muda vidas.'.split(' ');
const line2 = 'Mas só para quem decide construir.'.split(' ');

const stops = [
  { x: 8, y: 78, label: 'primeiro código' },
  { x: 30, y: 55, label: 'primeiro projeto' },
  { x: 52, y: 62, label: 'comunidade' },
  { x: 74, y: 34, label: 'primeira vaga' },
  { x: 92, y: 18, label: 'nova carreira' },
];

function Word({ children }) {
  return (
    <span className="mr-[0.25em] inline-block overflow-hidden align-bottom">
      <motion.span
        className="inline-block"
        variants={{
          hidden: { y: '110%' },
          show: { y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Manifesto() {
  const [active, setActive] = useState(-1);
  const mapRef = useRef(null);

  const onMove = (e) => {
    const rect = mapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    let nearest = -1;
    let best = Infinity;
    stops.forEach((s, i) => {
      const d = Math.abs(s.x - x);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    setActive(nearest);
  };

  const path = `M ${stops.map((s) => `${s.x} ${s.y}`).join(' L ')}`;

  return (
    <section className="relative mx-auto max-w-[90rem] px-5 py-28 md:px-8 md:py-40">
      <div className="grid gap-16 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <motion.h2
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="font-display text-[10vw] font-black uppercase leading-[0.95] sm:text-6xl lg:text-7xl"
        >
          <span className="block">
            {line1.map((w, i) => (
              <Word key={i}>{w}</Word>
            ))}
          </span>
          <span className="block" style={{ color: 'hsl(var(--dc-green))' }}>
            {line2.map((w, i) => (
              <Word key={i}>{w}</Word>
            ))}
          </span>
        </motion.h2>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-lg leading-relaxed text-muted-foreground"
          >
            O DevClub é para quem cansou de assistir a vida acontecer na tela dos
            outros. Aqui você sai da inércia, aprende construindo de verdade e entra
            em uma comunidade que acelera resultados — não com promessas, mas com
            método, prática e gente ao seu lado.
          </motion.p>

          <div className="mt-10 rounded-xl border border-border bg-card/60 p-5">
            <div className="mb-4 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span>mapa de evolução</span>
              <span style={{ color: 'hsl(var(--dc-green))' }}>
                {active >= 0 ? stops[active].label : 'passe o cursor'}
              </span>
            </div>
            <svg
              ref={mapRef}
              viewBox="0 0 100 90"
              className="h-40 w-full cursor-crosshair touch-none"
              onPointerMove={onMove}
              onPointerLeave={() => setActive(-1)}
              role="img"
              aria-label="Rota de evolução do primeiro código à nova carreira"
            >
              <path d={path} fill="none" stroke="hsl(var(--border))" strokeWidth="0.6" />
              <path
                d={path}
                fill="none"
                stroke="hsl(var(--dc-green))"
                strokeWidth="0.8"
                strokeDasharray="1000"
                strokeDashoffset={active < 0 ? 1000 : 1000 - ((active + 1) / stops.length) * 220}
                style={{ transition: 'stroke-dashoffset 0.4s ease' }}
              />
              {stops.map((s, i) => (
                <g key={i}>
                  <circle
                    cx={s.x}
                    cy={s.y}
                    r={active === i ? 2.6 : 1.6}
                    fill={i <= active ? 'hsl(var(--dc-green))' : 'hsl(var(--muted))'}
                    style={{ transition: 'all 0.3s ease', filter: i <= active ? 'drop-shadow(0 0 4px hsl(var(--dc-green)))' : 'none' }}
                  />
                </g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
