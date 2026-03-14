import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <footer className="bg-dark text-primary rounded-none relative overflow-hidden">

            {/* Main Content */}
            <div className="px-8 py-16 md:px-16">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">

                    {/* Brand */}
                    <div className="max-w-md">
                        <h2 className="font-heading font-bold text-3xl mb-4 text-primary tracking-tighter">Damir Shaikhullin.</h2>
                        <p className="font-data text-sm text-primary/60 mb-8 max-w-sm">
                            {t('footer.tagline')}
                        </p>

                        <div className="flex items-center gap-3 bg-primary/5 border border-primary/10 px-4 py-2 rounded-none w-max">
                            <div className="w-2.5 h-2.5 rounded-none bg-[#E63B2E] animate-pulse"></div>
                            <span className="font-data text-xs uppercase tracking-widest text-primary/80">{t('footer.status')}</span>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 gap-12 md:gap-24 font-data text-sm">
                        <div className="flex flex-col gap-4">
                            <h4 className="font-heading font-semibold text-primary/40 mb-2 uppercase tracking-widest">{t('footer.connectLabel')}</h4>
                            <a href="mailto:shaayydd@gmail.com" className="hover:text-accent transition-colors flex items-center gap-1 group">
                                {t('footer.emailLink')} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0" />
                            </a>
                            <a href="https://t.me/sshhaayydd" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1 group">
                                Telegram <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0" />
                            </a>
                            <a href="https://wa.me/79916336500" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors flex items-center gap-1 group">
                                WhatsApp <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0" />
                            </a>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-heading font-semibold text-primary/40 mb-2 uppercase tracking-widest">{t('footer.navLabel')}</h4>
                            <a href="#about" className="hover:text-accent transition-colors">{t('footer.about')}</a>
                            <a href="#experience" className="hover:text-accent transition-colors">{t('footer.experience')}</a>
                            <a href="#skills" className="hover:text-accent transition-colors">{t('footer.skills')}</a>
                            <a href="#projects" className="hover:text-accent transition-colors">{t('footer.projects')}</a>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-data text-primary/40">
                    <p>{t('footer.copyright')}</p>
                </div>
            </div>
        </footer>
    );
}
