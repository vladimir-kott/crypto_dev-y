import React from "react";
import Table from "../components/table"
import Ticker from "../components/ticker";
import Tab from "../components/tab";

const Main = () => {
    return (
        <>
            <div className="over overflow-y-scroll 
            sus:h-[calc(100vh-130px)] sam:h-[calc(100vh-140px)] scm:h-[calc(100vh-150px)] sxm:h-[calc(100vh-150px)] sm:h-[calc(100vh-100px)]
            rounded-lg border-2 border-lime-500
            bg-gradient-to-tr from-[#fffeff] to-[#e2f3fd]">
                <Tab/>
            </div>
        </>
    );
}
 
export default Main;