
import ExperienceCard from './ExperienceCard';

const Experience = () => {
  const experiences = [
    {
      company: 'AARP Communication',
      role: 'Data Science Intern',
      duration: 'Jan 2023 - May 2023',
      description: 'Developed multiple web scrapers using Scrapy, BeautifulSoup, and Selenium to automate lead generation and contact information extraction. This initiative resulted in a 1000% increase in lead generation efficiency.',
      skills: ['Python', 'Beautiful Soup4', 'Selenium', 'Scrapy'],
      image: '/path/to/tech-co-image.jpg'
    },
    {
      company: 'Falana Land',
      role: 'Graphic Design Intern',
      duration: 'Nov 2024 - March 2021',
      description: 'Created compelling visual designs for various events and concerts, focusing on eye-catching posters to promote and market these occasions.',
      skills: ['After Effects', 'Photo shop', 'Stable Diffusion'],
      image: '/path/to/startup-inc-image.jpg'
    },

  ];

  return (
    <div className="my-3 text-white w-full p-4 md:p-8 rounded-3xl bg-gradient-to-b from-white/20 to-white/10 backdrop-blur-md border-b border-white/20 shadow-lg relative">
      <h1 className="text-2xl font-bold mb-6 relative inline-block">
        Experience
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;