import { useState, useEffect } from 'react';
import Foreground from './Foreground'
const FullScreenBubblesWithCard = () => {
  const [bubbles, setBubbles] = useState([]);

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
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (bubbles.length > 50) {
      setBubbles(prevBubbles => prevBubbles.slice(1));
    }
  }, [bubbles]);

  return (
    <>
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-slate-900 to-slate-700">
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-white opacity-70"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animation: `float ${bubble.animationDuration}s linear infinite`
          }}
        />
      ))}
      
    </div>
    <Foreground/>
    </>

  );
};

export default FullScreenBubblesWithCard;