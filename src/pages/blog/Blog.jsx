

import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance'; // Assuming axiosInstance is correctly set up
import { Link } from 'react-router-dom';
import BlogDropdown from './mini-component/BlogDropdown';
import Loader from '../../components/Loader';
import { useQuery } from '@tanstack/react-query'; 
import Title from '../../components/Title';

const fetchBlogs = async () => {
    const response = await axiosInstance.get('/blogs');
    return response.data;
};

function Blog() {
    const [retryCount, setRetryCount] = useState(0);

    // Scroll to top when the component is mounted
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { data: blogs = [], isLoading, error } = useQuery({
        queryKey: ['blogsge'],
        queryFn: fetchBlogs,
        retry: false // Disable automatic retries by react-query
    });

    
    useEffect(() => {
        if (error && retryCount < 1) {
            setRetryCount(retryCount + 1);
            fetchBlogs(); 
        }
    }, [error, retryCount]);

    return (
        <>
         <Title title="My Blogs" />
            <section className="bg-white py-[120px]">

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

                    {isLoading ? (
                        <div className='mb-[350px]'>
                            <Loader />
                        </div>
                    ) : error ? (
                        <div className="text-center text-red-600 mb-[300px]">
                            Error loading blogs. try refreshing .
                        </div>
                    ) : (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {blogs.map((blog) => (
                                <div key={blog.id} data-aos="fade-up">
                                    <div className="rounded-[20px] overflow-hidden mb-6">
                                        <Link to={`/blog/${blog.slug}`}>
                                            <img className="w-full max-h-[280px] object-cover" src={blog.image} alt={blog.title} />
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
                                            <div className='ml-auto'>
                                                <BlogDropdown blog={blog} />
                                            </div>
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
