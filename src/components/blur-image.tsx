"use client";

import { cn } from "@/lib/utils";
import {
  OnLoadingComplete,
  PlaceholderValue,
  StaticImport,
} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState, type FC } from "react";

interface IBlurImageProps {
  src: string | StaticImport;
  alt: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  fill?: boolean | undefined;
  quality?: number | `${number}` | undefined;
  priority?: boolean | undefined;
  loading?: "eager" | "lazy" | undefined;
  placeholder?: PlaceholderValue | undefined;
  blurDataURL?: string | undefined;
  unoptimized?: boolean | undefined;
  onLoadingComplete?: OnLoadingComplete | undefined;
  layout?: string | undefined;
  objectFit?: string | undefined;
  objectPosition?: string | undefined;
  lazyBoundary?: string | undefined;
  lazyRoot?: string | undefined;
  className?: string | undefined;
}

const BlurImage: FC<IBlurImageProps> = ({
  src,
  alt,
  quality,
  width,
  height,
  className,
}) => {
  const [isLoading, setLoading] = useState(true);

  const props = { alt, quality, width, height };

  return (
    <Image
      {...props}
      alt={alt || "Image"}
      src={isLoading ? "" : src}
      className={cn(
        "main-transition",
        className,
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      )}
      onLoadingComplete={() => setLoading(false)}
    />
  );
};

export default BlurImage;
