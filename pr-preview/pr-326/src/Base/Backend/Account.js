import SecuredAxios from "../Utils/SecuredAxios"
import * as Constants from "../Backend/Constants"

export function profileData(data) {
    SecuredAxios
        .get(Constants.baseApiURL + Constants.account)
        .then((response) => {
            data(response.data)
        })
        .catch((error) => {
            console.log(error)
        });
}