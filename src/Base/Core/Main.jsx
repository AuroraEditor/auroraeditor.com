import React from "react";
import "../../Assets/aurora/styles/aurora-style.css"
import "../../Assets/aurora/styles/aurora-dark-mode.css"
import "../../Assets/aurora/styles/aurora-overview.css"
import Aurora from "../../Assets/aurora/images/aurora-editor-main.png";

function Main() {
    return (
        <main id="main" className="main" role="main">
            <section className="section section-hero">
                <div className="section-content">
                    <div className="row">
                        <div className="column large-centered large-10 text-center">
                            <h1 className="typography-headline">Aurora Editor</h1>
                            <p className="typography-intro"><span className="nowrap">Aurora Editor</span> is a IDE built by the community, for the community, and written entirely in Swift for the best native performance and feel for macOS.</p>
                        </div>
                    </div>
                </div>
                <figure className="device-hero device-macbook-pro-5th-gen-16-silver center">
                    <picture className="device-screen">
                        <source media="(max-width:735px)" srcSet={Aurora} />
                        <source media="(max-width:1068px)" srcSet={Aurora} />
                        <img src={Aurora} width="100%" alt="" aria-label="" />
                    </picture>
                </figure>
            </section>

            <section className="section section-lighter">
                <div className="section-content">
                    <div className="row">
                        <div className="column large-offset-1 large-10 small-offset-0">
                            <h2>Lightweight and Fast</h2>
                            <p><span className="nowrap">Aurora Editor</span> lets you build your projects as fast and smoothly as possible. It's not a replacement for Xcode but a mere extensible editor built on its fundamentals.</p>
                            <p>Build your projects in your favorite programming languages with an editor that feels familiar to you, easy to navigate and extensible with no limits.</p>
                        </div>
                        <div className="column large-offset-1 large-10 small-offset-0">
                            <picture className="screen-only">
                                <source media="(max-width:1068px)" srcSet={Aurora} />
                                <img src={Aurora} width="100%" alt="" aria-label="" />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-multiplatform">
                <div className="section-content">
                    <div className="row">
                        <div className="column large-offset-1 large-10 small-offset-0">
                            <h2>Integrated Version Control</h2>
                            <p><span className="nowrap">Aurora Editor</span> has built-in support for Git, no need to install a third-party extension.</p>
                            <p>With support for multiple Git parties like <span className="nowrap">GitHub, Bitbucket and Gitlab</span> commiting and pushing your code without leaving the editor has never been easier.</p>
                        </div>
                        <div className="column large-offset-1 large-10 small-offset-0">
                            <picture className="screen-only">
                                <source media="(max-width:1068px)" srcSet={Aurora} />
                                <img src={Aurora} width="100%" alt="" aria-label="" />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-coding">
                <div className="section-content">
                    <div className="row">
                        <div className="column large-offset-1 large-10 small-offset-0">
                            <h2>Extensible and Customizable</h2>
                            <p>Want even more features? Install extensions to add new languages, themes and debuggers. Extensions are run in separate processes, ensuring that they won't slow down the editor.</p>
                        </div>
                        <div className="column large-offset-1 large-10 small-offset-0">
                            <picture className="screen-only">
                                <source media="(max-width:1068px)" srcSet={Aurora} />
                                <img src={Aurora} width="100%" alt="" aria-label="" />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main;
