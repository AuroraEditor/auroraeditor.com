import { useState } from "react"
import "../../../Assets/aurora/styles/Auth/aurora-register.css"
import * as Auth from "../../Backend/Auth"
import Avatar from "../../../Assets/aurora/images/blank_avatar.webp"
import Dialog from '@mui/material/Dialog';

function Register() {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    const [email, setEmail] = useState("");

    return (
        <div>
            <div className="flow-body no-horizontal-scrollbar clearfix">
                <div className="intro text-centered">
                    <h1 className="gradient-text">Create Your Aurora ID</h1>
                    <div className="intro-text">One account to access everything Aurora Editor</div>
                </div>
                <img alt="" src={Avatar} id="blank_avatar" hidden/>
                <div className="flow-section account-info-section">
                    <div className="container-xs centered">
                        <div className="form-table">
                            <div className="form-cell">
                                <div className="form-sidebyside-textboxes row">
                                    <div className="column large-6 medium-6 small-6">
                                        <div className="pop-wrapper field-pop-wrapper">
                                            <div className="field-wrapper padding">
                                                <input type="text" placeholder="First name" name="firstName" id="first_name_field" className="form-textbox" autocapitalize="off" autocorrect="off" autocomplete="given-name" autofocus="autofocus" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="register-column large-6 medium-6 small-6">
                                        <div className="pop-wrapper field-pop-wrapper">
                                            <div className="field-wrapper padding">
                                                <input type="text" placeholder="Last name" name="lastName" id="last_name_field" className="form-textbox" autocapitalize="off" autocorrect="off" autocomplete="family-name" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flow-section">
                    <div className="container-xs centered">
                        <div className="row">
                            <div className="register-column large-12">
                                <div className="pop-wrapper field-pop-wrapper">
                                    <div className="field-wrapper position-relative">
                                        <div className="email-input-wrapper email-input">
                                            <input type="email" placeholder="email@example.com" name="email" id="email_field" className="form-textbox" autocapitalize="off" autocorrect="off" autocomplete="email" />
                                        </div>
                                        <div id="aidCaption" className="tk-body-reduced field-caption aid-caption">
                                            This will be your new Aurora&nbsp;ID.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="register-column large-12">
                                <div className="pop-wrapper field-pop-wrapper">
                                    <div className="field-wrapper">
                                        <input type="text" placeholder="Username" name="username" id="username_field" className="form-textbox" autocapitalize="off" autocorrect="off" autocomplete="username" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="register-column large-12">
                                <div className="pop-wrapper field-pop-wrapper">
                                    <div className="field-wrapper">
                                        <input type="password" placeholder="Password" name="password" id="password_field" className="form-textbox" autocapitalize="off" autocorrect="off" autocomplete="password" />
                                    </div>
                                </div>
                                <div className="pop-wrapper field-pop-wrapper">
                                    <div className="field-wrapper">
                                        <input type="password" placeholder="Confirm password" name="confirm_password_field" id="confirm_password_field" className="form-textbox" autocapitalize="off" autocorrect="off" autocomplete="password" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flow-section">
                    <div className="container-xs centered updates-section">
                        <div className="form-element">
                            <input type="checkbox" id="news" name="news" className="form-choice form-choice-checkbox" can-value="aeUpdates" />
                            <label className="form-label" for="news">
                                <span className="form-choice-indicator" />
                                Announcements <small className="label-small tk-caption">Receive Aurora Editor emails and communications including announcements, marketing, recommendations, and updates about Aurora Editor products, extensions and software.</small>
                            </label>
                        </div>
                        <div className="form-element">
                            <input type="checkbox" id="terms" name="terms" className="form-choice form-choice-checkbox" can-value="aeTerms" />
                            <label className="form-label" for="terms">
                                <span className="form-choice-indicator" />
                                Terms of Service <small className="label-small tk-caption">When signing up for an Aurora Editor account you agree to our terms of service.</small>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="label-small text-centered centered tk-caption field-caption details privacy-wrapper">
                    <div className="privacy-icon" />
                    Your Aurora ID information is used to allow you to sign in securely and access your data. Aurora records certain data for security, support and reporting purposes. If you agreed to receiving announcements, Aurora may use the provided Aurora ID information to send you marketing emails, communications and extension updates.
                    <a href="https://support.apple.com/HT208650">See how your data is managed.</a>
                </div>
            </div>

            <div className="idms-step-footer">
                <div className="toolbar-wrapper toolbar-footer">
                    <div className="button-group flow-controls">
                        <div className="primary-button-group">
                            <button tabindex="0" type="button" className="button button-primary last nav-action pull-right weight-medium" onClick={() => Auth.registerUser(setOpen, setEmail)}>
                                <div className="overflow-text">
                                    Continue
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
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

export default Register;
