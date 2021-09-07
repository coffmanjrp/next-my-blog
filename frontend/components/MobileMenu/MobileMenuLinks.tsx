import Link from 'next/link';
import { navLinks } from '@/utils/links';

const MobileMenuLinks = () => {
  return (
    <ul className="flex gap-5 flex-col mt-6 ml-3">
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

export default MobileMenuLinks;
