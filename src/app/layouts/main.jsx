import React from "react";
import Table from "../components/table"
import Ticker from "../components/ticker";
import Tab from "../components/tab";

const Main = () => {
    return (
            <>
                <Ticker/>
            <div className="overflow-y-scroll h-full">
                <Tab/>
            </div>
        </>
    );
}
 
export default Main;