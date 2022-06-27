import React, { useEffect, useState } from "react";
import { HouseFill, StarFill, SunFill } from 'react-bootstrap-icons'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const NavPanel = () => {
    const navigate = useNavigate();
    const { currentUser } = useAuth();
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
            currentUser ? navigate("/user") : navigate("/auth");
        } catch (error) {
            console.log('router error')
        }
    };

    return (
        <div className="flex flex-col items-center pt-14 space-y-8">
            <button className='flex items-center justify-center
             bg-[#FFFFF8] rounded w-14 h-14 text-center
              hover:bg-[#f4f7fd] hover:shadow-xl hover:border-2
               hover:border-black transform hover:scale-110
                transition duration-200'
                onClick={handleHome}>
                <HouseFill className="text-zinc-300" size={24}/>
            </button>
            <button className='flex items-center justify-center
             bg-[#FFFFF8] rounded w-14 h-14 text-center 
             hover:bg-[#f4f7fd] hover:shadow-xl hover:border-2 
             hover:border-black transform hover:scale-110 
             transition duration-200'
             onClick={handleUser}>
                <StarFill className="text-zinc-300" size={24}/>
            </button>
            <button className='flex items-center justify-center bg-[#FFFFF8] rounded w-14 h-14 text-center hover:bg-[#f4f7fd] hover:shadow-xl hover:border-2 hover:border-black transform hover:scale-110 transition duration-200'>
                <SunFill className="text-zinc-300" size={24}/>
            </button>
        </div> 
     );
}
 
export default NavPanel