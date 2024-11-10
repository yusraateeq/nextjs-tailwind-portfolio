import React from 'react'
import Image from 'next/image'
import skill_1 from '../assets/html.jpeg'
import skill_2 from '../assets/css.png'
import skill_3 from '../assets/js.png'
import skill_4 from '../assets/ts.png'
import skill_5 from '../assets/mysql.png'
import skill_6 from '../assets/php.png'
import skill_7 from '../assets/wordpress.jpeg'
import skill_8 from '../assets/nextjs.png'
import skill_9 from '../assets/react.png'
import skill_10 from '../assets/tailwind.png'

const Skills = () => {
    return (
        <div className=' mt-24 ' id='skills'>
            <h2 className='text-red-500 text-6xl font-bold text-center '>My Skills</h2>
            <div className='md:flex items-center justify-center lg:gap-20 md:gap-4 mt-20 mb-28 md:px-0 smd:px-20'>
                <div>
                    <Image src={skill_1} alt=''  className='bg-gray-900 p-6 md:mb-8 smd:mb-16 rounded-sm hover:-translate-y-5 transition-all border-2 border-red-500 md:w-44 smd:w-full' />
                    <Image src={skill_2} alt=''  className='bg-gray-900 p-6 rounded-sm hover:-translate-y-5 transition-all border-2 border-red-500 md:w-44 smd:w-ful md:mb-0 smd:mb-16l' />
                </div>
                <div>
                    <Image src={skill_3} alt=''  className='bg-gray-900 p-6 md:mb-8 smd:mb-16 rounded-sm hover:-translate-y-5 transition-all border-2 border-red-500 md:w-44 smd:w-full' />
                    <Image src={skill_4} alt=''  className='bg-gray-900 p-6 rounded-sm hover:-translate-y-5 transition-all border-2 border-red-500 md:w-44 smd:w-full md:mb-0 smd:mb-16' />
                </div>
                <div>
                    <Image src={skill_5} alt='' className='bg-gray-900 p-6 md:mb-8 smd:mb-16 rounded-sm hover:-translate-y-5 transition-all border-2 border-red-500 md:w-44 smd:w-full' />
                    <Image src={skill_6} alt='' className='bg-gray-900 p-6 rounded-sm hover:-translate-y-5 transition-all border-2 border-red-500 md:w-44 smd:w-full md:mb-0 smd:mb-16' />
                </div>
                <div>

                    <Image src={skill_7} alt=''  className='bg-gray-900 p-6 md:mb-8 smd:mb-16 rounded-sm hover:-translate-y-5 transition-all border-2 border-red-500 md:w-44' />
                    <Image src={skill_8} alt='' className='bg-gray-900 p-6 rounded-sm hover:-translate-y-5 transition-all border-2 border-red-500 md:w-44 smd:w-full md:mb-0 smd:mb-16' />
                </div>
                <div>

                    <Image src={skill_9} alt='' className='bg-gray-900 p-6 md:mb-8 smd:mb-16 rounded-sm hover:-translate-y-5 transition-all border-2 border-red-500 md:w-44 smd:w-full' />
                    <Image src={skill_10} alt='' className='bg-gray-900 p-6 rounded-sm hover:-translate-y-5 transition-all border-2 border-red-500 md:w-44 smd:w-full md:mb-0 smd:mb-16' />
                </div>

            </div>
        </div>
    )
}

export default Skills
