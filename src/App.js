import { Route, Routes, useLocation } from "react-router-dom";
import "./Assets/aurora/styles/aurora-global.css"
import useScript from './Base/Hooks/useScript';
import ProfileNavHeader from './Base/Components/Profile/ProfileNavHeader';
import AuthNavHeader from './Base/Components/Auth/AuthNavHeader';
import NavHeader from "./Base/Components/NavHeader";
import MainPage from "./Base/Core/Main";
import Login from "./Base/Core/Auth/Login";
import Register from './Base/Core/Auth/Register';
import Profile from './Base/Core/Profile/Profile';
import Contributors from "./Base/Core/Contributors";
import Included from './Base/Core/Included';
import Terms from './Base/Core/Terms';
import PageNotFound from "./Base/Core/PageNotFound";
import Ribbon from './Base/Components/Ribbon';
import Footer from "./Base/Components/Footer";
import EmailVerification from "./Base/Core/Auth/EmailVerification";

function App() {
  useScript("/scripts/aurora-nav.js")
  useScript("/scripts/color-scheme-toggle.js")
  useScript("/scripts/aurora-nav-multi-button.js")

  const { pathname } = useLocation();

  var routes = [
    { path: "/", element: <MainPage /> },
    { path: "/sign-in", element: <Login /> },
    { path: "/oauth/:email-verification", element: <EmailVerification/> },
    { path: "/sign-up", element: <Register /> },
    { path: "/account", element: <Profile /> },
    { path: "/contributors", element: <Contributors /> },
    { path: "/included", element: <Included /> },
    { path: "/legal/terms", element: <Terms /> },
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
          || pathname === "/oauth/email-verification"  ? <AuthNavHeader /> : <NavHeader />
      }

      <label id="auroranav-curtain" htmlFor="auroranav-menustate" />
      <div id="auroranav-viewport-emitter" data-viewport-emitter-dispatch="" data-viewport-emitter-state="{&quot;viewport&quot;:&quot;large&quot;,&quot;orientation&quot;:&quot;landscape&quot;,&quot;retina&quot;:false}" />
      <main>
        <Routes>
          {routes.map(({ path, element }, key) =>
            <Route exact path={path} element={element} key={key} />
          )}
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
