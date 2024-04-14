import SecuredAxios from "../../Utils/SecuredAxios"
import * as Constants from "../../Backend/Constants"

export function fetchExtensions() {
    SecuredAxios
        .get(Constants.extensions)
        .then((response) => {
            console.table(response.data)
        })
        .catch((error) => {
            if (error.response.status === 401) {
                console.log(error.response.status)
                document.getElementById("login_error").hidden = false
            }
        });
}