import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

const TechStack = () => {
  const tech = [
    <SiJavascript key="js" className="icon" />,
    <SiTypescript key="ts" className="icon" />,
    <SiReact key="react" className="icon" />,
    <SiNextdotjs key="next" className="icon" />,
    <SiTailwindcss key="tailwind" className="icon" />,
    <TbBrandReactNative key="flutter" className="icon" />,
    <FaJava key="java" className="icon" />,
  ];

  return (
    <div className="flex max-md:flex-col items-center md:space-x-5 text-[#b1b1b1] ">
      <h1 className=" max-md:hidden">My Tech Stack |</h1>
      <div className="flex items-center space-x-3 ">
        {tech.map((item) => (
          <div
            className="hover:bg-[#363636] group transition duration-300 ease-in-out p-2 rounded-md"
            key={item.key}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
