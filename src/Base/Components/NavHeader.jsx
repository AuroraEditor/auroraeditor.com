import React from "react";
import '../../Assets/aurora/styles/aurora-nav.css';

function NavHeader() {
    return (
        <nav id="auroranav" className="auroranav auroranav-scrim css-sticky auroranav-sticking" data-sticky role="navigation">
            <div className="auroranav-wrapper">
                <div className="auroranav-background"></div>
                <div className="auroranav-content">
                    <h2 className="auroranav-title">
                        <a href="/">Aurora Editor</a>
                    </h2>

                    <div className="auroranav-menu">
                        <a href="#auroranav-menustate" className="auroranav-menucta-anchor auroranav-menucta-anchor-open" id="auroranav-menustate-open">
                            <span className="auroranav-menucta-anchor-label">Open Menu</span>
                        </a>
                        <a href="/#" className="auroranav-menucta-anchor auroranav-menucta-anchor-close" id="auroranav-menustate-close">
                            <span className="auroranav-menucta-anchor-label">Close Menu</span>
                        </a>
                        <div className="auroranav-menu-tray">
                            <ul className="auroranav-menu-items">
                                <li className="auroranav-menu-item">
                                    <a href="/" className="auroranav-menu-link current">Aurora Editor</a>
                                </li>
                                <li className="auroranav-menu-item">
                                    <a href="/included/" className="auroranav-menu-link">What’s included</a>
                                </li>
                                <li className="auroranav-menu-item">
                                    <a href="/resources/" className="auroranav-menu-link">Resources</a>
                                </li>
                            </ul>
                        </div>
                        <div className="auroranav-actions auroranav-actions-center">
                            <div className="auroranav-action auroranav-action-menucta" aria-hidden="true">
                                <label htmlFor="auroranav-menustate" className="auroranav-menucta">
                                    <span className="auroranav-menucta-chevron"></span>
                                </label>
                            </div>
                            <div className="auroranav-action auroranav-action-button" aria-disabled>
                                <div className="button-multi-container">
                                    <a href="/#" className="auroranav-button button button-compact button-pill button-multi" id="button-multi-1">Coming Soon</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavHeader;
