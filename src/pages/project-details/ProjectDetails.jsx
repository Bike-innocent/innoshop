

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axiosInstance from '../../axiosInstance'; // Import your axios instance
import RelatedProject from './mini-component/RelatedProject';
import Loader from '../../components/Loader';
import Title from '../../components/Title';

function ProjectDetails() {

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    

    const { slug } = useParams(); // Extract the project slug from the URL
    const [project, setProject] = useState(null); // State to store project data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

   

    

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        axiosInstance
            .get(`/projects/${slug}`)
            .then((response) => {
                setProject(response.data); // Store the project data
                setLoading(false); // Set loading to false
                window.scrollTo({ top: 0, behavior: 'smooth' });


            })
            .catch((error) => {
                setError(error.response?.data?.message || 'Error fetching project data');
                setLoading(false);
            });
    }, [slug]);

    // If still loading, display the loader inside the main section
    if (loading) {
        return (
            <section className="bg-secondary pt-[700px]">
                <div className="max-w-[1075px] mx-auto px-4 xl:px-0">
                    <Loader />
                </div>
            </section>
        );
    }

    // Handle errors
    if (error) {

        return (
            <section className="bg-secondary pt-[250px] pb-[350px] text-center text-red-500">
                <div className="max-w-[1075px] mx-auto px-4 xl:px-0">
               error  fecthing project data. try refreshing 
                </div>
            </section>
        );
       
        
    }

    // Handle the case where no project data is found
    if (!project) {
        return <div>No project found.</div>;
    }

    return (
        <>
        <Title title={project.name}  />
            {/* Hero Section Start */}
            <section className="bg-secondary pt-[110px]">
                <div className="max-w-[1075px] mx-auto px-4 xl:px-0" data-aos="flip-down" data-aos-delay="300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 pb-12">
                        <div className="mb-2">
                            <ul className="flex flex-wrap text-sm font-normal font-Inter leading-tight">
                                {/* Conditionally render Category and Date */}
                                {project.category && (
                                    <li className="relative z-[1] before:rounded-full before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[8px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[20px]">
                                        <Link className="text-black-text-800" to="#">{project.category}</Link>
                                    </li>
                                )}
                                {project.created_at && (
                                    <li className="relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[8px] before:-z-[1] before:w-[6px] before:h-[6px] pl-[20px] ml-[10px]">
                                        <Link className="text-orange" to="#"> {new Date(project.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' })}</Link>
                                    </li>
                                )}
                            </ul>

                            <h4 className="text-black-800 font-bold mb-0 text-[32px] lg:text-[44px]">
                                {project.name}
                            </h4>
                        </div>

                        <ul className="flex flex-wrap gap-y-6 lg:gap-y-2">
                            {/* Conditionally render the following fields if they are not null */}
                            {project.client && (
                                <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                                    <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">Client</span>
                                    <h2 className="text-black-800 text-[15px] font-bold font-sans leading-none">{project.client}</h2>
                                </li>
                            )}
                            {project.category && (
                                <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                                    <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">Category</span>
                                    <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">{project.category}</h4>
                                </li>
                            )}
                            {project.tools && (
                                <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                                    <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">Tools</span>
                                    <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">{project.tools}</h4>
                                </li>
                            )}
                            {project.start_date && (
                                <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                                    <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">Start Date</span>
                                    <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">{project.start_date}</h4>
                                </li>
                            )}
                            {project.end_date && (
                                <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                                    <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">End Date</span>
                                    <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">{project.end_date}</h4>
                                </li>
                            )}
                            {project.url && (
                                <li className="flex flex-wrap flex-col gap-2 w-3/6 sm:w-1/3">
                                    <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">Project URL</span>
                                    <Link to={project.url} className="text-orange underline text-[15px] font-bold font-sans leading-none">{project.url}</Link>
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 mb-8">
                        <img className="w-full rounded-[20px] max-h-[300px] md:max-h-[400px] lg:max-h-[500px] object-cover" src={project.image} alt={project.name} />
                    </div>
                </div>
            </section>
            {/* Hero Section End */}

            {/* Description Section */}
            <section className="bg-white pb-[120px] mt-[-130px] pt-[130px] md:mt-[-280px] md:pt-[280px]">
                <div className="max-w-[1075px] mx-auto px-4 xl:px-0">
                    <div className="grid grid-cols-1">
                        {/* <h3 className="text-[25px] font-bold font-Syne leading-10 mb-2">Description</h3> */}
                     
                        <div className="custom-quill-content text-lg" dangerouslySetInnerHTML={{ __html: project.description }} />
                    </div>
                </div>
            </section>

            {/* Related Projects */}
            {/* <RelatedProject /> */}
        </>
    );
}

export default ProjectDetails;
