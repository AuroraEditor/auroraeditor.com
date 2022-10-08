import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../../../Assets/aurora/styles/aurora-nav.css';

function AuthNavHeader() {

    const { pathname } = useLocation();

    return (
        <nav id="auroranav" className="auroranav auroranav-scrim css-sticky auroranav-sticking" data-sticky role="navigation">
            <div className="auroranav-wrapper">
                <div className="auroranav-background"></div>
                <div className="auroranav-content">
                    <h2 className="auroranav-title">Aurora ID</h2>
                    <div className="auroranav-menu">
                        <a href="#auroranav-menustate" class="auroranav-menucta-anchor auroranav-menucta-anchor-open" id="auroranav-menustate-open">
                            <span class="auroranav-menucta-anchor-label">Open Menu</span>
                        </a>
                        <a href="/#" className="auroranav-menucta-anchor auroranav-menucta-anchor-close" id="auroranav-menustate-close">
                            <span className="auroranav-menucta-anchor-label">Close Menu</span>
                        </a>
                        <div className="auroranav-menu-tray">
                            <ul className="auroranav-menu-items">

                                <li className="auroranav-menu-item">
                                    <Link to="/" className="auroranav-menu-link">Home</Link>
                                </li>

                                {pathname === "/sign-in" ?
                                    <li className="auroranav-menu-item">
                                        <Link to="/sign-up" className="auroranav-menu-link">Create Aurora ID</Link>
                                    </li> : <li className="auroranav-menu-item">
                                        <Link to="/sign-in" className="auroranav-menu-link">Sign In</Link>
                                    </li>
                                }

                                <li className="auroranav-menu-item">
                                    <Link to="/included" className="auroranav-menu-link">FAQ</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default AuthNavHeader;
