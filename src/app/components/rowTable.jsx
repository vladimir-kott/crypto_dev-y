import React from 'react';
import { BookmarkStar, BookmarkStarFill} from 'react-bootstrap-icons'

const RowTable = () => {
    return ( <>
        <td className="border-2 border-black">
              <div className="flex flex-wrap items-center justify-center m-1">
                <img className="w-[60px] h-[60px] rounded-full" src="https://www.w3schools.com/images/picture.jpg"/>
                <div className="flex flex-col ml-3 ">
                  <span className="text-lg">BTC</span>
                  <span className="text-xs">Bitcoin</span>
                </div>
              </div>
            </td>
            <td className="border-2 border-black">
              <div className="flex flex-col ml-3 ">
                <span className="text-lg">$10000</span>
                <span className="text-xs">1D</span>
              </div>
            </td>
            <td className="border-2 border-black">
              <div className="flex flex-col ml-3 bg-green-300 rounded-lg">
                <span className="text-xs">+0.91 1H</span>
                <span className="text-xs">1D</span>
                <span className="text-xs">7D</span>
                <span className="text-xs">1D</span>
                <span className="text-xs">1D</span>
              </div>
            </td>
            <td className="border-2 border-black">
              <button className="flex items-center justify-center w-14 h-14 bg-slate-400 rounded-lg">
                <BookmarkStar className="text-zinc-300" size={24}/>
              </button>
            </td>
      </>
    );
}
 
export default RowTable;