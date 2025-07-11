import React from 'react';

const SocialLink = ({ href, children }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="
                text-3xl 
                text-gray-400 
                hover:text-cyan-400 
                transition-colors 
                duration-300 
                transform 
                hover:scale-110
            "
        >
            {children}
        </a>
    );
};

export default SocialLink;