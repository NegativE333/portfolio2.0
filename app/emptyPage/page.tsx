'use client';

import { useRouter } from "next/navigation";


const EmptyPage = () => {

    const router = useRouter();
    return(
        <div className="lg:h-[95vh] pt-16 flex flex-col justify-center items-center gap-4">
            <div className="text-center">
                <h1 className="text-3xl font-semibold">This page is under Development.</h1>
                <p className="mt-1">
                    You can go back to the home page to explore other content of my portfolio.
                </p>
            </div>
            <div>
                <button 
                    className="p-1 ring-2 ring-zinc-900 rounded-md hover:bg-black hover:text-white hover:ring-white"
                    onClick={() => router.push('/')}
                >
                    Go Back
                </button>
            </div>
        </div>
    )
}

export default EmptyPage;