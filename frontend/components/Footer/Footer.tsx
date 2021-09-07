import { FC } from 'react';
import FooterLinks from './FooterLinks';

type Props = {
  title: string;
};

const Footer: FC<Props> = ({ title }) => {
  return (
    <footer className="bg-gray-50 mt-24 max-w-screen-md w-full mx-auth pt-4 pb-16 z-20 dark:bg-gray-900">
      <div className="flex justify-between flex-col-reverse md:flex-row items-center">
        <p>
          {new Date().getFullYear()} &copy; {title}
        </p>
        <FooterLinks />
      </div>
    </footer>
  );
};

export default Footer;
