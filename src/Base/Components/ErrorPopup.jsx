import React from "react";
import "../../Assets/aurora/styles/Components/error-popup.css"

function ErrorPopup() {
    function hideError() {
        document.getElementById("login_error").hidden = true
    }

    return (
        <div className="pop-container error signin-error" id="login_error" hidden onClick={hideError}>
            <div className="error pop-bottom tk-subbody-headline" onClick={hideError}>
                <p className="fat" id="errorMessage">Your Aurora ID or password was incorrect.</p>
                <a class="si-link ax-outline thin tk-subbody" href="https://iforgot.apple.com/password/verify/appleid">
                    Forgot <span class="no-wrap sk-icon sk-icon-after sk-icon-external">password?</span><span class="sr-only">Opens in a new window.</span>
                </a>
            </div>
        </div>
    )
}

export default ErrorPopup;