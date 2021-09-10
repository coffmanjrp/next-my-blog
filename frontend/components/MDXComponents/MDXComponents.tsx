import { FC, ReactElement } from 'react';
import Link from 'next/link';

type Props = {
  props: {
    children: ReactElement;
    href: string;
  };
};

const Heading: FC<Props> = ({ children }) => {
  return <h1 className="my-4 text-3xl">{children}</h1>;
};

const CustomLink: FC<Props> = (props, { href, children }) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props}>{children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const Hr = () => {
  return <hr className="my-4 w-full" />;
};

const Text: FC<Props> = ({ children }) => {
  return (
    <p className="text-base text-gray-600 dark:text-gray-400">{children}</p>
  );
};

const Quote: FC<Props> = ({ children }) => {
  return (
    <blockquote className="mt-4 bg-gray-300 rounded-md p-4">
      {children}
    </blockquote>
  );
};

const MDXComponents = {
  h1: Heading,
  hr: Hr,
  p: Text,
  a: CustomLink,
  blockquote: Quote,
};

export default MDXComponents;
