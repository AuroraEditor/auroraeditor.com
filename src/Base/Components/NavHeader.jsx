import '../../Assets/aurora/styles/aurora-nav.css';

import { Link } from "react-router-dom";

function NavHeader() {
    return (
        <nav id="auroranav" className="auroranav auroranav-scrim css-sticky auroranav-sticking" data-sticky role="navigation">
            <div className="auroranav-wrapper">
                <div className="auroranav-background"></div>
                <div className="auroranav-content">
                    <h2 className="auroranav-title">
                        <Link to="/">Aurora Editor</Link>
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
                                    <Link to="/" className="auroranav-menu-link">Aurora Editor</Link>
                                </li>
                                {/* <li className="auroranav-menu-item">
                                    <Link to="/included" className="auroranav-menu-link">What’s included</Link>
                                </li> */}
                                {/* <li className="auroranav-menu-item">
                                    <Link to="/marketplace" className="auroranav-menu-link">Marketplace</Link>
                                </li> */}
                                {/*
                                <li className="auroranav-menu-item">
                                    <Link to="/account" className="auroranav-menu-link">Account</Link>
                                </li>
                                */}
                                <li className="auroranav-menu-item">
                                    <a href="https://github.com/AuroraEditor/AuroraEditor" className="auroranav-menu-link">GitHub</a>
                                </li>
                            </ul>
                        </div>
                        <div className="auroranav-actions auroranav-actions-center">
                            <div className="auroranav-action auroranav-action-menucta" aria-hidden="true">
                                <label for="auroranav-menustate" className="auroranav-menucta">
                                    <span className="auroranav-menucta-chevron"></span>
                                </label>
                            </div>
                            <div className="auroranav-action auroranav-action-button">
                                <div className="button-multi-container">
                                    <a href="/#" className="auroranav-button button button-compact button-pill button-multi icon icon-chevrondown" id="button-multi-1" aria-expanded="false">Download</a>
                                    <div className="button-multi-content button-multi-content-right button-multi-content-slide ANToggle" role="menu">
                                        <a href="https://nightly.link/AuroraEditor/AuroraEditor/workflows/build-editor/main/AuroraEditor.zip" className="button-multi-option" role="menuitem" tabindex="0">Release <span className="badge">Coming Soon</span></a>
                                        <a href="https://nightly.link/AuroraEditor/AuroraEditor/workflows/build-editor/beta/AuroraEditor.zip" className="button-multi-option" role="menuitem" tabindex="1">Beta <span className="badge">Coming Soon</span></a>
                                        <a href="https://nightly.link/AuroraEditor/AuroraEditor/workflows/build-editor/development/AuroraEditor.zip" className="button-multi-option" role="menuitem" tabindex="2">Nightly</a>
                                        <a href="https://github.com/AuroraEditor/AuroraEditor/archive/refs/heads/main.zip" className="button-multi-option" role="menuitem" tabindex="3">Source Code</a>
                                    </div>
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
