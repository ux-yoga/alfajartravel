'use client';

import Link from "next/link";
import { Button } from "@/Components/ui/button";
import Logo from "@/Components/Atoms/Logo/page";
import { socialIconMap } from "@/lib/content/icon-maps";
import type { FooterContent } from "@/lib/content/types";

type FooterProps = {
    content: FooterContent;
    basePath?: string;
};

export default function Footer({ content, basePath = "" }: FooterProps) {
    const handleSmoothScroll = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.slice(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        }
    };

    return (
        <footer className="border-t border-slate-200 bg-white py-12 text-slate-900 sm:py-14 md:py-16">
            <div className="mx-auto flex max-w-7xl flex-col px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                    <div className="sm:col-span-2">
                        <div className="flex flex-col gap-[12px]">
                            <Logo src={content.logoSrc} alt={content.logoAlt} />
                            <p className="mb-4 text-sm text-slate-600 sm:mb-6 sm:text-base">
                                {content.description}
                            </p>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                            {content.socials.map((social) => {
                                const Icon = socialIconMap[social.platform]

                                return (
                                    <Link key={social.platform} href={social.url} aria-label={social.label} className="inline-flex" target="_blank" rel="noreferrer">
                                        <Button
                                            variant="secondary"
                                            size="icon"
                                            className="h-9 w-9 rounded-full border border-slate-200 bg-white text-slate-700 motion-smooth hover:border-emerald-600 hover:bg-emerald-600 hover:text-white sm:h-10 sm:w-10"
                                            asChild
                                        >
                                            <span>
                                                {Icon ? <Icon className="h-4 w-4" /> : null}
                                            </span>
                                        </Button>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-3 text-base font-semibold text-slate-900 sm:mb-4 sm:text-lg">Quick Links</h3>
                        <ul className="flex flex-col items-start space-y-1.5 text-left text-sm sm:space-y-2 sm:text-base">
                            {content.quickLinks.map((item) => {
                                const resolvedHref = item.href.startsWith('#') && basePath
                                    ? `${basePath}${item.href}`
                                    : item.href;

                                return (
                                    <li key={item.label}>
                                        <Link
                                            href={resolvedHref}
                                            onClick={handleSmoothScroll(resolvedHref)}
                                            className="footer-link text-slate-600 hover:text-emerald-600"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-3 text-base font-semibold text-slate-900 sm:mb-4 sm:text-lg">Kontak Kami</h3>
                        <ul className="space-y-1.5 text-sm text-slate-600 sm:space-y-2 sm:text-base">
                            {content.contacts.map((contact) => (
                                <li key={contact.label}>
                                    {contact.href ? (
                                        <Link href={contact.href} className="hover:text-emerald-600">
                                            {contact.value}
                                        </Link>
                                    ) : (
                                        contact.value
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-6 border-t border-slate-200 pt-6 text-center sm:mt-8 sm:pt-8">
                    <p className="text-xs text-slate-500 sm:text-sm">
                        {content.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
}

