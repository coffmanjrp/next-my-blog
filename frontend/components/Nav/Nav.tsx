import { Dispatch, FC, SetStateAction } from 'react';
import Link from 'next/link';
import { FaMoon, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { IconContainer, SearchBox } from '@/components/index';
import { navLinks } from '@/utils/links';

type Nav = {
  title: string;
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};

const Nav: FC<Nav> = ({ title, showMenu, setShowMenu }) => {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center px-6 h-16 bg-gray-50 bg-opacity-75 z-20 dark:bg-gray-900 dark:bg-opacity-100">
      <div className="md:flex-initial flex-1 mr-10">
        <Link href="/">
          <a className="text-lg">{title}</a>
        </Link>
      </div>
      <ul className="md:flex flex-1 gap-5 items-center hidden">
        {navLinks.length > 0 &&
          navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.url}>
                <a className="text-base">{link.text}</a>
              </Link>
            </li>
          ))}
      </ul>
      <SearchBox isMobileMenu={false} />
      <button
        type="button"
        className="block text-2xl text-gray-600 p-2 hover:opacity-75 dark:text-gray-50"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <IconContainer icon={<FaMoon />} />
      </button>
      <a
        href="https://github.com/coffmanjrp"
        className="block text-2xl p-2"
        target="_blank"
        rel="noreferrer noopener"
      >
        <IconContainer icon={<FaGithub />} />
      </a>
      <button
        type="button"
        className="block text-2xl text-gray-600 p-2 hover:opacity-75 md:hidden dark:text-gray-50"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        <IconContainer icon={showMenu ? <FaTimes /> : <FaBars />} />
      </button>
    </nav>
  );
};

export default Nav;
