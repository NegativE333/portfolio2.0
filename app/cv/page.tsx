'use client';

import { useEffect, useState } from "react";

const ViewCV = () => {
    const [domLoaded, setDomLoaded] = useState(false);

    useEffect(() => {
        setDomLoaded(true);
      }, []);
      
    return(
        <>
        {domLoaded && (
            <div className="h-[100vh]">
                <iframe className="pt-14 w-[100%] h-[100%]" src="https://drive.google.com/file/d/1XWeqlzzET6EZ7pXxUnaAzvv_-4TKJOhD/preview"></iframe>
            </div>
        )} 
        </>
    )
}

export default ViewCV;
