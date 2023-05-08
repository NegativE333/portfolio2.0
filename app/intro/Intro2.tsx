'use client';

import { BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import TypewriterComponent from 'typewriter-effect';
import AnimatedText from '../components/animation/AnimatedText';
import {motion} from 'framer-motion';

const Intro2 = () => {
    return(
        <div className="lg:h-[90vh]">
            <div className="flex flex-col lg:gap-4 gap-2 items-center justify-center mt-4">
                <div className="lg:text-3xl text-2xl">
                    {/* Hi there,  */}
                    <AnimatedText 
                        text='Hi there,'
                        fontSize='2rem'
                    />
                </div>
                <div className="lg:text-4xl text-3xl flex">
                    <AnimatedText 
                        text='I am'
                        fontSize='2rem'
                    /> 
                    <b>
                        <AnimatedText 
                            text='Om Tekade,'
                            fontSize='2rem'
                        />
                    </b>
                </div>
                <div className="lg:text-3xl text-2xl flex">
                    <AnimatedText 
                        text='a&nbsp;' 
                        fontSize='1.5rem'
                    />
                    <b>
                    <TypewriterComponent 
                        options={{
                            strings: ['Full Stack Developer.', 'Software Engineer.'],
                            autoStart: true,
                            loop: true,
                          }}
                    />
                    </b>
                </div>
                <motion.div 
                    animate={{opacity: 1}}
                    transition={{ type: 'tween', duration: 1}}
                    initial={{opacity: 0}}
                    className="mt-4 lg:mr-16 lg:ml-16 lg:text-[1.3rem] text-center lg:leading-10"
                >
                I'm a <b>web developer</b> who creates visually stunning and highly functional websites, from simple blogs to complex e-commerce platforms. I aim to deliver the <b>best user experience</b> for my clients and their audiences by crafting clean layouts and optimizing code for fast load times. When I'm not coding, I enjoy exploring <b>new frameworks</b> and tech gadgets, or watching <b>anime</b>. 
                <br></br>
                Thanks for stopping by, and I look forward to sharing my portfolio with you!
                <br></br>
                </motion.div>
                <motion.div 
                    animate={{opacity: 1}}
                    transition={{ type: 'tween', duration: 1}}
                    initial={{opacity: 0}}
                    className="lg:text-[1.1rem] lg:mt-10 mt-8 text-center">
                    Follow me for updates on my work, insights into my creative process, and a glimpse into my personal life. Don't be shy, come say hi!
                </motion.div>
                <motion.div 
                    animate={{opacity: [0.7, 1, 1, 0.7]}}
                    transition={{type: 'tween', duration: 3, repeat: Infinity}}
                    className="flex gap-8 mt-4">
                    <motion.a
                        whileHover={{scale: 1.2}} 
                        href=''
                    >
                        <BsInstagram size={25}/>
                    </motion.a>
                    <motion.a 
                        whileHover={{scale: 1.2}}
                        href='https://www.linkedin.com/in/om-tekade-b07474231' target='blank'
                    >
                        <BsLinkedin size={25}/>
                    </motion.a>
                    <motion.a 
                        whileHover={{scale: 1.2}}
                        href='https://github.com/NegativE333' target='blank'
                    >
                        <BsGithub size={25}/>
                    </motion.a>
                </motion.div>
                <motion.div
                    whileHover={{background: 'black', scale: 1.1}}
                    className='bg-zinc-800 text-white rounded-md p-1 mt-4'>
                    <a href='/cv'>
                        View my CV
                    </a>
                </motion.div>
            </div>
        </div>
    )
}

export default Intro2;