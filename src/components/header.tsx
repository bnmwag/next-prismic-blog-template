"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import type { FC, PropsWithChildren } from "react";

interface IHeaderProps extends PropsWithChildren {
  className?: string;
}

const Header: FC<IHeaderProps> = ({ children, className }) => {
  const y = useTransform(useScroll().scrollY, [0, 500], [0, -100]);

  return (
    <motion.div
      style={{ y }}
      className={cn("relative", className)}
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 50, opacity: 0 }}
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

export default Header;
