import React, { useState, useEffect, useRef } from "react";
/*import Table from "../components/table"*/
/*import Ticker from "../components/ticker";*/
import Tab from "../components/tab";
import { useCoingecoCoinList } from "../hooks/useCoingecoCoinList";
import { useTheme } from "../hooks/useTheme";

const Main = () => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const reference = useRef(null);
    const {getListCoin} = useCoingecoCoinList()
    const [dataLoadingIndicator, setDataLoadingIndicator] = useState(false)

    const {theme} = useTheme()

    const handleScroll = () => {
        const scrollTop = reference.current.scrollTop // height of top scrolled table 
        const scrollview = reference.current.clientHeight // height viewport
        const scrollTopTab = reference.current.children[0].clientHeight // height of table
        //console.log('scroll', scrollTop)
        //.log('viewport', scrollview)
       // console.log('client Height', scrollTopTab)
       const totalHaight = Math.round(scrollTop + scrollview)
       const mainHeight = scrollTopTab - 1
       //console.log('totalHaight', totalHaight)
       // console.log('mainheight', mainHeight)
       if (totalHaight >= mainHeight){
        //console.log('yes')
        getListCoin()
       }
    };

    useEffect(() => {
       // window.addEventListener('scroll', handleScroll/*, { passive: true }*/);

     //   return () => {
    //        console.log('useEffect')
    //        window.removeEventListener('scroll', handleScroll);
    //    };
    }, []);

    return (
        <>
            <div className={`over overflow-y-scroll 
            sus:h-[calc(100vh-130px)] sam:h-[calc(100vh-140px)] scm:h-[calc(100vh-150px)] sxm:h-[calc(100vh-150px)] sm:h-[calc(100vh-100px)]
            rounded-lg border-2
            ${theme ? (`bg-gradient-to-tr from-[#fffeff] to-[#e2f3fd]`):
            (`bg-gradient-to-tr from-[#cbbacb] to-[#80a9c1]`)}`}
            onScroll={handleScroll} ref={reference}>
                <Tab />
            </div>
        </>
    );
}
 
export default Main;