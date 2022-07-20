import React, { useState, useEffect } from "react";
import RowTable from "./rowTable";
import SearchBar from "./searchBar"
import { useCoingecoCoinList } from "../hooks/useCoingecoCoinList";
import { useTheme } from "../hooks/useTheme";
//import { useCoingecoSearch } from "../hooks/useCoingecoSearch";

const Tab = () => {

    const {currentList} = useCoingecoCoinList()
    const {searchList} = useCoingecoCoinList()
    const {theme} = useTheme()


    return (
        <table className="table-fixed w-full text-zinc-500">
        <thead>
          <tr>
           <th colSpan="4" className="">
            <SearchBar/>
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {currentList&&searchList? (currentList.map((el) => {
              return (
              <tr key={el.id} className={`border-b-[3px] ${theme ? (`bg-[#e1f2f9] hover:bg-[#d8f0fa]`):
              (`bg-[#aebec5] hover:bg-[#94c6dd]`)}`}>
                {console.log(el)}
                <RowTable data={el}/>
              </tr>)
            })
          ):(
            searchList.map((el) => {
              return (
              <tr key={el.id} className={`border-b-[3px] ${theme ? (`bg-[#e1f2f9] hover:bg-[#d8f0fa]`):
              (`bg-[#aebec5] hover:bg-[#94c6dd]`)}`}>
                {console.log(el)}
                <RowTable data={el}/>
              </tr>)
            })
          )}
        </tbody>
      </table>
    );
}
 
export default Tab;