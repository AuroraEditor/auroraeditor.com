import { React } from "react";
import { Link } from "react-router-dom";
import "../../../Assets/aurora/styles/Auth/aurora-login.css"
import * as Auth from "../../Backend/Auth"

function Login() {
    return (
        <div className="auth-form mt-3">
            <div className="auth-form-header p-0">
                <h1 className="gradient-text">Sign in to Aurora Editor</h1>
            </div>
            <div className="auth-form-body mt-3">
                <input type="text" placeholder="Email or username" name="login" id="login_field" className="form-textbox js-login-field" autocapitalize="off" autocorrect="off" autocomplete="username" autofocus="autofocus" />
                <div className="position-relative">
                    <input type="password" placeholder="Password" name="password" id="password_field" className="form-textbox js-password-field" autocomplete="current-password" />
                    <input type="submit" name="commit" value="Sign in" className="btn btn-primary btn-block js-sign-in-button" onClick={Auth.loginUser} />
                </div>
            </div>
            <div class="separator" />
            <Link to="forgot-password">
                <p className="login-forget-password">
                    Forgot Aurora ID or password?
                </p>
            </Link>
        </div>
    )
}

export default Login;