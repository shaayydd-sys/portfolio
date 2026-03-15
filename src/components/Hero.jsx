import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MeshGradient } from '@paper-design/shaders-react';
import { MorphingText } from './ui/morphing-text';

export default function Hero() {
    const { t, i18n } = useTranslation();
    const isRu = i18n.language === 'ru';

    // Stable array references — prevent RAF loop restart on every re-render
    const nameTexts = useMemo(() => [t('hero.nameFirst'), t('hero.nameLast')], [t]);
    const titleTexts = useMemo(() => [t('hero.titleLine1'), t('hero.titleLine2'), t('hero.titleLine3')], [t]);

    return (
        <section className="w-full h-[100svh] min-h-[600px] relative overflow-hidden">
            {/* Shader background */}
            <MeshGradient
                className="absolute inset-0 w-full h-full"
                colors={['#111111', '#1a1a1a', '#2e2e2e', '#444444']}
                speed={0.4}
                backgroundColor="#111111"
            />

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-dark/40" />

            {/* Content — centered */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 text-center gap-6 md:gap-8">

                {/* Subtitle */}
                <p className="font-heading text-primary/60 text-sm md:text-base font-medium max-w-xs leading-snug border-l-2 border-primary/20 pl-4 text-left">
                    {t('hero.subtitle')}
                </p>

                {/* Name morphing */}
                <MorphingText
                    texts={nameTexts}
                    className={`text-primary font-heading font-semibold ${isRu
                        ? 'text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7rem]'
                        : 'text-[3.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem]'
                    } uppercase leading-none tracking-tighter h-[1.1em] mx-auto max-w-none`}
                />

                {/* Title morphing */}
                <MorphingText
                    texts={titleTexts}
                    className="text-accent font-heading font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase leading-none tracking-tighter h-[1.1em] mx-auto max-w-none"
                />

                {/* Year */}
                <p className="font-data text-primary/40 text-xs md:text-sm font-semibold tracking-widest uppercase flex items-center gap-4 mt-4">
                    <span className="w-8 md:w-12 h-px bg-primary/30"></span>
                    {t('hero.year')}
                    <span className="w-8 md:w-12 h-px bg-primary/30"></span>
                </p>
            </div>
        </section>
    );
}
