import { Link, useLocation } from "react-router-dom";
import '../../../Assets/aurora/styles/aurora-nav.css';
import { getOS } from "../../Utils/DeviceDetection";

function MarketplaceNavHeader() {

    const { pathname } = useLocation();
    const platform = getOS()

    var launchAuroraEditor = function() {
        window.location.replace("auroraeditor://marketplace");
    }

    // TODO: Add a fallback url to download the editor
    var openAuroraEditor = function() {
        launchAuroraEditor();
      };

    return (
        <nav id="auroranav" className="auroranav auroranav-scrim css-sticky auroranav-sticking" data-sticky role="navigation">
            <div className="auroranav-wrapper">
                <div className="auroranav-background"></div>
                <div className="auroranav-content">
                    <h2 className="auroranav-title">
                        {
                            pathname === "/marketplace" || pathname === "/marketplace/:extension-id" ? <Link to="/">Marketplace</Link> : null
                        }
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
                                <li className="auroranav-menu-item">
                                    <Link to="/marketplace" className="auroranav-menu-link">About</Link>
                                </li>
                                <li className="auroranav-menu-item">
                                    <Link to="/marketplace/explore" className="auroranav-menu-link">Explore</Link>
                                </li>
                                <li className="auroranav-menu-item">
                                    <Link to="/marketplace/build" className="auroranav-menu-link">Build Extensions</Link>
                                </li>
                                { /*
                                TODO: Maybe make this a profile icon and add it behind the dowwnload button
                                <li className="auroranav-menu-item">
                                    <Link to="/account" className="auroranav-menu-link">Account</Link>
                                </li>
                                */ }
                            </ul>
                        </div>
                        <div className="auroranav-actions auroranav-actions-center">
                            <div className="auroranav-action auroranav-action-menucta" aria-hidden="true">
                                <label for="auroranav-menustate" className="auroranav-menucta">
                                    <span className="auroranav-menucta-chevron"></span>
                                </label>
                            </div>
                            {platform === "macos" ? <div className="auroranav-action auroranav-action-button">
                                <div className="button-multi-container">
                                    <button className="auroranav-button button button-compact button-pill button-multi" id="button-multi-1" onClick={openAuroraEditor}>Open in app</button>
                                </div>
                            </div> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default MarketplaceNavHeader;
