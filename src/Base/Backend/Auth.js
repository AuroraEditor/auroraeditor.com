import axios from "axios";
import { useLocation } from "react-router-dom";
import * as Constants from "../Backend/Constants"

export function loginUser(setIsOpen, email) {
    axios
        .post(Constants.baseApiURL + Constants.login, {
            email: document.getElementById("login_field").value,
            password: document.getElementById("password_field").value
        })
        .then(() => {
            console.log("Logged in successfully")
        })
        .catch((error) => {
            if (error.response.status === 401) {
                console.log(error.response.status)
                document.getElementById("login_error").hidden = false
            } else if (error.response.data.errorCode === "email_is_not_verified") {
                setIsOpen(true)
                email(document.getElementById("login_field").value)
                sendVerificationEmail(document.getElementById("login_field").value)
            }
        });
}

export function registerUser(setIsOpen, email) {
    const password = document.getElementById("password_field").value
    const confirmPassword = document.getElementById("confirm_password_field").value
    const termsAgreement = document.getElementById("terms").checked

    let config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    if (password === confirmPassword && termsAgreement === true) {
        axios
            .post(Constants.baseApiURL + Constants.register, {
                firstName: document.getElementById("first_name_field").value,
                lastName: document.getElementById("last_name_field").value,
                email: document.getElementById("email_field").value,
                username: document.getElementById("username_field").value,
                password: document.getElementById("password_field").value,
                profileImage: {
                    data: getBase64Image(document.getElementById('blank_avatar')),
                    contentType: "image/webp"
                }
            }, config)
            .then((response) => {
                setIsOpen(true)
                email(document.getElementById("email_field").value)
            }).catch((error) => {
                console.log(error.response)
            });
    } else if (document.getElementById("terms").value === false) {
        console.log("Please agree to our terms and conditions")
    } else if (password !== confirmPassword) {
        console.log("Passwords don't match")
    }
}

// Fetches the email verification token from the url then sends it
// to the back-end to verify the users account
//
// Note: Don't change the name of this function since it's a
// React function and not a normal function, and for some
// odd reason this function is running itself twice need
// to check into the reason for that cause.
export function VerifyAccount() {
    const search = useLocation().search;
    const token = new URLSearchParams(search).get("token");

    let config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    axios
        .post(Constants.baseApiURL + Constants.verifyAccount, {
            token: token
        }, config)
        .then(() => {
            document.getElementById("verification-btn").value = "Sign In"
            document.getElementById("verification-text").innerHTML = "Your account has been verified successfully, you can now create and publish extensions."
        })
        .catch((error) => {
            document.getElementById("verification-btn").value = "Contact Support"
            document.getElementById("verification-text").innerHTML = "Failed to verify your Aurora ID, please try again. If the issue persists please contact support."
        });
}

export function sendVerificationEmail(email) {
    let config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    axios.post(Constants.baseApiURL + Constants.sendEmailVerification, {
        email: email
    }, config)
    .then(() => {
        console.log("Verification email sent!")
    })
    .catch((error) => {
        console.log(error)
    });
}

function getBase64Image(img) {
    var canvas = document.createElement("canvas");

    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/webp");
    return dataURL.replace("data:image/webp;base64,", "");
}