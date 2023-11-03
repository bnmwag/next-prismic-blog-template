import type { FC } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const Nav: FC = () => {
  return (
    <div className='container py-12'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-x-2 opacity-90'>
          <Image src={"/logo.webp"} alt='logo' width={32} height={32} />
          <span className='font-bold'>Acme</span>
        </div>
        <Button className='bg-[#EE8781] rounded-full px-6 py-4'>Contact</Button>
      </div>
    </div>
  );
};

export default Nav;
