"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { FC, PropsWithChildren } from "react";

interface IContentProps extends PropsWithChildren {
  className?: string;
}

const Content: FC<IContentProps> = ({ children, className }) => {
  return (
    <motion.div
      className={cn("relative", className)}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
    >
      {children}
    </motion.div>
  );
};

export default Content;
