"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import type { FC, PropsWithChildren } from "react";

interface ILenisProviderProps extends PropsWithChildren {}

const LenisProvider: FC<ILenisProviderProps> = ({ children }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default LenisProvider;
