 import { useEffect, useRef, memo } from 'react';
 
 const NebulaBg = memo(function NebulaBg() {
   const canvasRef = useRef<HTMLCanvasElement>(null);
 
   useEffect(() => {
     const canvas = canvasRef.current;
     if (!canvas) return;
     const ctx = canvas.getContext('2d');
     if (!ctx) return;
 
     let animationId: number;
     let time = 0;
 
     const resize = () => {
       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
     };
     resize();
     window.addEventListener('resize', resize);
 
     // Nebula clouds configuration
     const nebulae = Array.from({ length: 5 }, () => ({
       x: Math.random() * canvas.width,
       y: Math.random() * canvas.height,
       radius: Math.random() * 400 + 200,
       hue: Math.random() * 60 + 170, // Cyan to purple range
       speed: Math.random() * 0.0005 + 0.0002,
       phase: Math.random() * Math.PI * 2,
     }));
 
     // Stars
     const stars = Array.from({ length: 200 }, () => ({
       x: Math.random() * canvas.width,
       y: Math.random() * canvas.height,
       size: Math.random() * 2 + 0.5,
       twinkleSpeed: Math.random() * 0.02 + 0.01,
       phase: Math.random() * Math.PI * 2,
     }));
 
     // Energy streams
     const streams = Array.from({ length: 8 }, (_, i) => ({
       angle: (i / 8) * Math.PI * 2,
       length: Math.random() * 200 + 100,
       speed: Math.random() * 0.001 + 0.0005,
       hue: 185 + Math.random() * 100,
     }));
 
     const draw = () => {
       time += 0.016;
 
       // Deep space background
       const bgGrad = ctx.createRadialGradient(
         canvas.width / 2, canvas.height / 2, 0,
         canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
       );
       bgGrad.addColorStop(0, 'hsl(270, 30%, 8%)');
       bgGrad.addColorStop(0.5, 'hsl(225, 25%, 4%)');
       bgGrad.addColorStop(1, 'hsl(225, 25%, 2%)');
       ctx.fillStyle = bgGrad;
       ctx.fillRect(0, 0, canvas.width, canvas.height);
 
       // Draw nebulae
       nebulae.forEach((n) => {
         const x = n.x + Math.sin(time * n.speed * 100 + n.phase) * 50;
         const y = n.y + Math.cos(time * n.speed * 80 + n.phase) * 30;
         const hue = n.hue + Math.sin(time * 0.2 + n.phase) * 20;
 
         const grad = ctx.createRadialGradient(x, y, 0, x, y, n.radius);
         grad.addColorStop(0, `hsla(${hue}, 80%, 50%, 0.15)`);
         grad.addColorStop(0.5, `hsla(${hue + 30}, 70%, 40%, 0.08)`);
         grad.addColorStop(1, 'transparent');
 
         ctx.fillStyle = grad;
         ctx.fillRect(0, 0, canvas.width, canvas.height);
       });
 
       // Draw stars
       stars.forEach((star) => {
         const opacity = 0.3 + Math.sin(time * star.twinkleSpeed * 100 + star.phase) * 0.7;
         ctx.beginPath();
         ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
         ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
         ctx.fill();
 
         // Star glow
         if (star.size > 1.5) {
           const glow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 4);
           glow.addColorStop(0, `rgba(200, 230, 255, ${opacity * 0.3})`);
           glow.addColorStop(1, 'transparent');
           ctx.fillStyle = glow;
           ctx.fillRect(star.x - star.size * 4, star.y - star.size * 4, star.size * 8, star.size * 8);
         }
       });
 
       // Draw energy streams from center
       const cx = canvas.width / 2;
       const cy = canvas.height / 2;
 
       streams.forEach((stream) => {
         const angle = stream.angle + time * stream.speed;
         const length = stream.length + Math.sin(time * 2 + stream.angle) * 50;
 
         ctx.save();
         ctx.translate(cx, cy);
         ctx.rotate(angle);
 
         const grad = ctx.createLinearGradient(0, 0, length * 2, 0);
         grad.addColorStop(0, 'transparent');
         grad.addColorStop(0.3, `hsla(${stream.hue}, 100%, 60%, 0.1)`);
         grad.addColorStop(0.7, `hsla(${stream.hue}, 100%, 60%, 0.05)`);
         grad.addColorStop(1, 'transparent');
 
         ctx.fillStyle = grad;
         ctx.fillRect(50, -15, length * 2, 30);
 
         ctx.restore();
       });
 
       // Central glow
       const centerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 300);
       centerGlow.addColorStop(0, 'hsla(185, 100%, 50%, 0.08)');
       centerGlow.addColorStop(0.5, 'hsla(270, 80%, 50%, 0.04)');
       centerGlow.addColorStop(1, 'transparent');
       ctx.fillStyle = centerGlow;
       ctx.fillRect(0, 0, canvas.width, canvas.height);
 
       animationId = requestAnimationFrame(draw);
     };
 
     draw();
 
     return () => {
       window.removeEventListener('resize', resize);
       cancelAnimationFrame(animationId);
     };
   }, []);
 
   return (
     <canvas
       ref={canvasRef}
       className="fixed inset-0 -z-20 pointer-events-none"
       style={{ opacity: 0.9 }}
     />
   );
 });
 
 export default NebulaBg;