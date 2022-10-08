import React from 'react'
import { Route, Routes } from "react-router-dom";
import "./Assets/aurora/styles/aurora-global.css";
import "./Assets/aurora/styles/aurora-footer.css";
import "./Assets/aurora/styles/aurora-ribbon.css";
import useScript from './Base/Hooks/useScript';
import NavHeader from "./Base/Components/NavHeader";
import MainPage from "./Base/Core/Main";
import Contributors from "./Base/Core/Contributors";
import PageNotFound from "./Base/Core/PageNotFound";
import Included from './Base/Core/Included';
import Ribbon from './Base/Components/Ribbon';
import Footer from "./Base/Components/Footer";
import Terms from './Base/Core/Terms';

function App() {
    useScript("/scripts/aurora-nav.js")
    useScript("/scripts/color-scheme-toggle.js")
    useScript("/scripts/aurora-nav-multi-button.js")
    return (
        <div id="overview" className="dmf" data-color-scheme="light" style={{ scrollBehavior: 'smooth' }}>
            <Ribbon />
            <input type="checkbox" id="auroranav-menustate" className="auroranav-menustate" />
            <div id="auroranav-sticky-placeholder" className="css-sticky auroranav-sticking" />
            <NavHeader />
            <label id="auroranav-curtain" htmlFor="auroranav-menustate" />
            <div id="auroranav-viewport-emitter" data-viewport-emitter-dispatch="" data-viewport-emitter-state="{&quot;viewport&quot;:&quot;large&quot;,&quot;orientation&quot;:&quot;landscape&quot;,&quot;retina&quot;:false}"></div>
            <main>
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route exact path="/contributors" element={<Contributors />} />
                    <Route exact path="/included" element={<Included />} />
                    <Route exact path="/legal/terms" element={<Terms />} />
                    <Route exact path="/pnf" element={<PageNotFound />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
