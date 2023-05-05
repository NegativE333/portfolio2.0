'use client';

import Heading from "../components/Heading";
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";

const Skills = () => {
    const [ref, inView] = useInView();

    return(
        <div 
            ref={ref}
            className="lg:h-[90vh] mt-8 lg:mt-0">
            <Heading 
                title="Skills"
                subTitle="My technical skills and expertise include"
                inView={inView}
            />
        </div>
    )
}

export default Skills;