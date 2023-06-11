"use client";

import Socials from "@/components/Socials";
import TechStack from "@/components/TechStack";
import { bioOptions } from "@/constants";

export default function Home() {
  const random = Math.floor(Math.random() * bioOptions.length);

  return (
    <main className="min-h-screen bg-r">
      <div className="flex justify-center pt-36 max-md:pt-14 max-md:pb-20">
        <div className="max-w-[45%] max-md:max-w-[80%] max-md:pb-5 flex flex-col items-start">
          <h1 className="text-5xl max-md:text-2xl font-semibold leading-[1.2] text-white">
            Frontend maestro, orchestrating stunning user interfaces that dance
            with delight.
          </h1>

          <div className="mt-16 text-[#b1b1b1] max-md:mt-10">
            <p className="leading-loose max-md:text-sm ">
              {`Hey, I'm Akshit, a frontend dev with a knack for making pixels
              party! Based in India, I've been jazzing up the web
              for more than 4 years. Specializing in crafting sleek
              interfaces, I blend design and code to create user experiences
              that make unicorns jealous. Let's sprinkle some magic into the
              digital realm together!`}
            </p>

            <p className="mt-10 leading-loose max-md:text-sm">
              {bioOptions[random]}
            </p>
          </div>

          <div className="mt-7 max-md:mt-10 max-md:self-center">
            <h1 className="text-center md:hidden text-[#b1b1b1] text-sm mb-2 ">
              My Tech Stack
            </h1>
            <TechStack />
          </div>

          <div className="box w-full bg-[#b1b1b1]/30 h-5 mt-16 max-md:mt-8 "></div>
          <div className="mt-12 max-md:mt-8 max-md:self-center">
            <Socials />
          </div>
        </div>
      </div>
    </main>
  );
}
