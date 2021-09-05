import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Footer, Nav } from '@/components/index';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen h-screen flex flex-col justify-center items-center px-6 py-0">
      <NextSeo />
      <Nav title="coffmanjrp.io" />
      <main className="max-w-screen-md mx-auth pt-24 h-screen">
        <h1 className="text-5xl font-bold">Hi! I’m Paul Coffman Jr.</h1>
        <p className="text-3xl text-gray-600 my-5">
          Frontend, Backend, Web developer
        </p>
        <p className="text-base text-gray-600">
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
      <Footer title="coffmanjrp.io" />
    </div>
  );
};

export default Home;
