import React from "react";
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
                        <div className="footer-mini-legal-copyright">Copyright ©  2022 <a href="https://www.auroraeditor.com">Aurora Company.</a> All rights reserved.</div>
                        <div className="footer-mini-legal-links">
                            <a className="footer-mini-legal-link" href="https://www.apple.com/legal/internet-services/terms/site.html">Terms of Use</a>
                            <a className="footer-mini-legal-link" href="https://www.apple.com/legal/privacy/en-ww/">Privacy Policy</a>
                            <a className="footer-mini-legal-link" href="/support/terms/">Agreements and Guidelines</a>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    )
}

export default Footer;