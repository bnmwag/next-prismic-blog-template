"use client";

import type { FC } from "react";
import { MoveUpRight } from "lucide-react";
import { PostDocument } from "../../prismicio-types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import BlurImage from "./blur-image";

interface IPostProps extends PostDocument {
  className?: string;
  wide?: boolean;
  index?: number;
}

const Post: FC<IPostProps> = ({ data, wide, className, uid, index }) => {
  const { title, thumbnail } = data;

  return (
    <Link
      href={`/blog/${uid}`}
      className={cn("w-full flex flex-col group relative", className)}
    >
      {wide && (
        <motion.div
          animate={{ rotate: 0, opacity: 1 }}
          initial={{ rotate: 25, opacity: 0 }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
          }}
          className='z-10'
        >
          <div className='absolute px-6 py-4 bg-emerald-300 text-neutral-800 z-10 rounded-lg font-bold uppercase -translate-x-1/2 left-1/2 -translate-y-1/2 rotate-6'>
            Latest post
          </div>
        </motion.div>
      )}
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          delay: index ? index * 0.1 : 0,
        }}
        className={cn(
          "w-full bg-neutral-100 rounded-2xl overflow-hidden relative",
          wide ? "aspect-video" : "flex-1"
        )}
      >
        <div className='absolute inset-0 grid place-items-center z-10'>
          <div className='main-transition | h-12 w-12 rounded-full text-white bg-black/50 grid place-items-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'>
            <MoveUpRight />
          </div>
        </div>
        {thumbnail.url && (
          <BlurImage
            src={thumbnail.url}
            alt={thumbnail.alt || title || "Thumbnail"}
            height={1920}
            width={1080}
            quality={100}
            className='main-transition | object-cover w-full h-full group-hover:scale-110'
          />
        )}
      </motion.div>
      <motion.div
        className='space-y-2 mt-4 pb-6'
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          delay: index ? index * 0.1 : 0,
        }}
      >
        <h2
          className={cn(
            "text-neutral-700 relative overflow-hidden",
            wide ? "text-2xl font-medium" : "text-lg font-medium"
          )}
        >
          <span className='main-transition | inline-block groups-hover:-translate-y-full'>
            {title}
          </span>
          <span className='main-transition | inline-block absolute translate-y-full left-0 groups-hover:translate-y-0'>
            {title}
          </span>
        </h2>
      </motion.div>
    </Link>
  );
};

export default Post;
