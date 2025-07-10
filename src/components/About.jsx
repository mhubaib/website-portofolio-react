import React from 'react'
import ProfileImage from '../assets/hubaib.jpg'
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaPhp,
    FaLaravel,
    FaReact,
    FaDatabase,
    FaCode
} from 'react-icons/fa'

const About = () => {
    const technologies = [
        { icon: FaHtml5, color: 'text-orange-500' },
        { icon: FaCss3Alt, color: 'text-blue-500' },
        { icon: FaJsSquare, color: 'text-yellow-400' },
        { icon: FaPhp, color: 'text-purple-600' },
        { icon: FaLaravel, color: 'text-red-500' },
        { icon: FaReact, color: 'text-cyan-400' },
        { icon: FaDatabase, color: 'text-gray-400' },
        { icon: FaCode, color: 'text-green-500' }
    ];

    return (
        <div className='max-w-screen bg-[#07162c] md:top-0 md:right-0'>
            <div className='flex flex-col gap-4 p-6 md:p-12 pt-10'>
                <div className='flex gap-18 justify-between px-5'>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-xl font-bold text-cyan-400'>01. </h1>
                        <h1 className='text-2xl font-bold text-gray-200'>About Me</h1>
                        <span className='hidden md:inline w-[300px] h-[1px] bg-cyan-400'></span>
                    </div>
                </div>
                <span className='w-[300px] h-[1px] bg-cyan-400 md:hidden'></span>

                <div className="relative group m-2">
                    <div className='md:w-full float-left px-1'>
                        <div className="
                            float-right 
                            w-50 
                            h-50 
                            border-3 
                            border-emerald-300 
                            rounded-lg  
                            opacity-80 
                            group-hover:opacity-100 
                            transition-opacity 
                            duration-300    
                            p-1
                        ">
                            <div className="
                                relative 
                                w-full 
                                h-full 
                                overflow-hidden 
                                rounded-md 
                                transition-all 
                                duration-300
                            ">
                                <div className="
                                    absolute 
                                    bg-emerald-300 
                                    opacity-70 
                                    group-hover:opacity-0 
                                    transition-opacity 
                                    duration-300
                                "></div>

                                <img
                                    src={ProfileImage}
                                    alt="Muhammad Hubaib"
                                    className="
                                        min-w-full 
                                        min-h-full 
                                        object-cover 
                                        grayscale 
                                        group-hover:grayscale-0 
                                        transition-all 
                                        duration-300
                                    "
                                />
                            </div>
                        </div>

                        <p className='text-14px text-left text-gray-500 mr-2 tracking-wide'>
                            Hello! My name is <span className='text-cyan-400'>Hubaib</span>, I'm a web developer. I'm currently focused on learning web development using <span className='text-cyan-300'>PHP</span> (<span className='text-cyan-300'>native</span> and <span className='text-cyan-300'>Laravel</span>), <span className='text-cyan-300'>Javascript</span> and <span className='text-cyan-300'>React.js</span> for the frontend,
                            <span className='text-cyan-300'>Tailwind CSS</span> and <span className='text-cyan-300'>Bootstrap</span> for the styling,
                            and <span className='text-cyan-300'>PostgreSQL</span> for database management. I also use <span className='text-cyan-300'>Git</span> as version control and I am use <span className='text-cyan-300'>Laragon</span> to work in local environment.
                        </p>
                        <p className='text-14px text-left text-gray-500 mt-5 mr-2 tracking-wide'>
                            I love solving problems, learning new things, and trying to combine logic with creativity in every project I work on. In addition, I am also deepening my understanding of <span className='text-cyan-300'>UI/UX</span>, <span className='text-cyan-300'>CSS Flexbox</span> and <span className='text-cyan-300'>Grid</span>,
                            in order to build interfaces that are not only functional but also visually pleasing. For me, the journey of being a programmer is not about how fast I can master everything, but how consistent
                            and passionate I am to keep learning and growing.
                        </p>
                    </div>
                </div>

                {/* Tambahkan icon teknologi */}
                <div className='flex flex-wrap md:flex justify-center gap-6 mt-6 mb-4'>
                    {technologies.map((tech, index) => (
                        <tech.icon
                            key={index}
                            className={`
                                text-4xl 
                                ${tech.color} 
                                hover:scale-110 
                                transition-transform 
                                duration-300
                            `}
                        />
                    ))}
                </div>

                <span className='hidden md:inline w-[500px] h-[1px] bg-cyan-400 mt-4 ml-6 mb-4'></span>
            </div>
        </div>
    )
}

export default About;
