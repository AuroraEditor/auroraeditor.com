import React from "react";
import MarketplaceHero from "./MarketplaceHero"
import MarketplaceDiscover from "./MarketplaceDiscover";
import MarketplacePrivacy from "./MarketplacePrivacy";
import "../../../../Assets/aurora/styles/Extensions/marketplace.css"

function MarketplacePage() {
    return (
        <div>
            <MarketplaceHero/>
            <MarketplaceDiscover/>
            <MarketplacePrivacy/>
        </div>
    )
}

export default MarketplacePage;