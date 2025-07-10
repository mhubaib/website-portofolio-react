import React from 'react';

const Navigasi = ({ href, children }) => {
    return (
        <div className="relative group w-full my-2">
            <div className="relative flex items-center px-10">
                {/* Garis horizontal di belakang teks */}
                <span
                    className="
                        absolute 
                        left-0 
                        right-0 
                        h-[2px] 
                        bg-white
                        transition-all 
                        duration-300 
                        origin-left 
                        transform 
                        scale-x-5
                        group-hover:scale-x-10 
                        group-hover:bg-cyan-400
                    "
                ></span>

                <a
                    href={href}
                    className="
                        text-gray-200 
                        group-hover:text-cyan-400 
                        transition-all
                        origin-left
                        transform 
                        duration-300 
                        group-hover:pl-10
                    "
                >
                    <span>{children}</span>
                </a>
            </div>
        </div>
    );
};

export default Navigasi;
