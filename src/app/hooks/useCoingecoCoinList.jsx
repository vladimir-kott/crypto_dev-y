import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import axios from "axios";
import userService from "../services/user.service";
import localStorageService, {
    setTokens
} from "../services/localStorage.service";
import { useNavigate } from "react-router-dom";
import Preloader from "../components/preloader"

export const httpCoingecoCoinList = axios.create({
    baseURL: "https://api.coingecko.com/api/v3/coins/markets?",
    params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 100,
        page: null,
        sparkline: false
    }
});
const CoingecoCoinListContext = React.createContext();

export const useCoingecoCoinList = () => {
    return useContext(CoingecoCoinListContext);
};

const CoingecoCoinListProvider = ({ children }) => {

    const [currentList, setList] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [pageIndex, setPageIndex] = useState(1)
    const [search, setSearch] = useState('')
    const [searchList, setSearchList] = useState('')
    const [favoriteCoin, setFavoriteCoin] = useState()
    const navigate = useNavigate();

    async function getListCoin() {
        try {
            await httpCoingecoCoinList.get(httpCoingecoCoinList.baseURL, {params: {
                page: pageIndex
            }}).then(result => {
                let gluedList = [ ...currentList, ...result.data ]
                setList(gluedList)
                setPageIndex(pageIndex + 1)
            }).catch(error => {
                errorCatcher(error);
            });
        } catch (error) {
            errorCatcher(error);
        } finally {
            setLoading(false);
        }
    }

    /*async function getSeachCoin() {
        try {
            await axios.get(`https://api.coingecko.com/api/v3/search?query=${search}`).then(result => {
                //console.log(result.data.coins.slice(0, 4))
                setSearchList(result.data.coins.slice(0, 4))
            }).catch(error => {
                errorCatcher(error);
            });
        } catch (error) {
            errorCatcher(error);
        } finally {
            //setLoading(false);
        }
    }*/

    function sort (id) {
        //console.log('handlClick', currentList, id)
        let delIndex = ''
        let favoriteItem = currentList.filter((value, index, arr)=>{
            if(value.id === id) {
                delIndex = index  
            }
            return value.id === id;
        })
        //let newCurrentList = currentList.splice(delIndex, 1)
        delete currentList[delIndex]
        setList(currentList)
        console.log('newCurrentList', currentList)
        console.log(favoriteItem)
        console.log('delIndex', delIndex)
    }

    function errorCatcher(error) {
        const { message } = error/*.response.data*/;
        setError(message);
    }

    useEffect(() => {
        /*if (localStorageService.getAccessToken()) {
            getUserData();
        } else {
            setLoading(false);
        }*/
        getListCoin();
        //console.log(currentList)
    }, []);

    return (
        <CoingecoCoinListContext.Provider
            value={{ searchList, currentList, pageIndex, setSearch, setPageIndex, getListCoin, sort /*getSeachCoin*/ }}
        >
            {!isLoading ? children : <Preloader/>}
        </CoingecoCoinListContext.Provider>
    );
}

CoingecoCoinListProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default CoingecoCoinListProvider;