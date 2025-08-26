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
                        <h2>Thank you for being part of Aurora’s story!</h2>
                    </div>
                </div>
            </div>
            <div className="section contributors-generator">
             <div className="section-content">
              <div className="row">
                <ContributorPlaceholder />
                <ContributorPlaceholder />
                <ContributorPlaceholder />
                <ContributorPlaceholder />
                <ContributorPlaceholder />
                <ContributorPlaceholder />
                <ContributorPlaceholder />
                <ContributorPlaceholder />
                <ContributorPlaceholder />
                <ContributorPlaceholder />
                <ContributorPlaceholder />
                <ContributorPlaceholder />
              </div>
            </div>
          </div>
        </section>
    )
}

function ContributorPlaceholder() {
    return (
      <div class="section-content column large-3 medium-6 small-12">
        <span class="block text-center">
          <p class="contributor-image shimmer" width="100" height="100">&nbsp;</p>
          <p><strong class="shimmer">LOADING NAME</strong></p>
          <p class="typography-subbody shimmer">FUNC1, FUNC2, FUNC3, FUNC4</p>
        </span>
      </div>
    )
}


export default Contributors;
