import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useInView } from 'react-intersection-observer';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Image Slider Component
const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prev = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-full min-h-[200px] md:h-[60vh] md:max-h-[600px] rounded-none overflow-hidden group border border-dark/20 bg-[#111111]">
            {images.map((src, idx) => {
                const isVideo = src.match(/\.(mp4|webm|mov)$/i);
                return isVideo ? (
                    <video
                        key={src}
                        src={src}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${currentIndex === idx ? 'opacity-100' : 'opacity-0'}`}
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                ) : (
                    <img
                        key={src}
                        src={src}
                        alt={`Slide ${idx + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${currentIndex === idx ? 'opacity-100' : 'opacity-0'}`}
                    />
                );
            })}

            {/* Controls */}
            {images.length > 1 && (
                <>
                    <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button onClick={prev} className="bg-[#1a1a1a]/80 hover:bg-accent text-primary p-3 rounded-full backdrop-blur-md transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(230,59,46,0.3)]">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                        </button>
                        <button onClick={next} className="bg-[#1a1a1a]/80 hover:bg-accent text-primary p-3 rounded-full backdrop-blur-md transition-all hover:scale-110 hover:shadow-[0_0_15px_rgba(230,59,46,0.3)]">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                        </button>
                    </div>
                    {/* Dots */}
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-10">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-6 bg-accent' : 'w-1.5 bg-primary/50 hover:bg-primary/80'}`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

// SVG Anim 1: Rotating Motif
const RotatingMotif = () => (
    <svg className="w-full h-full text-accent animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="10 5" />
        <rect x="30" y="30" width="40" height="40" stroke="currentColor" strokeWidth="1" transform="rotate(45 50 50)" />
        <circle cx="50" cy="50" r="15" fill="currentColor" fillOpacity="0.2" />
    </svg>
);

// SVG Anim 2: Linear Scanner
const LinearScanner = () => {
    return (
        <div className="relative w-full h-full border border-dark/20 rounded-none overflow-hidden flex flex-col justify-between p-2">
            <div className="grid grid-cols-10 grid-rows-5 gap-1 w-full h-full opacity-30">
                {[...Array(50)].map((_, i) => <div key={i} className="bg-dark rounded-none"></div>)}
            </div>
            <div className="absolute top-0 left-0 w-full h-[2px] bg-accent shadow-[0_0_10px_#E63B2E] z-10 animate-[scan_3s_ease-in-out_infinite_alternate]"></div>
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(10000%); }
        }
      `}} />
        </div>
    );
};

// SVG Anim 3: Pulsing Waveform
const PulseWave = () => (
    <svg className="w-full h-full text-accent" viewBox="0 0 100 50" preserveAspectRatio="none" fill="none">
        <path
            d="M0 25 L30 25 L40 10 L50 40 L60 25 L100 25"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="bevel"
            className="animate-[dash_2s_linear_infinite]"
            strokeDasharray="200"
            strokeDashoffset="200"
        />
        <style dangerouslySetInnerHTML={{
            __html: `
        @keyframes dash {
          to { stroke-dashoffset: 0; }
        }
    `}} />
    </svg>
);

const uiUxProjects = [
    {
        id: "uiux-1",
        num: "01",
        title: "WAM",
        desc: "A complete UX/UI project for a modeling agency - from research to final design. I led the user research phase, mapped out the full information architecture, and designed every screen in Figma. Visual assets were created in Illustrator and Photoshop. The final product is fully responsive, delivering a seamless experience on desktop, tablet, and mobile.",
        Visual: <ImageSlider images={['/projects/wam-1.png', '/projects/wam-2.jpg']} />
    },
    {
        id: "uiux-2",
        num: "02",
        title: "SFIN",
        desc: "Full landing page design for SFIN - a tokenized asset and installment payment protocol. Bold visual hierarchy, clear user flow, and a sharp fintech aesthetic. Designed in Figma, fully responsive.",
        Visual: <ImageSlider images={['/projects/sfin-1.jpg', '/projects/sfin-2.jpg', '/projects/sfin-3.jpg', '/projects/sfin-4.jpg', '/projects/sfin-5.jpg']} />
    },
    {
        id: "uiux-3",
        num: "03",
        title: "PRADA",
        desc: "This is not an official Prada project — just a redesign concept I built for the love of it. I wanted to push my visual design skills within a high-end fashion context, so I reimagined their landing page from scratch. Designed in Figma, with assets crafted in Illustrator and Photoshop. Responsive across all devices.",
        Visual: <ImageSlider images={['/projects/prada-1.jpg', '/projects/prada-2.jpg']} />
    }
];

const graphicProjects = [
    {
        id: "graph-1",
        num: "01",
        title: "BRAND 1",
        desc: "Visual identity and logo mark creation.",
        Visual: <RotatingMotif /> // Placeholder
    },
    {
        id: "graph-2",
        num: "02",
        title: "POSTER 2",
        desc: "Editorial and print media composition.",
        Visual: <LinearScanner /> // Placeholder
    },
    {
        id: "graph-3",
        num: "03",
        title: "PACKAGING",
        desc: "Physical product styling and 3D mockups.",
        Visual: <PulseWave /> // Placeholder
    }
];

// Reusable Project Card Component with pure React+CSS Reveals
const ProjectCard = ({ step, index }) => {
    const { ref, inView } = useInView({
        threshold: 0.4, // Fire when 40% of the card is visible
        triggerOnce: false
    });

    return (
        <div
            ref={ref}
            className="w-full h-[100dvh] flex flex-col justify-center pt-[10vh] pb-4 sticky top-0 bg-[#1a1a1a] overflow-hidden"
            style={{ zIndex: index }}
        >
            <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-16 items-center md:items-start h-full">

                {/* Left Side: Text Content */}
                <div className="md:col-span-4 flex flex-col justify-center md:justify-start">
                    <div
                        className={`font-data text-accent mb-2 md:mb-4 uppercase tracking-widest text-xs font-semibold overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        // {step.num}
                    </div>
                    <h2
                        className={`font-heading font-black text-5xl md:text-6xl min-[900px]:text-8xl text-primary tracking-tighter mb-4 md:mb-6 whitespace-nowrap transition-all duration-1000 delay-[100ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                    >
                        {step.title}
                    </h2>
                    <p
                        className={`font-data text-primary/70 text-[11px] sm:text-xs md:text-sm uppercase tracking-wide leading-relaxed overflow-hidden transition-all duration-1000 delay-[200ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    >
                        {step.desc}
                    </p>
                </div>

                {/* Right Side: Visual/Image Block */}
                <div className="md:col-span-8 h-[35vh] md:h-[70vh] flex items-center md:items-start justify-center relative md:mt-[165px] w-full">
                    <div
                        className={`w-full h-full flex items-center justify-center transition-all duration-[2500ms] delay-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${inView ? '[clip-path:inset(0%_0%_0%_0%)]' : '[clip-path:inset(0%_0%_100%_0%)]'}`}
                    >
                        {step.Visual}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default function Protocol() {
    const [activeTab, setActiveTab] = useState('uiux');
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    // Get current projects array
    const currentProjects = activeTab === 'uiux' ? uiUxProjects : graphicProjects;

    // Mobile: snap to nearest project boundary after scroll settles
    useEffect(() => {
        if (window.innerWidth >= 900) return;
        const section = containerRef.current;
        if (!section) return;

        let timer = null;
        let isSnapping = false;

        const handleScroll = () => {
            if (isSnapping) return;
            clearTimeout(timer);
            timer = setTimeout(() => {
                const sectionTop = section.getBoundingClientRect().top + window.scrollY;
                const scrolled = window.scrollY - sectionTop;
                const total = currentProjects.length * window.innerHeight;
                if (scrolled >= 0 && scrolled < total) {
                    const idx = Math.round(scrolled / window.innerHeight);
                    if (idx < 0 || idx >= currentProjects.length) return;
                    const target = sectionTop + idx * window.innerHeight;
                    if (Math.abs(window.scrollY - target) > 8) {
                        isSnapping = true;
                        window.scrollTo({ top: target, behavior: 'smooth' });
                        setTimeout(() => { isSnapping = false; }, 600);
                    }
                }
            }, 80);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timer);
        };
    }, [activeTab, currentProjects.length]);

    useEffect(() => {
        let observer;
        let ctx = gsap.context(() => {
            // Header animation
            gsap.from('.protocol-header', {
                scrollTrigger: {
                    trigger: '.protocol-header',
                    start: 'top 75%',
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: 'power3.out',
            });

            // Set up the sticky stacking (desktop only)
            if (window.innerWidth >= 768) {
                const cards = cardsRef.current.filter(Boolean);

                cards.forEach((card, i) => {
                    if (i !== cards.length - 1) {
                        gsap.to(card, {
                            scale: 0.9,
                            filter: "blur(20px)",
                            opacity: 0.5,
                            scrollTrigger: {
                                trigger: cards[i + 1],
                                start: "top bottom",
                                end: "top top",
                                scrub: true,
                            }
                        });
                    }
                });
            }

        }, containerRef);
        return () => {
            ctx.revert();
            // Clear refs when switching tabs so GSAP targets the right DOM elements
            cardsRef.current = [];
        };
    }, [activeTab]);

    return (
        <>
            {/* Header Section */}
            <section className="w-full pt-16 pb-0 px-6 md:px-16 bg-[#1a1a1a] text-primary relative z-20 pointer-events-none">
                <div className="max-w-5xl mx-auto">
                    <div className="protocol-header text-center flex flex-col items-center">
                        <span className="font-data text-accent text-sm uppercase tracking-[0.2em] mb-4 block">
                            Favourites
                        </span>
                        <h2 className="font-heading font-bold text-5xl md:text-7xl uppercase tracking-tighter mb-8">
                            My Projects
                        </h2>

                        {/* Toggle Switch */}
                        <div className="flex bg-[#2a2a2a] p-1 rounded-full border border-[#333] pointer-events-auto">
                            <button
                                onClick={() => setActiveTab('uiux')}
                                className={`px-6 py-2 rounded-full font-heading font-semibold text-sm transition-all duration-300 ${activeTab === 'uiux' ? 'bg-[#1a1a1a] text-accent shadow-md' : 'text-primary/60 hover:text-primary'} hover:text-accent`}
                            >
                                UI/UX DESIGN
                            </button>
                            <button
                                onClick={() => setActiveTab('graphic')}
                                className={`px-6 py-2 rounded-full font-heading font-semibold text-sm transition-all duration-300 ${activeTab === 'graphic' ? 'bg-[#1a1a1a] text-accent shadow-md' : 'text-primary/60 hover:text-primary'} hover:text-accent`}
                            >
                                GRAPHIC DESIGN
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky Cards Section */}
            <section id="projects" ref={containerRef} className="relative w-full bg-[#1a1a1a]" key={activeTab}>
                {currentProjects.map((step, i) => (
                    <ProjectCard key={step.id} step={step} index={i} />
                ))}
            </section>
        </>
    );
}
