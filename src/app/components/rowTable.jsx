import React from 'react';
import { BookmarkStar, BookmarkStarFill} from 'react-bootstrap-icons'
import { useCoingecoCoinList } from '../hooks/useCoingecoCoinList';
import { useTheme } from '../hooks/useTheme';

const RowTable = ({data}) => {

    const {theme} = useTheme()
    const {sort} = useCoingecoCoinList()

    const numberSign = (value) => {
      value = Number(value)
      let result = true
      if (Math.sign(value) === 1 || Math.sign(value) === 0){
        result = false
      }
      return result
    }

    const handlClick = () => {
      console.log('press btn', data)
      sort(data.id)
    }

    return ( <>
            <td className="">{/*border-2 border-rose-400*/}
              <div className="flex flex-wrap justify-center items-center m-1">{/*flex flex-wrap items-center*/}
              <div className="flex flex-col items-center ml-3 ">
                <img className="w-[50px] h-[50px] rounded-full" src={data.image}/>
                <span className="text-lg">{data.name}</span>
                <span className="text-xs">{data.id}</span>
                </div>
              </div>
            </td>
            <td className="">
              <div className="flex justify-start flex-col ml-3 ">{/*flex justify-start flex-col*/}
                <span className={`text-lg ${numberSign(data.price_change_percentage_24h) ? `text-red-400`:
                `text-green-400`}`}>$ {data.current_price}</span>
                <span className="text-xs">1D</span>
              </div>
            </td>
            <td className="">
              <div className="flex justify-center flex-col ml-3">
                <span className="text-xs text-yellow-400">ATH {data.ath.toFixed(2)} $</span>
                <span className={`text-xs ${numberSign(data.ath_change_percentage)  ? `text-red-400`:
                `text-green-400`}`}>ATH change {data.ath_change_percentage.toFixed(1)} %</span>

                <span className={`text-xs ${numberSign(data.price_change_24h) ? `text-red-400`:
                `text-green-400`}`}>24H price ch {data.price_change_24h.toFixed(1)} $</span>
                
                <span className={`text-xs ${numberSign(data.market_cap_change_percentage_24h) ? `text-red-400`:
                `text-green-400`}`}>Market cap ch {data.market_cap_change_percentage_24h.toFixed(1)} %</span>
              </div>
            </td>
            <td className="">
              <div className="flex items-center justify-center">
                <button className={`flex items-center justify-center w-14 h-14
                rounded hover:shadow-xl hover:border-2
                  hover:border-black transform hover:scale-110 transition duration-200
                  ${theme ? (`bg-white hover:bg-[#f4f7fd]`):(`bg-[#acacaa] hover:bg-[#8f8f8d]`)}`}
                  onClick={handlClick}>
                  <BookmarkStar className="text-zinc-300" size={24}/>
                </button>
              </div>
            </td>
      </>
    );
}
 
export default RowTable;