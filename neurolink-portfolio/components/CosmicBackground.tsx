import React, { useEffect, useRef } from 'react';

export const CosmicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener('resize', resize);
    resize();

    // Stars configuration
    const stars: { x: number; y: number; r: number; a: number; s: number }[] = [];
    const numStars = Math.floor((width * height) / 4000); // Responsive star count

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5,
        a: Math.random(),
        s: Math.random() * 0.02 + 0.005
      });
    }

    let frame = 0;
    let animationFrameId: number;

    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Deep space gradient
      const cx = width / 2;
      const cy = height / 2;
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(width, height));
      gradient.addColorStop(0, '#050a05'); // Very dark green center
      gradient.addColorStop(0.5, '#000000');
      gradient.addColorStop(1, '#000000');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw Stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        
        // Twinkle effect
        const alpha = Math.abs(Math.sin(frame * 0.01 + star.x)) * 0.8 + 0.2;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.8})`; // slightly dimmed
        ctx.fill();

        // Parallax / Movement
        star.y -= star.s;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }
      });

      // Draw Cosmic Orbital Rings (inspired by loader)
      const time = frame * 0.005;
      
      ctx.strokeStyle = 'rgba(0, 255, 79, 0.03)'; // Very faint neon green
      ctx.lineWidth = 1;

      // Ring 1
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(time);
      ctx.beginPath();
      ctx.setLineDash([100, 200]);
      ctx.arc(0, 0, Math.min(width, height) * 0.35, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Ring 2 (Counter rotating)
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(-time * 0.7);
      ctx.beginPath();
      ctx.setLineDash([50, 150]);
      ctx.arc(0, 0, Math.min(width, height) * 0.45, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Ring 3 (Outer solid faint)
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.beginPath();
      ctx.setLineDash([]);
      ctx.strokeStyle = 'rgba(0, 255, 79, 0.015)';
      ctx.arc(0, 0, Math.min(width, height) * 0.6, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none w-full h-full"
      style={{ background: '#000' }}
    />
  );
};