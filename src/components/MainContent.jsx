import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import Navigasi from "./Navigasi";
import SocialLink from "./SocialLink";


const MainContent = () => {
    return (
        <div className="w-full bg-[#07162c] md:p-6">
            <div className="flex flex-col text-center p-8 py-18 md:p-10 gap-14">
                <div className="flex gap-6 items-center">
                    <div className="text-left">
                        <h1 className="text-5xl font-extrabold text-gray-200">Muhammad Hubaib</h1>
                        <p className="text-lg text-gray-400 font-bold mt-1">FullStack Developer</p>
                    </div>
                </div>
                <div>
                    <p className="text-lg text-gray-500 mt-4 max-w-lg text-justify">
                        A dedicated web developer with a passion for creating engaging and functional digital experiences.
                    </p>
                </div>

                {/* navigasi */}
                <div className="hidden md:flex flex-col gap-1/4">
                    <Navigasi href="#about">About</Navigasi>
                    <Navigasi href="#project">Project</Navigasi>
                    <Navigasi href="#experience">Experience</Navigasi>
                </div>

                {/* social media */}
                <div className="flex justify-center md:justify-start gap-6 m-12" id='social-media'>
                    <SocialLink href="https://github.com/yourusername">
                        <FaGithub />
                    </SocialLink>
                    <SocialLink href="https://linkedin.com/in/yourusername">
                        <FaLinkedin />
                    </SocialLink>
                    <SocialLink href="https://github.com/yourusername">
                        <IoLogoInstagram />
                    </SocialLink>
                    <SocialLink href="https://github.com/yourusername">
                        <ImMail />
                    </SocialLink>
                </div>
            </div>
        </div>
    )
}

export default MainContent;
