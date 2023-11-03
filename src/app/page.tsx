import Header from "@/components/header";
import Post from "@/components/post";
import { createClient } from "@/prismicio";
import type { NextPage } from "next";

const IndexPage: NextPage = async () => {
  const client = createClient();

  const all_posts = await client
    .getAllByType("post")
    .then((posts) =>
      posts.sort(
        (a, b) =>
          Date.parse(b.first_publication_date) -
          Date.parse(a.first_publication_date)
      )
    );

  const mostRecent = all_posts[0];
  const otherPosts = all_posts.slice(1, 5);

  return (
    <>
      <Header className='relative text-center space-y-12 max-w-4xl mx-auto'>
        <h1 className='text-7xl font-medium text-neutral-700'>
          Blog template with Next.js and Prismic
        </h1>
        <p className='text-base text-neutral-400 '>
          This is a blog template built with Next.js and Prismic. The source
          code is available on{" "}
          <a href='https://github.com/bnmwag/blog-template-nextjs-prismic'>
            GitHub
          </a>
          . You can use this template to create your own blog. You can also use
          this template to create your own blog.
        </p>
      </Header>
      <Post {...mostRecent} wide />
      <div className='grid grid-cols-2 gap-8 grid-rows-[repeat(3,450px)]'>
        {otherPosts.map((post, index) => {
          let className = "";

          if (index === 0) {
            className = "row-start-1 row-span-2";
          }

          if (index === otherPosts.length - 1) {
            className = "row-start-2 row-span-2";
          }

          return (
            <Post
              key={post.uid}
              {...post}
              className={className}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default IndexPage;
