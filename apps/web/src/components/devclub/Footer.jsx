import React from 'react';

const cols = [
  { title: 'Ecossistema', links: ['Formações', 'Mentorias', 'Comunidade', 'Projetos', 'Oportunidades'] },
  { title: 'Trilhas', links: ['Full Stack', 'Front-end', 'Back-end', 'IA', 'UI/UX'] },
  { title: 'DevClub', links: ['Manifesto', 'Histórias', 'Tutores', 'Empresas', 'Contato'] },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[90rem] px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_2fr]">
          <div>
            <a href="#top" className="flex items-center gap-2 font-display text-xl">
              <span className="grid h-7 w-7 place-items-center rounded-md font-mono text-sm text-background" style={{ background: 'hsl(var(--dc-green))' }}>
                <img
                  src="https://faq.devclub.com.br/img/logo-devclub.png"
                  alt="DevClub"
                  className="h-7 w-7 rounded-md object-cover"
                />
              </span>
              DevClub
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Onde quem constrói o futuro deixa de assistir e começa a comandar.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{c.title}</div>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a href="#top" className="text-sm text-foreground/70 transition-colors hover:text-foreground">{l}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} DevClub. Todos os direitos reservados.</span>
          <span className="font-mono">construído para quem constrói.</span>
        </div>
      </div>
    </footer>
  );
}
