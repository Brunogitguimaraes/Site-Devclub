import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle, Bot, X, Send } from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20DevClub';

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'Olá! Sou o assistente do DevClub. Como posso te ajudar hoje?' },
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, chatOpen]);

  const send = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: 'user', text }]);
    setInput('');
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          from: 'ai',
          text: 'Ótima pergunta! Para falar com nossa equipe agora, toque no botão do WhatsApp. Você também encontra aulas gratuitas em "Conteúdos Gratuitos".',
        },
      ]);
    }, 700);
  };

  return (
    <>
      {/* AI chat panel */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-5 z-[115] flex h-[26rem] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl md:right-8"
          >
            <div className="flex items-center justify-between border-b border-border/70 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-lg text-background" style={{ background: 'hsl(var(--dc-green))' }}>
                  <Bot className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold leading-none">Suporte com IA</p>
                  <p className="mt-0.5 font-mono text-[0.65rem] text-primary">online agora</p>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} aria-label="Fechar chat" className="text-muted-foreground hover:text-foreground">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <span
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm ${
                      m.from === 'user'
                        ? 'rounded-br-sm bg-primary text-primary-foreground'
                        : 'rounded-bl-sm bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {m.text}
                  </span>
                </div>
              ))}
              <div ref={endRef} />
            </div>

            <form onSubmit={send} className="flex items-center gap-2 border-t border-border/70 p-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escreva sua mensagem..."
                className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
              />
              <button type="submit" aria-label="Enviar" className="grid h-9 w-9 shrink-0 place-items-center rounded-md text-background" style={{ background: 'hsl(var(--dc-green))' }}>
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating buttons */}
      <div className="fixed bottom-5 right-5 z-[110] flex flex-col items-end gap-3 md:bottom-8 md:right-8">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Falar no WhatsApp"
          className="group relative grid h-13 w-13 place-items-center rounded-full text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-6px_rgba(37,211,102,0.6)]"
          style={{ background: '#25D366', height: '3.25rem', width: '3.25rem' }}
        >
          <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-card px-3 py-1.5 text-sm text-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
            WhatsApp
          </span>
        </a>

        <button
          onClick={() => setChatOpen((o) => !o)}
          aria-label="Abrir suporte com IA"
          className="group relative grid place-items-center rounded-full text-background shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_-6px_hsl(var(--dc-green)/0.6)]"
          style={{ background: 'hsl(var(--dc-green))', height: '3.25rem', width: '3.25rem' }}
        >
          {chatOpen ? (
            <X className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          ) : (
            <Bot className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          )}
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-md bg-card px-3 py-1.5 text-sm text-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
            Suporte com IA
          </span>
        </button>
      </div>
    </>
  );
}
