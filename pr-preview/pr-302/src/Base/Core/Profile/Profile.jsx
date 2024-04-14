import { useState } from "react";
import "../../../Assets/aurora/styles/Profile/aurora-profile.css"
import ProfileCards from "./Profile-Cards";
import {profileData} from "../../Backend/Account"

function Profile() {

    const [data, setData] = useState([])

    profileData(setData)

    return (
        <div className="layout">
            <div className="layout-nav">
                <div className="side-nav">
                    <div className="account-info">
                        <div className="account-info-image">
                            <div className="account-image-div">
                                <img className="image image-cropped image-circle account-image" alt="Profile" src={data.profileImage} />
                            </div>
                        </div>
                        <div className="account-info-name" title="Jane Doe">{data.firstName} {data.lastName}</div>
                        <div className="account-info-email" title="email@example.com"><span className="formatted-account-name"><span className="text">{data.email}</span></span></div>
                    </div>
                    <nav aria-label="Side Navigation">
                        <ul className="side-nav-list">
                            <li className="side-nav-item side-nav-item--current">
                                <a aria-current="page" className="side-nav-link" href="/account/manage/section/security">Sign-In and Security</a>
                            </li>
                            <li className="side-nav-item">
                                <a className="side-nav-link" href="/account/manage/section/information">Personal Information</a>
                            </li>
                            <li className="side-nav-item">
                                <a className="side-nav-link" href="/account/manage/section/payment">Payment Methods</a>
                            </li>
                            <li className="side-nav-item">
                                <a className="side-nav-link" href="/account/manage/section/privacy">Privacy</a>
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
                            <div className="page-description">Manage settings related to signing in to your account, account security, as well as how to recover your data when you’re having trouble signing in.</div>
                        </header>
                        <ProfileCards accountData={data}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
