import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const RegLog = () => {

    const [errors, setErrors] = useState({});
    const [enterError, setEnterError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        /*const isValid = validate();
        if (!isValid) return;

        try {
            await logIn(data);

            history.push(
                history.location.state
                    ? history.location.state.from.pathname
                    : "/"
            );
        } catch (error) {
            setEnterError(error.message);
        }*/
    };

    const isValid = Object.keys(errors).length === 0;

    return ( 
        <div className="flex flex-col items-center
        sus:h-[calc(100vh-130px)] sam:h-[calc(100vh-140px)] scm:h-[calc(100vh-150px)] 
        sxm:h-[calc(100vh-150px)] sm:h-[calc(100vh-100px)]
        bg-gradient-to-tr from-[#fffeff] to-[#e2f3fd]
        rounded-lg shadow-m">
            <form className="h-full flex flex-col justify-center items-center max-w-sm 
            border-2 border-black px-3
            w-full" 
            onSubmit={handleSubmit}>
                <div class="mb-4">
                <label class="block float-left pl-2 text-zinc-500 text-sm font-bold mb-1" for="username">
                    E-mail
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-zinc-500 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                    <span class="text-red-500 text-xs italic">Please choose a password.</span>
                </div>

                <div class="mb-6">
                <label class="block text-zinc-500 text-sm font-bold mb-2" for="password">
                    Password
                </label>
                <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-zinc-500 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                    <span class="text-red-500 text-xs">Please choose a password.</span>
                </div>
                <button
                className="rounded-lg w-full text-zinc-500 py-2 px-3 bg-gradient-to-tr from-[#EAECF4] to-[#E6E7FD] hover:from-[#dbdde8] hover:to-[#cbcce8]"
                 type="submit"
                disabled={!isValid || enterError}
                >
                Register
                </button>
            </form>
        </div>
     );
}
 
export default RegLog;