'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Heading from '../components/Heading';

const Deployment = () => {
    const [ref, inView] = useInView();
    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                opacity: 1,
                transition: {
                    type: 'tween',
                    duration: 3
                }
            })
        }
        if(!inView){
            animation.start({
                opacity: 0.3
            })
        }
    }, [inView]);
    return(
        <div 
            ref={ref}
            className='h-[93vh] lg:h-[91.5vh] lg:mt-0 mt-8'
        >
            <Heading 
                title='Project Deployment'
                subTitle='An overview of the different web hosting platforms and content management systems that I have experience with'
                inView={inView}
            />
            <div className="flex flex-col items-center justify-center gap-8">
                <motion.div 
                    animate={animation}
                    className="lg:mt-4 mt-2 lg:mr-8 mr-4 lg:ml-8 ml-4 lg:text-[1.1rem] text-center lg:leading-7"
                >
                    <b>Deployment</b> is a critical part of the web development process, and I have extensive experience with some of the top web hosting platforms and content delivery networks (CDNs) on the market today, including <b>Vercel</b> and <b>Netlify</b>. With their advanced features and seamless integrations with popular web development tools and frameworks, I can easily deploy high-performance web applications and websites that are optimized for speed, scalability, and security. 
                </motion.div>
                <div className='flex gap-8 lg:mt-8'>
                    <div 
                        style={{backgroundImage: 'url(/images/vercel.webp)', backgroundSize: 'cover'}}
                        className='lg:w-[300px] w-[100px] lg:h-[150px] h-[50px] rounded-md'
                    >
                        
                    </div>
                    <div 
                        style={{backgroundImage: 'url(/images/netlify2.png)', backgroundSize: 'cover'}}
                        className='lg:w-[300px] w-[100px] lg:h-[150px] h-[50px] rounded-md'
                    >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deployment;