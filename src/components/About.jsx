import React, { useLayoutEffect, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const container = useRef(null);
    const imageRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.about-reveal', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 70%',
                },
                clipPath: 'inset(0 0 100% 0)',
                y: 20,
                duration: 1.2,
                stagger: 0.12,
                ease: 'power3.out',
            });

            gsap.from('.about-image', {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 70%',
                },
                clipPath: 'inset(100% 0 0 0)',
                duration: 1.4,
                ease: 'power3.out',
            });
        }, container);

        return () => ctx.revert();
    }, []);

    // 3D tilt on image hover (desktop only)
    useEffect(() => {
        const el = imageRef.current;
        if (!el || window.matchMedia('(pointer: coarse)').matches) return;

        const onMouseMove = (e) => {
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            gsap.to(el, {
                rotateY: x * 18,
                rotateX: -y * 12,
                scale: 1.03,
                transformPerspective: 700,
                duration: 0.5,
                ease: 'power2.out',
            });
        };

        const onMouseLeave = () => {
            gsap.to(el, {
                rotateY: 0,
                rotateX: 0,
                scale: 1,
                duration: 1,
                ease: 'elastic.out(1, 0.6)',
            });
        };

        el.addEventListener('mousemove', onMouseMove);
        el.addEventListener('mouseleave', onMouseLeave);
        return () => {
            el.removeEventListener('mousemove', onMouseMove);
            el.removeEventListener('mouseleave', onMouseLeave);
        };
    }, []);

    return (
        <section id="about" ref={container} className="w-full pt-10 pb-16 min-[900px]:py-32 px-6 min-[900px]:px-16 bg-background relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 min-[900px]:grid-cols-[5fr_7fr] gap-12 min-[900px]:gap-16 items-center">

                {/* Image Column */}
                <div className="relative">
                    <div
                        ref={imageRef}
                        className="about-image relative w-full aspect-[4/5] rounded-none overflow-hidden bg-dark/5"
                        style={{ transformStyle: 'preserve-3d' }}
                    >
                        <img
                            src="/assets/profile.jpg"
                            alt="Damir Shaikhullin"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                        />
                        <div className="absolute inset-0 border border-dark/10 rounded-none"></div>
                    </div>
                </div>

                {/* Text Column */}
                <div className="flex flex-col justify-center">
                    <div className="mb-6 flex space-x-4 items-center about-reveal">
                        <span className="w-12 h-[1px] bg-accent"></span>
                        <span className="font-data text-xs md:text-sm uppercase tracking-widest text-dark/60">
                            Identification
                        </span>
                    </div>

                    <h2 className="about-reveal font-heading font-bold text-4xl min-[900px]:text-6xl text-dark mb-4 leading-tight uppercase tracking-tighter">
                        About Me
                    </h2>
                    <h3 className="about-reveal font-heading font-medium tracking-tight text-2xl min-[900px]:text-4xl text-dark/80 mb-8">
                        Damir Shaikhullin.
                    </h3>

                    <div className="space-y-6 text-dark/70 font-sans text-base md:text-lg leading-relaxed max-w-2xl about-reveal">
                        <p>
                            Graphic designer specializing in UI/UX design. My passion is creating intuitive and visually appealing interfaces for a global audience.
                        </p>
                        <p>
                            Fluency in English and several years of living in Portugal have shaped my deep understanding of cross-cultural aspects of user interaction. With experience working across various design tools, I strive to bring innovative ideas to life and create products that are both functional and aesthetically pleasing.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-8 about-reveal">
                        <div>
                            <p className="font-data text-xs text-dark/50 uppercase tracking-widest mb-1">Age</p>
                            <p className="font-heading font-bold text-xl text-dark">23</p>
                        </div>
                        <div>
                            <p className="font-data text-xs text-dark/50 uppercase tracking-widest mb-1">Born</p>
                            <p className="font-heading font-bold text-xl text-dark">May 26, 2002</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
