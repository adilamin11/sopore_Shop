import React, { useState } from 'react';
import Nav from './nav';
import Header from './Others/Footer';
import contact from '/contact.jpg';

const HelpSupport = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div>
            <Nav />
            <div className='w-full min-h-screen pt-[125px] bg-gray-50'>
                {/* Banner */}
                <div className='w-full h-[300px] relative'>
                    <img src={contact} alt="contact" className='w-full h-full object-cover' />
                    <div className='absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white'>
                        <h1 className='text-4xl font-bold'>Help & Support</h1>
                        <p className='text-lg text-yellow-400 mt-2'>We’re here to help you!</p>
                    </div>
                </div>

                {/* Support Section */}
                <div className='w-full flex flex-col md:flex-row'>
                    {/* Left: Contact Info */}
                    <div className='md:w-1/2 w-full p-8 bg-gradient-to-br from-gray-900 to-black text-white'>
                        <h2 className='text-3xl font-bold mb-4'>Contact Our Team</h2>
                        <p className='text-gray-300 mb-6'>
                            Whether it’s your order, payment, or support — we’re always ready to help, especially our local Kashmiri shop partners.
                        </p>

                        <div className='space-y-6'>
                            {/* Address */}
                            <div className='flex items-start gap-4'>
                                <i className="ri-map-pin-line text-yellow-400 text-3xl mt-1"></i>
                                <div>
                                    <h3 className='font-semibold text-lg'>Our Store Location</h3>
                                    <p className='text-gray-300'>Sopore, Baramulla, J&K 193201</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className='flex items-start gap-4'>
                                <i className="ri-mail-line text-yellow-400 text-3xl mt-1"></i>
                                <div>
                                    <h3 className='font-semibold text-lg'>Email Support</h3>
                                    <p className='text-gray-300'>aadilaminrather@gmail.com</p>
                                    <p className='text-sm text-gray-400'>  24 hours available</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className='flex items-start gap-4'>
                                <i className="ri-phone-line text-yellow-400 text-3xl mt-1"></i>
                                <div>
                                    <h3 className='font-semibold text-lg'>Call Us</h3>
                                    <p className='text-gray-300'>+91 9070467011</p>
                                    <p className='text-sm text-gray-400'>Mon–Sat, 9am to 5pm</p>
                                </div>
                            </div>

                            {/* Kashmiri Shops Info */}
                            <div className='bg-yellow-100 p-4 rounded-md shadow-md text-black'>
                                <h3 className='text-lg font-semibold mb-1'>Support for Kashmiri Shops</h3>
                                <p className='text-sm'>
                                    We proudly support local Kashmiri businesses. Reach out to us if you are a seller or shopper from the valley!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className='md:w-1/2 w-full p-8 bg-white'>
                        <form
                            action="https://formspree.io/f/xyzpwloy"
                            method="POST"
                            className='space-y-5'
                        >
                            <h2 className='text-3xl font-bold text-gray-800'>Send Us a Message</h2>
                            <p className='text-sm text-gray-500 mb-4'>We typically respond within 24 hours.</p>

                            <input
                                name="First Name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                type="text"
                                placeholder="First Name"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                            <input
                                name="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                type="text"
                                placeholder="Last Name"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                            <input
                                name="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Email Address"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                            <input
                                name="Subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                type="text"
                                placeholder="Subject (Optional)"
                                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            />
                            <textarea
                                name="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Your Message"
                                required
                                className="w-full h-32 px-4 py-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            ></textarea>

                            <button
                                type="submit"
                                className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-500 active:scale-95 transition-all shadow"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Google Map */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d52750.661346261855!2d74.41329256949835!3d34.276185632903385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x38e10900089e08cb%3A0x1bb6a40d41b16b9!2sSopore%20fruit%20mandi%2C%20Sopore%20Bypass%20Bridge%2C%20Sopore!3m2!1d34.276121599999996!2d74.4544923!5e0!3m2!1sen!2sin!4v1754757052465!5m2!1sen!2sin" 
                    className='w-full h-[300px]'
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* Footer */}
                <div className='mt-10 max-[425px]:-mt-[110px]'>
                    <Header />
                </div>
            </div>
        </div>
    );
};

export default HelpSupport;
