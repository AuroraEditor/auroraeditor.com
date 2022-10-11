import { Route, Routes, useLocation } from "react-router-dom";
import "./Assets/aurora/styles/aurora-global.css"
import "./Assets/aurora/styles/aurora-footer.css"
import "./Assets/aurora/styles/aurora-ribbon.css"
import useScript from './Base/Hooks/useScript';
import NavHeader from "./Base/Components/NavHeader";
import MainPage from "./Base/Core/Main";
import Contributors from "./Base/Core/Contributors";
import PageNotFound from "./Base/Core/PageNotFound";
import Included from './Base/Core/Included';
import Ribbon from './Base/Components/Ribbon';
import Footer from "./Base/Components/Footer";
import Terms from './Base/Core/Terms';
import Login from "./Base/Core/Auth/Login";
import Register from './Base/Core/Auth/Register';
import AuthNavHeader from './Base/Components/Auth/AuthNavHeader';
import Profile from './Base/Core/Profile/Profile';
import ProfileNavHeader from './Base/Components/Profile/ProfileNavHeader';

function App() {
  useScript("/scripts/aurora-nav.js")
  useScript("/scripts/color-scheme-toggle.js")
  useScript("/scripts/aurora-nav-multi-button.js")

  const { pathname } = useLocation();

  var routes = [
    { path: "/", element: <MainPage />},
    { path: "sign-in", element: <Login />},
    { path: "/sign-up", element: <Register />},
    { path: "/account", element: <Profile />},
    { path: "/contributors", element: <Contributors/> },
    { path: "/included", element: <Included/> },
    { path: "/legal/terms", element: <Terms />},
    { path: "/pnf", element: <PageNotFound/> }
  ]

  return (
    <div id="overview" className="dmf" data-color-scheme="light" style={{ scrollBehavior: 'smooth' }}>

      {pathname !== "/account" && pathname !== "/sign-in" && pathname !== "/sign-up" && <Ribbon />}

      <input type="checkbox" id="auroranav-menustate" className="auroranav-menustate" />
      <div id="auroranav-sticky-placeholder" className="css-sticky auroranav-sticking" />

      {
          pathname === "/account" ? <ProfileNavHeader /> :
          pathname === "/sign-in" || pathname === "/sign-up" ? <AuthNavHeader /> : <NavHeader />
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

      <Footer />
    </div>
  );
}

export default App;
