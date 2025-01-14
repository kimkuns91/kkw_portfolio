'use client';

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';

import { CiMenuFries } from 'react-icons/ci';
import { LINKS } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col border-secondary">
        <SheetTitle className="sr-only">네비게이션 메뉴</SheetTitle>
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={handleLinkClick}>
            <h1 className="text-4xl font-semibold">
              WhiteMouse<span className="text-accent">.</span>dev
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {LINKS.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              onClick={handleLinkClick}
              className={`${
                link.path === pathname && 'text-accent border-b-2 border-accent'
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
