import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ----------------------------------------
// Card 1: UI/UX Architecture (Wireframe)
// ----------------------------------------
const ShufflerCard = () => {
    const [key, setKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setKey(prev => prev + 1), 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="group/card bg-[#1a1a1a] rounded-none p-8 shadow-xl flex flex-col h-[400px] transition-all duration-500 hover:bg-accent hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(230,59,46,0.2)]" key={key}>
            <div className="mb-6">
                <h3 className="font-heading font-bold text-2xl text-primary group-hover/card:text-dark">UI/UX Architecture</h3>
                <p className="font-data text-xs text-primary/60 group-hover/card:text-dark/90 mt-2">Core structural integrity</p>
            </div>

            <div className="flex-1 bg-[#161616] group-hover/card:bg-dark/10 relative p-5 flex flex-col gap-2.5 overflow-hidden transition-colors duration-500 border border-transparent group-hover/card:border-dark/20 rounded-none">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes drawX { from { transform: scaleX(0); } to { transform: scaleX(1); } }
                    @keyframes drawY { from { transform: scaleY(0); } to { transform: scaleY(1); } }
                `}} />

                {/* Nav */}
                <div className="h-[18px] rounded-[2px] bg-[#2a2a2a] group-hover/card:bg-dark/15 relative overflow-hidden transition-colors">
                    <div className="absolute inset-0 bg-[#3a3a3a] group-hover/card:bg-dark/30 origin-left scale-x-0 rounded-[2px] animate-[drawX_0.4s_ease_0.2s_forwards] transition-colors"></div>
                </div>

                {/* Hero */}
                <div className="h-[48px] rounded-[2px] bg-[#2a2a2a] group-hover/card:bg-dark/15 relative overflow-hidden transition-colors">
                    <div className="absolute inset-0 bg-[#3a3a3a] group-hover/card:bg-dark/30 origin-left scale-x-0 rounded-[2px] animate-[drawX_0.5s_ease_0.7s_forwards] transition-colors"></div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-3 gap-2 flex-1">
                    <div className="bg-[#2a2a2a] group-hover/card:bg-dark/15 rounded-[4px] relative overflow-hidden min-h-[40px] transition-colors">
                        <div className="absolute inset-0 bg-[#363636] group-hover/card:bg-dark/25 origin-bottom scale-y-0 rounded-[4px] animate-[drawY_0.4s_ease_1.3s_forwards] transition-colors"></div>
                    </div>
                    <div className="bg-[#2a2a2a] group-hover/card:bg-dark/15 rounded-[4px] relative overflow-hidden min-h-[40px] transition-colors">
                        <div className="absolute inset-0 bg-[#363636] group-hover/card:bg-dark/25 origin-bottom scale-y-0 rounded-[4px] animate-[drawY_0.4s_ease_1.6s_forwards] transition-colors"></div>
                    </div>
                    <div className="bg-[#2a2a2a] group-hover/card:bg-dark/15 rounded-[4px] relative overflow-hidden min-h-[40px] transition-colors">
                        <div className="absolute inset-0 bg-[#363636] group-hover/card:bg-dark/25 origin-bottom scale-y-0 rounded-[4px] animate-[drawY_0.4s_ease_1.9s_forwards] transition-colors"></div>
                    </div>
                </div>

                <span className="absolute bottom-3 right-3 font-data text-[9px] tracking-[0.15em] text-[#444] group-hover/card:text-dark/60 transition-colors">STRUCTURE</span>
            </div>
        </div>
    );
};

// ----------------------------------------
// Card 2: Tool Mastery (Icons)
// ----------------------------------------
const TypewriterCard = () => {
    const [key, setKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setKey(prev => prev + 1), 5500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="group/card bg-[#1a1a1a] rounded-none p-8 shadow-xl flex flex-col h-[400px] transition-all duration-500 hover:bg-accent hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(230,59,46,0.2)]" key={key}>
            <div className="mb-6">
                <h3 className="font-heading font-bold text-2xl text-primary group-hover/card:text-dark">Tool Mastery</h3>
                <p className="font-data text-xs text-primary/60 group-hover/card:text-dark/90 mt-2">Figma, PS, Illustrator</p>
            </div>

            <div className="flex-1 bg-[#161616] group-hover/card:bg-dark/10 relative p-5 flex flex-col justify-around overflow-hidden transition-colors duration-500 border border-transparent group-hover/card:border-dark/20 rounded-none">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes slideFadeTools {
                        from { opacity: 0; transform: translateY(6px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes fillTools { to { width: 100%; } }
                    @keyframes showDone { to { color: var(--done-text); border-color: var(--done-border); content: 'DONE'; } }
                `}} />

                {/* Figma */}
                <div className="flex items-center gap-3.5 opacity-0 animate-[slideFadeTools_0.4s_ease_forwards]" style={{ animationDelay: '0.3s' }}>
                    <div className="w-[36px] h-[36px] rounded-[8px] bg-[#1e1e2e] border border-[#a78bfa]/30 text-[#a78bfa] group-hover/card:border-dark/30 group-hover/card:text-dark group-hover/card:bg-dark/10 flex items-center justify-center font-heading text-[13px] font-bold shrink-0 transition-colors">Fg</div>
                    <div className="flex-1">
                        <div className="font-data text-[11px] text-[#ccc] group-hover/card:text-dark/80 mb-1.5 transition-colors">Figma — frame constraints</div>
                        <div className="h-[3px] bg-[#2a2a2a] group-hover/card:bg-dark/20 rounded-[2px] overflow-hidden transition-colors">
                            <div className="h-full bg-[#a78bfa] group-hover/card:bg-dark w-0 rounded-[2px] animate-[fillTools_0.8s_linear_forwards] transition-colors" style={{ animationDelay: '0.7s' }}></div>
                        </div>
                    </div>
                </div>

                {/* PS */}
                <div className="flex items-center gap-3.5 opacity-0 animate-[slideFadeTools_0.4s_ease_forwards]" style={{ animationDelay: '1.1s' }}>
                    <div className="w-[36px] h-[36px] rounded-[8px] bg-[#1e2a3e] border border-[#60a5fa]/30 text-[#60a5fa] group-hover/card:border-dark/30 group-hover/card:text-dark group-hover/card:bg-dark/10 flex items-center justify-center font-heading text-[13px] font-bold shrink-0 transition-colors">Ps</div>
                    <div className="flex-1">
                        <div className="font-data text-[11px] text-[#ccc] group-hover/card:text-dark/80 mb-1.5 transition-colors">Photoshop — layer render</div>
                        <div className="h-[3px] bg-[#2a2a2a] group-hover/card:bg-dark/20 rounded-[2px] overflow-hidden transition-colors">
                            <div className="h-full bg-[#60a5fa] group-hover/card:bg-dark w-0 rounded-[2px] animate-[fillTools_0.8s_linear_forwards] transition-colors" style={{ animationDelay: '1.5s' }}></div>
                        </div>
                    </div>
                </div>

                {/* AI */}
                <div className="flex items-center gap-3.5 opacity-0 animate-[slideFadeTools_0.4s_ease_forwards]" style={{ animationDelay: '1.9s' }}>
                    <div className="w-[36px] h-[36px] rounded-[8px] bg-[#2e1e10] border border-[#fb923c]/30 text-[#fb923c] group-hover/card:border-dark/30 group-hover/card:text-dark group-hover/card:bg-dark/10 flex items-center justify-center font-heading text-[13px] font-bold shrink-0 transition-colors">Ai</div>
                    <div className="flex-1">
                        <div className="font-data text-[11px] text-[#ccc] group-hover/card:text-dark/80 mb-1.5 transition-colors">Illustrator — path draw</div>
                        <div className="h-[3px] bg-[#2a2a2a] group-hover/card:bg-dark/20 rounded-[2px] overflow-hidden transition-colors">
                            <div className="h-full bg-[#fb923c] group-hover/card:bg-dark w-0 rounded-[2px] animate-[fillTools_0.8s_linear_forwards] transition-colors" style={{ animationDelay: '2.3s' }}></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

// ----------------------------------------
// Card 3: AI Protocol (Generation)
// ----------------------------------------
const SchedulerCard = () => {
    const promptText = 'Generate UI layout for onboarding flow...';
    const [typed, setTyped] = useState('');
    const [phase, setPhase] = useState(0); // 0: type, 1: generating, 2: result
    const [key, setKey] = useState(0);

    useEffect(() => {
        let i = 0;
        setTyped('');
        setPhase(0);

        const typeInterval = setInterval(() => {
            i++;
            setTyped(promptText.slice(0, i));
            if (i > promptText.length) {
                clearInterval(typeInterval);
                setTimeout(() => setPhase(1), 400); // start generating
                setTimeout(() => setPhase(2), 2400); // show results
                setTimeout(() => setKey(k => k + 1), 7000); // reset full loop
            }
        }, 55);

        return () => {
            clearInterval(typeInterval);
        };
    }, [key]);

    return (
        <div className="group/card bg-[#1a1a1a] rounded-none p-8 shadow-xl flex flex-col h-[400px] transition-all duration-500 hover:bg-accent hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(230,59,46,0.2)]">
            <div className="mb-6">
                <h3 className="font-heading font-bold text-2xl text-primary group-hover/card:text-dark">AI Integration</h3>
                <p className="font-data text-xs text-primary/60 group-hover/card:text-dark/90 mt-2">Generative workflow pipelines</p>
            </div>

            <div className="flex-1 bg-[#161616] group-hover/card:bg-dark/10 relative p-4 flex flex-col gap-3 overflow-hidden transition-colors duration-500 border border-transparent group-hover/card:border-dark/20 rounded-none">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes blinkAI { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
                    @keyframes spinAI { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                `}} />

                {/* Prompt Box */}
                <div className="border border-[#2a2a2a] group-hover/card:border-dark/30 rounded-[6px] p-2.5 px-3 font-data text-[10px] text-[#aaa] group-hover/card:text-dark min-h-[36px] relative transition-colors">
                    {typed}
                    <span className="text-accent group-hover/card:text-dark ml-[1px] animate-[blinkAI_0.7s_infinite] transition-colors">|</span>
                </div>

                {/* Generating Track */}
                <div className={`flex items-center gap-2.5 transition-opacity duration-400 ${phase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-[28px] h-[28px] shrink-0 relative flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className={`absolute inset-0 w-full h-full fill-primary opacity-15 group-hover/card:fill-dark transition-all ${phase === 1 ? 'animate-[spinAI_2s_linear_infinite]' : ''}`}>
                            <path d="M12 2l2.5 7.5H22l-6.5 4.5 2.5 7.5L12 17l-6 4.5 2.5-7.5L2 9.5h7.5z" />
                        </svg>
                        <svg viewBox="0 0 24 24" className={`absolute inset-0 w-full h-full fill-accent group-hover/card:fill-dark blur-[4px] transition-opacity duration-300 ${phase === 1 ? 'opacity-60 group-hover/card:opacity-30' : 'opacity-0'}`}>
                            <path d="M12 2l2.5 7.5H22l-6.5 4.5 2.5 7.5L12 17l-6 4.5 2.5-7.5L2 9.5h7.5z" />
                        </svg>
                    </div>
                    <div className="flex-1 h-[3px] bg-[#2a2a2a] group-hover/card:bg-dark/20 rounded-[2px] overflow-hidden transition-colors">
                        <div className="h-full bg-gradient-to-r from-accent to-[#ff8c6b] group-hover/card:from-dark group-hover/card:to-dark rounded-[2px] transition-all ease-out" style={{ width: phase >= 1 ? '100%' : '0%', transitionDuration: phase >= 1 ? '1.8s' : '0s' }}></div>
                    </div>
                </div>

                {/* Result Block */}
                <div className={`border border-[#2a2a2a] group-hover/card:border-dark/30 rounded-[6px] p-2.5 px-3 flex-1 flex flex-col gap-1.5 transition-all duration-400 ${phase >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="h-[3px] rounded-[2px] bg-[#333] group-hover/card:bg-dark/30 origin-left transition-transform duration-400" style={{ width: '85%', transform: phase >= 2 ? 'scaleX(1)' : 'scaleX(0)', transitionDelay: '0ms' }}></div>
                    <div className="h-[3px] rounded-[2px] bg-[#333] group-hover/card:bg-dark/30 origin-left transition-transform duration-400" style={{ width: '65%', transform: phase >= 2 ? 'scaleX(1)' : 'scaleX(0)', transitionDelay: '120ms' }}></div>
                    <div className="h-[3px] rounded-[2px] bg-[#333] group-hover/card:bg-dark/30 origin-left transition-transform duration-400" style={{ width: '75%', transform: phase >= 2 ? 'scaleX(1)' : 'scaleX(0)', transitionDelay: '240ms' }}></div>
                    <div className="h-[3px] rounded-[2px] bg-[#333] group-hover/card:bg-dark/30 origin-left transition-transform duration-400" style={{ width: '50%', transform: phase >= 2 ? 'scaleX(1)' : 'scaleX(0)', transitionDelay: '360ms' }}></div>

                    <span className={`absolute bottom-3 right-3 font-data text-[9px] tracking-[0.12em] text-accent group-hover/card:text-dark transition-all duration-400 ${phase >= 2 ? 'opacity-100 delay-[600ms]' : 'opacity-0'}`}>
                        ENGINE ACTIVE
                    </span>
                </div>
            </div>
        </div>
    );
};

// ----------------------------------------
// Card 4: User Research (Heatmap)
// ----------------------------------------
const UserResearchCard = () => {
    const gridRef = useRef(null);
    const requestRef = useRef();

    useEffect(() => {
        const cols = 12, rows = 8;
        const dots = [];

        // Generate dots if empty
        if (gridRef.current && gridRef.current.children.length === 0) {
            for (let i = 0; i < cols * rows; i++) {
                const d = document.createElement('div');
                d.className = 'w-full h-full rounded-[2px] bg-[#2a2a2a] group-hover/card:bg-dark/10 transition-transform duration-300';
                gridRef.current.appendChild(d);
                dots.push(d);
            }
        } else if (gridRef.current) {
            dots.push(...Array.from(gridRef.current.children));
        }

        const hotspots = [
            { cx: 4, cy: 2, r: 2.5 },
            { cx: 8, cy: 5, r: 2 },
            { cx: 2, cy: 6, r: 1.5 },
            { cx: 10, cy: 2, r: 1.8 },
        ];

        let tick = 0;
        const animate = () => {
            tick += 0.025;
            dots.forEach((dot, i) => {
                const cx = i % cols;
                const cy = Math.floor(i / cols);
                let heat = 0;
                hotspots.forEach((h, hi) => {
                    const shift = Math.sin(tick + hi * 1.3) * 1.2;
                    const dx = cx - (h.cx + shift);
                    const dy = cy - h.cy;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    heat += Math.max(0, 1 - dist / h.r);
                });
                heat = Math.min(heat, 1);

                if (heat < 0.1) {
                    dot.style.background = '';
                    dot.style.transform = 'scale(1)';
                } else {
                    dot.style.background = `rgba(var(--heat-rgb), ${heat})`;
                    dot.style.transform = heat > 0.6 ? `scale(1.15)` : 'scale(1)';
                }
            });
            requestRef.current = requestAnimationFrame(animate);
        }
        requestRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(requestRef.current);
    }, []);

    return (
        <div className="group/card bg-[#1a1a1a] rounded-none p-8 shadow-xl flex flex-col h-[400px] transition-all duration-500 hover:bg-accent hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(230,59,46,0.2)]">
            <div className="mb-6">
                <h3 className="font-heading font-bold text-2xl text-primary group-hover/card:text-dark">User Research</h3>
                <p className="font-data text-xs text-primary/60 group-hover/card:text-dark/90 mt-2">Behavioral signal mapping</p>
            </div>

            <div className="flex-1 bg-[#161616] group-hover/card:bg-dark/10 relative overflow-hidden transition-colors duration-500 rounded-none border border-transparent group-hover/card:border-dark/20 [--heat-rgb:224,90,58] group-hover/card:[--heat-rgb:17,17,17]">
                <div ref={gridRef} className="grid grid-cols-12 grid-rows-8 gap-1 p-4 h-full"></div>

                <div className="absolute bottom-3 right-3 font-data text-[9px] tracking-[0.15em] text-accent group-hover/card:text-dark flex items-center transition-colors">
                    <span className="inline-block w-1.5 h-1.5 bg-accent group-hover/card:bg-dark rounded-full mr-1.5 animate-pulse transition-colors"></span>
                    SCANNING
                </div>
            </div>
        </div>
    );
};

// ----------------------------------------
// Card 5: Design Systems (Cascade)
// ----------------------------------------
const DesignSystemsCard = () => {
    const [key, setKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setKey(prev => prev + 1), 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="group/card bg-[#1a1a1a] rounded-none p-8 shadow-xl flex flex-col h-[400px] transition-all duration-500 hover:bg-accent hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(230,59,46,0.2)]" key={key}>
            <div className="mb-6">
                <h3 className="font-heading font-bold text-2xl text-primary group-hover/card:text-dark">Design Systems</h3>
                <p className="font-data text-xs text-primary/60 group-hover/card:text-dark/90 mt-2">Scalable component logic</p>
            </div>

            <div className="flex-1 bg-[#161616] group-hover/card:bg-dark/10 relative p-4 flex flex-col gap-2.5 overflow-hidden transition-colors duration-500 border border-transparent group-hover/card:border-dark/20 rounded-none">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes slideInDS { to { opacity: 1; transform: translateX(0); } }
                    @keyframes fillBarDS { to { width: var(--w, 70%); } }
                    @keyframes fadeUpDS { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
                `}} />

                {/* Tok 1 */}
                <div className="flex items-center gap-2.5 opacity-0 -translate-x-2 animate-[slideInDS_0.4s_ease_forwards]" style={{ animationDelay: '0.3s' }}>
                    <div className="w-4 h-4 rounded-none shrink-0 border border-transparent group-hover/card:border-dark/20 transition-colors" style={{ background: '#E63B2E' }}></div>
                    <div className="flex-1">
                        <div className="flex justify-between">
                            <span className="font-data text-[10px] text-primary/60 group-hover/card:text-dark/70 transition-colors">color.primary</span>
                            <span className="font-data text-[10px] text-accent group-hover/card:text-dark transition-colors">#E63B2E</span>
                        </div>
                        <div className="h-[3px] bg-[#2a2a2a] group-hover/card:bg-dark/20 overflow-hidden mt-0.5 rounded-none transition-colors"><div className="h-full bg-accent group-hover/card:bg-dark w-0 animate-[fillBarDS_1.2s_ease_forwards] transition-colors" style={{ '--w': '90%', animationDelay: '0.5s' }}></div></div>
                    </div>
                </div>

                {/* Tok 2 */}
                <div className="flex items-center gap-2.5 opacity-0 -translate-x-2 animate-[slideInDS_0.4s_ease_forwards]" style={{ animationDelay: '0.7s' }}>
                    <div className="w-4 h-4 rounded-none shrink-0 border border-[#333] group-hover/card:border-dark/40 transition-colors" style={{ background: '#1E1E1E' }}></div>
                    <div className="flex-1">
                        <div className="flex justify-between">
                            <span className="font-data text-[10px] text-primary/60 group-hover/card:text-dark/70 transition-colors">color.surface</span>
                            <span className="font-data text-[10px] text-accent group-hover/card:text-dark transition-colors">#1E1E1E</span>
                        </div>
                        <div className="h-[3px] bg-[#2a2a2a] group-hover/card:bg-dark/20 overflow-hidden mt-0.5 rounded-none transition-colors"><div className="h-full bg-accent group-hover/card:bg-dark w-0 animate-[fillBarDS_1.2s_ease_forwards] transition-colors" style={{ '--w': '60%', animationDelay: '0.9s' }}></div></div>
                    </div>
                </div>

                {/* Tok 3 */}
                <div className="flex items-center gap-2.5 opacity-0 -translate-x-2 animate-[slideInDS_0.4s_ease_forwards]" style={{ animationDelay: '1.1s' }}>
                    <div className="w-4 h-4 rounded-none shrink-0 border border-dashed border-[#555] group-hover/card:border-dark/60 flex items-center justify-center bg-transparent transition-colors">
                        <span className="font-data text-[8px] text-[#555] group-hover/card:text-dark/80 transition-colors">T</span>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between">
                            <span className="font-data text-[10px] text-primary/60 group-hover/card:text-dark/70 transition-colors">font.size.base</span>
                            <span className="font-data text-[10px] text-accent group-hover/card:text-dark transition-colors">14px</span>
                        </div>
                        <div className="h-[3px] bg-[#2a2a2a] group-hover/card:bg-dark/20 overflow-hidden mt-0.5 rounded-none transition-colors"><div className="h-full bg-accent group-hover/card:bg-dark w-0 animate-[fillBarDS_1.2s_ease_forwards] transition-colors" style={{ '--w': '45%', animationDelay: '1.3s' }}></div></div>
                    </div>
                </div>

                {/* Tok 4 */}
                <div className="flex items-center gap-2.5 opacity-0 -translate-x-2 animate-[slideInDS_0.4s_ease_forwards]" style={{ animationDelay: '1.5s' }}>
                    <div className="w-4 h-4 rounded-none shrink-0 border border-dashed border-[#555] group-hover/card:border-dark/60 flex items-center justify-center bg-transparent transition-colors">
                        <span className="font-data text-[7px] text-[#555] group-hover/card:text-dark/80 transition-colors">sp</span>
                    </div>
                    <div className="flex-1">
                        <div className="flex justify-between">
                            <span className="font-data text-[10px] text-primary/60 group-hover/card:text-dark/70 transition-colors">spacing.md</span>
                            <span className="font-data text-[10px] text-accent group-hover/card:text-dark transition-colors">16px</span>
                        </div>
                        <div className="h-[3px] bg-[#2a2a2a] group-hover/card:bg-dark/20 overflow-hidden mt-0.5 rounded-none transition-colors"><div className="h-full bg-accent group-hover/card:bg-dark w-0 animate-[fillBarDS_1.2s_ease_forwards] transition-colors" style={{ '--w': '55%', animationDelay: '1.7s' }}></div></div>
                    </div>
                </div>

                {/* Component Preview */}
                <div className="mt-auto border border-[#2a2a2a] group-hover/card:border-dark/30 rounded-none p-2.5 px-3 flex items-center gap-2.5 opacity-0 animate-[fadeUpDS_0.5s_ease_forwards] transition-colors" style={{ animationDelay: '2.2s' }}>
                    <div className="w-2 h-2 rounded-full bg-accent group-hover/card:bg-dark transition-colors"></div>
                    <span className="font-data text-[10px] text-primary group-hover/card:text-dark transition-colors">Button.primary</span>
                    <button className="ml-auto bg-accent group-hover/card:bg-dark text-primary font-data text-[9px] border-none rounded-none py-1 px-2 pointer-events-none transition-colors">RENDER</button>
                </div>
            </div>
        </div>
    );
};

// ----------------------------------------
// Card 6: Interaction Design
// ----------------------------------------
import { MousePointer2 } from 'lucide-react';

const InteractionDesignCard = () => {
    return (
        <div className="group/card bg-[#1a1a1a] rounded-none p-8 shadow-xl flex flex-col h-[400px] transition-all duration-500 hover:bg-accent hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(230,59,46,0.2)]">
            <div className="mb-6">
                <h3 className="font-heading font-bold text-2xl text-primary group-hover/card:text-dark">Interaction Design</h3>
                <p className="font-data text-xs text-primary/60 group-hover/card:text-dark/90 mt-2">Motion with purpose</p>
            </div>

            <div className="flex-1 bg-[#161616] group-hover/card:bg-dark/10 relative overflow-hidden transition-colors duration-500 p-5 flex flex-col gap-[14px] border border-transparent group-hover/card:border-dark/20 rounded-none [--idle-border:#2a2a2a] group-hover/card:[--idle-border:rgba(17,17,17,0.2)] [--active-border:rgba(230,59,46,0.5)] group-hover/card:[--active-border:#111] [--idle-btn:#333] group-hover/card:[--idle-btn:rgba(17,17,17,0.4)] [--active-btn:#E63B2E] group-hover/card:[--active-btn:#111]">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    @keyframes moveCursorProto {
                        0%   { top: 20px; left: 20px; }
                        25%  { top: 40px; left: 80px; }
                        50%  { top: 80px; left: 50px; }
                        75%  { top: 60px; left: 130px; }
                        100% { top: 20px; left: 20px; }
                    }
                    @keyframes protoDot {
                        0%, 100% { transform: scale(1); }
                        50% { transform: scale(1.5); }
                    }
                    @keyframes slideValueProto { from { width: 25%; } to { width: 75%; } }
                    @keyframes thumbMoveProto { from { left: calc(25% - 5px); } to { left: calc(75% - 5px); } }
                    @keyframes cardHoverProto {
                        0%, 10%  { border-color: var(--idle-border); transform: translateY(0); }
                        15%, 25% { border-color: var(--active-border); transform: translateY(-2px); box-shadow: 0 4px 16px rgba(230,59,46,0.05); }
                        30%, 100%{ border-color: var(--idle-border); transform: translateY(0); }
                    }
                    @keyframes btnPulseProto {
                        0%, 20%  { background: transparent; border-color: var(--idle-btn); }
                        25%, 35% { background: var(--active-border); border-color: var(--active-btn); }
                        40%, 100%{ background: transparent; border-color: var(--idle-btn); }
                    }
                    @keyframes rippleAnimProto {
                        0%   { transform: translate(-50%, -50%) scale(0); opacity: 1; }
                        40%  { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
                        100% { transform: translate(-50%, -50%) scale(2.5); opacity: 0; }
                    }
                    
                    /* Custom toggle animation matching cursor sync */
                    @keyframes toggleKnobSync {
                        0%, 25% { transform: translateX(0); }
                        30%, 75% { transform: translateX(20px); }
                        80%, 100% { transform: translateX(0); }
                    }
                    @keyframes toggleBgSync {
                        0%, 25% { background-color: var(--idle-border); }
                        30%, 75% { background-color: var(--active-btn); }
                        80%, 100% { background-color: var(--idle-border); }
                    }
                `}} />

                {/* Cursor */}
                <div className="absolute z-10 pointer-events-none animate-[moveCursorProto_4s_ease-in-out_infinite]" style={{ width: 16, height: 16 }}>
                    <div className="w-0 h-0 border-l-[6px] border-l-primary group-hover/card:border-l-dark border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent transition-colors"></div>
                    <div className="w-[4px] h-[4px] bg-accent group-hover/card:bg-dark rounded-full absolute -top-[2px] left-[2px] animate-[protoDot_4s_ease-in-out_infinite] transition-colors"></div>
                </div>

                {/* Mini card hover */}
                <div className="border border-[#2a2a2a] group-hover/card:!border-dark/30 border-solid rounded-none p-2 px-3 flex gap-2 items-center animate-[cardHoverProto_4s_ease-in-out_1s_infinite]">
                    <div className="w-[22px] h-[22px] rounded-full bg-gradient-to-br from-accent to-[#c04428] group-hover/card:to-dark group-hover/card:from-dark transition-all"></div>
                    <div className="flex flex-col gap-1 flex-1">
                        <div className="h-[3px] rounded-none bg-[#333] group-hover/card:bg-dark/20 w-[60%] transition-colors"></div>
                        <div className="h-[3px] rounded-none bg-[#333] group-hover/card:bg-dark/20 w-[40%] transition-colors"></div>
                    </div>
                </div>

                {/* Toggle step (Hardcoded CSS sync) */}
                <div className="flex gap-2.5 items-center">
                    <div className="w-[36px] h-[20px] bg-[#2a2a2a] rounded-none relative shrink-0 overflow-hidden animate-[toggleBgSync_4s_ease-in-out_infinite]">
                        <div className="w-[14px] h-[14px] bg-primary group-hover/card:bg-dark rounded-none absolute top-[3px] left-[2px] transition-colors animate-[toggleKnobSync_4s_ease-in-out_infinite]"></div>
                    </div>
                    <span className="font-data text-[10px] text-[#888] group-hover/card:text-dark/80 transition-colors">hover states</span>
                </div>

                {/* Slider */}
                <div className="flex gap-2.5 items-center mt-1">
                    <span className="font-data text-[10px] text-[#888] group-hover/card:text-dark/80 shrink-0 transition-colors">ease</span>
                    <div className="flex-1 h-[3px] bg-[#2a2a2a] group-hover/card:bg-dark/20 rounded-none relative transition-colors">
                        <div className="h-full bg-accent group-hover/card:bg-dark rounded-none animate-[slideValueProto_3s_ease-in-out_infinite_alternate] transition-colors"></div>
                        <div className="w-[10px] h-[10px] bg-primary group-hover/card:bg-[#222] rounded-full absolute -top-[3.5px] border-[1.5px] border-accent group-hover/card:border-dark animate-[thumbMoveProto_3s_ease-in-out_infinite_alternate] transition-colors"></div>
                    </div>
                </div>

                {/* Button state */}
                <div className="flex gap-2.5 items-center mt-1">
                    <button className="relative bg-transparent border border-[#333] rounded-none px-3.5 py-2 font-data text-[10px] text-primary group-hover/card:text-dark overflow-hidden animate-[btnPulseProto_4s_ease-in-out_2s_infinite] transition-colors">
                        TRIGGER
                        <div className="absolute w-[60px] h-[60px] bg-accent/30 group-hover/card:bg-dark/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 animate-[rippleAnimProto_4s_ease-in-out_2.3s_infinite]"></div>
                    </button>
                    <span className="font-data text-[10px] text-[#888] group-hover/card:text-dark/80 ml-2 transition-colors">click event</span>
                </div>

                <span className="absolute bottom-3 right-3 font-data text-[9px] tracking-[0.12em] text-[#555] group-hover/card:text-dark text-right transition-colors">PROTOTYPE ACTIVE</span>
            </div>
        </div>
    );
};

// ----------------------------------------
// Main Features Section
// ----------------------------------------
export default function Features() {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Header Animation
            gsap.from('.features-header', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                clipPath: 'inset(0 0 100% 0)',
                y: 20,
                duration: 1.2,
                ease: 'power3.out',
            });

            // Card Animations
            gsap.from('.feature-card', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 60%",
                },
                clipPath: 'inset(0 0 100% 0)',
                y: 40,
                duration: 1,
                stagger: 0.12,
                ease: 'power3.out'
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    // 3D tilt on each card (desktop only)
    useEffect(() => {
        if (window.matchMedia('(pointer: coarse)').matches) return;
        const cards = document.querySelectorAll('.feature-card');
        const handlers = [];

        cards.forEach(card => {
            const onMove = (e) => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                gsap.to(card, {
                    rotateY: x * 12,
                    rotateX: -y * 8,
                    transformPerspective: 900,
                    duration: 0.4,
                    ease: 'power2.out',
                });
            };
            const onLeave = () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.8,
                    ease: 'elastic.out(1, 0.5)',
                });
            };
            card.addEventListener('mousemove', onMove);
            card.addEventListener('mouseleave', onLeave);
            handlers.push({ card, onMove, onLeave });
        });

        return () => {
            handlers.forEach(({ card, onMove, onLeave }) => {
                card.removeEventListener('mousemove', onMove);
                card.removeEventListener('mouseleave', onLeave);
            });
        };
    }, []);

    return (
        <section ref={sectionRef} id="skills" className="py-32 px-6 md:px-16 container mx-auto relative z-10">
            <div className="features-header mb-20 text-center flex flex-col items-center">
                <span className="font-data text-accent text-sm uppercase tracking-[0.2em] mb-4 block">
                    Wide Range
                </span>
                <h2 className="font-heading font-bold text-5xl md:text-7xl uppercase tracking-tighter text-dark">
                    Skills
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="feature-card"><ShufflerCard /></div>
                <div className="feature-card"><TypewriterCard /></div>
                <div className="feature-card"><SchedulerCard /></div>
                <div className="feature-card"><UserResearchCard /></div>
                <div className="feature-card"><DesignSystemsCard /></div>
                <div className="feature-card"><InteractionDesignCard /></div>
            </div>
        </section>
    );
}
