import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import axios from "axios";
import userService from "../services/user.service";
import localStorageService, {
    setTokens
} from "../services/localStorage.service";
import { useNavigate } from "react-router-dom";

export const httpCoingecoCoinList = axios.create({
    baseURL: "https://api.coingecko.com/api/v3/coins/markets?",
    params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 50,
        page: 1,
        sparkline: false
        /*'vs_currency=usd&order=market_cap_desc&per_page=50&page=2&sparkline=false'*/
        /*key: process.env.REACT_APP_FIREBASE_KEY*/
    }
});
const CoingecoCoinListContext = React.createContext();

export const useCoingecoCoinList = () => {
    return useContext(CoingecoCoinListContext);
};

const CoingecoCoinListProvider = ({ children }) => {

    const [currentList, setList] = useState();
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();

    async function getListCoin() {
        try {
            const { coinsList } = await httpCoingecoCoinList.get().then(result => {
                return result.data
            }).catch(error => {
                errorCatcher(error);
            });
            setList(coinsList);
            console.log(coinsList)
        } catch (error) {
            errorCatcher(error);
        } finally {
            setLoading(false);
        }
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
        console.log('curr', currentList)
    }, []);

    return (
        <CoingecoCoinListContext.Provider
            value={{ currentList }}
        >
            {!isLoading ? children : "Loading..."}
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