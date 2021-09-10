import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import readingTime from 'reading-time';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeCodeTitles from 'rehype-code-titles';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrism from 'rehype-prism-plus';

export const getPosts = async (type: string) => {
  return fs.readdirSync(path.join(process.cwd(), 'pages', type));
};

export const getPostById = async (type: string, id: string) => {
  const source = id
    ? fs.readFileSync(
        path.join(process.cwd(), 'pages', type, `${id}.mdx`),
        'utf8'
      )
    : fs.readFileSync(path.join(process.cwd(), 'pages', `${type}.mdx`), 'utf8');

  const { data, content } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypeAutolinkHeadings,
        rehypePrism,
      ],
    },
  });

  return {
    mdxSource,
    frontMatter: {
      count: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      id,
      ...data,
    },
  };
};

export const getAllPostData = async (type: string) => {
  const files = fs.readdirSync(path.join(process.cwd(), 'pages', type));

  return files.reduce((posts, id) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), 'pages', type, id),
      'utf8'
    );
    const { data } = matter(source);

    return [
      {
        ...data,
        id: id.replace('.mdx', ''),
      },
      ...posts,
    ];
  }, []);
};
