import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


const UserPanel = () => {
    return (
        <div className="sus:h-[calc(100vh-130px)] 
            sam:h-[calc(100vh-140px)] scm:h-[calc(100vh-150px)]
            sxm:h-[calc(100vh-150px)] sm:h-[calc(100vh-100px)]
            rounded-lg border-2 border-lime-500
            bg-gradient-to-tr from-[#fffeff] to-[#e2f3fd]">
            <div className="m-1 flex justify-between items-center">
            <Link className="bg-black p-1 rounded-lg text-white h-8" to="/logout">
                    Log Out
            </Link>
            <img src="https://avatars.dicebear.com/api/avataaars/ehf1e.svg" 
            className="rounded-full w-10 h-10"/>
            </div>
            <div className="flex mx-1 h-36 rounded-lg bg-gradient-to-tr from-[#ffefc6] to-[#ffd2df]">

            </div>
            <div className="flex mx-1 mt-1 h-36 rounded-lg bg-gradient-to-tr from-[#ffd2df] to-[#ffefc6]">

            </div>
        </div>
    );
}
 
export default UserPanel;