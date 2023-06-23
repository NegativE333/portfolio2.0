'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface HeadingProps{
    title: string;
    subTitle?: string;
    inView: boolean;
}

const Heading: React.FC<HeadingProps> = ({
    title,
    subTitle,
    inView
}) => {

    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                opacity: 100,
                transition: {
                    type: 'tween',
                    duration: 2
                }
            })
        }
        if(!inView){
            animation.start({
                opacity: 0,
            })
        }
    })
    return(
        <motion.div
            animate={animation}
            className="mb-4 mt-4 overflow-hidden sm:text-start text-center"
        >
            <div className="lg:text-3xl text-[1.8rem] font-semibold">
                {title}
            </div>
            <div className='text-[1rem]'>
                {subTitle}
            </div>
        </motion.div>
    )
}

export default Heading;