import { FC } from 'react';
import Link from 'next/link';
import { FaMoon, FaGithub } from 'react-icons/fa';
import { IconContainer, SearchBox } from '@/components/index';
import { navLinks } from '@/utils/links';

type Nav = {
  title: string;
};

const Nav: FC<Nav> = ({ title }) => {
  return (
    <nav className="flex items-center bg-white z-20 fixed top-0 left-0 right-0 h-16 px-6 bg-opacity-[0.97]">
      <div className="mr-10 md:flex-initial flex-1">
        <Link href="/">
          <a className="text-lg text-gray-600 no-underlin hover:opacity-75">
            {title}
          </a>
        </Link>
      </div>
      <ul className="md:flex flex-1 gap-5 items-center hidden">
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
      <SearchBox />
      <button
        type="button"
        className="text-2xl text-gray-600 p-2 cursor-pointer hover:opacity-75 focus:outline-none focus:ring"
      >
        <IconContainer icon={<FaMoon />} />
      </button>
      <a
        href="https://github.com/coffmanjrp"
        className="block text-2xl text-gray-600 p-2 cursor-pointer hover:opacity-75 focus:outline-none focus:ring"
        target="_blank"
        rel="noreferrer noopener"
      >
        <IconContainer icon={<FaGithub />} />
      </a>
    </nav>
  );
};

export default Nav;
