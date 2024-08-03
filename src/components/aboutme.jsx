
import { Terminal } from 'lucide-react';

const IDEStyleAboutMe = () => {
  return (
    <div className="w-full h-[78%] max-w-3xl mx-auto">
      <div className="bg-gray-800 h-[395px] rounded-2xl shadow-lg overflow-hidden">
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
        <div className="p-4 font-mono text-lg text-cyan-400">
          <p>
            <span className="text-pink-400">const</span>{' '}
            <span className="text-blue-300">AboutMe</span> ={' '}
            <span className="text-yellow-300">()</span> =&gt; {'{'}
          </p>
          <p className="pl-4">
            <span className="text-pink-400">return</span> (
          </p>
          <p className="pl-8 text-green-300">
            I{"'"}ve crafted seamless, visually stunning interfaces and
            <br />
            robust backend systems that captivate users and enhance their experience.
            <br /><br />
            What sets me apart? My holistic approach as an all-round software engineer.
            <br />
            I collaborate with teams through challenges and beyond, ensuring top-tier
            <br />
            solutions and innovation.
          </p>
          <p className="pl-4">){'};'}</p>
        </div>
      </div>
    </div>
  );
};

export default IDEStyleAboutMe;