import { useEffect, useRef } from 'react';

const palette = [
  "#ECF0EF", // pearl white
  "#FCFAF1", // ivory white
  "#27FFF3", // aqua iridescent
  "#8BDBF8", // metallic blue gradient
  "#6888F7", // electric blue
  "#D5D7D8", // silver
  "#131521", // galactic black
];

export default function TAMVSophisticatedScene({ count = 60, drops = 7, buckleInterval = 8 }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const buckleRef = useRef<number>(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // Matrix morph particles
    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 4.6 + 1.7,
      speed: Math.random() * 0.07 + 0.04,
      morph: Math.random() * 2,
      color: palette[Math.floor(Math.random() * palette.length)],
      outlined: Math.random() > 0.6,
      fine: Math.random() > 0.75,
    }));

    let lastBuckle = Date.now();

    function drawBackground() {
      // Galactic black gradient with silver/aqua highlight
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, "#131521");
      grad.addColorStop(0.6, "#273244");
      grad.addColorStop(0.85, "#396187");
      grad.addColorStop(1, "#6EFFFB");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawParticles(t: number) {
      particles.forEach(p => {
        p.x += Math.cos(t * p.morph) * p.speed;
        p.y += Math.sin(t * p.morph * 0.8) * p.speed;
        // Wrap
        if (p.x > canvas.width) p.x = 0; if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0; if (p.y < 0) p.y = canvas.height;

        ctx.save();
        // Outlined for elegance
        if (p.outlined) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r + 0.7, 0, 2 * Math.PI);
          ctx.globalAlpha = 0.22;
          ctx.strokeStyle = p.fine ? "#ECF0EF" : "#D5D7D8";
          ctx.lineWidth = p.fine ? 0.35 : 1.2;
          ctx.shadowColor = "#a3a7a8";
          ctx.shadowBlur = 3;
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        // Main fill: elegant, real gradient
        let fillStyle;
        if (p.color === "#27FFF3" || p.color === "#6EFFFB") {
          const grad = ctx.createRadialGradient(p.x, p.y, 0.4, p.x, p.y, p.r * 1.5);
          grad.addColorStop(0, "#27FFF3");
          grad.addColorStop(0.7, "#FCFAF180");
          grad.addColorStop(1, "#6888F7");
          fillStyle = grad;
        } else if (p.color === "#131521" || p.color === "#273244") {
          const grad = ctx.createRadialGradient(p.x, p.y, 0.4, p.x, p.y, p.r * 1.7);
          grad.addColorStop(0, "#131521");
          grad.addColorStop(1, "#6888F7");
          fillStyle = grad;
        } else {
          fillStyle = p.color;
        }
        ctx.globalAlpha = 0.96;
        ctx.fillStyle = fillStyle;
        ctx.shadowColor = "#8BDBF8";
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.restore();
      });
    }

    function drawDrops(t: number) {
      for (let i = 0; i < drops; i++) {
        const dropX = (canvas.width / drops) * i + 50 * Math.sin(t + i * 2.6);
        const dropY = canvas.height / 2 + 170 * Math.cos(t + i);
        // Elegance, outlined, gradient
        ctx.save();
        ctx.beginPath();
        ctx.arc(dropX, dropY, 21 + 8 * Math.abs(Math.sin(t + i)), 0, 2 * Math.PI);
        const grad = ctx.createRadialGradient(dropX, dropY, 4, dropX, dropY, 29);
        grad.addColorStop(0, "#6EFFFB");
        grad.addColorStop(0.5, "#6888F7");
        grad.addColorStop(1, "#ECF0EF40");
        ctx.fillStyle = grad;
        ctx.shadowColor = "#27FFF3";
        ctx.shadowBlur = 31;
        ctx.globalAlpha = 0.92;
        ctx.fill();
        ctx.lineWidth = 1.7;
        ctx.strokeStyle = "#D5D7D8";
        ctx.globalAlpha = 0.9;
        ctx.stroke();
        ctx.restore();

        // Ripple: wave outlined silver, highlighted with pearl/white gradients
        if ((Date.now() - lastBuckle) / 1000 < 1.1) {
          for (let w = 1; w < 7; w++) {
            ctx.save();
            ctx.beginPath();
            ctx.arc(dropX, dropY, 28 + w * 28 + 18 * Math.sin(w * t + i), 0, 2 * Math.PI);
            ctx.globalAlpha = 0.20 - w * 0.029;
            ctx.strokeStyle = w % 2 === 0 ? "#ECF0EF" : "#D5D7D8";
            ctx.lineWidth = 1.5 + Math.sin(w + t) * 0.7;
            ctx.shadowColor = "#FCFAF1";
            ctx.shadowBlur = 7;
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    }

    function bucklePulse() {
      lastBuckle = Date.now();
    }

    function animate() {
      const t = (Date.now() - buckleRef.current) / 900;
      drawBackground();
      drawParticles(t);
      drawDrops(t);
      if ((Date.now() - lastBuckle) / 1000 > buckleInterval) bucklePulse();
      requestAnimationFrame(animate);
    }
    animate();

    return () => window.removeEventListener("resize", resize);
  }, [count, drops, buckleInterval]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        background: "linear-gradient(145deg, #131521 55%, #273244 100%)",
        filter: "blur(0.5px)",
      }}
    />
  );
}
