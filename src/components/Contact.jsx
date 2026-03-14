import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MorphIn } from './ui/morph-in';

const TelegramIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.26 13.5l-2.969-.924c-.645-.204-.657-.645.136-.953l11.57-4.461c.537-.194 1.006.131.897.059z" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const GmailIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
);

export default function Contact() {
    const { t } = useTranslation();
    const [form, setForm] = useState({ email: '', description: '', budget: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const text =
            `🆕 *New project inquiry*\n\n` +
            `📧 *Email:* ${form.email}\n` +
            `📝 *Project:* ${form.description}\n` +
            `💰 *Budget:* ${form.budget || '—'}`;

        try {
            const res = await fetch(
                `https://api.telegram.org/bot8436369528:AAFZ7l-eLF5iFCxF76L-ojT3B9cjrqqaiIA/sendMessage`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        chat_id: 367778119,
                        text,
                        parse_mode: 'Markdown',
                    }),
                }
            );

            if (!res.ok) throw new Error('Telegram API error');
            setSubmitted(true);
        } catch {
            alert('Something went wrong. Please reach out directly via Telegram or WhatsApp.');
        }
    };

    return (
        <section id="contact" className="w-full py-24 min-[900px]:py-32 px-6 min-[900px]:px-16 bg-background relative z-10">
            <div className="max-w-4xl mx-auto">

                {/* Header */}
                <MorphIn className="mb-16">
                    <span className="font-data text-accent text-sm uppercase tracking-[0.2em] mb-4 block">
                        {t('contact.label')}
                    </span>
                    <h2 className="font-heading font-bold text-5xl min-[900px]:text-7xl uppercase tracking-tighter text-dark leading-tight">
                        {t('contact.title1')}<br />{t('contact.title2')}
                    </h2>
                </MorphIn>

                {/* Form */}
                <MorphIn delay={0.15}>
                    {submitted ? (
                        <div className="py-16 flex flex-col items-start gap-10">
                            <div>
                                <p className="font-heading font-bold text-3xl text-dark mb-2">{t('contact.successTitle')}</p>
                                <p className="font-data text-sm text-dark/50 uppercase tracking-widest">{t('contact.successSub')}</p>
                            </div>

                            <div className="flex flex-col gap-3">
                                <a
                                    href="https://t.me/sshhaayydd"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Telegram"
                                    className="flex items-center gap-3 px-4 h-11 border border-dark/10 text-dark/40 hover:text-accent hover:border-accent transition-all duration-300 w-max"
                                >
                                    <TelegramIcon />
                                    <span className="font-data text-xs uppercase tracking-widest">@sshhaayydd</span>
                                </a>
                                <a
                                    href="https://wa.me/79916336500"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp"
                                    className="flex items-center gap-3 px-4 h-11 border border-dark/10 text-dark/40 hover:text-accent hover:border-accent transition-all duration-300 w-max"
                                >
                                    <WhatsAppIcon />
                                    <span className="font-data text-xs uppercase tracking-widest">WhatsApp</span>
                                </a>
                                <a
                                    href="mailto:shaayydd@gmail.com?subject=Project%20Inquiry&body=Hi%2C%20I'd%20like%20to%20discuss%20a%20project%20with%20you."
                                    aria-label="Gmail"
                                    className="flex items-center gap-3 px-4 h-11 border border-dark/10 text-dark/40 hover:text-accent hover:border-accent transition-all duration-300 w-max"
                                >
                                    <GmailIcon />
                                    <span className="font-data text-xs uppercase tracking-widest">shaayydd@gmail.com</span>
                                </a>
                            </div>

                            <button
                                onClick={() => { setSubmitted(false); setForm({ email: '', description: '', budget: '' }); }}
                                className="relative overflow-hidden group px-10 py-4 bg-dark text-primary font-heading font-semibold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(17,17,17,0.15)]"
                            >
                                <span className="absolute inset-0 bg-accent -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0" />
                                <span className="relative z-10">{t('contact.sendAnother')}</span>
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-0">

                            {/* Email */}
                            <div className="group border-t border-dark/10 py-6 focus-within:border-accent transition-colors duration-300">
                                <label className="font-data text-xs text-dark/40 uppercase tracking-widest block mb-3">
                                    {t('contact.emailLabel')}
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder={t('contact.emailPlaceholder')}
                                    className="w-full bg-transparent font-heading text-xl min-[900px]:text-2xl text-dark placeholder:text-dark/20 outline-none border-none"
                                />
                            </div>

                            {/* Project Description */}
                            <div className="group border-t border-dark/10 py-6 focus-within:border-accent transition-colors duration-300">
                                <label className="font-data text-xs text-dark/40 uppercase tracking-widest block mb-3">
                                    {t('contact.descLabel')}
                                </label>
                                <textarea
                                    name="description"
                                    required
                                    rows={4}
                                    value={form.description}
                                    onChange={handleChange}
                                    placeholder={t('contact.descPlaceholder')}
                                    className="w-full bg-transparent font-heading text-xl min-[900px]:text-2xl text-dark placeholder:text-dark/20 outline-none border-none resize-none leading-snug"
                                />
                            </div>

                            {/* Budget */}
                            <div className="group border-t border-dark/10 py-6 focus-within:border-accent transition-colors duration-300">
                                <label className="font-data text-xs text-dark/40 uppercase tracking-widest block mb-3">
                                    {t('contact.budgetLabel')}
                                </label>
                                <input
                                    type="text"
                                    name="budget"
                                    value={form.budget}
                                    onChange={handleChange}
                                    placeholder={t('contact.budgetPlaceholder')}
                                    className="w-full bg-transparent font-heading text-xl min-[900px]:text-2xl text-dark placeholder:text-dark/20 outline-none border-none"
                                />
                            </div>

                            {/* Submit + Social row */}
                            <div className="border-t border-dark/10 pt-8 flex flex-col min-[900px]:flex-row items-start min-[900px]:items-center justify-between gap-8">
                                <button
                                    type="submit"
                                    className="relative overflow-hidden group px-10 py-4 bg-dark text-primary font-heading font-semibold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(17,17,17,0.15)]"
                                >
                                    <span className="absolute inset-0 bg-accent -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0" />
                                    <span className="relative z-10">{t('contact.submit')}</span>
                                </button>

                                {/* Social icons */}
                                <div className="flex flex-wrap items-center gap-3">
                                    <a
                                        href="https://t.me/sshhaayydd"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Telegram"
                                        className="flex items-center gap-3 px-4 h-11 border border-dark/10 text-dark/40 hover:text-accent hover:border-accent transition-all duration-300"
                                    >
                                        <TelegramIcon />
                                        <span className="font-data text-xs uppercase tracking-widest">@sshhaayydd</span>
                                    </a>
                                    <a
                                        href="https://wa.me/79916336500"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="WhatsApp"
                                        className="flex items-center gap-3 px-4 h-11 border border-dark/10 text-dark/40 hover:text-accent hover:border-accent transition-all duration-300"
                                    >
                                        <WhatsAppIcon />
                                        <span className="font-data text-xs uppercase tracking-widest">WhatsApp</span>
                                    </a>
                                    <a
                                        href="mailto:shaayydd@gmail.com?subject=Project%20Inquiry&body=Hi%2C%20I'd%20like%20to%20discuss%20a%20project%20with%20you."
                                        aria-label="Gmail"
                                        className="flex items-center gap-3 px-4 h-11 border border-dark/10 text-dark/40 hover:text-accent hover:border-accent transition-all duration-300"
                                    >
                                        <GmailIcon />
                                        <span className="font-data text-xs uppercase tracking-widest">shaayydd@gmail.com</span>
                                    </a>
                                </div>
                            </div>

                        </form>
                    )}
                </MorphIn>

            </div>
        </section>
    );
}
