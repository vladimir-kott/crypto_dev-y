import React, {useState, useEffect} from "react";

const TickerComponent = () => {
    const [string, setString] = useState("");

    useEffect(() => {
        setString('Aliquam consequat varius consequat.')
    }, []);

    /*console.log(string)*/

    return (
    <div className="flex w-full shrink-0 items-center justify-center text-center shadow-md rounded-lg 
        sm:mb-5 sus:mb-1 sam:mb-2 scm:mb-2 'sxm:mb-3 p-2 bg-[#f9f8ff]
        text-zinc-500">
       <div className="overflow-hidden w-full">{/*hwrap*/}
         <div className="hmove">{/*hmove*/}
            <div className="hitem">{string}</div>
            <div className="hitem">Aliquam consequat varius consequat.</div>
            <div className="hitem">{string}</div>
            <div className="hitem">Pellentesque auctor molestie orci.</div>
         </div>
        </div>
    </div>
    );
}
 
export default TickerComponent;