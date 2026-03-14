import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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

function LanguageRedirect() {
    const browserLang = navigator.language.toLowerCase();
    const lang = browserLang.startsWith('ru') ? 'ru' : 'en';
    return <Navigate to={`/${lang}`} replace />;
}

function Portfolio({ lang }) {
    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang, i18n]);

    useEffect(() => {
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
    }, [lang]);

    return (
        <div className="min-h-screen relative selection:bg-accent selection:text-primary overflow-x-hidden">
            <Cursor />
            <Navbar />
            <Hero />
            <About />
            <Marquee />
            <Experience />
            <Features />
            <Protocol />
            <Contact />
            <Footer />
        </div>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LanguageRedirect />} />
                <Route path="/en" element={<Portfolio lang="en" />} />
                <Route path="/ru" element={<Portfolio lang="ru" />} />
                <Route path="*" element={<LanguageRedirect />} />
            </Routes>
        </BrowserRouter>
    );
}
