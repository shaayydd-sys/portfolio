import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        id: 1,
        company: "NeuroCity™",
        location: "Moscow",
        role: "Graphic Designer",
        duration: "January 2024 — November 2024",
        time: "11 months",
        description: "Developed prototypes (animations and visuals) for information kiosks, as well as integrations of various applications into them."
    },
    {
        id: 2,
        company: "Design Glass",
        location: "Remote/Hybrid",
        role: "Graphic Designer",
        duration: "March 2022 — January 2024",
        time: "1 year 11 months",
        description: "Created website designs for the company. Produced presentations for architectural projects that were showcased to clients. Most tasks were completed in Figma and Illustrator. Completed advanced courses in Figma, Illustrator, After Effects, and general web design skills."
    }
];

export default function Experience() {
    const container = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.exp-header', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 75%',
                },
                clipPath: 'inset(0 0 100% 0)',
                y: 20,
                duration: 1.2,
                ease: 'power3.out',
            });

            gsap.from('.exp-card', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 60%',
                },
                clipPath: 'inset(0 0 100% 0)',
                y: 30,
                duration: 1.2,
                stagger: 0.25,
                ease: 'power3.out',
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" ref={container} className="w-full py-32 px-6 md:px-16 bg-dark text-primary relative z-10 selection:bg-accent selection:text-primary">
            <div className="max-w-5xl mx-auto relative z-10">
                <div className="exp-header mb-20 text-center flex flex-col items-center">
                    <span className="font-data text-accent text-sm uppercase tracking-[0.2em] mb-4 block">
                        Career Timeline
                    </span>
                    <h2 className="font-heading font-bold text-5xl md:text-7xl uppercase tracking-tighter">
                        Work Experience
                    </h2>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="exp-card relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                            {/* Timeline Node */}
                            <div className="flex items-center justify-center w-10 h-10 border-2 border-primary/20 bg-dark absolute left-0 md:left-1/2 md:-translate-x-1/2 group-hover:border-accent transition-colors duration-300 rounded-none">
                                <div className="w-2.5 h-2.5 bg-primary/40 group-hover:bg-accent transition-colors duration-300 rounded-none"></div>
                            </div>

                            {/* Card Content */}
                            <div className="group/card w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-auto md:ml-0 md:mr-0 p-8 rounded-none bg-[#1a1a1a] transition-all duration-500 hover:bg-accent hover:-translate-y-1">
                                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-4 gap-2">
                                    <div>
                                        <h3 className="font-heading font-bold text-2xl text-primary group-hover/card:text-dark">{exp.company}</h3>
                                        <p className="font-heading text-xl text-primary/70 group-hover/card:text-dark">{exp.role}</p>
                                    </div>
                                    <div className="text-left md:text-right">
                                        <p className="font-data text-xs text-accent group-hover/card:text-dark uppercase tracking-widest">{exp.time}</p>
                                        <p className="font-sans text-sm text-primary/50 group-hover/card:text-dark/80 mt-1">{exp.duration}</p>
                                    </div>
                                </div>
                                <p className="text-primary/70 group-hover/card:text-dark font-sans leading-relaxed text-sm md:text-base">
                                    {exp.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
