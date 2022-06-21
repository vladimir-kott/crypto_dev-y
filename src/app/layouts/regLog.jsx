import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RegistrationForm from "../components/registrationForm";
import LoginForm from "../components/loginForm";
import { useParams } from "react-router-dom";


const RegLog = () => {
    const { type } = useParams();
    const [formType, setFormType] = useState(
        type === "register" ? type : "login"
    );

    const toggleFormType = (params) => {
        setFormType((prevState) =>
            prevState === "register" ? "login" : "register"
        );
    };

    return ( 
        <div className="flex flex-col items-center justify-center
        sus:h-[calc(100vh-130px)] sam:h-[calc(100vh-140px)] scm:h-[calc(100vh-150px)] 
        sxm:h-[calc(100vh-150px)] sm:h-[calc(100vh-100px)]
        bg-gradient-to-tr from-[#fffeff] to-[#e2f3fd]
        rounded-lg shadow-m">
            {formType === "register" ? (<>
                <RegistrationForm />
                <p className="text-zinc-500 mt-5">
                    Already have account? 
                    <a className="ml-2 p-1 rounded-sm bg-black text-white" role="button" onClick={toggleFormType}>
                        Sign In
                    </a>
                </p>
            </>) : (<>
            <LoginForm />
            <p className="text-zinc-500 mt-5">
                Dont have account?
                <a className="ml-2 p-1 rounded-sm bg-black text-white" role="button" onClick={toggleFormType}>
                    Sign Up
                </a>
            </p>
        </>)}
        </div>
     );
}
 
export default RegLog;