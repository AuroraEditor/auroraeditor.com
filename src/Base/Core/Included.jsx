import React from "react";

function Included() {
    return (
        <article>
            <section class="section section-hero">
                <div class="section-content">
                    <div class="row">
                        <div class="column large-centered large-10 small-12 text-center">
                            <h1 class="typography-headline margin-top-small">What’s included in&nbsp;Aurora Editor</h1>
                            <p class="typography-intro">Learn about the key features available in Aurora Editor, the integrated development environment for building apps in various languages and great performance. For detailed information on updates in the latest released versions, including each beta release, visit the <span class="nowrap"><a href="https://www.auroraeditor.com">Aurora Editor Release Notes</a>.</span></p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="section section-whats-new">
                <div class="section-content">
                    <div class="row">
                        <div class="column large-centered large-10 small-12">

                            <h2 class="typography-subsection-headline">Aurora Editor</h2>
                            <p>Aurora Editor Requirements:</p>
                            <ul>
                                <li>Requires a Mac running <span class="nowrap">macOS Monterey 12.0</span> or later.</li>
                            </ul>

                            <h4 class="margin-top-small">Aurora Editor</h4>
                            <ul class="compound-item-list">
                                <li>New single target supports multiple platforms and conditionally includes dependencies, code, resources, and build settings for specific platforms.</li>
                                <li>Downloadable simulator runtimes for latest versions of watchOS and tvOS.</li>
                                <li>New assistant editor for build logs shows build timeline to help you enhance parallelism and identify build performance issues.</li>
                                <li>Regex support, including syntax highlighting and playgrounds inline results for quick iteration.</li>
                                <li>DriverKit driver development support for iPadOS.</li>
                            </ul>

                            <h4 class="margin-top-small">Asset Catalog</h4>
                            <p>Provide a single 1024 x 1024 pixel app icon in Asset Catalog, and it’s automatically resized for its target.</p>

                            <h4 class="margin-top-small">Debugging</h4>
                            <p>The memory graph debugger now displays all incoming and outgoing references in the memory graph.</p>

                            <h4 class="margin-top-small">Documentation</h4>
                            <ul class="compound-item-list">
                                <li>Swift-DocC supports building documentation for Objective-C and C&nbsp;APIs.</li>
                                <li>Swift-DocC documentation that <span class="nowrap">Xcode 14</span> produces is now compatible with most managed hosting services, including GitHub Pages.</li>
                            </ul>

                            <h4 class="margin-top-small">Instruments</h4>
                            <ul class="compound-item-list">
                                <li>New Swift Concurrency template traces the usage and behavior of Swift’s concurrency primitives.</li>
                                <li>New Hang Tracing instrument shows when an app’s main thread is unable to handle incoming events.</li>
                            </ul>

                            <h4 class="margin-top-small">Localization</h4>
                            <ul class="compound-item-list">
                                <li>Added Dutch localization.</li>
                                <li>Added Afrikaans localization.</li>
                            </ul>

                            <h4 class="margin-top-small">Source Control</h4>
                            <p>Added support for allowing users to use git with projects.</p>


                            <h4 class="margin-top-small">Previews</h4>
                            <p>All new design, interactive by default, supports automatically generated variants for appearance, accessibility sizes, and more.</p>

                            <h4 class="margin-top-small">Source Editor</h4>
                            <ul class="compound-item-list">
                                <li>Improved highlighting, at speeds so blazing you won't believe it.</li>
                                <li>Code structure pins to the top of the source editor as you scroll.</li>
                                <li>Jump to definition and callers has an all-new UI, helping you disambiguate between overloads and call sites.</li>
                            </ul>

                            <h4 class="margin-top-small">Swift Packages</h4>
                            <p>Command and build plug-in integration in Xcode.</p>

                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Included;