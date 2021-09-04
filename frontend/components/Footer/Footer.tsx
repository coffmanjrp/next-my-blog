import { FunctionComponent } from 'react';

type Footer = {
  title: string;
};

const Footer: FunctionComponent<Footer> = ({ title }) => {
  return (
    <footer className="mt-24 max-w-screen-md w-full mx-auth pt-4 pb-16">
      <div className="flex justify-start flex-col-reverse md:flex-row items-center md:items-end">
        <span className="text-gray-600">
          {new Date().getFullYear()} &copy; {title}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
