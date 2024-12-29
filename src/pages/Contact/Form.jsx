import React, { useState, useEffect } from 'react';

const Form = () => {
    useEffect(() => {
        // Scroll to the top when the component is mounted
        window.scrollTo(0, 0);
    }, []);


    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: '',
    });

    const [isEmail, setIsEmail] = useState(false);

    const handleChange = (e) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle form submission (e.g., API call)
    };

    return (
        <>
            <div className="flex mx-36">
                <div className="flex flex-col">
                    <span className="heading">- Reach Out to Us</span>
                    <span className='text-[40px] font-semibold'>Please fill out the contact form</span>
                </div>
                <div className='mx-36 flex mt-16 mb-32 justify-center w-1/2'>
                    <div className="flex flex-col items-center gap-10 h-fit w-full">
                        <form
                            action=""
                            className='flex flex-col gap-10 w-full'
                            onSubmit={handleSubmit}
                        >
                            <div className='flex flex-col gap-5 w-full'>
                                <span>Full Name</span>
                                <input
                                    type="text"
                                    className="px-5 py-3 outline-none rounded-full border"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='flex flex-col gap-5 w-full'>
                                <span>Email Address</span>
                                <input
                                    type="email"
                                    className={`px-5 py-3 outline-none rounded-full  ${isEmail ? 'border border-[#00CC96]' : 'border'
                                        }`}
                                    onBlur={() => {
                                        setIsEmail(formData.email !== '');
                                    }}
                                    onFocus={() => {
                                        setIsEmail(true);
                                    }}
                                    name='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className='flex flex-col gap-5 w-full'>
                                <span>Subject</span>
                                <select
                                    className="px-5 py-3 outline-none rounded-full border"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                >
                                    <option value="">Select a subject</option>
                                    <option value="Support">Support</option>
                                    <option value="Inquiry">Inquiry</option>
                                </select>

                            </div>

                            <div className='flex flex-col gap-5 w-full'>
                                <span>Message</span>
                                <textarea
                                    className="px-5 py-3 outline-none rounded-full border"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                />
                            </div>
                            
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center border py-3 px-5 font-semibold text-xl rounded-full bg-[#00CC96] text-white"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Form;
