import React, { useState, useEffect } from "react";
import RowTable from "./rowTable";
import SearchBar from "./searchBar"
import { useCoingecoCoinList } from "../hooks/useCoingecoCoinList";

const Tab = () => {

    const {currentList} = useCoingecoCoinList()

    

    //console.log('list in table', currentList)

    return (
        <table className="table-auto w-full text-zinc-500">
        <thead>
          <tr>
           <th colSpan="4" className="">
            <SearchBar/>
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {currentList? (
            currentList.map((el) => {
              return (
              <tr key={el.id} className="bg-[#e1f2f9] hover:bg-[#d8f0fa] border-b-[3px]">
                <RowTable data={el}/>
              </tr>)
            })
          ):(console.log('err'))}
        </tbody>
      </table>
    );
}
 
export default Tab;