import React from "react";
import RowTable from "./rowTable";
import SearchBar from "./searchBar"

const Tab = () => {

  
    return (
        <table class="table-auto w-full border-2 border-sky-500 text-zinc-500">
        <thead>
          <tr>
           <th colSpan="4" className="border-2 border-rose-800" >
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