"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

export const HeaderLayout = () => {
  const path = usePathname();
  return (
    <>
      <header
        className={twMerge(
          "top-header top-2 left-0 w-full p-4",
          path === "/"
            ? "absolute inset-0 z-20 w-full h-full object-cover"
            : "relative bg-gradient-to-r from-secondary/90 via-secondary/100 to-secondary/90",
        )}
      >
        <div className="item-logo">
          <Link href="/">
            <Image
              src="/images/logo.png"
              width={300}
              height={100}
              alt="iubizon logo"
              className="w-[9em] h-auto object-contain m-auto"
            />
          </Link>
        </div>
      </header>
    </>
  );
};
