import { useState, useEffect, useCallback, useRef } from 'react';
import Foreground from './Foreground'

const FullScreenBubblesWithCard = () => {
  const [bubbles, setBubbles] = useState([]);
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
    const interval = setInterval(() => {
      setBubbles(prevBubbles => [
        ...prevBubbles,
        {
          id: Date.now(),
          left: Math.random() * 100,
          size: Math.random() * 30 + 10,
          animationDuration: Math.random() * 8 + 4
        }
      ]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (bubbles.length > 50) {
      setBubbles(prevBubbles => prevBubbles.slice(1));
    }
  }, [bubbles]);

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
      <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700">
        {bubbles.map(bubble => (
          <div
            key={bubble.id}
            className="absolute rounded-lg bg-gradient-to-br from-violet-500 to-black shadow-lg shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-500/70 transition-shadow duration-300"
            style={{
              left: `${bubble.left}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              animation: `float ${bubble.animationDuration}s linear infinite`
            }}
          />
        ))}
        <div
          ref={mouseFollowerRef}
          className="absolute pointer-events-none w-[300px] h-[300px]"
          style={{
            left: 'var(--mouse-x, 0px)',
            top: 'var(--mouse-y, 0px)',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(124,58,237,0.5) 0%, rgba(124,58,237,0) 70%)',
          }}
        />
      </div>
      <Foreground/>
    </>
  );
};

export default FullScreenBubblesWithCard;