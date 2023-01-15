import axios from "axios";
import { getLocalStorage } from "./config";
import { DOMAIN_BE, LOCALSTORAGE_USER, TOKEN } from "./constant";

export const http = axios.create({
    baseURL: DOMAIN_BE,
    timeout: 6000
})

http.interceptors.request.use( config => {
    const tokenUser = getLocalStorage(LOCALSTORAGE_USER)

    return {
        ...config,
        headers: {
            TokenCybersoft: TOKEN,
            Authorization: `${tokenUser ? `Bearer ${tokenUser.accessToken}`:''}`
        }
    }
})