import React from 'react';
import { Code2, Sparkles, Terminal, TrendingUp } from 'lucide-react';
import { socialStrip } from '@/data/devclub';

const icons = [Code2, Sparkles, Terminal, TrendingUp];

export default function SocialStrip() {
  const items = [...socialStrip, ...socialStrip];
  return (
    <section id="prova" className="relative border-y border-border/70 bg-secondary/30 py-5">
      <div className="dc-scrollbar-none overflow-hidden">
        <div className="dc-marquee-track items-center gap-10 pr-10">
          {items.map((text, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="flex shrink-0 items-center gap-4">
                <span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: 'hsl(var(--dc-green))', animation: 'dc-pulse-dot 2.4s ease-in-out infinite' }}
                />
                <Icon className="h-4 w-4" style={{ color: 'hsl(var(--dc-green))' }} strokeWidth={1.75} />
                <span className="whitespace-nowrap font-mono text-sm text-muted-foreground">{text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
