import React from 'react'
import { FaBriefcase, FaCalendar, FaMapMarkerAlt, FaInbox } from 'react-icons/fa'

const ExperienceCard = ({ title, company, date, description }) => {
    return (
        <div className="
            bg-[#07162c]
            rounded-lg 
            p-6 
            mb-6 
            hover:bg-[#112240] 
            transition-colors 
            duration-300 
            group
        ">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className="
                        w-12 
                        h-12 
                        bg-[#0a192f] 
                        rounded-lg 
                        flex 
                        items-center 
                        justify-center
                        text-cyan-400
                        group-hover:bg-cyan-400
                        group-hover:text-[#0a192f]
                        transition-colors
                        duration-300
                    ">
                        <FaBriefcase className="text-xl" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-cyan-400">{title}</h3>
                        <div className="flex items-center gap-4 mt-1">
                            <div className="flex items-center gap-1 text-gray-400">
                                <FaMapMarkerAlt className="text-sm" />
                                <span className="text-sm">{company}</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-400">
                                <FaCalendar className="text-sm" />
                                <span className="text-sm">{date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
    )
}

const EmptyExperience = () => {
    return (
        <div className="
            flex flex-col items-center justify-center 
            py-16 px-6 
            bg-[#07162c] 
            rounded-lg 
            border-2 border-dashed border-gray-600
            hover:border-cyan-400 
            transition-colors 
            duration-300
        ">
            <div className="
                w-20 h-20 
                bg-[#0a192f] 
                rounded-full 
                flex items-center justify-center 
                mb-6
                text-gray-400
            ">
                <FaInbox className="text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-300 mb-2">
                Belum Ada Pengalaman
            </h3>
            <p className="text-gray-500 text-center max-w-md">
                Pengalaman kerja Anda akan muncul di sini.
                Mulai bangun portfolio Anda dengan menambahkan pengalaman kerja yang relevan.
            </p>
        </div>
    )
}

const Experience = () => {
    const experiences = [
        // Array kosong - tidak ada experience
    ];

    return (
        <div className='w-full bg-[#07162c] max-w-screen min-h-screen p-6'>
            <div className='flex flex-col'>
                <div className='flex items-center gap-2 mb-4 md:mb-10 md:mt-4'>
                    <h1 className='text-xl font-bold text-cyan-400'>03. </h1>
                    <h1 className='text-2xl font-bold text-gray-200'>Experience</h1>
                    <span className='hidden md:inline w-[300px] h-[1px] bg-cyan-400'></span>
                </div>
                <span className='w-[300px] h-[1px] bg-cyan-400 mb-6 md:hidden'></span>

                {experiences.length > 0 ? (
                    <div className="grid gap-6">
                        {experiences.map((experience) => (
                            <ExperienceCard
                                key={experience.id}
                                {...experience}
                            />
                        ))}
                    </div>
                ) : (
                    <EmptyExperience />
                )}
            </div>
        </div>
    )
}

export default Experience;