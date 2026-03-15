import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Diamond clip-path keyframes
const DIAMOND_SMALL = 'polygon(50% 48%, 52% 50%, 50% 52%, 48% 50%)';
const DIAMOND_FULL  = 'polygon(50% -65%, 165% 50%, 50% 165%, -65% 50%)';

export default function TransitionOverlay() {
    const overlayRef = useRef(null);

    useEffect(() => {
        const overlay = overlayRef.current;
        if (!overlay) return;

        const isMobile = window.matchMedia('(max-width: 767px)').matches;
        const sections = document.querySelectorAll('[data-transition-color]');
        const triggers = [];

        sections.forEach((section) => {
            const color = section.getAttribute('data-transition-color');

            // Build timeline for this section's reveal
            const tl = gsap.timeline({ paused: true, defaults: { ease: 'power3.inOut' } });

            if (isMobile) {
                // Graceful degradation: simple fade on mobile
                tl.set(overlay, { clipPath: 'none', backgroundColor: color, opacity: 0 })
                  .to(overlay,  { opacity: 1, duration: 0.25 })
                  .to(overlay,  { opacity: 0, duration: 0.35, delay: 0.05 });
            } else {
                tl.set(overlay, { clipPath: DIAMOND_SMALL, backgroundColor: color, opacity: 1 })
                  // Phase 1 — diamond expands to fill screen
                  .to(overlay,  { clipPath: DIAMOND_FULL,  duration: 0.75 })
                  // Brief hold at full cover
                  .to(overlay,  { clipPath: DIAMOND_SMALL, duration: 0.75, delay: 0.08 })
                  .set(overlay, { opacity: 0 });
            }

            const trigger = ScrollTrigger.create({
                trigger: section,
                start: 'top 62%',
                onEnter:      () => { if (!tl.isActive()) tl.restart(); },
                onEnterBack:  () => { if (!tl.isActive()) tl.restart(); },
            });

            triggers.push({ tl, trigger });
        });

        return () => {
            triggers.forEach(({ tl, trigger }) => {
                tl.kill();
                trigger.kill();
            });
        };
    }, []);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 pointer-events-none"
            style={{
                zIndex: 9998,
                clipPath: DIAMOND_SMALL,
                opacity: 0,
                willChange: 'clip-path, opacity',
            }}
        />
    );
}
