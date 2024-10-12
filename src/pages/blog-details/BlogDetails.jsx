

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';
import RelatedBlog from './mini-component/RelatedBlog';
import MediaShare from './mini-component/MediaShare';
import Loader from '../../components/Loader';
import Title from '../../components/Title';

function BlogDetails() {


    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []); 

    const { slug } = useParams(); // Get the slug from the URL
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const fetchBlogDetails = async () => {
            try {
                const response = await axiosInstance.get(`/blogs/${slug}`);
                setBlog(response.data);
                setLoading(false);

               
            } catch (err) {
                setError('Failed to fetch blog details.');
                setLoading(false);
            }
        };

        fetchBlogDetails();
    }, [slug]);

    if (loading) {
        return (
            <section className="bg-secondary pt-[700px]">
                <div className="max-w-[1075px] mx-auto px-4 xl:px-0">
                    <Loader />
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="bg-secondary pt-[250px] pb-[350px] text-center text-red-500">
                <div className="max-w-[1075px] mx-auto px-4 xl:px-0">
                    Error fetching blog data. Try refreshing.
                </div>
            </section>
        );
    }

    const blogUrl = `https://chibuikeinnocent.tech/blog/${slug}`;

    return (
        <>
         <Title title={blog.title} />
            {/* Hero Section */}
            <section className="bg-secondary pt-[110px]">
                <div className="max-w-[1075px] mx-auto px-4 xl:px-0" data-aos="flip-down" data-aos-delay="300">
                    <div className="grid grid-cols-1">
                        <h4 className="text-black-800 font-bold font-Syne leading-snug text-[20px] sm:text-[25px] md:text-[28px] max-w-[950px] mb-4 md:mb-5">
                            {blog.title}
                        </h4>
                        <img
                            className="w-full rounded-[20px] max-h-[280px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] object-cover mb-5"
                            src={blog.image}
                            alt={blog.title}
                        />
                    </div>
                </div>
            </section>

            {/* Blog Details */}
            <section className="bg-white pb-[90px] mt-[-280px] pt-[280px]">
                <div className="max-w-[1075px] mx-auto px-4 xl:px-0">
                    <div className="grid grid-cols-1 mb-5">
                        <ul className="flex flex-wrap gap-x-[80px] gap-y-6 pb-8 border-b border-black-800 border-opacity-10">
                            <li className="flex flex-wrap flex-col gap-3">
                                <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">
                                    Category
                                </span>
                                <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">{blog.category}</h4>
                            </li>
                            <li className="flex flex-wrap flex-col gap-3">
                                <span className="text-black-text-800 text-sm font-normal font-Inter leading-tight">
                                    Date
                                </span>
                                <h4 className="text-black-800 text-[15px] font-bold font-sans leading-none">
                                {new Date(blog.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: '2-digit' })}
                                </h4>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1">
                        <div
                            className="custom-quill-content mb-5 text-lg"
                            dangerouslySetInnerHTML={{ __html: blog.description }}
                        />
                    </div>

                    {/* MediaShare component with blog URL */}
                    <div className="grid grid-cols-1 gap-6">
                        <MediaShare blogUrl={blogUrl} />
                    </div>
                </div>
            </section>

            <RelatedBlog />
        </>
    );
}

export default BlogDetails;
