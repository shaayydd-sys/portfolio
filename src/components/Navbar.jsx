import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const { t } = useTranslation();
    const navRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isPastHero, setIsPastHero] = useState(false);
    const [isOverDarkSection, setIsOverDarkSection] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsScrolled(scrollY > 50);
            setIsPastHero(scrollY > window.innerHeight - 80);

            // Check if navbar is overlapping the dark experience or projects sections
            const darkSections = ['experience', 'projects'];
            let isOverDark = false;

            darkSections.forEach(id => {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 50 && rect.bottom >= 50) {
                        isOverDark = true;
                    }
                }
            });

            setIsOverDarkSection(isOverDark);
        };
        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isDarkText = isPastHero && !isOverDarkSection;

    return (
        <nav
            ref={navRef}
            className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between px-4 py-2 min-[900px]:px-8 min-[900px]:py-3 rounded-[3rem] transition-all duration-300 w-[95%] sm:w-[90%] max-w-5xl ${isScrolled
                ? 'bg-background/10 backdrop-blur-[32px] shadow-sm'
                : 'bg-transparent'
                } ${isDarkText ? 'text-dark' : 'text-primary'}`}
        >
            <div className="font-heading font-bold text-lg md:text-xl tracking-tighter">
                Damir Shaikhullin
            </div>
            <div className="hidden min-[900px]:flex items-center gap-8 font-data text-sm uppercase">
                <a href="#about" className={`hover-lift transition-colors ${isDarkText ? 'text-dark/80 hover:text-accent' : 'text-primary/80 hover:text-primary'}`}>{t('nav.about')}</a>
                <a href="#experience" className={`hover-lift transition-colors ${isDarkText ? 'text-dark/80 hover:text-accent' : 'text-primary/80 hover:text-primary'}`}>{t('nav.experience')}</a>
                <a href="#skills" className={`hover-lift transition-colors ${isDarkText ? 'text-dark/80 hover:text-accent' : 'text-primary/80 hover:text-primary'}`}>{t('nav.skills')}</a>
                <a href="#projects" className={`hover-lift transition-colors ${isDarkText ? 'text-dark/80 hover:text-accent' : 'text-primary/80 hover:text-primary'}`}>{t('nav.projects')}</a>
            </div>
            <a href="#contact" className="relative overflow-hidden group px-4 py-1.5 md:px-6 md:py-2.5 rounded-full font-heading font-semibold text-xs md:text-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_10px_20px_rgba(230,59,46,0.15)] bg-[#1a1a1a] [transform:translateZ(0)]">
                {/* Sliding Background Span */}
                <span className="absolute inset-0 bg-[#E63B2E] -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-[1]"></span>
                <span className="relative z-10 block transition-colors duration-300 text-primary group-hover:text-dark">{t('nav.contact')}</span>
            </a>
        </nav>
    );
}
