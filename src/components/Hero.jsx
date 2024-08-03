import { useState, useEffect } from 'react';
import IDEStyleAboutMe from './aboutme';
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = ["Aditya", "Web developer", "MLOps","Web developer"];
  const colors = ["#fa8231", "white", "#c678dd", "white"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 1800); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row justify-between mt-8 gap-4">
      <div className='flex flex-col w-full md:w-[49%] h-[500px] justify-between gap-4'>
        <div className="text-xl flex justify-between w-full h-[20%] p-4 md:p-8 rounded-3xl bg-gradient-to-b from-white/20 to-white/10 backdrop-blur-md border-b border-white/20 shadow-lg relative">
          <h1 className='justify-evenly'>
            <span style={{color:'#f7adad'}}>console</span>.
            <span style={{color:'#61afef'}}>log</span>("
            <span className="greeting" style={{color: colors[currentIndex]}}>
              {items[currentIndex]}
            </span>
            <span className="closure">");</span>
          </h1>
        </div>
        <div className="flex-grow">
          <IDEStyleAboutMe />
        </div>
      </div>
      <div className="text-4xl flex flex-col justify-center w-full md:w-[50%] h-[500px] rounded-3xl bg-gradient-to-b from-white/20 to-white/10 backdrop-blur-md border-b border-white/20 shadow-lg relative">
        <div className="container">
          <p>Hello 👋 I'm</p>
          <section className="animation">
            <div id="first"><div>{items[0]}</div></div>
            <div id="second"><div>{items[1]}</div></div>
            <div id="third"><div>{items[2]}</div></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Hero;