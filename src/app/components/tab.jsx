import React from "react";
import RowTable from "./rowTable";
import SearchBar from "./searchBar"
import { useCoingecoCoinList } from "../hooks/useCoingecoCoinList";

const Tab = () => {

    const {currentList} = useCoingecoCoinList()

    console.log('ppi', currentList)

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
          <tr className="bg-[#e1f2f9] hover:bg-[#d8f0fa] border-b-[3px]">
            <RowTable/>
          </tr>
          <tr className="bg-[#e1f2f9] hover:bg-[#d8f0fa] border-b-[3px]">
            <RowTable/>
          </tr>
          <tr className="bg-[#e1f2f9] hover:bg-[#d8f0fa] border-b-[3px]">
            <RowTable/>
          </tr>
          <tr className="bg-[#e1f2f9] hover:bg-[#d8f0fa] border-b-[3px]">
            <RowTable/>
          </tr>
          <tr className="bg-[#e1f2f9] hover:bg-[#d8f0fa] border-b-[3px]">
            <RowTable/>
          </tr>
          <tr className="bg-[#e1f2f9] hover:bg-[#d8f0fa] border-b-[3px]">
            <RowTable/>
          </tr>
          <tr className="bg-[#e1f2f9] hover:bg-[#d8f0fa] border-b-[3px]">
            <RowTable/>
          </tr>
          <tr className="bg-[#e1f2f9] hover:bg-[#d8f0fa] border-b-[3px]">
            <RowTable/>
          </tr>
          <tr className="bg-[#e1f2f9] hover:bg-[#d8f0fa] border-b-[3px]">
            <RowTable/>
          </tr>
          <tr className="bg-[#e1f2f9] hover:bg-[#d8f0fa] border-b-[3px]">
            <RowTable/>
          </tr>
          <tr className="bg-[#e1f2f9] hover:bg-[#d8f0fa] border-b-[3px]">
            <RowTable/>
          </tr>
          <tr className="bg-[#e1f2f9] hover:bg-[#d8f0fa] border-b-[3px]">
            <RowTable/>
          </tr>
          <tr className="bg-[#e1f2f9] hover:bg-[#d8f0fa] border-b-[3px]">
            <RowTable/>
          </tr>
          <tr className="bg-[#e1f2f9] hover:bg-[#d8f0fa] border-b-[3px]">
            <RowTable/>
          </tr>
          <tr className="bg-[#e1f2f9] hover:bg-[#d8f0fa] border-b-[3px]">
            <RowTable/>
          </tr>
          <tr className="bg-[#e1f2f9] hover:bg-[#d8f0fa] border-b-[3px]">
            <RowTable/>
          </tr>
        </tbody>
      </table>
    );
}
 
export default Tab;