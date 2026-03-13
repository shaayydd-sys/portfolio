import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cursor from './components/Cursor';
import Marquee from './components/Marquee';
import Features from './components/Features';
import Protocol from './components/Protocol';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
    useEffect(() => {
        // Handle Anchor Links (Smooth Scroll to ID)
        const handleAnchorClick = (e) => {
            const target = e.currentTarget;
            const hash = target.getAttribute('href');
            if (hash && hash.startsWith('#')) {
                e.preventDefault();
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: { y: hash, offsetY: 50 },
                    ease: "power2.inOut"
                });
            }
        };

        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        anchorLinks.forEach(link => link.addEventListener('click', handleAnchorClick));

        return () => {
            anchorLinks.forEach(link => link.removeEventListener('click', handleAnchorClick));
        };
    }, []);

    return (
        <div className="min-h-screen relative selection:bg-accent selection:text-primary overflow-x-hidden">
            <Cursor />
            <Navbar />
            <Hero />
            <About />
            <Marquee />
            <Experience />
            <Features />
            {/* 
        Protocol uses sticky scroll-trigger so needs its own section styling 
        but handles overflow internally.
      */}
            <Protocol />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
