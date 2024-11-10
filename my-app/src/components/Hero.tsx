import React from 'react'
import Image from 'next/image'
import hero from '../assets/woman-1.png'
import icon_1 from '../assets/facebook.png'
import icon_2 from '../assets/instagram.png'
import icon_3 from '../assets/linkedin.png'
import { Button } from './ui/button'
const Hero = () => {
    return (
        <div className='text-white  md:px-16 mmd:flex items-center justify-between mmd:pt-32 smm:pt24 smd:pt-16 mmd:mb-0 smd:mb-20 gap-20 ' id='home'>
            <div className='mmd:text-left smd:text-center mmd:mt-0 smd:mt-20'>
                <h1 className='lg:text-6xl smd:text-5xl mb-4 font-bold'>Hi, I am Yusra</h1>
                <h2 className='text-red-500 lg:text-5xl smd:text-4xl mb-6 font-semibold '>I am a Web Developer</h2>
                <p className='text-lg md:px-0 smd:px-6'>Hello, my name is Yusra Ateeq. I am 18 years old. I am a professional Web Developer with more than 1 years experience. I love to try something new for my project.</p>
                <div className='flex items-center gap-6 mt-6 smd:justify-center mmd:justify-start'>
                    <a href="https://www.facebook.com/profile.php?id=61552980219340&mibextid=ZbWKwL" target="_blank"><Image src={icon_1} alt='' width={45} className='hover:-translate-y-2 transition-all'/></a>
                    <a href="https://www.instagram.com/ateeq.yusra?igsh=OWR6Y3lwZjlyZ3Nh"  target="_blank"><Image src={icon_2} alt='' width={40} className='hover:-translate-y-2 transition-all'/></a>
                    <a href="https://www.linkedin.com/in/yusra-ateeq-00797a2b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  target="_blank"><Image src={icon_3} alt='' width={38} className='hover:-translate-y-2 transition-all'/></a>
                </div>
                <div className='smm:gap-6 smd:gap-3 smmd:flex mt-8 mmd:justify-start smd:justify-center'>
                    <a href="#contact"><Button className='py-5 pl-14 pr-14 rounded-full bg-transparent outline smmd:mb-0 smd:mb-4'>Contact Me</Button></a>
                    <a href="yusra resume.pdf" download><Button className='py-6 pl-14 pr-14 rounded-full'>Download CV</Button></a>
                </div>
            </div>
            <div>
                <Image src={hero} alt='' className='mmd:min-w-96  smd:w-96 mmd:mt-0 smd:mt-8 mmd:ml-0 sm:ml-44 smm:ml-10'/>
            </div>
        </div>
    )
}

export default Hero



//mmd:pl-16 mmd:pr-16 md:pr-16 md:pl-2