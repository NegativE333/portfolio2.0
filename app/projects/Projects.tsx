"use client";

import { motion, useAnimation } from "framer-motion";
import Heading from "../components/Heading";
import Card from "../components/card/Card";
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const data = [
  {
    image: "/images/moneyMatters.png",
    title: "Money Matters",
    category: "Next JS",
    desc: "A web paltform to manage and track expenses.",
    href: "https://money-matter2-0-d6qr.vercel.app/",
    ghref: "https://github.com/NegativE333/MoneyMatter2.0",
  },
  {
    image: "/images/loud.png",
    title: "loud",
    category: "Next JS",
    desc: "An Music streaming website created with Next JS",
    href: "https://loud2-0.vercel.app/auth",
    ghref: "https://github.com/NegativE333/loud2.0",
  },
  {
    image: "/images/otakuWeb.png",
    title: "Otaku",
    category: "Next JS",
    desc: "An Anime streaming website created with Next JS",
    href: "https://otaku-seven.vercel.app/auth",
    ghref: "https://github.com/NegativE333/Otaku",
  },
  {
    image: "/images/Moviii.png",
    title: "Movix",
    category: "React JS",
    desc: "An Movie detail website create with React JS and TMDb API.",
    href: "https://moviiiweb.netlify.app/",
    ghref: "https://github.com/NegativE333/moviii",
  },
  {
    image: "/images/airbnb.png",
    title: "Airbnb Clone",
    category: "Next JS",
    desc: "Clone website of airbnb",
    href: "https://rental-tau.vercel.app/",
    ghref: "https://github.com/NegativE333/airbnbClone",
  },
  {
    image: "/images/OtakuShowCase.png",
    title: "Otaku App Showcase",
    category: "React JS",
    desc: "This website is the showcase of Otaku mobile application.",
    href: "https://otaku-app-showcase.vercel.app/",
    ghref: "https://github.com/NegativE333/otakuAppShowcase",
  },
];

const Projects = () => {

  const [ref, inView] = useInView();
  const animation = useAnimation();

  const router = useRouter();

  return (
    <div 
      ref={ref}
      className="lg:h-[91.5vh] h-full relative pb-16 lg:pb-4 overflow-hidden lg:mt-1 mt-10">
      <Heading 
        title="Projects"
        subTitle="A Showcase of Web Development Projects"
        inView={inView}
      />
      <motion.div
        animate={{rotate: [0, 90, 180, 270, 360], scale: [1.1, 1.2, 1.3, 1.3, 1.2, 1.1]}}
        transition={{type: 'tween', duration: 15, repeat: Infinity}}
        className="w-0 h-0 
          border-l-[150px] border-l-transparent
          border-b-[225px] border-b-zinc-900
          border-r-[150px] border-r-transparent absolute left-48 md:left-24 top-56 z-0" 
      >
      </motion.div>
      <motion.div
        animate={{rotate: [360, 270, 180, 90, 0], scale: [1.1, 1.2, 1.3, 1.3, 1.2, 1.1]}}
        transition={{type: 'tween', duration: 15, repeat: Infinity}}
        className="w-0 h-0 
          border-l-[150px] border-l-transparent
          border-t-[225px] border-t-zinc-900
          border-r-[150px] border-r-transparent absolute right-48 md:right-24 top-56 z-0" 
      >
      </motion.div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-4">
        {data.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            desc={item.desc}
            img={item.image}
            href={item.href}
            cat={item.category}
            ghref={item.ghref}
            inView={inView}
          />
        ))}
      </div>
      <motion.div
        whileHover={{backgroundColor: 'black', color: 'white'}}   
        transition={{type: 'tween', duration: 3}}      
        className="absolute right-[30%] lg:right-1 lg:bottom-[2.5rem] bottom-1 font-bold cursor-pointer p-1 rounded-md ring-2 ring-black hover:ring-white "
        onClick={() => router.push('/emptyPage')}
      >
          More Projects -&gt;
      </motion.div>
    </div>
  );
};

export default Projects;
