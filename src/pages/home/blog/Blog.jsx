import React from 'react';
import axiosInstance from '../../../axiosInstance'; // Assuming axiosInstance is correctly set up
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';


    const fetchBlogs = async () => {
        const response = await axiosInstance.get('/blogs');
        return response.data;
      };
      
      function Blog() {
        // Use the useQuery hook with object form
        const { data: blogs = [], loading, error } = useQuery({
          queryKey: ['blogrgs'],
          queryFn: fetchBlogs,
        });

 

    return (
        <>
            <section className="bg-white py-[50px]">
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12" data-aos="fade-up">
                            <div className="font-bold font-Syne text-center leading-none flex flex-wrap flex-col gap-y-2 mb-10">
                                <span className="text-orange text-xl">Blogs</span>
                                <h3 className="text-black-800 text-4xl lg:text-5xl xl:text-[64px] tracking-[-1.5px]">
                                    My blog {' '}
                                    <span
                                        className="relative z-[1] before:rounded-full  before:block before:absolute before:top-[8px] before:left-[20px] before:-z-[1] before:w-[36px] lg:before:w-[48px] xl:before:w-[69px] before:h-[36px] lg:before:h-[48px] xl:before:h-[69px]">po</span>st
                                </h3>
                            </div>
                        </div>
                    </div>

                    {loading ? (
                        <>
                            <div className="text-center">
                                {/* <InlineLoader/> */}
                            </div>
                        </>
                    ) : error ? (
                        <div className="text-center text-red-600 mb-12 col-span-12">
                            Error loading blogs. Please try again later.
                        </div>
                    ) : (

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {blogs.slice(0, 4).map((blog) => (
                                <div key={blog.id} data-aos="fade-up">
                                    <div className="rounded-[20px] overflow-hidden mb-6">
                                        <Link to={`/blog/${blog.slug}`}>
                                        <img className="w-full" src={blog.image} alt={blog.title} />
                                        </Link>
                                        
                                    </div>
                                    <div className="flex flex-wrap flex-col gap-3">
                                        <ul className="flex flex-wrap text-sm font-normal font-Inter leading-tight">
                                            <li className="relative z-[1] before:rounded-full before:bg-black-800 before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[15px] before:-z-[1] before:w-[8px] before:h-[8px] pl-[30px]">
                                                <Link className="text-black-text-800" to={`/blog/${blog.slug}`}>{blog.category}</Link>
                                            </li>
                                            <li className="relative z-[1] before:rounded-full before:bg-orange before:block before:absolute before:top-[50%] before:translate-y-[-50%] before:left-[15px] before:-z-[1] before:w-[8px] before:h-[8px] pl-[30px]">
                                                <Link className="text-orange" to={`/blog/${blog.slug}`}> {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' })}</Link>
                                            </li>
                                        </ul>
                                        <div className="flex justify-between items-end text-black-800 hover:text-orange group">
                                            <h4 className="font-bold font-Syne transition-all leading-8 text-[18px] md:text-[20px] 2xl:text-[22px]">
                                                <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                                            </h4>
                                            <Link to={`/blog/${blog.slug}`} className="group-hover:animate-arrow-move-up">
                                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M30.8839 9.11612C31.372 9.60427 31.372 10.3957 30.8839 10.8839L10.8839 30.8839C10.3957 31.372 9.60427 31.372 9.11612 30.8839C8.62796 30.3957 8.62796 29.6043 9.11612 29.1161L29.1161 9.11612C29.6043 8.62796 30.3957 8.62796 30.8839 9.11612Z" fill="currentColor" fillOpacity="0.9" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.5 10C12.5 9.30964 13.0596 8.75 13.75 8.75H30C30.6904 8.75 31.25 9.30964 31.25 10V26.25C31.25 26.9404 30.6904 27.5 30 27.5C29.3096 27.5 28.75 26.9404 28.75 26.25V11.25H13.75C13.0596 11.25 12.5 10.6904 12.5 10Z" fill="currentColor" fillOpacity="0.9" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Blog;
