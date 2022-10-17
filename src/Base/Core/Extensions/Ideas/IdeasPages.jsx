import React from "react";
import "../../../../Assets/aurora/styles/Extensions/ideas-page.css"

function IdeasPage() {
    return (
        <div className="offset-top container idea-search">
            <h2>Search for Ideas</h2>
            <div className="autocomplete">
                <div className="input-wrapper">
                    <div className="input-field">
                        <input id="idea-input" placeholder="Search for Ideas" autoComplete="off" className="form-textbox" type="text"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IdeasPage;