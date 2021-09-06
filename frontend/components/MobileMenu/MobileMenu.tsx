import { FC } from 'react';
import Link from 'next/link';
import { SearchBox } from '@/components/index';
import { navLinks } from '@/utils/links';

type MobileMenu = {
  showMenu: boolean;
};

const MobileMenu: FC<MobileMenu> = ({ showMenu }) => {
  return (
    <aside
      className="fixed h-screen pt-24 px-6 py-0 flex-shrink-0 w-full bg-white z-10 md:hidden transition-transform duration-300 ease-out"
      style={{ transform: showMenu ? 'translateX(0)' : 'translateX(100vw)' }}
    >
      <SearchBox isMobileMenu={true} />
      <ul className="flex gap-5 flex-col mt-6 ml-3">
        {navLinks.length > 0 &&
          navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.url}>
                <a className="text-base text-gray-600 no-underline hover:opacity-75">
                  {link.text}
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default MobileMenu;
