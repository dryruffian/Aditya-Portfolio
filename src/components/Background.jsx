import { useState, useEffect, useCallback, useRef } from 'react';
import Foreground from './Foreground';

const IDEGlassmorphismBackground = () => {
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);
  const mouseFollowerRef = useRef(null);
  const rafRef = useRef(null);

  const updateMousePosition = useCallback((e) => {
    if (mouseFollowerRef.current && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseFollowerRef.current.style.setProperty('--mouse-x', `${x}px`);
      mouseFollowerRef.current.style.setProperty('--mouse-y', `${y}px`);
    }
  }, []);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`,
          duration: Math.random() * 20 + 10,
          delay: Math.random() * 5,
        });
      }
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => updateMousePosition(e));
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [updateMousePosition]);

  return (
    <>
      <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
              animation: `float ${particle.duration}s infinite linear, pulse 2s infinite`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
        <div
          className="absolute inset-0 animate-pan"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.3)),
              repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 1px, transparent 1px, transparent 20px),
              repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0px, rgba(255, 255, 255, 0.03) 1px, transparent 1px, transparent 20px)
            `,
          }}
        />
        <div
          ref={mouseFollowerRef}
          className="absolute pointer-events-none w-[300px] h-[300px]"
          style={{
            left: 'var(--mouse-x, 0px)',
            top: 'var(--mouse-y, 0px)',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, rgba(124,58,237,0) 70%)',
          }}
        />
      </div>
      <Foreground />
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        @keyframes pan {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        .animate-pan {
          animation: pan 30s linear infinite;
        }
      `}</style>
    </>
  );
};

export default IDEGlassmorphismBackground;