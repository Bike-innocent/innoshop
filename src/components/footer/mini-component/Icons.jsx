import React from 'react';
import { Link } from 'react-router-dom';
import { FaTiktok, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; // Use FaTwitter instead of FaXTwitter

function Icons() {
    return (
        <div className=" ">
            <ul className="flex flex-wrap gap-x-4 text-lg ml-3">
                <li>
                    <Link to="https://www.tiktok.com/@chibuike_innocent?_t=8q2luXUwOc1&_r=1" className="text-white hover:text-orange " aria-label="TikTok">
                        <FaTiktok size={24} />
                    </Link>
                </li>
                <li>
                     <Link to="https://www.linkedin.com/in/chibuike-innocent-b09218305?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-white hover:text-orange" aria-label="LinkedIn">
                        <FaLinkedin size={24} />
                    </Link>
                </li>
                <li>
                     <Link to="https://github.com/Bike-innocent" className="text-white  hover:text-orange" aria-label="GitHub">
                        <FaGithub size={24} />
                    </Link>
                </li>
                <li>
                     <Link to="https://x.com/Innocentbuike?t=8PFovbiJMpT0lg0CR-cV2A&s=09" className="text-white hover:text-orange" aria-label="Twitter">
                        <FaTwitter size={24} />
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Icons;
