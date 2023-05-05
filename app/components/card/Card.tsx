'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface CardProps{
    title: string;
    cat: string;
    desc: string;
    img: string;
    href: string;
    ghref: string;
    inView: boolean;
}

const Card: React.FC<CardProps> = ({
    title,
    cat,
    desc,
    img,
    href,
    ghref,
    inView
}) => {

    const animation = useAnimation();

    useEffect(() => {
        if(inView){
            animation.start({
                scale: [0.5, 1],
                transition: {
                    type: 'tween', 
                    duration: 1.5
                }
            })
        }
        if(!inView){
            animation.start({
                scale: 0
            })
        }
    }, [inView])

    return(
        <motion.div
            animate={animation} 
            style={{backgroundImage: `url(${img})`, backgroundSize: 'cover'}}
            className="flex flex-col relative items-center h-[200px] lg:h-[250px] rounded-md"
        >
            <div className="bg-zinc-100 absolute bottom-1 right-1 p-1 rounded-lg font-semibold">
                <a href={href} target="blank">
                    Visit
                </a>
            </div>
            <div className="bg-zinc-200/90 mt-4 lg:mt-14 p-2 rounded-md">
                <div className="uppercase opacity-70 font-semibold">
                    {cat}
                </div>
                <div className="font-bold text-2xl">
                    {title}
                </div>
            </div>
            <div className="bg-zinc-300/90 mt-2 ml-1 mr-1 p-1 rounded-md text-center">
                {desc}
            </div>
            <div className="bg-zinc-100 absolute bottom-1 left-1 p-1 rounded-lg font-semibold">
                <a href={ghref} target="blank">
                    &#60;/&#62;
                </a>
            </div>
        </motion.div>
    )
}

export default Card;