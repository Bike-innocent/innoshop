

import React from 'react';
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    LinkedinShareButton,
    FacebookIcon,
    XIcon,
    WhatsappIcon,
    LinkedinIcon,
  } from 'react-share';
  

  import { FaLink } from 'react-icons/fa';

function MediaShare({ blogUrl }) {
    const currentUrl = window.location.href;

    const copyLink = () => {
        navigator.clipboard.writeText(currentUrl);
        alert('Link copied to clipboard!');
    };

    return (
        <div className="inline-flex justify-between mt-6 flex-col md:flex-row gap-4 md:gap-0">
            <div className="inline-flex gap-4 items-center">
                <span className="text-black-text-800 text-lg font-bold  font-Inter leading-tight">Share:</span>
                <ul className="inline-flex gap-4 mt-2">
                    <li>
                        <FacebookShareButton url={blogUrl} >
                            <FacebookIcon  size={30}  round  />
                        </FacebookShareButton>
                    </li>
                    <li>
                        <TwitterShareButton url={blogUrl}>
                            <XIcon size={30}  round  />
                        </TwitterShareButton>
                    </li>
                    <li>
                        <LinkedinShareButton url={blogUrl}>
                            <LinkedinIcon  size={30}  round  />
                        </LinkedinShareButton>
                    </li>
                    <li>
                        <WhatsappShareButton url={blogUrl} >
                            <WhatsappIcon  size={30}  round  />
                        </WhatsappShareButton>

                    </li>
                    <li>
                        <button onClick={copyLink} className="focus:outline-none">
                            <FaLink className="text-black-800 transition-all duration-300 hover:text-orange" size={30}  round  />
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MediaShare;
