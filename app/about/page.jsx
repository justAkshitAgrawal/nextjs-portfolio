import Work from "@/components/Work";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Akshit Agrawal | About",
  description: "A frontend developer, who loves to build things for web.",
};

const About = () => {
  return (
    <main>
      <div className="flex justify-center pt-36">
        <div className="max-w-[45%] flex flex-col items-center pb-10">
          <Image
            src="/me.jpeg "
            alt="Akshit Agrawal"
            width={900}
            height={600}
            className="object-contain rounded-md"
          />

          <div className="mt-10 text-[#b1b1b1] mx-10">
            <p className="leading-relaxed ">
              {`Greetings! I'm Akshit, your friendly neighborhood frontend
              developer, passionate about creating remarkable digital
              experiences. With a few years of experience of experience under my belt, I
              specialize in crafting captivating interfaces for mobile and web
              applications. Simplicity and usability are the cornerstones of my
              design philosophy, ensuring that every user interaction is
              intuitive and delightful. `}
            </p>

            <p className="mt-5 leading-relaxed">
              In the past, I worked at{" "}
              <a
                href="https://scrollify.vercel.app/"
                target="_blank"
                className="underline underline-offset-4 decoration-double hover:text-white"
              >
                Scrollify
              </a>
              , where I had the invaluable opportunity to lead the development
              of a robust portfolio maker using React. The portfolio maker
              allows users to create and share a clean and minimalistic
              portfolio in a matter of minutes.
            </p>

            <p className="mt-5 leading-relaxed">
              Before Scrollify, I worked at{" "}
              <a
                href="https://www.jobsterritory.com/"
                target="_blank"
                className="underline underline-offset-4 decoration-double hover:text-white"
              >
                Jobs Territory
              </a>
              , I undertook a remarkable project that involved building an
              Applicant Tracking System (ATS) and revamping their landing page
              using React and Firebase. Through collaborative efforts, I
              successfully delivered an efficient and user-friendly system that
              elevated the recruitment process.
            </p>

            <p className="mt-5 leading-relaxed">
              Apart from work, you can find me playing video games, throwing
              hoops, or watching movies.
            </p>

            <p className="mt-5 leading-relaxed">
              {`
            Join me on this exciting journey as we
            transform your ideas into pixel-perfect realities that will leave
            a lasting impression. Let's build something extraordinary
            together!`}
            </p>

            <div className="box w-full bg-[#b1b1b1]/30 h-5 mt-20"></div>

            <div className="mt-10">
              <Work />
            </div>
            <div className="box w-full bg-[#b1b1b1]/30 h-5 mt-10"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
