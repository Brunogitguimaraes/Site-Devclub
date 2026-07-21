import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Constellation from './Constellation';
import CinematicBackdrop from './CinematicBackdrop';
import IntroReveal from './IntroReveal';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] overflow-hidden">
      <IntroReveal />
      <CinematicBackdrop />
      <div className="absolute inset-0 dc-grid opacity-[0.2]" />
      <div className="absolute inset-0 dc-radial-glow" />
      <Constellation className="absolute inset-0 h-full w-full opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background" />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-[90rem] flex-col justify-center px-5 pb-24 pt-28 md:px-8">
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-5xl">
          <motion.div variants={rise} className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: 'hsl(var(--dc-green))', boxShadow: '0 0 12px hsl(var(--dc-green))' }} />
            sistema de evolução profissional
          </motion.div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
              <div className="hero-firework-group" style={{ left: '15%', top: '15%', animationDelay: '0s' }}>
                {Array.from({ length: 12 }).map((_, index) => (
                  <span
                    key={index}
                    className="hero-firework-particle"
                    style={{
                      '--angle': `${index * 30}deg`,
                      '--distance': `${8 + (index % 4) * 6}px`,
                      '--delay': `${index * 0.04}s`,
                    }}
                  />
                ))}
              </div>
              <div className="hero-firework-group" style={{ left: '75%', top: '12%', animationDelay: '0.8s' }}>
                {Array.from({ length: 12 }).map((_, index) => (
                  <span
                    key={`b-${index}`}
                    className="hero-firework-particle"
                    style={{
                      '--angle': `${index * 30}deg`,
                      '--distance': `${7 + (index % 3) * 5}px`,
                      '--delay': `${index * 0.05}s`,
                    }}
                  />
                ))}
              </div>
              <div className="hero-firework-group" style={{ left: '55%', top: '28%', animationDelay: '1.6s' }}>
                {Array.from({ length: 12 }).map((_, index) => (
                  <span
                    key={`c-${index}`}
                    className="hero-firework-particle"
                    style={{
                      '--angle': `${index * 30}deg`,
                      '--distance': `${9 + (index % 4) * 5}px`,
                      '--delay': `${index * 0.04}s`,
                    }}
                  />
                ))}
              </div>
              <div className="hero-firework-group" style={{ left: '22%', top: '70%', animationDelay: '1.1s' }}>
                {Array.from({ length: 12 }).map((_, index) => (
                  <span
                    key={`d-${index}`}
                    className="hero-firework-particle"
                    style={{
                      '--angle': `${index * 30}deg`,
                      '--distance': `${8 + (index % 3) * 6}px`,
                      '--delay': `${index * 0.05}s`,
                    }}
                  />
                ))}
              </div>
              <div className="hero-firework-group" style={{ left: '82%', top: '70%', animationDelay: '0.4s' }}>
                {Array.from({ length: 12 }).map((_, index) => (
                  <span
                    key={`e-${index}`}
                    className="hero-firework-particle"
                    style={{
                      '--angle': `${index * 30}deg`,
                      '--distance': `${7 + (index % 4) * 5}px`,
                      '--delay': `${index * 0.04}s`,
                    }}
                  />
                ))}
              </div>
            </div>

        
          </div>

          <motion.p variants={rise} className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
            Aprenda tecnologia construindo projetos reais, dentro de uma comunidade
            que transforma esforço em oportunidade. Do primeiro código à primeira
            grande conquista.
          </motion.p>

          <motion.div variants={rise} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#ecossistema"
              className="group inline-flex items-center justify-center gap-2 rounded-md px-7 py-4 font-semibold text-background transition-transform hover:-translate-y-0.5 active:scale-[0.98]"
              style={{ background: 'hsl(var(--dc-green))' }}
            >
              Conhecer o ecossistema
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#historias"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-7 py-4 font-semibold transition-colors hover:border-foreground/40 hover:bg-secondary"
            >
              <PlayCircle className="h-4 w-4" />
              Ver histórias reais
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#prova"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-[-1.5rem] left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="mx-auto max-w-[14rem] rounded-full border border-border/60 bg-background/40 px-3 py-1.5 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm sm:text-[11px]">
          role para iniciar sua evolução
        </span>
        <span className="relative h-14 w-px overflow-hidden bg-border">
          <motion.span
            className="absolute inset-x-0 top-0 h-6"
            style={{ background: 'linear-gradient(to bottom, transparent, hsl(var(--dc-green)))' }}
            animate={{ y: [-24, 56] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  );
}
