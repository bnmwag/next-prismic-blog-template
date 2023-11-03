"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import { FC } from "react";

const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

const Footer: FC = () => {
  return (
    <footer className='relative w-full pb-32'>
      <div className='mx-auto w-full container'>
        <div className='grid grid-cols-1 justify-between gap-4 md:grid-cols-2 items-start'>
          <div className='flex items-center gap-x-2 opacity-90'>
            <Image src={"/logo.webp"} alt='logo' width={32} height={32} />
            <span className='font-bold'>Acme</span>
          </div>
          <div className='grid grid-cols-3 justify-between gap-4'>
            {LINKS.map(({ title, items }) => (
              <ul key={title} className='space-y-4'>
                <Typography
                  variant='small'
                  color='blue-gray'
                  className='mb-6 font-medium opacity-40'
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as='a'
                      href='#'
                      color='gray'
                      className='py-1.5 font-normal transition-colors hover:text-blue-gray-900'
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
