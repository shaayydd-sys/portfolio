import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Marquee() {
    const { t } = useTranslation();
    const TEXT = t('marquee');
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
