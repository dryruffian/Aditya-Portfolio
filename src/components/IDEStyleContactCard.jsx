import { useState } from 'react';
import { Terminal } from 'lucide-react';

const IDEStyleContactCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full h-[78%] max-w-[95%] mx-auto">
      <div className="bg-gray-800 h-[580px] rounded-2xl shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center text-gray-400">
            <Terminal size={16} className="mr-2" />
            <span className="text-sm">contact_me.js</span>
          </div>
        </div>
        <div className="flex h-[calc(100%-40px)]">
          <div className="w-full md:w-1/2 p-4 font-mono text-lg text-cyan-400 border-r border-gray-700">
            <p className="mb-4">
              <span className="text-pink-400">const</span>{' '}
              <span className="text-blue-300">ContactForm</span> ={' '}
              <span className="text-yellow-300">()</span> =&gt; {'{'}
            </p>
            <div className="pl-4 space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-1">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 text-white px-2 py-1 rounded"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-1">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 text-white px-2 py-1 rounded"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-1">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 text-white px-2 py-1 rounded h-32 resize-none"
                ></textarea>
              </div>
              <button
                id="sendBtn"
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Send
              </button>
            </div>
            <p className="mt-4">{'};'}</p>
          </div>
          <div className="hidden md:block md:w-1/2 p-4 font-mono text-lg text-wrap text-cyan-400">
            <p className="mb-4">
              <span className="text-pink-400">const</span>{' '}
              <span className="text-blue-300">button</span> = 
              <span className="text-yellow-300">document</span>.
              <span className="text-blue-300">getElementById</span>(
              <span className="text-green-300">{"'"}sendBtn{"'"}</span>);
            </p>
            <p className="mb-4">
              <span className="text-pink-400">const</span>{' '}
              <span className="text-blue-300">formData</span> ={' '}
              <span className="text-yellow-300">{'{'}</span>
            </p>
            <div className="pl-4">
              <p>
                <span className="text-green-300">name:</span>{' '}
                {'"'}<span className="text-yellow-300">{formData.name}</span>{'",'}
              </p>
              <p>
                <span className="text-green-300">email:</span>{' '}
                {'"'}<span className="text-yellow-300">{formData.email}</span>{'",'}
              </p>
              <p>
                <span className="text-green-300">message:</span>{' '}
                {'"'}<span className="text-yellow-300">{formData.message}</span>{'",'}
              </p>
            </div>
            <p className="mt-4">{'};'}</p>
            <p className="mt-6">
              <span className="text-pink-400">button</span>.
              <span className="text-blue-300">addEventListener</span>(
              <span className="text-yellow-300">{"'"}click{"'"}</span>, () =&gt; {'{'}
            </p>
            <p className="pl-4">
              <span className="text-pink-400">form</span>.
              <span className="text-blue-300">send</span>(
              <span className="text-green-300">message</span>);
            </p>
            <p>{'});'}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDEStyleContactCard;