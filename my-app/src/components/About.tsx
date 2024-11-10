import React from 'react'
import Image from 'next/image'
import hero from '../assets/woman-1.png'

const About = () => {
    return (
        <div className='bg-zinc-950 mt-28 pb-28  mmd:flex items-center justify-center lg:gap-20 mmd:gap-6 md:gap-4 smm:pl-16 smm:pr-20 smd:px-4 text-white  smd:pb-20 mmd:pt-10 smd:pt-20' id='about'>
            <div>
                <Image src={hero} alt='' className='mmd:min-w-96  smd:w-96 mmd:ml-0 sm:ml-44 smd:ml-0' />

            </div>
            <div>
                <h2 className='text-red-500 smm:text-6xl smd:text-5xl font-bold mmd:text-left smd:text-center mmd:mt-0 smd:mt-16'>About Me</h2>

                <div className='flex items-center smmd:gap-6 smd:gap-1 mt-10 mmd:justify-start smd:justify-center'>
                    <div className='bg-red-500 text-center sm:p-12 smd:p-4 rounded-full sm:py-12 smd:py-4'>
                        <h4>30 +</h4>
                        <h5>Projects</h5>
                    </div>
                    <div className='bg-red-500 text-center sm:p-12 smd:p-4 rounded-full sm:py-12 smd:py-4'>
                        <h4>1 +</h4>
                        <h5>Year Experience</h5>
                    </div>
                    <div className='bg-red-500 text-center sm:p-12 smd:p-4 rounded-full sm:py-12 smd:py-4'>
                        <h4>10 +</h4>
                        <h5>Satisfied Clients</h5>
                    </div>
                </div>
                <p className='text-white mt-6 text-lg '>In my +1 years career, I took a part in 2 companies and help them growing up. Being a professional Web Developer is my dream, so I enjoy finishing design and try something new for my project..</p>
            </div>
        </div>
    )
}

export default About
