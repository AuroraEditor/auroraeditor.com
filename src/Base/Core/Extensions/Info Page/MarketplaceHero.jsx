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
                        A curated space for extensions.
                    </h2>
                </div>
            </div>
            <div className="hero-intro">
                <div className="section-content">
                    <p className="hero-copy typography-callout">
                        The Extensions Marketplace is a curated space where developers from all over can discover extensions to improve their developer experience and upload their own extension to share with the world.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default MarketplaceHero;