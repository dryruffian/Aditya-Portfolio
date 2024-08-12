import { useState, useEffect } from 'react';
import Experience from "./Experience";
import Hero from "./Hero";
import IDEStyleContactCard from "./IDEStyleContactCard";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Footer from './footer';

const Glasscard = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <div className="w-full max-w-7xl h-[90vh] rounded-3xl bg-white bg-opacity-20 backdrop-blur-lg shadow-lg border border-opacity-30 border-white overflow-hidden flex flex-col">
                    <div className="sticky top-0 z-10">
                        <Navbar activeSection={activeSection} />
                    </div>
                    <div className="flex-grow m-2 overflow-y-auto no-scrollbar p-8">
                        <section id="about"><Hero /></section>
                        <section id="work"><Experience /></section>
                        <section id="projects"><Projects /></section>
                        <section id="contact"><IDEStyleContactCard /></section>
                        
                    </div>
                    <div className="sticky bottom-0 z-10">
                    <section><Footer/></section>
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