import React, {useState, useEffect} from "react";
import { useCoingecoTiker } from "../hooks/useCoingecoTiker";
import { useTheme } from "../hooks/useTheme";

const TickerComponent = () => {

    const {theme} = useTheme()
 
    const [topTrending, setTopTrending] = useState("");
    const [btcMarketCap, setBtcMarketCap] = useState("");
    const [usdMarketCap, setUsdMarketCap] = useState("");
    const [defiTopCoin, setDefiTopCoin] = useState("");

    const {trending, global, defi} = useCoingecoTiker()

    useEffect(() => {
        setTopTrending('Top trending coin: ' + trending.data.coins[0].item.name)
        setBtcMarketCap('BTC market cap ~ ' + Math.round(global.data.data.total_market_cap.btc))
        setUsdMarketCap('USD market cap ~ ' + Math.round(global.data.data.total_market_cap.usd))
        setDefiTopCoin('Top DeFi coin: ' + defi.data.data.top_coin_name)
        //console.log(trending, global, defi)
    }, []);

    /*console.log(string)*/

    return (
    <div className={`flex w-full shrink-0 items-center justify-center text-center shadow-md rounded-lg 
        sm:mb-5 sus:mb-1 sam:mb-2 scm:mb-2 'sxm:mb-3 p-2 ${theme ? (`bg-[#f9f8ff] text-zinc-500`):
        (`bg-[#aca7c5] text-zinc-200`)}`}>
       <div className="overflow-hidden w-full">{/*hwrap*/}
         <div className="hmove">{/*hmove*/}
            <div className="hitem">{topTrending}</div>
            <div className="hitem">{btcMarketCap}</div>
            <div className="hitem">{defiTopCoin}</div>
            <div className="hitem">{usdMarketCap}</div>
         </div>
        </div>
    </div>
    );
}
 
export default TickerComponent;