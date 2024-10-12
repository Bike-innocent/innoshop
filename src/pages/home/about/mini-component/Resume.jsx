import React from 'react';
import { Link } from 'react-router-dom';

function Resume() {
    return (
        <>
            <div className="flex flex-wrap">
                <Link 
                    to="/resume" // Path to your PDF file
                    download // This attribute makes the link download the file
                    className="flex items-center flex-wrap btn-primary group"
                >
                     My Resume
                    <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </span>
                </Link>
            </div>
        </>
    );
}

export default Resume;


