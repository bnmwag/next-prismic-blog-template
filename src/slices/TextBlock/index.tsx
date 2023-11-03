"use client";

import { Typography } from "@material-tailwind/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TectBlock`.
 */
export type TectBlockProps = SliceComponentProps<Content.TectBlockSlice>;

const textTypes = [
  "heading1",
  "heading2",
  "heading3",
  "heading4",
  "heading5",
  "heading6",
  "paragraph",
];

/**
 * Component for "TectBlock" Slices.
 */
const TectBlock = ({ slice }: TectBlockProps): JSX.Element => {
  console.log(slice);

  const getTextType = () => {
    switch (slice.primary.content[0]?.type) {
      case "heading1":
        return "h1";
      case "heading2":
        return "h2";
      case "heading3":
        return "h3";
      case "paragraph":
        return "paragraph";
      default:
        return "paragraph";
    }
  };

  const type = getTextType();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className='text-5xl'
    >
      {slice.primary.content.map((item) => (
        <>
          {textTypes.includes(item.type) && (
            // @ts-ignore
            <Typography variant={type}>{item.text}</Typography>
          )}
        </>
      ))}
    </section>
  );
};

export default TectBlock;
