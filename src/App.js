import React from "react";
import { Route, Routes, Navigate, useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Main from './app/layouts/main';
import NavPanel from './app/components/navPanel';
import TikerComponent from './app/components/ticker';
import MobileNav from './app/components/mobileNav';
import RegLog from './app/layouts/regLog'
import AuthProvider from "./app/hooks/useAuth";
import ProtectedUserRoute from "./app/components/protectedUserRoute";
import UserPanel from "./app/components/userPanel";
import LogOut from "./app/components/logOut";
import ProtectedAuth from "./app/components/protectedAuth";
import CoingecoCoinListProvider from "./app/hooks/useCoingecoCoinList";

function App() {
  return (<div>
    <CoingecoCoinListProvider>
    <AuthProvider>
    <div className="App max-h-screen">
      <div className='flex flex-col items-center h-screen bg-gradient-to-tr from-[#EAECF4] to-[#E6E7FD] border-2 border-black'>
        <div className="box-border flex sam:flex-col sus:flex-col scm:flex-col sxm:flex-col sm:flex-row justify-center items-center gap-x-[5px] w-full max-w-[1920px] border-2 border-black h-full">
        <div className="border-2 border-rose-400 text-center leading-loose text-sm sm:p-[20px] sus:p-[2px] sam:p-[7px] scm:p-[7px] sxm:p-[7px] br-black w-full h-full">
         <TikerComponent/>
          <Routes>
            <Route path="user" element={
              <ProtectedUserRoute>
                <UserPanel />
              </ProtectedUserRoute>} 
            />
            <Route path="auth" element={
              <ProtectedAuth>
                <RegLog />
              </ProtectedAuth>
            }/>
            <Route path="logout" element={<LogOut/>} />
            <Route index element={<Main />}/>
            <Route path="crypto_dev-y" element={<Navigate to="/" replace />} />
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
          </Routes>
        </div>
        <div className="sus:hidden sam:hidden scm:hidden sxm:hidden sm:block text-center leading-loose text-sm p-[20px] rounded-[10px] br-black w-34 h-full">{/*border-2 border-black*/}
            <NavPanel/>
        </div>
          <MobileNav/>
        </div>
      </div>
    </div>
    </AuthProvider>
    </CoingecoCoinListProvider>

    <ToastContainer />
    </div>
  );
}

export default App;
