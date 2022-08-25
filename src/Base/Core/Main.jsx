import React from "react";
import "../../Assets/aurora/styles/aurora-style.css"
import "../../Assets/aurora/styles/aurora-overview.css"

function Main() {
    return (
        <main id="main" className="main bg-gradient" role="main">
            <section className="section section-hero">
                <div className="section-content">
                    <div className="row">
                        <div className="column large-centered large-10 text-center">
                            <h1 className="typography-headline">Aurora Editor</h1>
                            <p className="typography-intro"><span className="nowrap">Aurora Editor</span> is a IDE built by the community, for the community, and written in Swift for the best native performance and feel for macOS.</p>
                        </div>
                    </div>
                </div>
                <figure className="device-hero device-macbook-pro-5th-gen-16-silver center">
                    <picture className="device-screen">
                        <source media="(max-width:735px)" srcSet={require("../../Assets/aurora/images/aurora-editor-main.png")} />
                        <source media="(max-width:1068px)" srcSet={require("../../Assets/aurora/images/aurora-editor-main.png")} />
                        <img src={require("../../Assets/aurora/images/aurora-editor-main.png")} width="100%" alt="" aria-label="" />
                    </picture>
                </figure>
            </section>

            <section className="section section-lighter">
                <div className="section-content">
                    <div className="row">
                        <div className="column large-offset-1 large-10 small-offset-0">
                            <h2>Lighter. Faster.</h2>
                            <p><span className="nowrap">Xcode 14</span> lets you get started faster than ever with a binary that’s 30% smaller than before. Now with downloadable simulator runtimes for watchOS and tvOS, Xcode makes the latest platforms available as you need&nbsp;them.</p>
                            <p>Projects build up to 25% faster thanks to improved parallelism in all build and link phases.</p>
                            <p>And the new <span className="nowrap">Build Timeline</span> helps identify unexpectedly long-running build tasks and bottlenecks in your build.</p>
                        </div>
                        <div className="column large-offset-1 large-10 small-offset-0">
                            <picture className="screen-only">
                                <source media="(max-width:1068px)" srcSet={require("../../Assets/aurora/images/aurora-editor-main.png")} />
                                <img src={require("../../Assets/aurora/images/aurora-editor-main.png")} width="100%" alt="" aria-label="" />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-multiplatform">
                <div className="section-content">
                    <div className="row">
                        <div className="column large-offset-1 large-10 small-offset-0">
                            <h2>Designed for multiplatform</h2>
                            <p>The new multiplatform target creates a single SwiftUI interface for use across iOS, iPadOS, macOS, and tvOS. Your code is easier to maintain, and ready to be customized to take advantage of each platform’s unique capabilities.</p>
                            <p>With the redesigned <span className="nowrap">App Icon</span> experience in <span className="nowrap">Asset Catalogs,</span> you can provide a single icon size for all platforms and Xcode will generate all the rest.</p>
                        </div>
                        <div className="column large-offset-1 large-10 small-offset-0">
                            <picture className="screen-only">
                                <source media="(max-width:1068px)" srcSet={require("../../Assets/aurora/images/aurora-editor-main.png")} />
                                <img src={require("../../Assets/aurora/images/aurora-editor-main.png")} width="100%" alt="" aria-label="" />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-coding">
                <div className="section-content">
                    <div className="row">
                        <div className="column large-offset-1 large-10 small-offset-0">
                            <h2>Productive coding</h2>
                            <p>Be more productive than ever with many language and editing improvements. Smarter code completion and additional dynamic snippets will get you the code you want more quickly. While you scroll, code structure (like function declarations) stays visible so you always know where you are. And regular expressions in Swift are integrated with syntax highlighting, refactoring operations, and more.</p>
                        </div>
                        <div className="column large-offset-1 large-10 small-offset-0">
                            <picture className="screen-only">
                                <source media="(max-width:1068px)" srcSet={require("../../Assets/aurora/images/aurora-editor-main.png")} />
                                <img src={require("../../Assets/aurora/images/aurora-editor-main.png")} width="100%" alt="" aria-label="" />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main;