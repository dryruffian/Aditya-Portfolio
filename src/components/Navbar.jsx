
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-bfrom-violet-200 to-pink-200 backdrop-blur-md border-b border-white/20 shadow-lg">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-4">
            <NavItem text="_about" />
            <NavItem text="_work" />
            <NavItem text="_contact" />
          </div>
          <div className="text-white text-2xl font-semibold">
            Aditya
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ text }) => {
  return (
    <a
      href={`#${text.toLowerCase().replace('_', '')}`}
      className="text-white text-lg hover:text-indigo-300 transition-colors duration-200 ease-in-out relative group"
    >
      {text}
      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out"></span>
    </a>
  );
};

export default Navbar;