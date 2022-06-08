import React from "react";
import Table from "../components/table"
import Ticker from "../components/ticker";
import Tab from "../components/tab";

const Main = () => {
    return (
        <div className="flex flex-wrap m-3">{/*border-2 border-black*/}
            <Ticker/>
            <Tab/>
        </div>
    );
}
 
export default Main;