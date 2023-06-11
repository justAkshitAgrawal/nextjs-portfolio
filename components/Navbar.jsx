"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navbarItems } from "@/constants";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="px-5 max-md:py-2 py-4 md:border-b z-50 border-[#242424] bg-[#111111] flex items-center justify-between w-full fixed backdrop-blur-lg bg-opacity-80 md:top-0 max-md:bottom-0 max-md:border-t ">
      <div className="absolute max-md:bottom-0 md:top-0 left-0 w-full h-1 max-md:h-[2px] bg-white bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-500 !background-animate "></div>
      <div className=" max-md:hidden">
        <Link href="/">
          <Image src="/logo-akshit.png" width={100} height={100} alt="logo" />
        </Link>
      </div>
      <div className=" md:hidden">
        <Link href="/">
          <Image src="/logo-akshit.png" width={50} height={50} alt="logo" />
        </Link>
      </div>

      <div className="flex items-center space-x-3 max-md:space-x-1 text-white/25">
        {navbarItems.map((item) => {
          return (
            <Link
              key={item.name}
              href={item.path}
              className="relative "
              onClick={() => {
                if (window.scrollY > 0)
                  window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <h1
                className={
                  pathname == item.path
                    ? "active max-md:text-sm"
                    : "px-4 py-2 max-md:text-sm"
                }
              >
                {item.name}
              </h1>
              {pathname == item.path && (
                <motion.span
                  // layoutId="box"
                  initial={{
                    // opacity: 0,
                    x: 500,
                  }}
                  animate={{
                    // opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.25,
                  }}
                  className="absolute z-0 top-0 left-0 block w-full h-full bg-[#2e2e2e] bg-opacity-30 rounded"
                />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
