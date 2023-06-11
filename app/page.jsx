import Socials from "@/components/Socials";
import TechStack from "@/components/TechStack";
import { bioOptions } from "@/constants";

export default function Home() {
  const random = Math.floor(Math.random() * bioOptions.length);

  return (
    <main className="min-h-screen bg-r">
      <div className="flex justify-center pt-36">
        <div className="max-w-[45%] max-md:max-w-[60%] max-md:pb-5 flex flex-col items-start">
          <h1 className="text-5xl max-md:text-2xl font-semibold leading-[1.2] text-white">
            Frontend maestro, orchestrating stunning user interfaces that dance
            with delight.
          </h1>

          <div className="mt-16 text-[#b1b1b1]">
            <p className="leading-loose ">
              {`Hey, I'm Akshit, a frontend dev with a knack for making pixels
              party! Based in India, I've been jazzing up the web
              for more than 4 years. Specializing in crafting sleek
              interfaces, I blend design and code to create user experiences
              that make unicorns jealous. Let's sprinkle some magic into the
              digital realm together!`}
            </p>

            <p className="mt-10 leading-loose">{bioOptions[random]}</p>
          </div>

          <div className="mt-7">{/* <TechStack /> */}</div>

          <div className="mt-16">
            <Socials />
          </div>

          <div className="box w-full bg-[#b1b1b1]/30 h-5 mt-20 max-md:mt-10 "></div>
        </div>
      </div>
    </main>
  );
}
