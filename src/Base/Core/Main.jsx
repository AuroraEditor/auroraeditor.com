import React from "react";
import "../../Assets/aurora/styles/aurora-style.css"
import "../../Assets/aurora/styles/aurora-dark-mode.css"
import "../../Assets/aurora/styles/aurora-overview.css"
import Aurora from "../../Assets/aurora/images/light/aurora_editor_light.jpg";
import AuroraCommands from "../../Assets/aurora/images/light/aurora_editor_command_palette_light.jpg";
import AuroraSourceControl from "../../Assets/aurora/images/light/aurora_editor_source_control_light.jpg";
import AuroraExtensions from "../../Assets/aurora/images/light/aurora_editor_extensions_light.jpg";
import AuroraDark from "../../Assets/aurora/images/dark/aurora_editor.jpg";
import AuroraCommandsDark from "../../Assets/aurora/images/dark/aurora_editor_command_palette.jpg";
import AuroraSourceControlDark from "../../Assets/aurora/images/dark/aurora_editor_source_control.jpg";
import AuroraExtensionsDark from "../../Assets/aurora/images/dark/aurora_editor_extensions.jpg";

function Main() {
    return (
        <main id="main" className="main" role="main">
            <section className="section section-hero" id="part1" style={{  }}>
                <div className="section-content">
                    <div className="row"> 
                        <div className="column large-centered large-10 text-center">
                            <h1 className="typography-headline gradient-text">Aurora Editor</h1>
                            <p className="typography-intro"><span className="nowrap">Aurora Editor</span> is an IDE built by the community, for the community, and written entirely in Swift for the best native performance and feel for macOS.</p>
                        </div>
                    </div>
                </div>
                <figure className="device-hero device-macbook-pro-5th-gen-16-silver center">
                    <picture className="dark device-screen">
                        <source media="(max-width:735px)" srcSet={AuroraDark} />
                        <source media="(max-width:1068px)" srcSet={AuroraDark} />
                        <img src={AuroraDark} width="100%" alt="" aria-label="" />
                    </picture>

                    <picture className="light device-screen">
                        <source media="(max-width:735px)" srcSet={Aurora} />
                        <source media="(max-width:1068px)" srcSet={Aurora} />
                        <img src={Aurora} width="100%" alt="" aria-label="" />
                    </picture>
                </figure>
            </section>

            <section className="section section-lighter" style={{  }}>
                <div className="section-content">
                    <div className="row">
                        <div className="column large-offset-1 large-10 small-offset-0">
                            <h2 className="gradient-text">Lightweight and Fast</h2>
                            <p><span className="nowrap">Aurora Editor</span> lets you build your projects as fast and smoothly as possible. It's not a replacement for Xcode but a mere extensible editor built on its fundamentals.</p>
                            <p>Build your projects in your favorite programming languages with an editor that feels familiar to you, easy to navigate and extensible with no limits.</p>
                        </div>
                        <div className="column large-offset-1 large-10 small-offset-0">
                            <picture className="dark screen-only">
                                <source media="(max-width:1068px)" srcSet={AuroraCommandsDark} />
                                <img src={AuroraCommandsDark} width="100%" alt="" aria-label="" />
                            </picture>

                            <picture className="light screen-only">
                                <source media="(max-width:1068px)" srcSet={AuroraCommands} />
                                <img src={AuroraCommands} width="100%" alt="" aria-label="" />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-multiplatform">
                <div className="section-content">
                    <div className="row">
                        <div className="column large-offset-1 large-10 small-offset-0">
                            <h2 className="gradient-text">Integrated Version Control</h2>
                            <p><span className="nowrap">Aurora Editor</span> has built-in support for Git, no need to install a third-party extension.</p>
                            <p>With support for multiple Git parties like <span className="nowrap">GitHub, Bitbucket and Gitlab</span> commiting and pushing your code without leaving the editor has never been easier.</p>
                        </div>
                        <div className="column large-offset-1 large-10 small-offset-0">
                            <picture className="dark screen-only">
                                <source media="(max-width:1068px)" srcSet={AuroraSourceControlDark} />
                                <img src={AuroraSourceControlDark} width="100%" alt="" aria-label="" />
                            </picture>

                            <picture className="light screen-only">
                                <source media="(max-width:1068px)" srcSet={AuroraSourceControl} />
                                <img src={AuroraSourceControl} width="100%" alt="" aria-label="" />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section-coding">
                <div className="section-content">
                    <div className="row">
                        <div className="column large-offset-1 large-10 small-offset-0">
                            <h2 className="gradient-text">Extensible and Customizable</h2>
                            <p>Want even more features? Install extensions to add new languages, themes and debuggers. Extensions are run in separate processes, ensuring that they won't slow down the editor.</p>
                        </div>
                        <div className="column large-offset-1 large-10 small-offset-0">
                            <picture className="dark screen-only">
                                <source media="(max-width:1068px)" srcSet={AuroraExtensionsDark} />
                                <img src={AuroraExtensionsDark} width="100%" alt="" aria-label="" />
                            </picture>
                            <picture className="light screen-only">
                                <source media="(max-width:1068px)" srcSet={AuroraExtensions} />
                                <img src={AuroraExtensions} width="100%" alt="" aria-label="" />
                            </picture>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main;
