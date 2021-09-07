import Link from 'next/link';
import { navLinks } from '@/utils/links';

const NavLinks = () => {
  return (
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
  );
};

export default NavLinks;
