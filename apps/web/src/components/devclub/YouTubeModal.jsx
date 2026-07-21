import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Play, Youtube, Users, ArrowUpRight } from 'lucide-react';

const CHANNEL_URL = 'https://www.youtube.com/@canaldevclub';

// Curated recent videos from the DevClub channel.
const videos = [
  {
    id: 'LH-vuZR6yM0',
    title: 'Curso de JavaScript para Iniciantes - Aprenda Programação e torne-se um Programador | LIVE #47',
    tag: 'JavaScript',
    duration: '1h 38min',
  },
  {
    id: 'BK3U6pnkMcU',
    title: 'Curso de HTML do ZERO ao Avançado - Aprenda Programação e torne-se um Programador | LIVE #45',
    tag: 'HTML',
    duration: '1h 09min',
  },
  {
    id: 'UCPrSHHe9Ao',
    title: 'Curso de CSS | Aprenda CSS do ZERO e consiga seu Primeiro Emprego como Programador | LIVE #50',
    tag: 'CSS',
    duration: '1h 22min',
  },
  {
    id: '4l4hoRlukVo',
    title: 'Node.js do ZERO: Criando seu PRIMEIRO SERVIDOR / Back-End |',
    tag: 'Back-end',
    duration: '1h 22min',
  },
  {
    id: 'OPOG5_j1_ZQ',
    title: 'Juliana Nunes | Dicas de uma Especialista de RH para sua Carreira| DevClub Podcast 03',
    tag: 'Carreira',
    duration: '53min',
  },
  {
    id: '4_svu1DVFLY',
    title: 'LIVE #19 - Dominando Git e Github na Prática - Conseguindo seu primeiro emprego como Programador',
    tag: 'Ferramentas',
    duration: '1h 03min',
  },
];

export default function YouTubeModal() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener('open-conteudos', openHandler);
    return () => window.removeEventListener('open-conteudos', openHandler);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setActive(null);
    }
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-start justify-center overflow-y-auto p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />

          <motion.div
            className="relative z-10 my-auto w-full max-w-[68rem] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="relative flex items-center justify-between gap-4 border-b border-border/70 px-6 py-5 md:px-8">
              <div className="dc-radial-glow pointer-events-none absolute inset-0" />
              <div className="relative flex items-center gap-4">
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-background"
                  style={{ background: '#FF0033' }}
                >
                  <Youtube className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-primary">
                    Conteúdos Gratuitos
                  </p>
                  <h2 className="font-display text-xl leading-none md:text-2xl">Canal DevClub</h2>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar"
                className="relative grid h-10 w-10 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Channel banner */}
            <div className="flex flex-col items-start justify-between gap-4 border-b border-border/70 px-6 py-5 md:flex-row md:items-center md:px-8">
              <p className="max-w-xl text-sm text-muted-foreground">
                Centenas de aulas gratuitas sobre programação, carreira e tecnologia. Assista aos
                últimos vídeos e comece a construir agora.
              </p>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-2 rounded-md border border-border px-3 py-2 font-mono text-xs text-muted-foreground">
                  <Users className="h-4 w-4 text-primary" /> @canaldevclub
                </span>
                <a
                  href={CHANNEL_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
                  style={{ background: 'hsl(var(--dc-green))' }}
                >
                  Inscrever-se <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Video grid */}
            <div className="max-h-[55vh] overflow-y-auto px-6 py-6 md:px-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {videos.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setActive(active === v.id ? null : v.id)}
                    className="group text-left"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
                      {active === v.id ? (
                        <iframe
                          className="h-full w-full"
                          src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`}
                          title={v.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <>
                          <img
                            src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                            alt={v.title}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                          <span className="absolute inset-0 grid place-items-center">
                            <span className="grid h-14 w-14 place-items-center rounded-full text-background shadow-lg transition-transform duration-300 group-hover:scale-110" style={{ background: 'hsl(var(--dc-green))' }}>
                              <Play className="h-6 w-6 translate-x-0.5 fill-current" />
                            </span>
                          </span>
                          <span className="absolute bottom-2 right-2 rounded bg-background/85 px-2 py-1 font-mono text-[0.7rem]">
                            {v.duration}
                          </span>
                        </>
                      )}
                    </div>
                    <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-primary">
                      {v.tag}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-foreground/90 transition-colors group-hover:text-foreground">
                      {v.title}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
