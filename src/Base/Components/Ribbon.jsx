import React from "react";

function Ribbon() {
    return (
        <div id="notice-ribbon" className="ribbon">
            <div className="ribbon-content-wrapper">
                <div className="ribbon-content row">
                    <div className="column large-12 large-centered">
                        <p>Currently in development, <a href="https://github.com/orgs/AuroraEditor/projects/1/views/2" id="suggest-link" className="ribbon-link more">check out the roadmap</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ribbon;