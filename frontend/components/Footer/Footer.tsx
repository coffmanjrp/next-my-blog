import { FC } from 'react';
import { IconContainer } from '@/components/index';
import { footerLinks } from '@/utils/links';

type Footer = {
  title: string;
};

const Footer: FC<Footer> = ({ title }) => {
  return (
    <footer className="bg-gray-50 mt-24 max-w-screen-md w-full mx-auth pt-4 pb-16 z-20 dark:bg-gray-900">
      <div className="flex justify-between flex-col-reverse md:flex-row items-center">
        <p>
          {new Date().getFullYear()} &copy; {title}
        </p>
        <div className="flex gap-4 md:mb-0 mb-2">
          {footerLinks.length > 0 &&
            footerLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.url}
                  className="block text-2xl"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <IconContainer icon={<Icon />} />
                </a>
              );
            })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
