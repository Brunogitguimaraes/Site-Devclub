import React, { useEffect, useRef, useState } from 'react';

/**
 * Discreet custom cursor for desktop only. A soft ring that lags the pointer
 * and grows over interactive elements. Disabled on touch / small screens and
 * when reduced motion is requested.
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce || window.innerWidth < 1024) return;
    setEnabled(true);
    document.documentElement.classList.add('dc-cursor-none');

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };
    let raf = 0;
    let hovering = false;

    const move = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      const t = e.target;
      hovering = !!(t && t.closest('a, button, [data-cursor="hover"]'));
    };

    const loop = () => {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%) scale(${hovering ? 1.8 : 1})`;
        ringRef.current.style.opacity = hovering ? '1' : '0.6';
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    window.addEventListener('pointermove', move);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', move);
      document.documentElement.classList.remove('dc-cursor-none');
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] hidden lg:block" aria-hidden="true">
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ background: 'hsl(var(--dc-green))', marginLeft: '-3px', marginTop: '-3px' }}
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 h-8 w-8 rounded-full border transition-[opacity] duration-200"
        style={{ borderColor: 'hsl(var(--dc-green) / 0.7)' }}
      />
    </div>
  );
}
