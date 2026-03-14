import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

// Per-character stagger reveal — animates each letter individually
const CharSplit = ({ children, className, delay = 0 }) => {
    const text = String(children);
    return (
        <span className={className} aria-label={text}>
            {text.split('').map((char, i) => (
                <span
                    key={i}
                    className="inline-block"
                    style={{
                        animation: `charReveal 0.9s cubic-bezier(0.16,1,0.3,1) both`,
                        animationDelay: `${delay + i * 0.045}s`,
                    }}
                >
                    {char === ' ' ? '\u00a0' : char}
                </span>
            ))}
        </span>
    );
};

export default function Hero() {
    const { t, i18n } = useTranslation();
    const isRu = i18n.language === 'ru';
    const container = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Block reveal animations
            gsap.from('.block-reveal', {
                yPercent: 20,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: 'power3.out',
            });

            // Subtitle: flies out from the line (left → right reveal)
            gsap.from('.hero-subtitle', {
                clipPath: 'inset(0 100% 0 0)',
                x: -12,
                opacity: 0,
                duration: 1.2,
                ease: 'expo.out',
                delay: 0.5,
            });

            // Text reveal inside blocks (CTA line)
            gsap.from('.text-reveal', {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power3.out',
                delay: 0.6
            });

            // Continuous smooth bounce for the scroll indicator
            gsap.to('.scroll-arrow', {
                y: 6,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut'
            });

        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={container}
            className="w-full h-[100svh] min-h-[600px] flex flex-col min-[900px]:flex-row overflow-hidden relative"
        >
            {/* Left Block (Red) */}
            <div className="block-reveal w-full min-[900px]:w-[65%] h-[55%] min-[900px]:h-full bg-accent flex flex-col justify-center items-start relative z-10 pl-[calc(2.5vw+1rem)] pr-4 min-[900px]:px-8 overflow-hidden">
                <div className="flex flex-col relative text-left pt-24 min-[900px]:pt-0 w-full max-w-3xl">
                    <p className="hero-subtitle font-heading text-dark/80 text-sm min-[900px]:text-base font-medium mb-6 min-[900px]:mb-12 max-w-xs leading-snug pr-0 min-[900px]:pr-12 min-[900px]:pl-6 relative">
                        <span className="hidden min-[900px]:block absolute left-0 top-0 bottom-0 w-[3px] bg-dark/10"></span>
                        {t('hero.subtitle')}
                    </p>

                    <h1 className={`flex flex-col ${isRu ? 'gap-4 min-[900px]:gap-6' : 'gap-0 min-[900px]:gap-2'} relative`}>
                        <CharSplit
                            delay={0.5}
                            className={`font-heading font-semibold ${isRu ? 'text-[2.8rem] sm:text-[3.8rem] min-[900px]:text-[4.8rem] lg:text-[5.4rem] xl:text-[6.5rem]' : 'text-[3.5rem] sm:text-[4.5rem] min-[900px]:text-[5.5rem] lg:text-[6rem] xl:text-[7.5rem]'} text-dark leading-[0.9] min-[900px]:leading-[0.85] tracking-tighter uppercase`}
                        >
                            {t('hero.nameFirst')}
                        </CharSplit>
                        <CharSplit
                            delay={0.72}
                            className={`font-heading font-semibold ${isRu ? 'text-[2.8rem] sm:text-[3.8rem] min-[900px]:text-[4.8rem] lg:text-[5.4rem] xl:text-[6.5rem]' : 'text-[3.5rem] sm:text-[4.5rem] min-[900px]:text-[5.5rem] lg:text-[6rem] xl:text-[7.5rem]'} text-dark leading-[0.9] min-[900px]:leading-[0.85] tracking-tighter uppercase`}
                        >
                            {t('hero.nameLast')}
                        </CharSplit>
                    </h1>

                    <div className="text-reveal mt-8 min-[900px]:mt-16">
                        <p className="font-sans text-dark/70 text-xs min-[900px]:text-sm font-semibold tracking-widest uppercase flex items-center gap-4">
                            <span className="w-8 min-[900px]:w-12 h-px bg-dark/40"></span>
                            {t('hero.year')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Right Side (Black & White Columns) */}
            <div className="w-full min-[900px]:w-[35%] h-[45%] min-[900px]:h-full flex flex-col z-20">
                {/* Top Right Block (Black) */}
                <div className="block-reveal w-full h-full min-[900px]:h-[65%] bg-dark flex flex-col justify-center items-start pl-[calc(2.5vw+1rem)] pr-4 min-[900px]:px-12 lg:px-16 relative">
                    <h2 className="flex flex-col gap-0 text-primary font-heading font-semibold text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] uppercase leading-[0.9] tracking-tighter relative z-10">
                        <CharSplit delay={0.3} className="">{t('hero.titleLine1')}</CharSplit>
                        <CharSplit delay={0.52} className="">{t('hero.titleLine2')}</CharSplit>
                        <CharSplit delay={0.74} className="">{t('hero.titleLine3')}</CharSplit>
                    </h2>
                </div>

                {/* Bottom Right Block (White) — desktop only */}
                <div className="hidden min-[900px]:flex block-reveal w-full h-[35%] bg-background flex-col justify-center items-center relative">
                    <a href="#about" aria-label="Scroll to About">
                        <ChevronDown className="scroll-arrow w-8 h-8 text-dark" strokeWidth={1.5} />
                    </a>
                </div>
            </div>
        </section>
    );
}
