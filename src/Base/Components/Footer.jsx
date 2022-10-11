import { Link } from "react-router-dom";
import ThemeSelection from "./ThemeSelection"

function Footer() {
    return (
        <footer id="footer" className="footer" role="contentinfo" aria-labelledby="footer-label">
            <div className="footer-content">
                <section className="footer-mini" vocab="http://schema.org/" typeof="Organization">
                    <div className="footer-mini-news">
                        <ThemeSelection />
                    </div>
                    <div className="footer-mini-legal">
                        <div className="footer-mini-legal-copyright">Copyright &copy; 2022 <a href="https://auroracompany.dev">Aurora Company.</a> All rights reserved.</div>
                        <div className="footer-mini-legal-links">
                            <Link className="footer-mini-legal-link" to="/legal/tos">Terms of Use</Link>
                            <Link className="footer-mini-legal-link" to="/legal/privacy-policy">Privacy Policy</Link>
                            <Link className="footer-mini-legal-link" to="/contributors">Contributors</Link>
                            <Link className="footer-mini-legal-link" to="/legal/terms">Agreements and Open Source Licenses</Link>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer;
