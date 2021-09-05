import { FC } from 'react';
import Link from 'next/link';
import { SearchBox } from '@/components/index';

type Nav = {
  title: string;
};

const Nav: FC<Nav> = ({ title }) => {
  return (
    <nav className="flex items-center bg-white z-20 fixed top-0 left-0 right-0 h-16 px-6 bg-opacity-[0.97]">
      <div className="w-full flex items-center mr-2">
        <Link href="/">
          <a className="no-underline text-current inline-flex items-center hover:opacity-75">
            <span>{title}</span>
          </a>
        </Link>
      </div>
      <div className="flex-1">
        <SearchBox />
      </div>
    </nav>
  );
};

export default Nav;
