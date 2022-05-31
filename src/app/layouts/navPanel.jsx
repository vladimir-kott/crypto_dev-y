import React from "react"
import { HouseFill, StarFill, SunFill } from 'react-bootstrap-icons'

const NavPanel = () => {
    return (
        <div className="flex flex-col items-center pt-14 space-y-8">
            <button className='flex items-center justify-center bg-[#FFFFF8] rounded w-14 h-14 text-center hover:bg-[#f4f7fd] hover:shadow-xl hover:border-2 hover:border-black transform hover:scale-110 transition duration-200'>
                <HouseFill className="text-zinc-300" size={24}/>
            </button>
            <button className='flex items-center justify-center bg-[#FFFFF8] rounded w-14 h-14 text-center hover:bg-[#f4f7fd] hover:shadow-xl hover:border-2 hover:border-black transform hover:scale-110 transition duration-200'>
                <StarFill className="text-zinc-300" size={24}/>
            </button>
            <button className='flex items-center justify-center bg-[#FFFFF8] rounded w-14 h-14 text-center hover:bg-[#f4f7fd] hover:shadow-xl hover:border-2 hover:border-black transform hover:scale-110 transition duration-200'>
                <SunFill className="text-zinc-300" size={24}/>
            </button>
        </div> 
     );
}
 
export default NavPanel