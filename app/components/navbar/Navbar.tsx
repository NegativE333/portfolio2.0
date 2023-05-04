import Container from "../Container";
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';

const Navbar = () => {
    return(
        <div className="fixed w-full bg-zinc-800 text-white z-20 shadow-sm">
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center gap-3 md:gap-0 font-semibold ">
                        <div className="flex-1 text-2xl lg:text-start text-center">
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