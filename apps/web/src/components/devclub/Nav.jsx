import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, X } from 'lucide-react';


const links = [
  { href: '#ecossistema', label: 'Ecossistema' },
  { href: '#trilhas', label: 'Trilhas' },
  { href: '#historias', label: 'Histórias' },
  { href: '#tutores', label: 'Tutores' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[90] transition-colors duration-300 ${
          scrolled ? 'border-b border-border/70 bg-background/80 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-5 md:px-8">
          <a href="#top" className="flex items-center gap-2 font-display text-lg tracking-tight">
            <img
              src="https://faq.devclub.com.br/img/logo-devclub.png"
              alt="DevClub"
              className="h-7 w-7 rounded-md object-cover"
            />
            <span>DevClub</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => window.dispatchEvent(new Event('open-conteudos'))}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Conteúdos Gratuitos
            </button>
            <a
              href="#comecar"
              className="rounded-md px-4 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
              style={{ background: 'hsl(var(--dc-green))' }}
            >
              Começar
            </a>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-md border border-border md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        <motion.div
          className="h-0.5 origin-left"
          style={{ scaleX: progress, background: 'hsl(var(--dc-green))' }}
        />
      </header>

      {open && (
        <div className="fixed inset-0 top-16 z-[89] bg-background/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-1 px-5 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 font-display text-2xl"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                window.dispatchEvent(new Event('open-conteudos'));
              }}
              className="border-b border-border/60 py-4 text-left font-display text-2xl"
            >
              Conteúdos Gratuitos
            </button>
            <a
              href="#comecar"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-md py-4 text-center font-semibold text-background"
              style={{ background: 'hsl(var(--dc-green))' }}
            >
              Começar minha evolução
            </a>
          </div>
        </div>
      )}
    </>
  );
}
