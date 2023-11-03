import BlurImage from "@/components/blur-image";
import Content from "@/components/content";
import Header from "@/components/header";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import type { NextPage } from "next";
import { notFound } from "next/navigation";

interface IPostPageProps {
  params: { uid: string };
}

export const revalidate = 60 * 60 * 24; // 1 day

export async function generateMetadata({ params: { uid } }: IPostPageProps) {
  const { data } = await createClient().getByUID("post", uid, {});

  if (!data) notFound();

  return {
    title: data.meta_title,
    description: data.meta_description,
    openGraph: {
      title: data.meta_title,
      description: data.meta_description,
      images: [
        {
          url: data.thumbnail.url,
          width: 1920 / 2,
          height: 1080 / 2,
          alt: data.thumbnail.alt || data.title || "Thumbnail",
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const all_posts = await createClient().getAllByType("post");

  return all_posts.map((post) => ({
    slug: post.uid,
  }));
}

const PostPage: NextPage<IPostPageProps> = async ({ params }) => {
  const { uid } = params;

  const { data } = await createClient().getByUID("post", uid, {});

  return (
    <>
      <Header className='w-full bg-neutral-100 rounded-2xl overflow-hidden relative aspect-video'>
        {data.thumbnail.url && (
          <BlurImage
            src={data.thumbnail.url}
            alt={data.thumbnail.alt || data.title || "Thumbnail"}
            height={1920}
            width={1080}
            quality={100}
            className='main-transition | object-cover w-full h-full group-hover:scale-110'
          />
        )}
      </Header>
      <Content className='space-y-12 max-w-5xl'>
        {data.slices.map((slice, index) => {
          const Component = components[slice.slice_type];
          // @ts-ignore
          return <Component key={index} slice={slice} />;
        })}
      </Content>
    </>
  );
};

export default PostPage;
