import React from 'react';
import Nav from './nav';
import Header from './Others/Footer';
import about from '/about-us-background.jpg';
import founder from '/founder.jpg';

const About = () => {
    return (
        <div>
            <Nav />
            <div className='relative w-full h-[400px]'>
                <img src={about} className='w-full h-full object-cover opacity-80' alt="About background" />
                <div className='absolute inset-0 flex items-center justify-center'>
                    <h1 className='text-white text-5xl font-bold drop-shadow-lg max-[425px]:text-3xl'>About Us</h1>
                </div>
            </div>

            <div className='w-full h-auto flex flex-col-reverse md:flex-row py-16 px-6 gap-10 items-center'>
                <div className='md:w-1/2'>
                    <h2 className='text-4xl font-bold mb-6 text-green-700'>Meet Our Founder</h2>
                    <p className='text-lg text-gray-700 mb-6'>
                        E-SHOP was born in the heart of Kashmir by Alex Thompson in 2010, blending simplicity, innovation, and tradition. With 15+ years of experience, Alex envisioned a platform where modern technology meets the warmth of local craftsmanship. His passion for mentoring youth and supporting Kashmiri businesses drives everything we do.
                    </p>
                    <p className='text-md text-gray-600 mb-5 italic'>
                        “Empowering Kashmiri shops and communities, one click at a time.”
                    </p>
                    <a href="https://en.wikipedia.org/wiki/Steve_Jobs" target="_blank" rel="noreferrer">
                        <button className='bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-semibold shadow-md transition active:scale-95'>
                            Explore More
                        </button>
                    </a>
                </div>
                <div className='md:w-1/2 flex justify-center'>
                    <img src={founder} className='w-4/5 max-w-md rounded-xl shadow-lg object-cover' alt="Founder" />
                </div>
            </div>

            <hr className='my-10' />
            <Header />
        </div>
    );
};

export default About;
