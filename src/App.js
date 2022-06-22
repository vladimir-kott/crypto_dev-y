import React from "react";
import { Route, Routes, Navigate, useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Main from './app/layouts/main';
import NavPanel from './app/components/navPanel';
import TikerComponent from './app/components/ticker';
import MobileNav from './app/components/mobileNav';
import RegLog from './app/layouts/regLog'
import AuthProvider from "./app/hooks/useAuth";

function App() {

  
  function App() {
    let element = useRoutes([
      {path: '/auth', element: <RegLog />},
      {path: '/crypto_dev-y', element: <Main />},
      {path: '/', element: <Main />}
    ]);
  
    return element;
  }



  return (<div>
    <AuthProvider>
    <div className="App max-h-screen">
      <div className='flex flex-col items-center h-screen bg-gradient-to-tr from-[#EAECF4] to-[#E6E7FD] border-2 border-black'>
        <div className="box-border flex sam:flex-col sus:flex-col scm:flex-col sxm:flex-col sm:flex-row justify-center items-center gap-x-[5px] w-full max-w-[1920px] border-2 border-black h-full">
        <div className="border-2 border-rose-400 text-center leading-loose text-sm sm:p-[20px] sus:p-[2px] sam:p-[7px] scm:p-[7px] sxm:p-[7px] br-black w-full h-full">
         <TikerComponent/>
          {App()}
        </div>
        <div className="sus:hidden sam:hidden scm:hidden sxm:hidden sm:block text-center leading-loose text-sm p-[20px] rounded-[10px] br-black w-34 h-full">{/*border-2 border-black*/}
            <NavPanel/>
        </div>
          <MobileNav/>
        </div>
      </div>
    </div>
    </AuthProvider>

    <ToastContainer />
    </div>
  );
}

export default App;
