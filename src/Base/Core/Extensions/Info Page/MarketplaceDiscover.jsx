import React from "react";

function MarketplaceDiscover() {
    return (
        <section className="section section-discovery section-tiles-grid section-tiles-grid-first">
            <div className="section-content">
                <h2 className="section-headline" role="heading">Built for everyone.</h2>
                <div className="grid-container">
                    <section className="grid-item full grid-item-stories">
                        <div className="flex-content row flex-nowrap align-items-center align-items-start-small flex-column-reverse-small">
                            <div className="headline-content">
                                <h3 className="typography-headline">Find extensions for your every need.</h3>
                            </div>
                            <div className="picture-container">
                                <picture id="marketplace-discovery-story" className="marketplace-discovery-story">

                                </picture>
                            </div>
                        </div>
                    </section>
                    <section className="grid-item half theme-blue fact grid-item-story-number">
                        <h3 className="typography-headline-elevated">New extensions are worked on everyday</h3>
                    </section>
                    <section className="grid-item half theme-inverted handpicked-half grid-item-handpicked">
                        <div className="flex-content">
                            <h3 className="typography-headline">Curated by Aurora. Handpicked for you.</h3>
                            <picture id="marketplace-discovery-curated" className="marketplace-discovery-curated">

                            </picture>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default MarketplaceDiscover;