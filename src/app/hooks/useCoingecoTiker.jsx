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

const CoingecoTikerContext = React.createContext();

export const useCoingecoTiker= () => {
    return useContext(CoingecoTikerContext);
};

const CoingecoTikerProvider = ({ children }) => {

    const [trending, setTrending] = useState();
    const [global, setGlobal] = useState();
    const [defi, setDefi] = useState();
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

    async function getData() {
        try {
            const trending = axios.get('https://api.coingecko.com/api/v3/search/trending');
            const global = axios.get('https://api.coingecko.com/api/v3/global');
            const defi = axios.get('https://api.coingecko.com/api/v3/global/decentralized_finance_defi');
            await axios.all([
                trending, global, defi
            ])
            .then(
                axios.spread((...responses) => {
                    const responseTrending = responses[0]
                    const responseGlobal = responses[1]
                    const responesDefi = responses[2]
                    /*console.log('responseTrending', responseTrending)
                    console.log('responseGlobal', responseGlobal)
                    console.log('responesDefi', responesDefi)*/
                    setTrending(responseTrending)
                    setGlobal(responseGlobal)
                    setDefi(responesDefi)
                 })
            ).catch(error => {
                errorCatcher(error);
            });
        } catch (error) {
            errorCatcher(error);
        } finally {
            setLoading(false);
        }
    }

    function errorCatcher(error) {
        const { message } = error
        setError(message);
    }

    useEffect(() => {
        /*if (localStorageService.getAccessToken()) {
            getUserData();
        } else {
            setLoading(false);
        }*/
        getData()

        
        //console.log(currentList)
    }, []);

    return (
        <CoingecoTikerContext.Provider
            value={{ trending, global, defi}}
        >
            {!isLoading ? children : <Preloader/>}
        </CoingecoTikerContext.Provider>
    );
}

CoingecoTikerProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default CoingecoTikerProvider;