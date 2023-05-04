"use client";

import Heading from "../components/Heading";
import Card from "../components/card/Card";

const data = [
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
    image: "/images/iPhone3D.png",
    title: "3D iPhone Preview",
    category: "Next JS",
    desc: "In this website I used the 3D modal of IPhone for its preview.",
    href: "https://iphone-preview.netlify.app/",
    ghref: "https://github.com/NegativE333/iPhonePreview3D",
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
  return (
    <div className="lg:h-[90vh] relative pb-6 overflow-hidden mt-8">
      <Heading 
        title="Projects"
        subTitle="A Showcase of Web Development Projects"
      />
      <div
        className="w-0 h-0 
          border-l-[300px] border-l-transparent
          border-b-[450px] border-b-zinc-900
          border-r-[300px] border-r-transparent absolute left-36 top-20 z-0" 
      >
      </div>
      <div
        className="w-0 h-0 
          border-l-[300px] border-l-transparent
          border-t-[450px] border-t-zinc-900
          border-r-[300px] border-r-transparent absolute right-36 top-20 z-0" 
      >
      </div>
      <div className="grid lg:grid-cols-3  gap-4">
        {data.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            desc={item.desc}
            img={item.image}
            href={item.href}
            cat={item.category}
            ghref={item.ghref}
          />
        ))}
      </div>
      <div className="absolute right-0 lg:bottom-8 bottom-0 font-bold cursor-pointer">
          More Projects -&gt;
      </div>
    </div>
  );
};

export default Projects;
