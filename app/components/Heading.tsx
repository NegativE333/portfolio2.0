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
                y: 0,
                transition: {
                    type: 'tween',
                    duration: 1
                }
            })
        }
        if(!inView){
            animation.start({
                y: -70,
            })
        }
    })
    return(
        <motion.div
            animate={animation}
            className="mb-4 overflow-hidden"
        >
            <div className="text-3xl font-semibold">
                {title}
            </div>
            <div>
                {subTitle}
            </div>
        </motion.div>
    )
}

export default Heading;