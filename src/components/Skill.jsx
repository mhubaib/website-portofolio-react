import React from 'react'

const Skills = () => {
    const skills = [
        { name: 'React', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Tailwind CSS', level: 75 },
        { name: 'Node.js', level: 70 },
        { name: 'PHP', level: 75 },
        { name: 'Laravel', level: 70 }
    ];

    return (
        <div className='w-full bg-[#07162c] min-h-screen'>
            <div className='flex flex-col gap-10 p-12'>
                <div className='flex gap-18 justify-between px-12'>
                    <div className='flex items-center gap-3'>
                        <h1 className='text-xl font-bold text-cyan-400'>02. </h1>
                        <h1 className='text-2xl font-bold text-gray-200'>Skills</h1>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-6'>
                    {skills.map((skill, index) => (
                        <div key={index} className='bg-[#112240] p-4 rounded-lg'>
                            <div className='flex justify-between mb-2'>
                                <span className='text-gray-300'>{skill.name}</span>
                                <span className='text-cyan-400'>{skill.level}%</span>
                            </div>
                            <div className='w-full bg-gray-700 rounded-full h-2.5'>
                                <div
                                    className='bg-cyan-400 h-2.5 rounded-full'
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills;