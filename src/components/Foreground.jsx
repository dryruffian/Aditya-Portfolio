import Experience from "./Experience";
import Hero from "./Hero";
import IDEStyleContactCard from "./IDEStyleContactCard";
import Navbar from "./Navbar";
import Projects from "./Projects";

const Glasscard = () => {
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <div className="w-full max-w-7xl h-[90vh] rounded-3xl bg-white bg-opacity-20 backdrop-blur-lg shadow-lg border border-opacity-30 border-white overflow-hidden flex flex-col">
                    <div className="sticky top-0 z-10">
                        <Navbar />
                    </div>
                    <div className="flex-grow m-2 overflow-y-auto no-scrollbar p-8">
                        <Hero id="about"/>
                        <Experience id="work"/>
                        <Projects />
                        <IDEStyleContactCard id="work" />
                    </div>
                    <div className="sticky bottom-0 z-10">
                        
                    </div>
                </div>
            </div>
            <style>{`
                @keyframes float {
                    0% { bottom: -50px; }
                    100% { bottom: 100%; }
                }
            `}</style>
        </>
    )
};

export default Glasscard;