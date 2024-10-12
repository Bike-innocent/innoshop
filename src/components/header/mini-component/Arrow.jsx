import React from 'react'

function Arrow() {
    return (
        <div>
            <span class="inline-block group-hover:animate-arrow-move-up">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                    <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </svg>
            </span>
        </div>
    )
}

export default Arrow
