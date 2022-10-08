import React from "react";
import "../../../Assets/aurora/styles/Auth/aurora-login.css"

function Login() {
    return (
        <div className="auth-form mt-3">
            <div className="auth-form-header p-0">
                <h1 className="gradient-text">Sign in to Aurora Editor</h1>
            </div>
            <div className="auth-form-body mt-3">
                <form data-turbo="false" action="/session" accept-charset="UTF-8" method="post">
                    <input type="text" placeholder="Email or username" name="login" id="login_field" className="form-control form-textbox js-login-field" autocapitalize="off" autocorrect="off" autocomplete="username" autofocus="autofocus" />
                    <div className="position-relative">
                        <input type="password" placeholder="Password" name="password" id="password" className="form-control form-control form-textbox js-password-field" autocomplete="current-password" />
                        <input type="text" name="required_field_7710" hidden="hidden" className="form-control" />
                        <input type="submit" name="commit" value="Sign in" className="btn btn-primary btn-block js-sign-in-button" data-disable-with="Signing in…" data-signin-label="Sign in" data-sso-label="Sign in with your identity provider" development="false" />
                    </div>
                </form>
            </div>
            <div class="separator " />
            <p className="login-forget-password" href="/password_reset"><a>Forgot Aurora ID or password?</a></p>
        </div>
    )
}

export default Login;