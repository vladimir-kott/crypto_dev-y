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
        <div className="flex flex-col items-center
        sus:h-[calc(100vh-130px)] sam:h-[calc(100vh-140px)] scm:h-[calc(100vh-150px)] 
        sxm:h-[calc(100vh-150px)] sm:h-[calc(100vh-100px)]
        bg-gradient-to-tr from-[#fffeff] to-[#e2f3fd]
        rounded-lg shadow-m">
            {formType === "register" ? (<>
                
                <RegistrationForm />
                <p>
                    Already have account?
                    <a role="button" onClick={toggleFormType}>
                        Sign In
                    </a>
                </p>
            </>) : (<>
            <LoginForm />
            <p>
                Dont have account?
                <a role="button" onClick={toggleFormType}>
                    Sign Up
                </a>
            </p>
        </>)}
        </div>
     );
}
 
export default RegLog;