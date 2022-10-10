import axios from "axios";
import * as Constants from "../Backend/Constants"

export function loginUser() {
    axios
        .post(Constants.baseApiURL + Constants.login, {
            email: document.getElementById("login_field").value,
            password: document.getElementById("password_field").value
        })
        .then((response) => {
            console.log("Logged in successfully")
        })
        .catch((error) => {
            if (error.response.status === 401) {
                console.log(error.response.status)
                document.getElementById("login_error").hidden = false
            } 
        });
}

export function registerUser() {
    const password = document.getElementById("password_field").value
    const confirmPassword = document.getElementById("confirm_password_field").value
    const termsAgreement = document.getElementById("terms").checked

    if (password === confirmPassword && termsAgreement === true) {
        axios
        .post(Constants.baseApiURL + Constants.register, {
            firstName: document.getElementById("first_name_field").value,
            lastName: document.getElementById("last_name_field").value,
            email: document.getElementById("email_field").value,
            username: document.getElementById("username_field").value,
            password: document.getElementById("password_field").value
        })
        .then((response) => {
            console.log(response)
        });
    } else if (document.getElementById("terms").value === false) {
        console.log("Please agree to our terms and conditions")
    } else if (password !== confirmPassword) {
        console.log("Passwords don't match")
    }
}