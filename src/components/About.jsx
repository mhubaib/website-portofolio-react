import React from 'react'
import ProfileImage from '../assets/hubaib.jpg'

const About = () => {
    return (
        <div className='w-full bg-[#07162c] min-h-screen top-0 right-0'>
            <div className='flex flex-col gap-6 p-12 pt-18'>
                <div className='flex gap-18 justify-between px-5'>
                    <div className='flex items-center gap-2'>
                        <h1 className='text-xl font-bold text-cyan-400'>01. </h1>
                        <h1 className='text-2xl font-bold text-gray-200'>About Me</h1>
                        <span className='w-[300px] h-[1px] bg-cyan-400'></span>
                    </div>
                </div>

                {/* ⬇️ Ganti bagian ini */}
                <div className="relative group mt-8 m-4">
                    <div className='w-full float-left pr-2 pl-2'>
                        {/* Gambar di sebelah kanan paragraf */}
                        <div className="
                            float-right 
                            w-45 
                            h-45 
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

                        {/* Paragraf membungkus gambar */}
                        <p className='text-14px text-left text-gray-500 mr-2 tracking-wide'>
                            Hello! My name is Hubaib, I'm a web developer. I'm currently focused on learning web development using PHP (native and Laravel), Javascript and React.js for the frontend,
                            and PostgreSQL for database management. I also use Git as version control and I am use laragon to work in local environment.
                        </p>
                        <p className='text-14px text-left text-gray-500 mt-5 tracking-wide'>
                            I love solving problems, learning new things, and trying to combine logic with creativity in every project I work on. In addition, I am also deepening my understanding of UI/UX, CSS Flexbox and Grid,
                            in order to build interfaces that are not only functional but also visually pleasing. For me, the journey of being a programmer is not about how fast I can master everything, but how consistent
                            and passionate I am to keep learning and growing.
                        </p>
                    </div>
                </div>
                <span className='w-[500px] h-[1px] bg-cyan-400 mt-4 ml-6'></span>
            </div>
        </div>
    )
}

export default About;
