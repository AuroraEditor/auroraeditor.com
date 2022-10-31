import { useState } from "react";
import { Link } from "react-router-dom";
import "../../../Assets/aurora/styles/Auth/aurora-login.css"
import * as Auth from "../../Backend/Auth"
import ErrorPopup from "../../Components/ErrorPopup"
import Dialog from '@mui/material/Dialog';

function Login() {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const [email, setEmail] = useState("");

    return (
        <div className="auth-form mt-3">
            <div className="auth-form-header p-0">
                <h1 className="gradient-text">Sign in to Aurora Editor</h1>
            </div>
            <div className="auth-form-body mt-3">
                <input type="text" placeholder="Email or username" name="login" id="login_field" className="form-textbox js-login-field" autocapitalize="off" autocorrect="off" autocomplete="username" autofocus="autofocus" />
                <div className="position-relative">
                    <input type="password" placeholder="Password" name="password" id="password_field" className="form-textbox js-password-field" autocomplete="current-password" />
                    <ErrorPopup />
                    <input type="submit" name="commit" value="Sign in" className="btn btn-primary btn-block js-sign-in-button" onClick={() => Auth.loginUser(setOpen, setEmail)} />
                </div>
            </div>
            <div className="separator" />
            <Link to="forgot-password">
                <p className="login-forget-password">
                    Forgot Aurora ID or password?
                </p>
            </Link>
            <Dialog
                onClose={handleClose}
                open={open}>
                <div className="id-step-content">
                    <div class="verify-account">
                        <div class="context-body clearfix">
                            <div class="text">
                                <div class="centered text-centered verify-splash-wrapper">
                                    <i class="modal-icon icon_mail_new icon-splash icon-verify"></i>
                                </div>
                                <h2 class="context-subtitle tk-subsection-headline text-centered verify-title not-mobile" tabindex="-1">Verify your email address to create your new Aurora ID.
                                </h2>
                                <div class="content-description centered  text-centered">
                                    An email with a verification link has been sent to <span class="email user-data weight-medium">{email}</span>.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}

export default Login;
