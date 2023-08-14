"use client";

import { projects } from "@/constants";
import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

import { motion } from "framer-motion";
import AnimateWrapper from "@/components/AnimateWrapper";

// export const metadata = {
//   title: "Akshit Agrawal | Projects",
//   description: "A frontend developer, who loves to build things for web.",
// };

const Projects = () => {
  return (
    <AnimateWrapper>
      <div className="flex justify-center pt-36 max-md:pt-14">
        <div className="max-w-[45%] max-md:max-w-[80%] flex flex-col pb-10 max-md:pb-20 items-start w-full ">
          <h1 className="text-5xl font-semibold text-white ">Projects</h1>
          <p className="mt-8  text-[#b1b1b1]">
            {` Here's a small selection of some of my recent projects and
            experiences.`}
          </p>
          <div className="box w-full bg-[#b1b1b1]/30 h-5 mt-12 max-md:mt-8"></div>

          <div className="self-center ">
            {projects.map((project) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  key={project.title}
                  className="mt-20 max-md:mt-10"
                >
                  <div className=" bg-[#a9bebe] px-5 pt-5 rounded-md flex items-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      height={400}
                      width={900}
                      className="object-contain rounded-t-md "
                    />
                  </div>
                  <div className="mx-10 mt-10">
                    <h1 className="text-2xl text-white ">{project.title}</h1>
                    <h2 className="text-[#b1b1b1] mt-2">{project.info}</h2>
                    <div className="flex items-center mt-5 space-x-5">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#242424] flex w-fit items-start  px-4 py-2 rounded-full text-[#b1b1b1] hover:text-white border-[#363636] border text-sm hover:bg-[#363636] transition duration-300 ease-in-out"
                      >
                        Project
                        <FiArrowUpRight className="w-5 h-5 ml-1 " />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#242424] flex w-fit items-start  px-4 py-2 rounded-full text-[#b1b1b1] hover:text-white border-[#363636] border text-sm hover:bg-[#363636] transition duration-300 ease-in-out"
                      >
                        Github
                        <FiArrowUpRight className="w-5 h-5 ml-1 " />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="box w-full bg-[#b1b1b1]/30 h-5 mt-12 "></div>
        </div>
      </div>
    </AnimateWrapper>
  );
};

export default Projects;
