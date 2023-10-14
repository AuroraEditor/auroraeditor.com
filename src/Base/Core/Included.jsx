function Included() {
    return (
        <article>
            <section className="section section-hero">
                <div className="section-content">
                    <div className="row">
                        <div className="column large-centered large-10 small-12 text-center">
                            <h1 className="typography-headline margin-top-small gradient-text">What’s included in&nbsp;Aurora Editor</h1>
                            <p className="typography-intro">Learn about the key features available in Aurora Editor, the integrated development environment for building apps in various languages and great performance. For detailed information on updates in the latest released versions, including each beta release, visit the <span className="nowrap"><a href="https://www.auroraeditor.com">Aurora Editor Release Notes</a>.</span></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section-whats-new">
                <div className="section-content">
                    <div className="row">
                        <div className="column large-centered large-10 small-12">

                            <h1 className="typography-subsection-headline gradient-text">Aurora Editor</h1>
                            <h4 className="typography-subsection-headline gradient-text-sub">What's new?</h4>
                            <p>System Requirements:</p>
                            <ul>
                                <li>Requires a Mac running <span className="nowrap">macOS Monterey 12.0</span> or later.</li>
                            </ul>

                            <h4 className="margin-top-small gradient-text-sub">Aurora Editor</h4>
                            <ul className="compound-item-list">
                                <li>New single target supports multiple platforms and conditionally includes dependencies, code, resources, and build settings for specific platforms.</li>
                                <li>Downloadable simulator runtimes for latest versions of watchOS and tvOS.</li>
                                <li>New assistant editor for build logs shows build timeline to help you enhance parallelism and identify build performance issues.</li>
                                <li>Regex support, including syntax highlighting and playgrounds inline results for quick iteration.</li>
                                <li>DriverKit driver development support for iPadOS.</li>
                            </ul>

                            <h4 className="margin-top-small gradient-text-sub">Asset Catalog</h4>
                            <p>Provide a single 1024 x 1024 pixel app icon in Asset Catalog, and it’s automatically resized for its target.</p>

                            <h4 className="margin-top-small gradient-text-sub">Debugging</h4>
                            <p>The memory graph debugger now displays all incoming and outgoing references in the memory graph.</p>

                            <h4 className="margin-top-small gradient-text-sub">Documentation</h4>
                            <ul className="compound-item-list">
                                <li>Swift-DocC supports building documentation for Objective-C and C&nbsp;APIs.</li>
                                <li>Swift-DocC documentation that <span className="nowrap">Xcode 14</span> produces is now compatible with most managed hosting services, including GitHub Pages.</li>
                            </ul>

                            <h4 className="margin-top-small gradient-text-sub">Instruments</h4>
                            <ul className="compound-item-list">
                                <li>New Swift Concurrency template traces the usage and behavior of Swift’s concurrency primitives.</li>
                                <li>New Hang Tracing instrument shows when an app’s main thread is unable to handle incoming events.</li>
                            </ul>

                            <h4 className="margin-top-small gradient-text-sub">Localization</h4>
                            <ul className="compound-item-list">
                                <li>Added Dutch localization.</li>
                                <li>Added Afrikaans localization.</li>
                            </ul>

                            <h4 className="margin-top-small gradient-text-sub">Source Control</h4>
                            <p>Added support for allowing users to use git with projects.</p>


                            <h4 className="margin-top-small gradient-text-sub">Previews</h4>
                            <p>All new design, interactive by default, supports automatically generated variants for appearance, accessibility sizes, and more.</p>

                            <h4 className="margin-top-small gradient-text-sub">Source Editor</h4>
                            <ul className="compound-item-list">
                                <li>Improved highlighting, at speeds so blazing you won't believe it.</li>
                                <li>Code structure pins to the top of the source editor as you scroll.</li>
                                <li>Jump to definition and callers has an all-new UI, helping you disambiguate between overloads and call sites.</li>
                            </ul>

                            <h4 className="margin-top-small gradient-text-sub">Swift Packages</h4>
                            <p>Command and build plug-in integration in Xcode.</p>

                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Included;
