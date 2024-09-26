"use client"
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobileNo: '',
        company: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log(result.message); // Success message
                // Optionally reset the form data
               
            } else {
                const error = await response.json();
                console.error('Error:', error.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
        setFormData({
            name: '',
            mobileNo: '',
            company: '',
            email: '',
        });
    };
    

    return (
        <div className="flex flex-wrap md:flex-col w-full gap-4 justify-center items-center py-10 bg-[#EAF3FE]">
            <h2 className="text-4xl font-CustomSemiBold mt-6 mb-6 text-center">Get started with Egniol today</h2>
            <p className="text-sm text-[#212529B2] mb-6 text-center w-[90%]">
                Have a question or feedback? Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
            <div className="md:w-[60%] w-[90%]">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col">
                            <input 
                                placeholder="Name" 
                                className="p-2 border rounded border-[#CED4DA]" 
                                type="text" 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="flex flex-col">
                            <input 
                                placeholder="Mobile no" 
                                className="p-2 border rounded border-[#CED4DA]" 
                                maxLength="10" 
                                type="tel" 
                                name="mobileNo" 
                                value={formData.mobileNo} 
                                onChange={handleChange} 
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex flex-col">
                            <input 
                                placeholder="Company" 
                                className="p-2 border rounded border-[#CED4DA]" 
                                type="text" 
                                name="company" 
                                value={formData.company} 
                                onChange={handleChange} 
                            />
                        </div>
                        <div className="flex flex-col">
                            <input 
                                placeholder="Email" 
                                className="p-2 border rounded border-[#CED4DA]" 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                            />
                        </div>
                    </div>
                    <button 
                        type="submit" 
                        className="w-full text-white py-2 px-4 transition duration-300 mb-4 bg-[#03518F] hover:bg-[#03508fe3]"
                    >
                        Send message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
