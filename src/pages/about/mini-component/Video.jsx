import React from 'react'
import { Link } from 'react-router-dom'

function Video() {
  return (
    <>
       <div class="bg-white pb-[120px]">
            <div class="container">
                <div class="grid grid-cols-1">
                    <div class="relative" data-aos="zoom-in-up">
                        <img class="rounded-2xl" src="assets/images/video/video.png" alt="video image"/>
                        <Link to="https://www.youtube.com/watch?v=mSC6GwizOag&amp;ab_channel=TailwindLabs" class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 play-button transition-all duration-200 hover:scale-105 group">
                            <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle class="fill-primary group-hover:fill-blue transition-all duration-300" cx="50" cy="50" r="50" />
                                <path class="stroke-black-800 group-hover:stroke-white" d="M43 41L57 50L43 59V41Z" stroke-opacity="0.9" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Video
