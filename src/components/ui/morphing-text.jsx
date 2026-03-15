"use client";

import { useCallback, useEffect, useRef, useId, useMemo } from "react";
import { cn } from "@/lib/utils";

const morphTime = 1.5;
const cooldownTime = 0.5;

const useMorphingText = (texts) => {
  const textIndexRef = useRef(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(0);
  const lastTimestampRef = useRef(null); // uses RAF timestamp — more precise than Date

  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  const setStyles = useCallback(
    (fraction) => {
      const [current1, current2] = [text1Ref.current, text2Ref.current];
      if (!current1 || !current2) return;

      current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const invertedFraction = 1 - fraction;
      current1.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`;
      current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

      current1.textContent = texts[textIndexRef.current % texts.length];
      current2.textContent = texts[(textIndexRef.current + 1) % texts.length];
    },
    [texts],
  );

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current;
    cooldownRef.current = 0;

    let fraction = morphRef.current / morphTime;

    if (fraction > 1) {
      cooldownRef.current = cooldownTime;
      fraction = 1;
    }

    setStyles(fraction);

    if (fraction === 1) {
      textIndexRef.current++;
    }
  }, [setStyles]);

  const doCooldown = useCallback(() => {
    morphRef.current = 0;
    const [current1, current2] = [text1Ref.current, text2Ref.current];
    if (current1 && current2) {
      current2.style.filter = "none";
      current2.style.opacity = "100%";
      current1.style.filter = "none";
      current1.style.opacity = "0%";
    }
  }, []);

  useEffect(() => {
    let animationFrameId;

    // Reset on tab focus so the first resumed frame doesn't produce a huge dt
    const handleVisibility = () => {
      if (!document.hidden) lastTimestampRef.current = null;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const animate = (timestamp) => {
      animationFrameId = requestAnimationFrame(animate);

      // Skip first frame after start/resume to establish baseline
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
        return;
      }

      // Cap dt at 50ms — prevents any lag spike from skipping the morph
      const dt = Math.min((timestamp - lastTimestampRef.current) / 1000, 0.05);
      lastTimestampRef.current = timestamp;

      cooldownRef.current -= dt;

      if (cooldownRef.current <= 0) doMorph();
      else doCooldown();
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrameId);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [doMorph, doCooldown]);

  return { text1Ref, text2Ref };
};

const Texts = ({ texts }) => {
  const { text1Ref, text2Ref } = useMorphingText(texts);
  return (
    <>
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full"
        ref={text1Ref}
      />
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full"
        ref={text2Ref}
      />
    </>
  );
};

const MorphingText = ({ texts, className }) => {
  // unique filter ID per instance — prevents duplicate id="threshold" conflicts
  const uid = useId().replace(/:/g, "");
  const filterId = `threshold-${uid}`;

  return (
    <div
      className={cn(
        "relative mx-auto h-16 w-full max-w-screen-md text-center font-sans text-[40pt] font-bold leading-none md:h-24 lg:text-[6rem]",
        className,
      )}
      style={{ filter: `url(#${filterId}) blur(0.6px)` }}
    >
      <Texts texts={texts} />
      <svg className="hidden" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id={filterId}>
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export { MorphingText };
