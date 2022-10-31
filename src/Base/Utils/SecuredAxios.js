import axios from 'axios';
import * as Constants from "../Backend/Constants"

export default axios.create({
    baseURL: Constants.baseApiURL,
    headers: {
        Authorization: `Bearer ${window.sessionStorage.getItem("accessToken")}`,
    }
});