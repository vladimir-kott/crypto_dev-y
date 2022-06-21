import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { validator } from "../utils/validator";

const LoginForm = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});
    const [enterError, setEnterError] = useState(null);

    const handleChange = (item) => {
        setData((prevState) => ({
            ...prevState,
            [item.target.name]: item.target.value
        }));
        validate()
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        }
    };

    /*useEffect(() => {
        validate();
    }, [data]);*/

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('reg ', data)
        const isValid = validate();
        if (!isValid) return;

        /*try {
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


    return ( <>
        <form className="h-full flex flex-col justify-center items-center max-w-sm px-3 w-full" 
            onSubmit={handleSubmit}>
            <p className="text-zinc-500 text-2xl font-bold float-left pl-2 mb-6">Login</p>
            <div className="mb-6 w-full">
                <label className="block float-left pl-2 text-zinc-500 text-sm font-bold mb-1" htmlFor="username">
                    E-mail
                </label>
                <input className={`shadow appearance-none border rounded w-full py-2 px-3 mb-0 text-zinc-500 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? "border-red-500":"border-purple-100"}`} 
                    id="email"
                    name="email" 
                    type="text"
                    value={data.name} 
                    placeholder="E-mail"
                    onChange={handleChange}/>
                    <span className="text-red-500 text-[10px] italic">{errors.email}</span>
            </div>
            <div className="mb-6 w-full">
                <label className="block float-left pl-2 text-zinc-500 text-sm font-bold mb-1" htmlFor="password">
                    Password
                </label>
                <input className={`shadow appearance-none border rounded w-full py-2 px-3 mb-0 text-zinc-500 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? "border-red-500":"border-purple-100"}`}
                id="password"
                name="password"
                type="password" 
                value={data.password}
                placeholder="********"
                onChange={handleChange}/>
                    <span className="text-red-500 text-[10px]">{errors.password}</span>
                </div>
            <button
            className={`rounded-lg w-full text-zinc-500 py-2 px-3 ${(!isValid || enterError) ? "bg-zinc-300":"bg-gradient-to-tr from-[#EAECF4] to-[#E6E7FD] hover:from-[#dbdde8] hover:to-[#cbcce8]"}`}
            type="submit"
            disabled={!isValid || enterError}
            >
            Sign in
            </button>
        </form>
        </>
    );
}
 
export default LoginForm;