import { useState, useEffect, useRef } from 'react';

const EmptyExperienceCard = () => {
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const fullText = "Looking for more experience...";
  const cardRef = useRef(null);

  useEffect(() => {
    let typingInterval;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
          
          let index = 0;
          let isDeleting = false;
          typingInterval = setInterval(() => {
            if (!isDeleting) {
              setText(fullText.slice(0, index));
              index++;
              if (index > fullText.length) {
                isDeleting = true;
                index = fullText.length;
                
                setTimeout(() => { isDeleting = true; }, 1000);
              }
            } else {
              setText(fullText.slice(0, index));
              index--;
              if (index === 0) {
                isDeleting = false;
                
                setTimeout(() => { isDeleting = false; }, 500);
              }
            }
          }, 100); 
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`experience-card bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-1000 border border-gray-700 ${
        isVisible ? 'opacity-100 transform-none' : 'opacity-0 transform rotate-y-180'
      }`}
    >
      <div className="bg-gray-700 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-gray-300 text-sm font-medium">Next Opportunity</span>
        <div className="w-4"></div>
      </div>

      <div className="p-4 flex-grow flex items-center justify-center">
        <div className="text-green-400 text-lg font-mono">
          <span className="mr-1">&gt;</span>
          {text}
          <span className="animate-blink">|</span>
        </div>
      </div>
    </div>
  );
};

export default EmptyExperienceCard;