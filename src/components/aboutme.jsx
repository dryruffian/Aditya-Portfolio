import React from 'react';
import { Terminal } from 'lucide-react';

const IDEStyleAboutMe = () => {
  return (
    <div className="w-full h-full max-w-3xl mx-auto p-4">
      <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center text-gray-400">
            <Terminal size={16} className="mr-2" />
            <span className="text-sm">about_me.js</span>
          </div>
        </div>
        <div className="p-4 font-mono text-sm sm:text-base md:text-lg text-cyan-400 overflow-auto flex-grow">
          <pre className="whitespace-pre-wrap break-words">
            <code>
              <span className="text-pink-400">const</span> <span className="text-blue-300">AboutMe</span> = <span className="text-yellow-300">()</span> =&gt; {'{'}
                <span className="text-pink-400">return</span> (
                  <span className="text-green-300">
                    I've crafted seamless, visually stunning interfaces and
                    robust backend systems that captivate users and enhance their experience.

                    What sets me apart? My holistic approach as an all-round software engineer.
                    I collaborate with teams through challenges and beyond, ensuring top-tier
                    solutions and innovation.
                  </span>
                );
              {'};'}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default IDEStyleAboutMe;