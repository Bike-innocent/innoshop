import React from 'react';
import axiosInstance from '../../../axiosInstance'; // Adjust the path if necessary
import Arrow1 from './Arrow1';
import { useQuery } from '@tanstack/react-query'; // Import useQuery
import { Link, useParams } from 'react-router-dom';

// Function to fetch related projects based on the current slug
const fetchRelatedProjects = async (slug) => {
    const response = await axiosInstance.get(`/projects/${slug}/related`);
    return response.data;
};

function RelatedProject() {
    const { slug } = useParams(); // Get the current project slug from URL

    // Use the useQuery hook with the slug as part of the queryKey
    const { data: projects = [], isLoading, error } = useQuery({
        queryKey: ['relatedp', slug],
        queryFn: () => fetchRelatedProjects(slug), // Pass the slug to the query function
    });

    if (error) {
        console.error('Error fetching related projects:', error);
        return <div>Error loading related projects.</div>; // Show error message if fetching fails
    }

    return (
        <section className="bg-secondary py-[120px]">
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12" data-aos="fade-up">
                        <div className="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
                            <span className="text-orange text-xl">Portfolio</span>
                            <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                                Related {''}
                                <span className="relative z-[1] before:rounded-full before:block before:absolute before:top-[4px] before:left-[-6px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[64px] before:h-[36px] lg:before:h-[48px] xl:before:h-[64px]">
                                    w
                                </span>
                                ork
                            </h3>
                        </div>
                    </div>

                    {isLoading ? (
                        <div> </div>
                    ) : (
                        // Show actual content when data is loaded
                        projects.length > 0 ? (
                            projects.map((project, index) => (
                                <div
                                    className="col-span-12 md:col-span-6"
                                    data-aos="fade-up"
                                    data-aos-delay={`${300 + index * 200}`} // Adding a delay for each project
                                    key={project.id}
                                >
                                    <div className="w-full">
                                        <Link to={`/project/${project.slug}`} >
                                            <img
                                                src={project.image}
                                                alt={`project-${project.slug}`}
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
                        ) : (
                            <div>No related projects found.</div> // Show this message if no related projects are found
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

export default RelatedProject;
