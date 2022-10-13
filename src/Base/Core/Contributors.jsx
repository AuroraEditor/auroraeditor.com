import "../../Assets/aurora/styles/aurora-style.css";
import useScript from "../Hooks/useScript";

function Contributors() {
  useScript("/scripts/aurora-contributors.js")

  return (
        <section className="section section-hero">
            <div className="section-content">
                <div className="row">
                    <div className="column large-centered large-10 text-center">
                        <h1 className="typography-headline gradient-text">Contributors</h1>
                    </div>
                </div>
            </div>
            <div className="section contributors-generator">
                <div className="section-content">
                    <div className="row">
                        <div className="column large-centered large-10 text-center">
                            <p className="text-centred">LOADING CONTRIBUTORS,<br />Please wait...</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contributors;
