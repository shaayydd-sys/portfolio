import React from 'react';

const TEXT = 'DAMIR SHAIKHULLIN\u00a0\u00a0•\u00a0\u00a0GRAPHIC DESIGNER\u00a0\u00a0•\u00a0\u00a0UI/UX\u00a0\u00a0•\u00a0\u00a0FIGMA\u00a0\u00a0•\u00a0\u00a0ILLUSTRATOR\u00a0\u00a0•\u00a0\u00a0PHOTOSHOP\u00a0\u00a0•\u00a0\u00a0';

export default function Marquee() {
    return (
        <div className="w-full overflow-hidden bg-dark py-4 relative z-10">
            <div
                className="flex whitespace-nowrap font-heading font-bold text-2xl md:text-3xl uppercase tracking-tighter text-primary/30 select-none"
                style={{ animation: 'marquee 20s linear infinite' }}
            >
                <span className="pr-16">{TEXT}</span>
                <span className="pr-16">{TEXT}</span>
                <span className="pr-16">{TEXT}</span>
            </div>
        </div>
    );
}
