import "../../../Assets/aurora/styles/Auth/aurora-login.css"
import { VerifyAccount } from "../../Backend/Auth";

function Login() {

    // Handles verification of account
    VerifyAccount()

    return (
        <div className="auth-form mt-3">
            <div className="auth-form-header p-0">
                <h1 className="gradient-text">Account Verifiction</h1>
            </div>
            <p id="verification-text" className="text-center"></p>
            <input type="submit" id="verification-btn" name="commit" value="" className="btn btn-primary btn-block js-sign-in-button" />
        </div>
    )
}

export default Login;
