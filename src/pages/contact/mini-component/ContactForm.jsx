



import React, { useState } from 'react';
import axiosInstance from '../../../axiosInstance'; // Import your custom Axios instance

function ContactForm({ triggerToast }) { // Accept the triggerToast function as a prop
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post('/contact', { email, message });
            triggerToast('success', 'Message sent successfully! Will reach out within 24 hours'); // Trigger success toast
            setEmail(''); // Clear the form
            setMessage('');
        } catch (error) {
            triggerToast('error', 'Something went wrong. Please try again.'); // Trigger error toast
        }
    };

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-12 gap-[18px]">
            <div className="col-span-12">
                <label className="text-sm font-normal font-Inter leading-tight mb-3 block" htmlFor="Email">Email</label>
                <input
                    id="Email"
                    className="font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-orange focus:outline-none"
                    type="email"
                    required
                    placeholder="Your email*"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="col-span-12">
                <label className="text-sm font-normal font-Inter leading-tight mb-3 block" htmlFor="Message">Message</label>
                <textarea
                    className="h-[140px] font-normal w-full leading-7 placeholder:opacity-100 placeholder:text-black-text-600 border border-black-800 border-opacity-40 rounded-[8px] p-4 focus:border-orange focus:outline-none resize-none"
                    name="message"
                    id="Message"
                    cols="30"
                    rows="10"
                    required
                    placeholder="Type your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </div>

            <div className="col-span-12">
                <button className="flex items-center flex-wrap btn-primary group" type="submit">
                    Submit
                    <span className="inline-block ml-3 group-hover:animate-arrow-move-up">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 17L17 7" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M7 7H17V17" stroke="currentColor" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </form>
    );
}

export default ContactForm;
