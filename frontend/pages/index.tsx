import { useState } from 'react';
import { NextSeo } from 'next-seo';
import { Footer, Nav, MobileMenu } from '@/components/index';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const title = 'coffmanjrp.io';
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-center items-center px-6 py-0 dark:bg-gray-900">
      <NextSeo />
      <Nav title={title} showMenu={showMenu} setShowMenu={setShowMenu} />
      <main className="max-w-screen-md mx-auth pt-24 md:pt-24 h-screen">
        <h1>Hi! I’m Paul Coffman Jr.</h1>
        <p className="text-3xl my-5">Frontend, Backend, Web developer</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </main>
      <MobileMenu showMenu={showMenu} />
      <Footer title={title} />
    </div>
  );
};

export default Home;
