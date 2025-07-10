import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import Navigasi from "./Navigasi";
import SocialLink from "./SocialLink";



const Sidebar = () => {
    return (
        <div className="w-full bg-[#07162c] p-6">
            <div className="flex flex-col text-center p-10 gap-14">
                <div className="flex gap-6 items-center">
                    <div className="text-left">
                        <h1 className="text-5xl font-extrabold text-gray-200">Muhammad Hubaib</h1>
                        <p className="text-lg text-gray-400 font-bold mt-1">FullStack Developer</p>
                    </div>
                </div>
                <div>
                    <p className="text-lg text-gray-500 mt-4 max-w-lg text-justify">
                        Seorang pengembang web berdedikasi dengan passion dalam menciptakan pengalaman digital yang menarik dan fungsional.
                    </p>
                </div>

                {/* navigasi */}
                <div className="flex flex-col gap-1/4" id='navigasi'>
                    <Navigasi href="#about">Tentang</Navigasi>
                    <Navigasi href="#project">Proyek</Navigasi>
                    <Navigasi href="#experience">Pengalaman</Navigasi>
                </div>

                {/* social media */}
                <div className="flex gap-6 m-12" id='social-media'>
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

export default Sidebar;