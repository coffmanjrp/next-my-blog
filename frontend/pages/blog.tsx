import type { NextPage } from 'next';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { getAllPostData } from '@/utils/mdx';

type Props = {
  posts: {
    id: string;
    author: string;
    date: string;
    description: string;
    tag: string;
    title: string;
  }[];
};

const BlogPage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <NextSeo />
      <h1>Blog Posts</h1>
      <div className="relative w-full my-8">
        <input
          type="search"
          className="appearance-none border rounded py-2 px-3 leading-tight w-full focus:outline-none focus:ring"
          aria-label="Search articles by title"
          placeholder="Search articles by title"
          spellCheck={false}
        />
      </div>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <a className="w-full">
              <div className="mb-8 w-full">
                <div className="flex flex-col justify-between md:flex-row">
                  <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
                    {post.title}
                  </h4>
                  <p className="text-gray-500 text-left md:text-right w-32 mb-4 md:mb-0">
                    {post.date}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {post.description}
                </p>
              </div>
            </a>
          </Link>
        ))
      ) : (
        <h3 className="my-10">No Posts Found</h3>
      )}
    </>
  );
};

export const getStaticProps = async () => {
  const posts = await getAllPostData('posts');
  return {
    props: { posts },
  };
};

export default BlogPage;
