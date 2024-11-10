import React from 'react'
import Image from 'next/image'
import icon_1 from '../assets/facebook.png'
import icon_2 from '../assets/instagram.png'
import icon_3 from '../assets/linkedin.png'
const Footer = () => {
    return (
        <div>
            <div className='bg-zinc-950 text-white py-10 mt-10'>
                <h4 className='text-center font-mono text-4xl font-bold text-red-500'>Yusra Ateeq</h4>

                <div>
                    <ul className="hidden md:flex space-x-8 text-white font-bold transition-all items-center justify-center mt-10">
                        <li><a href="#home" className="hover:text-red-500">Home</a></li>
                        <li><a href="#about" className="hover:text-red-500">About</a></li>
                        <li><a href="#skills" className="hover:text-red-500">Skills</a></li>
                        <li><a href="#projects" className="hover:text-red-500">Projects</a></li>
                        <li><a href="#contact" className="hover:text-red-500">Contact</a></li>
                    </ul>
                </div>
                <div className='flex items-center justify-center gap-6 mt-6'>
                <a href="https://www.facebook.com/profile.php?id=61552980219340&mibextid=ZbWKwL" target="_blank"><Image src={icon_1} alt='' width={45} className='hover:-translate-y-2 transition-all'/></a>
                    <a href="https://www.instagram.com/ateeq.yusra?igsh=OWR6Y3lwZjlyZ3Nh"  target="_blank"><Image src={icon_2} alt='' width={40} className='hover:-translate-y-2 transition-all'/></a>
                    <a href="https://www.linkedin.com/in/yusra-ateeq-00797a2b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  target="_blank"><Image src={icon_3} alt='' width={38} className='hover:-translate-y-2 transition-all'/></a>
                </div>
                <div className='flex items-center justify-center gap-6 mt-8 mb-4'>
                    <h6>Term & Conditions</h6>
                    <h6>Privacy Policy</h6>
                </div>
                <hr />
                <h6 className='text-center mt-6'>Copyright @ 2024 Yusra Ateeq. All right reserved.</h6>
            </div>
        </div>
    )
}

export default Footer
