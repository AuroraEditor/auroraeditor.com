import React from "react";
import "../../Assets/aurora/styles/aurora-style.css";

function Contributors() {
    return (
        <article>
            <section className="section section-hero">
                <div className="section-content divider-bottom">
                    <div className="row">
                        <div className="column large-9 small-offset-0">
                            <h1 class="typography-headline gradient-text">Contributors</h1>
                            <aside class="section contributors-generator">
                                <center>LOADING CONTRIBUTORS,<br />Please wait...</center>
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Contributors;