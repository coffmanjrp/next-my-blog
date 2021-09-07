import { FC } from 'react';
import { IconContainer } from '@/components/index';
import { FaEnvelope, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

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
          <a
            href="https://github.com/coffmanjrp"
            className="block text-2xl"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconContainer icon={<FaGithub />} />
          </a>
          <a
            href="https://twitter.com/"
            className="block text-2xl"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconContainer icon={<FaTwitter />} />
          </a>
          <a
            href="https://linkedin.com/"
            className="block text-2xl"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconContainer icon={<FaLinkedin />} />
          </a>
          <a href="mailto:coffmanjrp@gmail.com" className="block text-2xl">
            <IconContainer icon={<FaEnvelope />} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
