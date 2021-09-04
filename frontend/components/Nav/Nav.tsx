import { FunctionComponent } from 'react';
import Link from 'next/link';

type Nav = {
  title: string;
};

const Nav: FunctionComponent<Nav> = ({ title }) => {
  return (
    <nav className="flex items-center bg-white z-20 fixed top-0 left-0 right-0 h-16 px-6 bg-opacity-[0.97]">
      <div className="w-full flex items-center mr-2">
        <Link href="/">
          <a className="no-underline text-current inline-flex items-center hover:opacity-75">
            <span>{title}</span>
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
