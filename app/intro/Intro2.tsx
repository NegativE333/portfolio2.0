'use client';

import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import TypewriterComponent from 'typewriter-effect';

const Intro2 = () => {
    return(
        <div className="lg:h-[90vh]">
            <div className="flex flex-col lg:gap-4 gap-2 items-center justify-center mt-4">
                <div className="lg:text-3xl text-2xl">
                    Hi there, 
                </div>
                <div className="lg:text-4xl text-3xl">
                    I am <b>Om Tekade</b>,
                </div>
                <div className="lg:text-3xl text-2xl flex">
                    a&nbsp;<b>
                    <TypewriterComponent 
                        options={{
                            strings: ['Full Stack Developer.', 'Software Engineer.'],
                            autoStart: true,
                            loop: true,
                          }}
                    />
                    </b>
                </div>
                <div className="mt-4 lg:mr-16 lg:ml-16 lg:text-[1.3rem] text-center lg:leading-10">
                I'm a <b>web developer</b> who creates visually stunning and highly functional websites, from simple blogs to complex e-commerce platforms. I aim to deliver the <b>best user experience</b> for my clients and their audiences by crafting clean layouts and optimizing code for fast load times. When I'm not coding, I enjoy exploring <b>new frameworks</b> and tech gadgets, or watching <b>anime</b>. 
                <br></br>
                Thanks for stopping by, and I look forward to sharing my portfolio with you!
                <br></br>
                </div>
                <div className="lg:text-[1.1rem] lg:mt-16 mt-8 text-center">
                    Follow me for updates on my work, insights into my creative process, and a glimpse into my personal life. Don't be shy, come say hi!"
                </div>
                <div className="flex gap-8 mt-4">
                    <a href=''>
                        <BsInstagram size={25}/>
                    </a>
                    <a href='https://www.linkedin.com/in/om-tekade-b07474231' target='blank'>
                        <BsLinkedin size={25}/>
                    </a>
                    <a href='https://github.com/NegativE333' target='blank'>
                        <BsGithub size={25}/>
                    </a>
                </div>
                <div className='bg-zinc-800 text-white rounded-md p-1 mt-4'>
                    <a href='/cv'>
                        View my CV
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Intro2;