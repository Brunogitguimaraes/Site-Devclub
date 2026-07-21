import React, { useRef, useEffect } from 'react';

/**
 * Living "constellation of evolution" — nodes representing students, projects,
 * companies and wins, connected by lines. Reacts to pointer with soft parallax.
 * Performance: capped node count, transform-only, disabled for reduced motion
 * and downscaled on small screens.
 */
export default function Constellation({ className = '', density = 1 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

    const isSmall = window.innerWidth < 768;
    const count = Math.round((isSmall ? 26 : 52) * density);
    const nodes = [];
    const palette = ['145 90% 52%', '210 100% 60%', '48 100% 60%'];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const seed = () => {
      nodes.length = 0;
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random(),
          y: Math.random(),
          vx: (Math.random() - 0.5) * 0.0006,
          vy: (Math.random() - 0.5) * 0.0006,
          r: Math.random() * 2 + 1,
          depth: Math.random() * 0.7 + 0.3,
          hue: palette[Math.floor(Math.random() * palette.length)],
          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    resize();
    seed();

    const linkDist = isSmall ? 0.16 : 0.13;

    const draw = () => {
      pointer.x += (pointer.tx - pointer.x) * 0.06;
      pointer.y += (pointer.ty - pointer.y) * 0.06;
      const px = (pointer.x - 0.5) * 2;
      const py = (pointer.y - 0.5) * 2;

      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        if (!reduce) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > 1) n.vx *= -1;
          if (n.y < 0 || n.y > 1) n.vy *= -1;
          n.pulse += 0.02;
        }
      }

      const pos = nodes.map((n) => ({
        x: (n.x + px * 0.05 * n.depth) * width,
        y: (n.y + py * 0.05 * n.depth) * height,
      }));

      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            const a = (1 - d / linkDist) * 0.5;
            ctx.strokeStyle = `hsla(145, 90%, 52%, ${a * 0.35})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(pos[i].x, pos[i].y);
            ctx.lineTo(pos[j].x, pos[j].y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const glow = reduce ? 0.7 : 0.55 + Math.sin(n.pulse) * 0.35;
        ctx.beginPath();
        ctx.fillStyle = `hsla(${n.hue.split(' ')[0]}, ${n.hue.split(' ')[1]}, ${n.hue.split(' ')[2]}, ${glow})`;
        ctx.shadowColor = `hsl(${n.hue})`;
        ctx.shadowBlur = 8;
        ctx.arc(pos[i].x, pos[i].y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;

      if (!reduce) rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    const onPointer = (e) => {
      pointer.tx = e.clientX / window.innerWidth;
      pointer.ty = e.clientY / window.innerHeight;
    };
    window.addEventListener('pointermove', onPointer);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('resize', resize);
    };
  }, [density]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
