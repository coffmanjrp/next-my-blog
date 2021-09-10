import type { NextPage } from 'next';
import { GetStaticProps, GetStaticPaths } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { MDXRemote } from 'next-mdx-remote';
import { MDXComponents } from '@/components/index';
import { getPosts, getPostById } from '@/utils/mdx';

type Props = {
  mdxSource: {
    compiledSource: string;
  };
  frontMatter: {
    id: string;
    author: string;
    count: number;
    date: string;
    description: string;
    tag: string;
    title: string;
    readingTime: {
      minutes: number;
      text: string;
      time: number;
    };
  };
};

const Blog: NextPage<Props> = ({ mdxSource, frontMatter }) => {
  const {
    author,
    count,
    date,
    tag,
    title,
    readingTime: { text },
  } = frontMatter;
  const tags = tag.split(' ');

  return (
    <>
      <NextSeo />
      <article className="mx-auto mb-16 mt-0 max-w-screen-md w-full px-2">
        <div className="flex flex-col w-full">
          <h1 className="mb-2">{title}</h1>
          <div className="flex justify-between md:items-center flex-col md:flex-row mt-2 w-full mb-4">
            <div className="flex items-center">
              <span className="relative inline-flex items-center justify-center text-center  flex-shrink-0 gap-2">
                <Image
                  src="/images/portrait.png"
                  alt="coffmanjrp"
                  width={24}
                  height={24}
                  className="w-full h-full object-cover rounded-full"
                />
                <p>
                  {author}, {date}
                </p>
                {tags.length > 0 &&
                  tags.map((tag: string, index: number) => (
                    <Link key={index} href="#!">
                      <a className="inline-block bg-gray-200 dark:bg-gray-500 px-1 rounded-md mr-1 text-sm leading-5 no-underline select-none text-gray-600 dark:text-gray-50">
                        {tag}
                      </a>
                    </Link>
                  ))}
              </span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
              {text} • {count} views
            </div>
          </div>
        </div>
        <div className="markdown">
          <MDXRemote {...mdxSource} components={MDXComponents} />
        </div>
      </article>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPosts('posts');
  const post = posts.map((post) => ({
    params: {
      id: post.replace(/\.mdx/, ''),
    },
  }));

  return {
    paths: post,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;
  const post = await getPostById('posts', id);

  return {
    props: post,
  };
};

export default Blog;
