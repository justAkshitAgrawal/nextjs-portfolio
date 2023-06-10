"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { navbarItems } from "@/constants";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="px-5 py-4 border-b border-[#242424] bg-[#111111] flex items-center justify-between w-full fixed backdrop-blur-lg bg-opacity-80 top-0">
      <div className="absolute top-0 left-0 w-full h-1 bg-white bg-gradient-to-r from-yellow-500 via-pink-500 to-blue-500 !background-animate "></div>
      <div>
        <Image src="/logo-akshit.png" width={100} height={100} alt="logo" />
      </div>

      <div className="flex items-center space-x-3 text-white/25">
        {/* <Link href="/" className="relative">
          <h1 className={pathname == "/" ? "active" : "px-2 py-1"}>Home</h1>
          {pathname == "/" && (
            <motion.span
              layoutId="underline"
              className="absolute z-0 top-0 left-0 block w-full h-full bg-[#2e2e2e] bg-opacity-30 rounded"
            />
          )}
        </Link> */}

        {navbarItems.map((item) => {
          return (
            <Link key={item.name} href={item.path} className="relative">
              <h1 className={pathname == item.path ? "active" : "px-4 py-2"}>
                {item.name}
              </h1>
              {pathname == item.path && (
                <motion.span
                  layoutId="box"
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
