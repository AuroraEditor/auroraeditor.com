import "../../Assets/aurora/styles/aurora-style.css";

function Terms() {
    return (
        <article>
            <section className="section section-hero margin-top">
                <div className="section-content divider-bottom">
                    <div className="row">
                        <div className="row">
                            <div className="column large-offset-1 large-9 medium-10 small-offset-0 small-12">
                                <h1 className="typography-headline">Agreements and Open Source Licenses for Aurora Editor</h1>
                                <p className="typography-intro">When using Aurora Editor you agree to the following licenses below, from Aurora Company and all third-party packages.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-pla">
                <div className="section-content">
                    <div className="row">
                        <div className="column large-centered large-10 small-12">
                            <h2>Open source license agreements</h2>
                            <p className="category-intro">The following open source packages we used, licenses are listed below.</p>

                            <figure className="router-icon-document margin-top"/>
                            <h3 className="typography-label"><span className="nowrap">Aurora Editor</span> License</h3>
                            <p>The following license applies to <span className="nowrap">Aurora Editor</span> Program.</p>
                            <p>
                                <a href="https://github.com/AuroraEditor/AuroraEditor/blob/main/LICENSE" className="inline-link more">View License</a>
                            </p>

                            <figure className="router-icon-document margin-top-small"></figure>
                            <h3 className="typography-label"><span className="nowrap">AEExtensionKit</span> License</h3>
                            <p>The following license applies to <span className="nowrap">AEExtensionKit</span> Package.</p>
                            <p>
                                <a href="https://github.com/AuroraEditor/AEExtensionKit" className="inline-link more">View License</a>
                            </p>

                            <figure className="router-icon-document margin-top-small"></figure>
                            <h3 className="typography-label"><span className="nowrap">SwiftTerm</span> License</h3>
                            <p>The following license applies to <span className="nowrap">SwiftTerm</span> Package.</p>
                            <p>
                                <a href="https://github.com/migueldeicaza/SwiftTerm" className="inline-link more">View License</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Terms;
