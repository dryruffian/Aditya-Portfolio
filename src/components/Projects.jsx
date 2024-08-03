import PortfolioProjectCard from './PortfolioProjectCard';
import CodeCartograhper from '../assets/Code Cartograhper.jpeg';
import BERTneural from '../assets/BERT neural network.jpeg';
import AWS from '../assets/AWS.jpeg';



const Projects = () => {
  const projects = [
    {
      title: "Neural network based sequence classifier",
      description: "Made an Sequence classifier using state-of-the-art BERT model",
      skills: ["python","Pytorch","javascript","fastapi","transformers","cuda","pydantic"],
      link: "https://github.com/dryruffian/Fake-Tweet-Detector-Binary-Classification-Using-neural-networks",
      image: BERTneural
    },
    {
      title: "AWS API Documentation Scraper & Processor",
      description: "This Python project automates the process of extracting and organizing information from AWS API documentation, making it easier to access and analyze AWS API data.",
      skills: ["python","scrapy"],
      link: "https://github.com/dryruffian/AWSEC2_API_ACTION_Scrape",
      image: AWS
    },
    {
      title: "Code Cartographer UI",
      description: "This tool The tool extracts the contents of the uploaded archive, generates a directory tree, and displays the contents of text files while respecting .gitignore patterns and common ignore rules.",
      skills: ["python"],
      link: "https://github.com/dryruffian/CodeCartographerUI",
      image: CodeCartograhper
    }
  ];

  return (
    <div className="my-3 text-white text-center w-full p-4 md:p-8 rounded-3xl bg-gradient-to-b from-white/20 to-white/10 backdrop-blur-md border-b border-white/20 shadow-lg relative">
      <h1 className="text-2xl font-bold mb-6 relative inline-block">
        Personal Projects
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