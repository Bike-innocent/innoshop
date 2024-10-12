import React from 'react';
import axiosInstance from '../../../axiosInstance'; // Adjust the path if necessary
import Arrow1 from './mini-component/Arrow1';
import VeiwAllProject from './mini-component/VeiwAllProject';
import { useQuery } from '@tanstack/react-query'; // Import useQuery
import { Link } from 'react-router-dom';
// import Loader from '../../../components/Loader';
// import InlineLoader from '../../../components/InlineLoader';

// Function to fetch projects
const fetchProjects = async () => {
  const response = await axiosInstance.get('/projects');
  return response.data;
};

function Portfolio() {
  // Use the useQuery hook with object form
  const { data: projects = [], isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });


  return (
    <>
      <section className="bg-secondary py-[50px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12" data-aos="fade-up">
              <div className="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
                <span className="text-orange text-xl">Portfolio</span>
                <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                  My recent{' '}
                  <span className="relative z-[1] before:rounded-full before:block before:absolute before:top-[4px] before:left-[-6px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                    w
                  </span>
                  ork
                </h3>
              </div>
            </div>

            {/* Show loading skeletons if data is being fetched */}
            {isLoading ? (
              <>
              <div className="text-center">
                {/* <InlineLoader/> */}
                </div>
              </>
            ) : error ? (
              <div className="text-center text-red-600 mb-12 col-span-12">
                  Error loading projects. Please try again later.
              </div>
          ) : (
              // Show actual content when data is loaded
              projects.slice(0, 2).map((project, index) => (
                <div
                  className="col-span-12 md:col-span-6"
                  data-aos="fade-up"
                  data-aos-delay={`${300 + index * 200}`} // Adding a delay for each project
                  key={project.slug}
                >



                  <div className="w-full">
                    <Link to={`/project/${project.slug}`} >
                      <img
                        src={project.image}
                        alt={`project-${project.name}`}
                        className="mb-6 rounded-[20px] object-cover w-full max-h-[280px] sm:max-h-[320px] md:max-h-[300px] lg:max-h-[350px]" />
                    </Link>
                  </div>
                  <div className="flex flex-wrap flex-col gap-3">
                    <div className="flex flex-wrap gap-2">
                      <Link
                        className="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white"
                        to={project.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        VIEW LIVE
                      </Link>
                      <Link
                        className="text-xs text-black-text-800 uppercase font-medium font-Inter leading-none py-[6px] px-4 rounded-[40px] border border-black-text-400 transition-all hover:bg-active hover:border-active hover:text-white"
                        to={`/project/${project.slug}`}>
                        DESCRIPTION
                      </Link>

                    
                    </div>
                    <div className="flex flex-wrap items-center justify-between text-black-800 hover:text-orange group">
                      <h4 className="font-bold font-Syne text-center leading-10 text-[20px] lg:text-[24px] xl:text-[32px] capitalize">
                        <Link className="transition-all" to={`/project/${project.slug}`}>
                          {project.name}
                        </Link>
                      </h4>
                      <Link className="group-hover:animate-arrow-move-up" to={`/project/${project.slug}`}>
                        <Arrow1 />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* <VeiwAllProject /> */}
        </div>
      </section>
    </>
  );
}

export default Portfolio;
