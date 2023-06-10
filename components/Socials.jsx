import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center -ml-2">
      <div className="flex items-center space-x-3">
        <a
          href="https://github.com/justAkshitAgrawal"
          target="_blank"
          className="hover:bg-[#363636] transition duration-300 ease-in-out p-2 rounded-md group"
        >
          <FaGithub className="icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/akshitagrwl/"
          target="_blank"
          className="hover:bg-[#363636] transition duration-300 ease-in-out p-2 rounded-md group"
        >
          <FaLinkedin className="icon" />
        </a>

        <a
          href="https://www.instagram.com/_agrawal_akshit_/"
          target="_blank"
          className="hover:bg-[#363636] transition duration-300 ease-in-out p-2 rounded-md group"
        >
          <FaInstagram className="icon" />
        </a>
      </div>

      <a
        href="mailto:me@akshitagrawal.dev"
        className="bg-[#242424]  px-4 py-2 rounded-full text-[#b1b1b1] hover:text-white border-[#363636] border ml-10 text-sm hover:bg-[#363636] transition duration-300 ease-in-out"
      >
        Email Me
      </a>
    </div>
  );
};

export default Socials;
