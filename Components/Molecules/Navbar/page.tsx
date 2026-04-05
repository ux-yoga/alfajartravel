'use client';

import { Button } from "@/Components/ui/button";
import Logo from "../../Atoms/Logo/page";
import NavLink from "../../Atoms/Navlink/page";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import type { NavbarContent } from "@/lib/content/types";

type NavbarProps = {
    content: NavbarContent;
    basePath?: string;
    activePath?: string;
};

export default function Navbar({ content, basePath = "", activePath }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const resolveHref = (href: string) => {
        if (href.startsWith('#') && basePath) {
            return `${basePath}${href}`;
        }

        return href;
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200/90 bg-white/90 px-4 py-4 shadow-[0_12px_35px_-30px_rgba(15,23,42,0.3)] backdrop-blur-xl sm:px-6 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
                <Link href="/" className="inline-flex items-center">
                    <Logo src={content.logoSrc} alt={content.logoAlt} />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {content.items.map((item) => (
                        <NavLink
                            key={item.label}
                            label={item.label}
                            href={resolveHref(item.href)}
                            isActive={activePath === item.href}
                        />
                    ))}
                </div>

                <Button
                    asChild
                    variant="secondary"
                    size="lg"
                    className="hidden cursor-pointer rounded-full bg-emerald-700 px-6 py-2 font-semibold text-white shadow-[0_16px_30px_-22px_rgba(4,120,87,0.85)] motion-smooth hover:bg-emerald-800 hover:-translate-y-0.5 md:flex"
                >
                    <Link href={content.contactCta.href} target="_blank" rel="noreferrer">
                        {content.contactCta.label}
                    </Link>
                </Button>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="rounded-xl border border-slate-200 bg-white p-2 text-slate-800 motion-smooth hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 md:hidden"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 border-t border-slate-200 bg-white/95 shadow-[0_22px_45px_-32px_rgba(15,23,42,0.35)] backdrop-blur-xl md:hidden">
                    <div className="max-w-7xl mx-auto flex flex-col gap-4 p-4 sm:p-6">
                        {content.items.map((item) => (
                            <NavLink
                                key={item.label}
                                label={item.label}
                                href={resolveHref(item.href)}
                                isActive={activePath === item.href}
                                onClick={() => setIsMenuOpen(false)}
                            />
                        ))}
                        <Button
                            asChild
                            variant="secondary"
                            className="w-full cursor-pointer rounded-full bg-emerald-700 py-2 font-semibold text-white motion-smooth hover:bg-emerald-800">
                            <Link
                                href={content.contactCta.href}
                                target="_blank"
                                rel="noreferrer"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {content.contactCta.label}
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
