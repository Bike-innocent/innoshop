import React from 'react'
import Arrow2 from './Arrow2';
import { Link } from 'react-router-dom';
function VeiwAllProject() {
  return (
    <>
       <div className="col-span-12 mt-12" data-aos="fade-up">
            <div className="flex group">
              <Link to="projects" className="flex items-center justify-center flex-wrap btn-primary grow">
                View All Projects
                <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                  <Arrow2 />
                </span>
              </Link>
            </div>
          </div>
    </>
  )
}

export default VeiwAllProject
