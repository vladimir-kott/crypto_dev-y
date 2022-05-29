import React from "react"
import { HouseFill } from 'react-bootstrap-icons'

const NavPanel = () => {
    return (
        <div className="flex flex-col pt-5 space-y-5">
            <button className='bg-[#FFFFF8] rounded w-10 h-10 text-center'>
                <HouseFill />
            </button>
            <button className='bg-[#FFFFF8] rounded w-10 h-10 text-center'>
                <HouseFill />
            </button>
            <button className='bg-[#FFFFF8] rounded w-10 h-10 text-center'>
                <HouseFill />
            </button>
        </div> 
     );
}
 
export default NavPanel