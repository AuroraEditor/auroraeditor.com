import React from "react";
import { Link } from "react-router-dom";
import "../../../Assets/aurora/styles/Profile/aurora-profile-nav.css"
import '../../../Assets/aurora/styles/aurora-nav.css';

function ProfileNavHeader() {
    return (
        <nav id="auroranav" className="auroranav auroranav-scrim css-sticky auroranav-sticking" data-sticky role="navigation">
            <div className="auroranav-wrapper">
                <div className="auroranav-background" />
                <div className="auroranav-content">
                    <h2 className="auroranav-title">Aurora ID</h2>
                    <div className="auroranav-menu">
                        <a href="#auroranav-menustate" class="auroranav-menucta-anchor auroranav-menucta-anchor-open" id="auroranav-menustate-open">
                            <span class="auroranav-menucta-anchor-label">Open Menu</span>
                        </a>
                        <a href="/#" className="auroranav-menucta-anchor auroranav-menucta-anchor-close" id="auroranav-menustate-close">
                            <span className="auroranav-menucta-anchor-label">Close Menu</span>
                        </a>
                        <div className="auroranav-menu-tray auroranav-menu-tray-profile">
                            <ul className="auroranav-menu-items">
                                <li className="auroranav-menu-item">
                                    <Link to="/" className="auroranav-menu-link">Sign-In and Security</Link>
                                </li>
                                <li className="auroranav-menu-item">
                                    <Link to="/included" className="auroranav-menu-link">Personal Information</Link>
                                </li>
                                <li className="auroranav-menu-item">
                                    <Link to="/included" className="auroranav-menu-link">Payment Methods</Link>
                                </li>
                                <li className="auroranav-menu-item">
                                    <Link to="/included" className="auroranav-menu-link">Privacy</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="auroranav-actions auroranav-actions-center">
                            <div className="auroranav-action auroranav-action-menucta auroranav-action-menucta-profile" aria-hidden="true">
                                <label for="auroranav-menustate" className="auroranav-menucta">
                                    <span className="auroranav-menucta-chevron"></span>
                                </label>
                            </div>
                            <div className="auroranav-action auroranav-action-button">
                                <div className="button-multi-container">
                                    <a href="/#" className="auroranav-button button button-compact button-pill button-multi icon icon-chevrondown" id="button-multi-1" aria-expanded="false">Sign Out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default ProfileNavHeader;
