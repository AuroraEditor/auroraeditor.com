import React from "react";
import "../../../Assets/aurora/styles/Profile/aurora-profile.css"
import ProfileCards from "./Profile-Cards";

function Profile() {
    return (
        <div className="layout">
            <div className="layout-nav">
                <div className="side-nav">
                    <div className="account-info">
                        <div className="account-info-image">
                            <div className="account-image-div">
                                <img className="image image-cropped image-circle account-image" alt="Profile" src="https://avatars.githubusercontent.com/u/63672227" />
                            </div>
                        </div>
                        <div class="account-info-name" title="Jane Doe">Jane Doe</div>
                        <div class="account-info-email" title="email@example.com"><span class="formatted-account-name"><span class="text">jane@example.com</span></span></div>
                    </div>
                    <nav aria-label="Side Navigation">
                        <ul class="side-nav-list">
                            <li class="side-nav-item side-nav-item--current">
                                <a aria-current="page" class="side-nav-link" href="/account/manage/section/security">Sign-In and Security</a>
                            </li>
                            <li class="side-nav-item">
                                <a class="side-nav-link" href="/account/manage/section/information">Personal Information</a>
                            </li>
                            <li class="side-nav-item">
                                <a class="side-nav-link" href="/account/manage/section/payment">Payment Methods</a>
                            </li>
                            <li class="side-nav-item">
                                <a class="side-nav-link" href="/account/manage/section/privacy">Privacy</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="layout-section">
                <div>
                    <div className="page">
                        <header className="page-header">
                            <h1 className="page-title">Sign-In and Security</h1>
                            <div class="page-description">Manage settings related to signing in to your account, account security, as well as how to recover your data when you’re having trouble signing in.</div>
                        </header>
                        <ProfileCards/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;