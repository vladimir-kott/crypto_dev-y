import React, { useEffect, useState } from "react";
import { HouseFill, StarFill, SunFill, MoonFill } from 'react-bootstrap-icons'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useTheme } from "../hooks/useTheme";

const NavPanel = () => {
    const navigate = useNavigate();
    const { currentUser } = useAuth();
    const { ChangeTheme } = useTheme();
    const { theme } = useTheme();

    const handleHome = async (e) => {
        e.preventDefault();
        try {
            navigate("/");
        } catch (error) {
            console.log('router error')
        }
    };

    const handleClick = () => {
        ChangeTheme()
    } 

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
            <button className={`flex items-center justify-center rounded 
            w-14 h-14 text-center hover:bg-[#f4f7fd] hover:shadow-xl hover:border-2 hover:border-black
            transform hover:scale-110 transition duration-200 ${theme ? (`bg-[#FFFFF8] hover:bg-[#f4f7fd]`):
            (`bg-[#acacaa] hover:bg-[#8f8f8d]`)}`}
                onClick={handleHome}>
                <HouseFill className="text-zinc-300" size={24}/>
            </button>
            <button className={`flex items-center justify-center rounded 
            w-14 h-14 text-center hover:bg-[#f4f7fd] hover:shadow-xl hover:border-2 hover:border-black
            transform hover:scale-110 transition duration-200 ${theme ? (`bg-[#FFFFF8] hover:bg-[#f4f7fd]`):
            (`bg-[#acacaa] hover:bg-[#8f8f8d]`)}`}
             onClick={handleUser}>
                <StarFill className="text-zinc-300" size={24}/>
            </button>
            <button className={`flex items-center justify-center rounded 
            w-14 h-14 text-center hover:bg-[#f4f7fd] hover:shadow-xl hover:border-2 hover:border-black
            transform hover:scale-110 transition duration-200 ${theme ? (`bg-[#FFFFF8] hover:bg-[#f4f7fd]`):
            (`bg-[#acacaa] hover:bg-[#8f8f8d]`)}`}
            onClick={handleClick}>
                {theme ? (<SunFill className="text-zinc-300" size={24}/>):
                (<MoonFill className="text-zinc-300" size={24}/>)}
            </button>
        </div> 
     );
}
 
export default NavPanel