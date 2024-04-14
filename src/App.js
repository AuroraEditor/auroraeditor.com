import "./Assets/aurora/styles/aurora-global.css"

import { Route, Routes, useLocation } from "react-router-dom";

import AuthNavHeader from './Base/Components/Auth/AuthNavHeader';
import Contributors from "./Base/Core/Contributors";
import EmailVerification from "./Base/Core/Auth/EmailVerification";
import Footer from "./Base/Components/Footer";
import MainPage from "./Base/Core/Main";
import MarketplaceNavHeader from "./Base/Components/Marketplace/MarketplaceNavHeader";
import NavHeader from "./Base/Components/NavHeader";
import PageNotFound from "./Base/Core/PageNotFound";
import Profile from './Base/Core/Profile/Profile';
import ProfileNavHeader from './Base/Components/Profile/ProfileNavHeader';
import ProtectedRoute from "./Base/Utils/ProtectedRoute";
import Ribbon from './Base/Components/Ribbon';
import Terms from './Base/Core/Terms';
import useScript from './Base/Hooks/useScript';

function App() {
    useScript("/scripts/aurora-nav.js")
    useScript("/scripts/color-scheme-toggle.js")
    useScript("/scripts/aurora-nav-multi-button.js")

    const { pathname } = useLocation();

    var routes = [
        { path: "/", element: <MainPage /> },
        // { path: "/sign-in", element: <Login /> },
        { path: "/auth/:email-verification", element: <EmailVerification /> },
        // { path: "/sign-up", element: <Register /> },
        { path: "/contributors", element: <Contributors /> },
        // { path: "/included", element: <Included /> },
        { path: "/legal/terms", element: <Terms /> },
        // { path: "/marketplace/:id", element: <ExtensionPage /> },
        // { path: "/marketplace", element: <MarketplacePage /> },
        // { path: "/marketplace/ideas", element: <IdeasPage /> },
        // { path: "/marketplace/explore", element: <ExploreExtensionsPage /> },
        { path: "/pnf", element: <PageNotFound /> }
    ]

    return (
        <div id="overview" className="dmf" data-color-scheme="light" style={{ scrollBehavior: 'smooth' }}>

            {pathname !== "/account"
                && pathname !== "/sign-in"
                && pathname !== "/sign-up"
                && pathname !== "/oauth/email-verification" && <Ribbon />}

            <input type="checkbox" id="auroranav-menustate" className="auroranav-menustate" />
            <div id="auroranav-sticky-placeholder" className="css-sticky auroranav-sticking" />

            {
                pathname === "/account" ? <ProfileNavHeader /> :
                    pathname === "/sign-in"
                        || pathname === "/sign-up"
                        || pathname === "/oauth/email-verification" ? <AuthNavHeader /> :
                        pathname === "/marketplace"
                            || pathname === "/marketplace/:extension-id"
                            || pathname === "/marketplace/explore"
                            || pathname === "/marketplace/ideas" ? <MarketplaceNavHeader /> :
                            <NavHeader />
            }

            <label id="auroranav-curtain" htmlFor="auroranav-menustate" />
            <div id="auroranav-viewport-emitter" data-viewport-emitter-dispatch="" data-viewport-emitter-state="{&quot;viewport&quot;:&quot;large&quot;,&quot;orientation&quot;:&quot;landscape&quot;,&quot;retina&quot;:false}" />
            <main>
                <Routes>
                    {routes.map(({ path, element }, key) =>
                        <Route exact path={path} element={element} key={key} />
                    )}
                    <Route path="/account" element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    } />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </main>

            {pathname !== "/sign-in"
                && pathname !== "/sign-up"
                && pathname !== "/oauth/email-verification"
                && <Footer />}
        </div>
    );
}

export default App;