'use client';

import Link from 'next/link';
import { useCallback } from 'react';

type Props = {
  label: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  isActive?: boolean;
};

export default function NavLink({ label, href = "#", onClick, isActive = false }: Props) {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
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

    onClick?.(e);
  }, [href, onClick]);

  return (
    <Link
      href={href}
      onClick={handleClick}
      aria-current={isActive ? "page" : undefined}
      className={`nav-link text-sm font-medium transition-colors duration-300 ${
        isActive ? "text-emerald-700" : "text-slate-700 hover:text-emerald-600"
      }`}
    >
      {label}
    </Link>
  );
}
