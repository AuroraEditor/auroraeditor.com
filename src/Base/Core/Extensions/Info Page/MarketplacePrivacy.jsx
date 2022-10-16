import React from "react";

function MarketplacePrivacy() {
    return (
        <section className="section section-privacy section-tiles-grid">
            <div className="section-content">
                <h2 className="section-headline">
                    Privacy and security.
                    <br />
                    Built into the core of extensions.
                </h2>
                <div className="grid-container">
                    <section className="grid-item full grid-item-review">
                        <div className="flex-content align-items-center align-items-start-small flex-column-small">
                            <div className="headline-contnt">
                                <h3 className="typography-headline">Security for every extension. At every level.</h3>
                            </div>
                            <div className="picture-container">
                                <picture id="marketplace-privacy-security" className="marketplace-privacy-security">

                                </picture>
                            </div>
                        </div>
                        <input type="checkbox" tabindex="-1" className="modal-toggle visuallyhidden" aria-hidden="true" id="modal-toggle-security"></input>
                        <div className="grid-modal">
                            <label tabIndex="0" className="modal-cta" for="modal-toggle-security">
                                <svg className="plus-icon" viewBox="0 0 40 40">
                                    <path id="reset-solid" d="M20,0C9,0,0,9,0,20s9,20,20,20s20-9,20-20S31,0,20,0z M31,21.8h-9.2V31c0,0.9-0.9,1.7-1.7,1.7c-0.9,0-1.7-0.9-1.7-1.7v-9.2
                                    H9.2c-0.9,0-1.7-0.9-1.7-1.7c0-0.9,0.9-1.7,1.7-1.7h9V9.2c0-0.9,0.9-1.7,1.7-1.7c0.9,0,1.7,0.9,1.7,1.7v9.1h9.2
                                    c0.9,0,1.7,0.9,1.9,1.8C32.7,21,31.8,21.8,31,21.8z"></path>
                                    <path id="reset" d="M30.8,18.3h-9.2V9.2c0-0.8-0.8-1.7-1.7-1.7c-0.8,0-1.7,0.8-1.7,1.7v9.2H9.2c-0.8,0-1.7,0.8-1.7,1.7c0,0.8,0.8,1.7,1.7,1.7
                                    h9.2v9.2c0,0.8,0.8,1.7,1.7,1.7c0.8,0,1.7-0.8,1.7-1.7v-9.2h9.2c0.8,0,1.7-0.8,1.7-1.7C32.5,19.2,31.7,18.3,30.8,18.3z"></path>
                                </svg>
                                <span className="modal-cta-text" role="button" aria-expanded="false" aria-controls="content-toggle-security">
                                    <span className="visuallyhidden">More about, Security for every extension. At every level.</span>
                                </span>
                            </label>
                            <div className="modal-content" data-component-list="CardbackScroll" id="content-toggle-security" role="group" aria-label="More content about You choose what data to share. And with whom." aria-hidden="true">
                                <div className="grid-item-copy extra-padding" style={{ overflowY: "visible" }}>
                                    <div className="top-gradient" style={{ display: "none" }}></div>
                                    <p><span className="typography-eyebrow-reduced">Security for every extension. <br/> At every level.</span></p>
                                    <p>We ensure that extensions come from known sources, are free of known malware, and don't tamper with users personal data at the time of installation, launch or usage.</p>
                                    <div className="bottom-gradient" style={{ display: "none" }}></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="grid-item half theme-blue fact grid-item-malware" data-analytics-section-engagement="name:malware screening">
                        <h3 className="typography-headline-elevated">Extensions are automatically scanned for known malware and breach of privacy.</h3>
                    </section>
                    <section className="grid-item half theme-inverted fact grid-item-health-privacy" data-analytics-section-engagement="name:patient privacy">
                        <h3 className="typography-facts-long-headline">We care about your privacy, and by keeping extensions locked away in a vault, we can provide that sense of security.</h3>
                    </section>
                    <section className="grid-item full grid-item-data">
                        <div className="flex-content align-items-center align-items-start-small row-reverse flex-column-small">
                            <div class="headline-content large-6 small-12">
                                <h3 className="typography-headline">You choose what extensions have access to. And when.</h3>
                            </div>
                            <div className="picture-container large-6 small-12">
                                <picture id="marketplace-privacy-data" className="marketplace-privacy-data">

                                </picture>
                            </div>
                        </div>
                        <input type="checkbox" tabindex="-1" className="modal-toggle visuallyhidden" aria-hidden="true" id="modal-toggle-data"></input>
                        <div className="grid-modal">
                            <label tabIndex="0" className="modal-cta" for="modal-toggle-data">
                                <svg className="plus-icon" viewBox="0 0 40 40">
                                    <path id="reset-solid" d="M20,0C9,0,0,9,0,20s9,20,20,20s20-9,20-20S31,0,20,0z M31,21.8h-9.2V31c0,0.9-0.9,1.7-1.7,1.7c-0.9,0-1.7-0.9-1.7-1.7v-9.2
                                    H9.2c-0.9,0-1.7-0.9-1.7-1.7c0-0.9,0.9-1.7,1.7-1.7h9V9.2c0-0.9,0.9-1.7,1.7-1.7c0.9,0,1.7,0.9,1.7,1.7v9.1h9.2
                                    c0.9,0,1.7,0.9,1.9,1.8C32.7,21,31.8,21.8,31,21.8z"></path>
                                    <path id="reset" d="M30.8,18.3h-9.2V9.2c0-0.8-0.8-1.7-1.7-1.7c-0.8,0-1.7,0.8-1.7,1.7v9.2H9.2c-0.8,0-1.7,0.8-1.7,1.7c0,0.8,0.8,1.7,1.7,1.7
                                    h9.2v9.2c0,0.8,0.8,1.7,1.7,1.7c0.8,0,1.7-0.8,1.7-1.7v-9.2h9.2c0.8,0,1.7-0.8,1.7-1.7C32.5,19.2,31.7,18.3,30.8,18.3z"></path>
                                </svg>
                                <span className="modal-cta-text" role="button" aria-expanded="false" aria-controls="content-toggle-data">
                                    <span className="visuallyhidden">More about, You choose what extensions have access to. And when.</span>
                                </span>
                            </label>
                            <div className="modal-content" id="content-toggle-data" role="group" aria-label="More content about, You choose what extensions have access to. And when." aria-hidden="true">
                                <div className="grid-item-copy extra-padding" style={{ overflowY: "visible" }}>
                                    <div className="top-gradient" style={{ display: "none" }}></div>
                                    <p><span className="typography-eyebrow-reduced">You choose what extensions have access to. And when.</span></p>
                                    <p>Each extension is required to ask for your permission so you can choose what access it is allowed to have. The first time a third‑party extension wants to access your information — like your project files, git details, code, or notifications — you receive an alert. Even if you grant access once, you can revoke it later. We also ensure that extensions are denied access to certain sensitive data in your project, are unable to modify your project or code, and are prohibited from obtaining and sending your project details to third-paties.</p>
                                    <div className="bottom-gradient" style={{ display: "none" }}></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default MarketplacePrivacy;