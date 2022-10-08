import React from "react";
import '../../../Assets/aurora/styles/aurora-nav.css';

function ProfileNavHeader() {
    return (
        <nav id="auroranav" className="auroranav auroranav-scrim css-sticky auroranav-sticking" data-sticky role="navigation">
            <div className="auroranav-wrapper">
                <div className="auroranav-background"></div>
                <div className="auroranav-content">
                    <h2 className="auroranav-title">Aurora ID</h2>

                    <div className="auroranav-menu">
                        <div className="auroranav-actions auroranav-actions-center">
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
