import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Constellation from './Constellation';

export default function FinalCTA() {
  return (
    <section id="comecar" className="relative overflow-hidden">
      <div className="absolute inset-0 dc-grid opacity-25" />
      <Constellation className="absolute inset-0 h-full w-full opacity-70" density={0.8} />
      <div className="absolute inset-0 dc-radial-glow" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />

      <div className="relative mx-auto flex max-w-[90rem] flex-col items-center px-5 py-28 text-center md:px-8 md:py-40">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-[13vw] font-black uppercase leading-[0.9] sm:text-6xl lg:text-8xl"
        >
          O próximo projeto
          <br />
          <span className="text-glow" style={{ color: 'hsl(var(--dc-green))' }}>pode mudar tudo.</span>
        </motion.h2>

        <motion.a
          href="#top"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          data-cursor="hover"
          className="group mt-12 inline-flex items-center gap-3 rounded-lg px-10 py-6 font-display text-lg font-bold uppercase tracking-tight text-background transition-transform hover:-translate-y-1 active:scale-[0.98] md:text-2xl"
          style={{ background: 'hsl(var(--dc-green))', boxShadow: '0 0 60px hsl(var(--dc-green) / 0.4)' }}
        >
          Começar minha evolução
          <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1.5" />
        </motion.a>

        <p className="mt-8 max-w-md text-sm text-muted-foreground">
          Você não precisa saber tudo para começar. Precisa começar para descobrir
          até onde consegue chegar.
        </p>
      </div>
    </section>
  );
}
