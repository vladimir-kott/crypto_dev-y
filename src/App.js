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
import CoingecoTikertProvider from "./app/hooks/useCoingecoTiker"
/*import ThemeProvider from "./app/hooks/useTheme"*/
import { useTheme } from "./app/hooks/useTheme";

function App() {

  const {theme} = useTheme()

  return (<div>
    
    <CoingecoCoinListProvider>
    <AuthProvider>
    <div className="App max-h-screen">
      <div className={`flex flex-col items-center h-screen ${theme? (`bg-gradient-to-tr from-[#EAECF4] to-[#E6E7FD]`):(`bg-gradient-to-tr from-[#58595c] to-[#595a76]`)}`}> 
        <div className="box-border flex sam:flex-col sus:flex-col scm:flex-col sxm:flex-col sm:flex-row justify-center items-center gap-x-[5px] w-full max-w-[1920px] border-2 border-black h-full">
        <div className="text-center leading-loose text-sm
        sm:py-[20px] sus:py-[2px] sam:py-[7px] scm:py-[7px] sxm:py-[7px]
        sm:pl-[20px] sus:pl-[2px] sam:pl-[7px] scm:pl-[7px] sxm:pl-[7px]
        br-black w-full h-full"> {/*border-2 border-rose-400*/}
        <CoingecoTikertProvider>
          <TikerComponent/>
        </CoingecoTikertProvider>
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
