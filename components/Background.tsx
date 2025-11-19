import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouseX = -1000;
    let mouseY = -1000;
    
    // Purdue Brand Colors for Particles
    const colors = [
      'rgba(194, 142, 14, 0.8)',   // Campus Gold
      'rgba(206, 184, 136, 0.8)',  // Athletic Gold
      'rgba(55, 58, 54, 0.6)',     // Dark Gray
      'rgba(0, 0, 0, 0.4)'         // Black
    ];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      baseX: number;
      baseY: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.baseX = this.x;
        this.baseY = this.y;
        // Random smooth velocity
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = Math.random() * 2.5 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(w: number, h: number) {
        // Move
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;

        // Mouse Interaction (Gentle repulsion)
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 200;
        const force = (maxDistance - distance) / maxDistance;

        if (distance < maxDistance) {
          this.x -= forceDirectionX * force * 1.5;
          this.y -= forceDirectionY * force * 1.5;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const w = canvas.width;
      const h = canvas.height;
      // Density calculation
      const particleCount = Math.min(120, Math.floor((w * h) / 12000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle(w, h));
      }
    };

    const animate = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);
      
      // 1. Draw Connections (Neural Mesh)
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const connectDistance = 180;

          if (dist < connectDistance) {
            ctx.beginPath();
            // Dynamic opacity based on distance
            const opacity = 1 - dist / connectDistance;
            ctx.strokeStyle = `rgba(194, 142, 14, ${opacity * 0.4})`; // Gold lines
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // 2. Draw Particles
      particles.forEach(p => {
        p.update(w, h);
        p.draw(ctx);
      });

      // 3. Mouse Connection (Cursor acts as a node)
      if (mouseX > 0 && mouseY > 0) {
        particles.forEach(p => {
           const dx = mouseX - p.x;
           const dy = mouseY - p.y;
           const dist = Math.sqrt(dx * dx + dy * dy);
           if (dist < 200) {
             ctx.beginPath();
             ctx.strokeStyle = `rgba(55, 58, 54, ${1 - dist/200})`; // Dark gray user lines
             ctx.lineWidth = 0.8;
             ctx.moveTo(mouseX, mouseY);
             ctx.lineTo(p.x, p.y);
             ctx.stroke();
           }
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    // Initial setup
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-white overflow-hidden">
      {/* Base Gradient - Reverted to lighter white/gray scale */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#FAFAFA] to-[#F5F5F0]" />

      {/* 
         Ambient Color Orbs for Glass Effect 
         REDUCED OPACITY: Lighter touch to avoid yellow cast, but keeping them present.
      */}
      
      {/* 1. Massive Global Wash (Top Left) - Lighter */}
      <div className="absolute top-[-20%] left-[-20%] w-[100vw] h-[100vw] bg-purdue-campus/10 rounded-full blur-[120px] animate-float mix-blend-multiply" />
      
      {/* 2. Large Accent (Right Center) - Lighter */}
      <div className="absolute top-[30%] right-[-20%] w-[80vw] h-[80vw] bg-purdue-athletic/20 rounded-full blur-[100px] animate-float-delayed mix-blend-multiply" />
      
      {/* 3. Grounding Shadow (Bottom Left) - Lighter */}
      <div className="absolute bottom-[-20%] left-[-10%] w-[90vw] h-[90vw] bg-purdue-gray/10 rounded-full blur-[140px] animate-blob mix-blend-multiply" />

      {/* 4. Intense Core (Center floating) - Very subtle */}
      <div className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-purdue-campus/5 rounded-full blur-[80px] animate-pulse mix-blend-multiply" />
      
      {/* 
          GEOMETRIC SHAPES OVERLAY 
          Kept as requested, ensuring visibility on lighter background.
      */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
        <defs>
          <pattern id="dotGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="#373A36" opacity="0.1" />
          </pattern>
        </defs>

        {/* 1. Subtle Dotted Grid Background */}
        <rect x="0" y="0" width="100%" height="100%" fill="url(#dotGrid)" opacity="0.4" />

        {/* 2. Concentric Circles (Top Right) */}
        <g stroke="#C28E0E" fill="none" strokeWidth="2" opacity="0.2">
           <circle cx="90%" cy="20%" r="150" />
           <circle cx="90%" cy="20%" r="220" strokeDasharray="10 10" />
           <circle cx="90%" cy="20%" r="300" opacity="0.7" strokeWidth="1" />
        </g>

        {/* 3. Radiating Rays (Bottom Left) */}
        <g stroke="#373A36" strokeWidth="1.5" opacity="0.1">
           <line x1="0" y1="100%" x2="25%" y2="30%" />
           <line x1="0" y1="100%" x2="40%" y2="40%" />
           <line x1="0" y1="100%" x2="55%" y2="60%" />
           <line x1="0" y1="100%" x2="15%" y2="15%" />
        </g>

        {/* 4. Solid Accent Shapes */}
        <circle cx="12%" cy="45%" r="60" fill="#CEB888" opacity="0.2" />
        <rect x="80%" y="70%" width="150" height="150" rx="20" stroke="#C28E0E" strokeWidth="3" fill="none" transform="rotate(15, 80, 70)" opacity="0.15" />
        
        {/* 5. Large Ring (Center-ish) */}
        <circle cx="40%" cy="90%" r="350" fill="none" stroke="#9D968D" strokeWidth="60" opacity="0.05" />
      </svg>

      {/* Generative Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0" 
        style={{ opacity: 0.8, zIndex: 2 }}
      />

      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply" style={{ zIndex: 3, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0)_50%,rgba(194,142,14,0.05)_100%)]" style={{ zIndex: 3 }} />
    </div>
  );
};

export default Background;