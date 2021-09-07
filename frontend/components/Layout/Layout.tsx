import { FC, ReactElement, useState } from 'react';
import { NextSeo } from 'next-seo';
import { Footer, Nav, MobileMenu } from '@/components/index';

type Props = {
  children: ReactElement;
};

const Layout: FC<Props> = ({ children }) => {
  const title = 'coffmanjrp.io';
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div>
      <Nav title={title} showMenu={showMenu} setShowMenu={setShowMenu} />
      {children}
      <MobileMenu showMenu={showMenu} />
      <Footer title={title} />
    </div>
  );
};

export default Layout;
