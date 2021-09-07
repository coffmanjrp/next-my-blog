import { FC } from 'react';
import { SearchBox } from '@/components/index';
import MobileMenuLinks from './MobileMenuLinks';

type Props = {
  showMenu: boolean;
};

const MobileMenu: FC<Props> = ({ showMenu }) => {
  return (
    <aside
      className="fixed top-0 bg-gray-50 min-h-screen pt-24 px-6 py-0 flex-shrink-0 w-full z-10 md:hidden transition-transform duration-300 ease-out dark:bg-gray-900"
      style={{ transform: showMenu ? 'translateX(0)' : 'translateX(100vw)' }}
    >
      <SearchBox isMobileMenu={true} />
      <MobileMenuLinks />
    </aside>
  );
};

export default MobileMenu;
