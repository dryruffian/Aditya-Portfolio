import Hero from "./Hero";
import Navbar from "./Navbar";

const Glasscard = () => {
    return(<>
    <div className="absolute inset-0 flex items-center justify-center">
        <div className=" w-[90%] h-[90%] p-8 overflow-y-scroll no-scrollbar rounded-3xl bg-white bg-opacity-20 backdrop-blur-lg shadow-lg border border-opacity-30 border-white">
            <Navbar/>
            <Hero/>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0% { bottom: -50px; }
          100% { bottom: 100%; }
        }
      `}</style>
      </>)
};

export default Glasscard;