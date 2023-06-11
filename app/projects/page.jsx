import React from "react";

export const metadata = {
  title: "Akshit Agrawal | Projects",
  description: "A frontend developer, who loves to build things for web.",
};
const Projects = () => {
  return (
    <main>
      <div className="flex justify-center pt-36 ">
        <div className="max-w-[45%] flex flex-col items-start w-full ">
          <h1 className="text-5xl font-semibold text-white ">Projects</h1>
          <p className="mt-8  text-[#b1b1b1]">
            {` Here's a small selection of some of my recent projects and
            experiences.`}
          </p>
          <div className="box w-full bg-[#b1b1b1]/30 h-5 mt-12"></div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
