import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../components/registrationForm";


const RegLog = () => {

    return ( 
        <div className="flex flex-col items-center
        sus:h-[calc(100vh-130px)] sam:h-[calc(100vh-140px)] scm:h-[calc(100vh-150px)] 
        sxm:h-[calc(100vh-150px)] sm:h-[calc(100vh-100px)]
        bg-gradient-to-tr from-[#fffeff] to-[#e2f3fd]
        rounded-lg shadow-m">
            <RegistrationForm/>
        </div>
     );
}
 
export default RegLog;