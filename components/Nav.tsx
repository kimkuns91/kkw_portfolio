'use client';

import { LINKS } from '@/constants';
import { NavLink } from './Navigation/NavLink';
import { usePathname } from 'next/navigation';

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {LINKS.map((link) => (
        <NavLink
          key={link.path}
          href={link.path}
          label={link.name}
          isActive={pathname === link.path}
          variant="desktop"
        />
      ))}
    </nav>
  );
};

export default Nav;
