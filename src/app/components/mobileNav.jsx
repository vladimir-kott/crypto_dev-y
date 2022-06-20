import React from "react";
import { HouseFill, StarFill, SunFill } from 'react-bootstrap-icons'
import { useNavigate } from "react-router-dom";

const MobileNav = () => {

    const navigate = useNavigate();
    const handleHome = async (e) => {
        e.preventDefault();
        try {
            navigate("/");
        } catch (error) {
            console.log('router error')
        }
    };

    const handleUser = async (e) => {
        e.preventDefault();
        try {
            navigate("/auth");
        } catch (error) {
            console.log('router error')
        }
    };

    return ( 
        <div className="w-full sxm:block sm:hidden border-2 border-black">
            <div className="flex flex-row">
                <button className='flex items-center justify-center text-center h-[60px] w-1/3 bg-white'>
                    <SunFill className="text-zinc-300" size={24}/>
                </button>
                <button className='flex items-center justify-center text-center h-[60px] w-1/3 bg-white'
                onClick={handleHome}>
                    <HouseFill className="text-zinc-300" size={30}/>
                </button>
                <button className='flex items-center justify-center text-center h-[60px] w-1/3 bg-white'
                onClick={handleUser}>
                    <StarFill className="text-zinc-300" size={24}/>
                </button>
            </div>
        </div>
     );
}
 
export default MobileNav;