import React from 'react';
import { BookmarkStar, BookmarkStarFill} from 'react-bootstrap-icons'
import { useTheme } from '../hooks/useTheme';

const RowTable = ({data}) => {

    const {theme} = useTheme()

    return ( <>
            <td className="">
              <div className="flex flex-wrap items-center m-1">
                <img className="w-[50px] h-[50px] rounded-full" src={data.image}/>
                <div className="flex flex-col ml-3 ">
                  <span className="text-lg">{data.name}</span>
                  <span className="text-xs">{data.id}</span>
                </div>
              </div>
            </td>
            <td className="">
              <div className="flex justify-start flex-col ml-3 ">
                <span className="text-lg">$ {data.current_price}</span>
                <span className="text-xs">1D</span>
              </div>
            </td>
            <td className="">
              <div className="flex justify-center flex-col ml-3">
                <span className="text-xs">+0.91 1H</span>
                <span className="text-xs">1D</span>
                <span className="text-xs">7D</span>
                <span className="text-xs">1D</span>
                <span className="text-xs">1D</span>
              </div>
            </td>
            <td className="">
              <div className="flex items-center justify-center">
                <button className={`flex items-center justify-center w-14 h-14
                rounded hover:shadow-xl hover:border-2
                  hover:border-black transform hover:scale-110 transition duration-200
                  ${theme ? (`bg-white hover:bg-[#f4f7fd]`):(`bg-[#acacaa] hover:bg-[#8f8f8d]`)}`}>
                  <BookmarkStar className="text-zinc-300" size={24}/>
                </button>
              </div>
            </td>
      </>
    );
}
 
export default RowTable;