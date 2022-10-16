import React from "react";
import MarketplaceDark from "../../../../Assets/elements/icons/marketplace/marketplace_dark.svg";
import MarketplaceLight from "../../../../Assets/elements/icons/marketplace/marketplace_light.svg";

function MarketplaceHero() {
    return (
        <section className="section section-hero">
            <div className="hero animate static">
                <div className="section-content">
                    <picture id="marketplace-icon" className="marketplace-icon">
                        <img src={MarketplaceLight} className="light marketplace-icon-img" width="75%" height="75%" alt="" />
                        <img src={MarketplaceDark} className="dark marketplace-icon-img" width="75%" height="75%" alt="" />
                    </picture>
                    <h1 className="hero-eyebrow typography-eyebrow-super">Marketplace</h1>
                    <h2 className="hero-headline typography-headline-super">
                        Extensions everyone loves.
                        <br />
                        From a place you can trust.
                    </h2>
                </div>
            </div>
            <div className="here-intro">
                <div className="section-content">
                    <p className="hero-copy typography-callout">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MarketplaceHero;