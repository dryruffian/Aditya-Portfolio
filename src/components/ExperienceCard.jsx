import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const ExperienceCard = ({ company, role, duration, description, skills }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
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
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`experience-card bg-gray-900 text-left rounded-lg overflow-hidden shadow-lg transition-all duration-1000 border border-gray-700 ${
        isVisible ? 'opacity-100 transform-none' : 'opacity-0 transform rotate-y-180'
      }`}
      style={{ perspective: '1000px' }}
    >
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-gray-300 text-sm font-medium">{company}.js</span>
        <div className="w-4"></div>
      </div>

      <div className="p-4">
        <div className="flex items-center mb-2">
          <span className="text-red-400">const</span>
          <span className="text-blue-300 ml-2">{company.replace(/\s+/g, '')}</span>
          <span className="text-yellow-300 ml-2">=</span>
          <span className="text-green-300 ml-2">{'{'}</span>
        </div>
        <div className="pl-4 text-purple-300">
          <p>role: <span className="text-yellow-300">{'"'}{role}{'"'}</span>,</p>
          <p>duration: <span className="text-yellow-300">{'"'}{duration}{'"'}</span>,</p>
        </div>
        <div className="mt-4 pl-4">
          <p className="text-purple-300">description: <span className="text-gray-300">{'"'}{description}{'"'}</span></p>
        </div>
        <div className="mt-4 pl-4">
          <span className="text-purple-300">skills: [</span>
          <div className="flex flex-wrap gap-2 mt-2 pl-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-800 rounded-md text-xs text-blue-300"
              >
               {'"'}{skill}{'"'}{index < skills.length - 1 ? ',' : ''}
              </span>
            ))}
          </div>
          <span className="text-purple-300">]</span>
        </div>
        <div className="mt-2">
          <span className="text-green-300">{'}'}</span>
        </div>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ExperienceCard;