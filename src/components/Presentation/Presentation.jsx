import { FaGithub, FaTelegram, FaDiscord, FaLinkedin } from "react-icons/fa";
import { PiArrowRightLight } from "react-icons/pi";
import { Link } from "react-scroll";
import socialMedia from '../../data/socialMedia'

const Presentation = () => {
  return (
    <div id="Home" className="bg-presentation bg-cover w-full min-h-[100vh] relative bg-center sm:pt-0">
      {/* Gradient */}
      <div className="flex flex-col w-full min-h-[100vh] bg-gradient-to-b from-transparent to-midnight items-center md:justify-center px-5">
        {/* First section (Social, Presentation) */}
        <div className="flex flex-col justify-between w-full max-w-5xl md:flex-row items-center pt-[120px] md:pt-0">
          {/* Text content */}
          <div className=" flex flex-col justify-center md:h-auto md:flex-start md:max-w-[50%] md:pt-0 md:">
            <div className="flex gap-5 items-start w-full pb-2">
              <a href={socialMedia.Github} target="_blank">
                <FaGithub
                  size={25}
                  className="cursor-pointer hover:text-sky-500"
                />
              </a>
              {/* TO DO: ADD TELEGRAM LINK */}
              <a href={socialMedia.Telegram} target="_blank">
                <FaTelegram
                  size={25}
                  className="cursor-pointer hover:text-sky-500"
                />
              </a>
              <a href={socialMedia.Discord} target="_blank">
                <FaDiscord
                  size={25}
                  className="cursor-pointer hover:text-sky-500"
                />
              </a>
              <a
                href={socialMedia.Linkedin}
                target="_blank"
              >
                <FaLinkedin
                  size={25}
                  className="cursor-pointer hover:text-sky-500"
                />
              </a>
            </div>
            <div className="flex flex-col w-full self-start pb-5 max-w-[360px]">
              <h1 className="text-4xl font-bold self-start w-max bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-300 bg-[length:40%_3px] bg-left-bottom bg-no-repeat pb-[6px]">
                Full-stack
              </h1>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-sky-600 to-sky-200 bg-clip-text text-transparent">
                Developer
              </h1>
            </div>
            {/* Resume */}
            <div className="font-light self-start">
              <p>
                <strong>Welcome to my portfolio</strong>
              </p>
              I&apos;m Itamar, a full-stack developer with focus on Web
              Development. I&apos;m building my career path by learning new
              technologies and building solo projects to showcase my skills.
            </div>

            <div className="flex gap-5 pt-5">
              <div className="flex items-center justify-center bg-gradient-to-br from-blue-700 to-sky-400 w-max rounded-lg p-[1px] hover:shadow-blue-700 hover:shadow-[0px_0px_25px_3px] duration-150 cursor-pointer hover:scale-110">
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  offset={-64}
                  className="flex items-center px-5 py-2 bg-neutral-800 w-[calc(100% - 1px)] h-[calc(100%-1px)] rounded-lg"
                >
                  Contact
                </Link>
              </div>
              <Link
                to="Projects"
                spy={true}
                smooth={true}
                duration={1000}
                offset={-64}
                className="flex px-5 py-2 items-center justify-center bg-gradient-to-r from-blue-700 to-sky-400 rounded-lg hover:shadow-blue-700 hover:shadow-[0px_0px_15px_3px] hover:scale-110 duration-150 cursor-pointer"
              >
                See projects
                <PiArrowRightLight size={25} className="ml-2" />
              </Link>
            </div>
          </div>
          {/* Img */}
          <div className="flex md:max-w-[40%] h-max">
            <img src="/images/Mockup.png" className="w-full" alt="" />
          </div>
        </div>
        {/* Arrow lines */}
        <div className="flex flex-col w-full h-auto absolute items-center animate-bounce-slow bottom-10 md:bottom-0">
          <span
            className="bg-white w-12 h-5"
            style={{
              clipPath: "polygon(3% 0, 50% 95%, 97% 0, 100% 0, 50% 100%, 0 0)",
            }}
          ></span>
          <span
            className="bg-white w-12 h-5 -mt-1"
            style={{
              clipPath: "polygon(3% 0, 50% 95%, 97% 0, 100% 0, 50% 100%, 0 0)",
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};
export default Presentation;
