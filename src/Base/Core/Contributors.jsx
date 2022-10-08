import React from "react";
import "../../Assets/aurora/styles/aurora-style.css";

function Contributors() {
    return (
        <section className="section section-hero">
            <div className="section-content">
                <div className="row">
                    <div className="column large-centered large-10 text-center">
                        <h1 class="typography-headline gradient-text">Contributors</h1>
                    </div>
                </div>
            </div>
            <div class="section contributors-generator">
                <div className="section-content">
                    <div className="row">
                        <div className="column large-centered large-10 text-center">
                            <p className="text-centred">LOADING CONTRIBUTORS,<br />Please wait...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contributors;