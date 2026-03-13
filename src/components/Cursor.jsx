import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Cursor() {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;
        let rafId;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            gsap.set(dot, { x: mouseX, y: mouseY, opacity: 1 });
        };

        const animateRing = () => {
            ringX += (mouseX - ringX) * 0.1;
            ringY += (mouseY - ringY) * 0.1;
            gsap.set(ring, { x: ringX, y: ringY, opacity: 1 });
            rafId = requestAnimationFrame(animateRing);
        };
        rafId = requestAnimationFrame(animateRing);

        const onEnter = () => {
            gsap.to(ring, { scale: 2.4, borderColor: '#E63B2E', duration: 0.35, ease: 'power2.out' });
            gsap.to(dot, { scale: 0, duration: 0.2 });
        };
        const onLeave = () => {
            gsap.to(ring, { scale: 1, borderColor: 'rgba(255,255,255,0.7)', duration: 0.35, ease: 'power2.out' });
            gsap.to(dot, { scale: 1, duration: 0.2 });
        };

        const interactives = document.querySelectorAll('a, button');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', onEnter);
            el.addEventListener('mouseleave', onLeave);
        });

        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(rafId);
            interactives.forEach(el => {
                el.removeEventListener('mouseenter', onEnter);
                el.removeEventListener('mouseleave', onLeave);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={dotRef}
                style={{
                    position: 'fixed', top: 0, left: 0,
                    width: 7, height: 7,
                    borderRadius: '50%',
                    background: 'white',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    opacity: 0,
                    mixBlendMode: 'difference',
                }}
            />
            <div
                ref={ringRef}
                style={{
                    position: 'fixed', top: 0, left: 0,
                    width: 36, height: 36,
                    borderRadius: '50%',
                    border: '1.5px solid rgba(255,255,255,0.7)',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    opacity: 0,
                    mixBlendMode: 'difference',
                }}
            />
        </>
    );
}
