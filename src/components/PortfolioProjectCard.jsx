

const PortfolioProjectCard = ({ title, description, skills, link, image }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-700">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex  flex-wrap gap-2 text-center mb-4">
          {skills.map((skill, index) => (
            <span key={index} className="px-2 py-1  bg-gray-800 rounded-md text-xs text-blue-300">
              {skill}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block  bg-gray-700 text-gray-200 px-4 py-2 rounded border border-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-300 font-mono text-sm"
        >
          {'> View Project'}
        </a>
      </div>
    </div>
  );
};

export default PortfolioProjectCard;