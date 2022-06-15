import React from "react";
import { HouseFill, StarFill, SunFill } from 'react-bootstrap-icons'

const MobileNav = () => {
    return ( 
        <div className="w-full sxm:block sm:hidden border-2 border-black">
            <div className="flex flex-row">
                <button className='flex items-center justify-center text-center h-[60px] w-1/3 bg-white'>
                    <SunFill className="text-zinc-300" size={24}/>
                </button>
                <button className='flex items-center justify-center text-center h-[60px] w-1/3 bg-white'>
                    <HouseFill className="text-zinc-300" size={30}/>
                </button>
                <button className='flex items-center justify-center text-center h-[60px] w-1/3 bg-white'>
                    <StarFill className="text-zinc-300" size={24}/>
                </button>
            </div>
        </div>
     );
}
 
export default MobileNav;