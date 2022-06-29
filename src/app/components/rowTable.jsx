import React from 'react';
import { BookmarkStar, BookmarkStarFill} from 'react-bootstrap-icons'

const RowTable = () => {
    return ( <>
        <td className="">
              <div className="flex flex-wrap items-center justify-center m-1">
                <img className="w-[60px] h-[60px] rounded-full" src="https://www.w3schools.com/images/picture.jpg"/>
                <div className="flex flex-col ml-3 ">
                  <span className="text-lg">BTC</span>
                  <span className="text-xs">Bitcoin</span>
                </div>
              </div>
            </td>
            <td className="">
              <div className="flex flex-col ml-3 ">
                <span className="text-lg">$10000</span>
                <span className="text-xs">1D</span>
              </div>
            </td>
            <td className="">
              <div className="flex flex-col ml-3">
                <span className="text-xs">+0.91 1H</span>
                <span className="text-xs">1D</span>
                <span className="text-xs">7D</span>
                <span className="text-xs">1D</span>
                <span className="text-xs">1D</span>
              </div>
            </td>
            <td className="">
              <div className="flex items-center justify-center ">
                <button className="flex items-center justify-center w-14 h-14
                 bg-white rounded hover:bg-[#f4f7fd] hover:shadow-xl hover:border-2
                  hover:border-black transform hover:scale-110 transition duration-200">
                  <BookmarkStar className="text-zinc-300" size={24}/>
                </button>
              </div>
            </td>
      </>
    );
}
 
export default RowTable;