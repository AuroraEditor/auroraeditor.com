import "../../Assets/aurora/styles/aurora-ribbon.css"

function Ribbon() {
    return (
        <div id="notice-ribbon" className="ribbon">
            <div className="ribbon-content-wrapper">
                <div className="ribbon-content row">
                    <div className="column large-12 large-centered">
                        <p>Aurora Editor is not in development anymore, <a href="https://github.com/AuroraEditor/AuroraEditor?tab=readme-ov-file#aurora-editor-sunset-announcement" id="suggest-link" className="ribbon-link more">read the announcement here</a>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ribbon;
