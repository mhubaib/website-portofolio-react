import React from 'react'
import {
    FaGithub,
    FaExternalLinkAlt,
    FaCode,
    FaLaptopCode
} from 'react-icons/fa'
import ThumbnailProject1 from '../assets/kantinDigital.png'

const ProjectCard = ({ title, description, technologies, githubLink, liveLink, stars, thumbnail }) => {
    return (
        <div className="
            bg-[#07162c]
            rounded-lg 
            p-5 
            mb-6
            hover:bg-[#112240] 
            transition-colors 
            duration-300 
            group
            md:flex items-start gap-6
        ">
            <div className="
                w-40 
                h-30 
                bg-[#0a192f] 
                rounded-lg 
                mb-4
                md:mb-0 
                md:flex 
                items-center 
                justify-center
                text-cyan-400
                group-hover:bg-cyan-400
                group-hover:text-[#0a192f]
                transition-colors
                duration-300
                overflow-hidden
            ">
                {thumbnail ? (
                    <img
                        src={thumbnail}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <FaCode className="text-4xl" />
                )}
            </div>
            <div className="flex-1">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-cyan-400">{title}</h3>
                    <div className="flex shrink-0 gap-4">
                        {githubLink && (
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-cyan-400 transition-colors"
                            >
                                <FaGithub className="text-2xl" />
                            </a>
                        )}
                        {liveLink && (
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-cyan-400 transition-colors"
                            >
                                <FaExternalLinkAlt className="text-xl" />
                            </a>
                        )}
                    </div>
                </div>
                <p className="text-gray-400 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="
                                bg-[#0a192f] 
                                text-xs 
                                px-2 
                                py-1 
                                rounded 
                                text-cyan-400
                            "
                        >
                            {tech}
                        </span>
                    ))}
                    {stars && (
                        <span className="
                            bg-[#0a192f] 
                            text-xs 
                            px-2 
                            py-1 
                            rounded 
                            text-yellow-400
                            flex items-center gap-1
                        ">
                            ★ {stars}
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

const Project = () => {
    const projects = [
        {
            title: "Sistem Kantin Digital PIT",
            description: "Sistem manajemen kantin secara digital untuk kantin-kantin tradisional, mengintegrasikan pembayaran, inventaris, dan laporan keuangan.",
            technologies: ["Laravel", "Javascript", "TailwindCSS", "PostgreSQL"],
            githubLink: "https://github.com/mhubaib/sistem-digitalisasi-kantin",
            liveLink: "https://sistem-koperasi-digital.vercel.app",
            thumbnail: ThumbnailProject1,
            stars: "100+"
        }
    ]

    return (
        <div className='w-full bg-[#07162c] max-w-screen min-h-screen p-6'>
            <div className='flex flex-col'>
                <div className='flex items-center gap-2 mb-4 md:mb-10 md:mt-4'>
                    <h1 className='text-xl font-bold text-cyan-400'>02. </h1>
                    <h1 className='text-2xl font-bold text-gray-200'>Projects</h1>
                    <span className='hidden md:inline w-[300px] h-[1px] bg-cyan-400'></span>
                </div>
                <span className='w-[300px] h-[1px] bg-cyan-400 mb-6 md:hidden'></span>

                <div className="grid gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            {...project}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Project