import PortfolioProjectCard from './PortfolioProjectCard';
import CodeCartograhper from '../assets/Code Cartograhper.jpeg';


const Projects = () => {
  const projects = [
    {
      title: "Code Cartographer UI",
      description: "This tool The tool extracts the contents of the uploaded archive, generates a directory tree, and displays the contents of text files while respecting .gitignore patterns and common ignore rules.",
      skills: ["python"],
      link: "https://github.com/dryruffian/CodeCartographerUI",
      image: CodeCartograhper
    },
  ];

  return (
    <div className="my-3 text-white text-center w-full p-4 md:p-8 rounded-3xl bg-gradient-to-b from-white/20 to-white/10 backdrop-blur-md border-b border-white/20 shadow-lg relative">
      <h1 className="text-2xl font-bold mb-6 relative inline-block">
        Projects
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <PortfolioProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;