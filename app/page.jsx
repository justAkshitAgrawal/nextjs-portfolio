import Socials from "@/components/Socials";
import TechStack from "@/components/TechStack";

export default function Home() {
  const bioOptions = [
    "I'm a frontend developer, which basically means I'm responsible for making websites look pretty enough that people forget how much they hate the internet.",
    "I turn coffee into code, and pixels into beautiful websites. If it's not responsive, it's not my fault - blame the cookies.",
    "Frontend developer by day, CSS magician by night. I turn pixels into web pages and caffeine into code.",
    "Frontend developer by day, CSS magician by night. I turn coffee into code and make pixels dance.",
    "I may not be able to make your website go viral, but I can definitely make it look good enough to be the envy of your competitor's outdated site.",
    "Can't promise viral fame, but rest assured, your website will outshine your competitors' outdated relics. Prepare for envy-inducing design that leaves them in the digital dust.",
  ];

  const random = Math.floor(Math.random() * bioOptions.length);

  return (
    <main className="min-h-screen bg-r">
      <div className="flex justify-center pt-36">
        <div className="max-w-[45%] flex flex-col items-start">
          <h1 className="text-5xl font-semibold leading-[1.2] text-white">
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

          <div className="mt-7">
            <TechStack />
          </div>

          <div className="mt-16">
            <Socials />
          </div>

          <div class="box w-full bg-[#b1b1b1]/30 h-5 mt-20"></div>
        </div>
      </div>
    </main>
  );
}
