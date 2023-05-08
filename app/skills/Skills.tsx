'use client';

import Heading from "../components/Heading";
import { useInView } from 'react-intersection-observer';
import { CardsCarousel } from "../components/card/CardCrousel";
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from "react";

const Skills = () => {
    const [ref, inView] = useInView();
    const animations = useAnimation();
    const animations2 = useAnimation();

    useEffect(() => {
        if(inView){
            animations.start({
                opacity: 1,
                transition: {
                    type: 'tween',
                    duration: 3
                }
            }),
            animations2.start({
                scale: [0.5, 1],
                transition: {
                    type:'tween',
                    duration: 1.5
                }
            })
        }
        if(!inView){
            animations.start({
                opacity: 0.3
            }),
            animations2.start({
                scale: 0
            })
        }
    }, [inView]);

    return(
        <div 
            ref={ref}
            className="lg:h-[90vh] mt-8 lg:mt-0">
            <Heading 
                title="Skills"
                subTitle="My technical skills and expertise include"
                inView={inView}
            />
            <div className="flex flex-col items-center justify-center gap-8">
                <motion.div 
                    animate={animations}
                    className="lg:mt-4 mt-2 lg:mr-8 mr-4 lg:ml-8 ml-4 lg:text-[1.1rem] text-center lg:leading-7"
                >
                    I specialize in building web applications with <b>React JS</b>, and <b>Next JS</b>, leveraging their various libraries and frameworks to deliver fast, scalable, and maintainable applications I also use <b>Tailwind CSS</b> for creating responsive and visually stunning user interfaces. With expertise in <b>Node JS</b>, I can also build scalable and secure server-side applications that integrate seamlessly with <b>MongoDB</b> and <b>SQL databases</b>. Additionally, I'm proficient in using <b>Framer Motion</b> to create fluid animations that enhance the user experience of web applications. I take pride in my ability to stay up-to-date with the latest web development trends and technologies and delivering top-notch results for my clients.
                </motion.div>
                <motion.div 
                    animate={animations2}
                    className="lg:mt-8 lg:mr-0 lg:ml-0 lg:flex md:flex w-[95%] lg:w-[100%] lg:justify-center lg:items-center"
                >
                    <CardsCarousel />
                </motion.div>
            </div>
        </div>
    )
}

export default Skills;