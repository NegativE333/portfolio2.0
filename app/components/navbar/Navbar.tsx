"use client";

import { useRouter } from "next/navigation";
import Container from "../Container";
import { AiOutlineMail } from 'react-icons/ai';


const Navbar = () => {
    const router = useRouter();
    return(
        <div className="fixed w-full h-[7vh] lg:h-[8.5vh] bg-zinc-800 text-white z-20 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center gap-3 md:gap-0 font-semibold ">
                        <div 
                            onClick={() => router.push('/')}
                            className="flex-1 text-2xl lg:text-start text-center cursor-pointer">
                            {/* <AnimatedText text="&#60; omTekade /&#62;"/> */}
                            &#60; omTekade /&#62;
                        </div>
                        <div className="lg:flex hidden flex-1 gap-6 justify-end ">
                            <div className="flex gap-2">
                                <AiOutlineMail size={18}/>
                                omtekade914@gmail.com
                            </div>
                        </div>
                    </div>    
                </Container>
            </div>
        </div>
    )
}

export default Navbar;