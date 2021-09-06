import { FC } from 'react';
import { IconContainer } from '@/components/index';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

type Footer = {
  title: string;
};

const Footer: FC<Footer> = ({ title }) => {
  return (
    <footer className="mt-24 max-w-screen-md w-full mx-auth pt-4 pb-16 z-20">
      <div className="flex justify-between flex-col-reverse md:flex-row items-center">
        <p className="text-gray-600">
          {new Date().getFullYear()} &copy; {title}
        </p>
        <div className="flex gap-2 md:mb-0 mb-2">
          <a
            href="https://github.com/coffmanjrp"
            className="block text-2xl text-gray-600 p-2 cursor-pointer hover:opacity-75 focus:outline-none focus:ring"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconContainer icon={<FaGithub />} />
          </a>
          <a
            href="https://twitter.com/"
            className="block text-2xl text-gray-600 p-2 cursor-pointer hover:opacity-75 focus:outline-none focus:ring"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconContainer icon={<FaTwitter />} />
          </a>
          <a
            href="https://linkedin.com/"
            className="block text-2xl text-gray-600 p-2 cursor-pointer hover:opacity-75 focus:outline-none focus:ring"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconContainer icon={<FaLinkedin />} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
