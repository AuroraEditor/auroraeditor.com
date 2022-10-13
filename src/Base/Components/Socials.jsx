import "../../Assets/aurora/styles/aurora-socials-router.css"

function Socials() {
    return (
        <aside className="section socials-router-links">
            <div className="section-content">
                <div className="row">
                    <div className="column large-3 medium-6 small-12">
                        <a href="https://discord.com/invite/5aecJ4rq9D" className="block text-center">
                            <figure className="router-icon router-icon-discord"></figure>
                            <p><strong>Discord</strong></p>
                            <p className="typography-subbody">Join our community on Discord where we discuss and collaborate on all things of Aurora Editor.</p>
                        </a>
                    </div>
                    <div className="column large-3 medium-6 small-12">
                        <a href="https://auroraeditor.slack.com/join/shared_invite/zt-1fti1r72d-8mWmJsj279vDV~YdKhcUEA#/shared-invite/email" className="block text-center">
                            <figure className="router-icon router-icon-slack"></figure>
                            <p><strong>Slack</strong></p>
                            <p className="typography-subbody">Join our community on Slack where we discuss and collaborate on all things of Aurora Editor.</p>
                        </a>
                    </div>
                    <div className="column large-3 medium-6 small-12">
                        <a href="https://twitter.com/Aurora_Editor" className="block text-center">
                            <figure className="router-icon router-icon-twitter"></figure>
                            <p><strong>Twitter</strong></p>
                            <p className="typography-subbody">Discover the latest in <b>Aurora Editor</b> by following us on Twitter.</p>
                        </a>
                    </div>
                    <div className="column large-3 medium-6 small-12">
                        <a href="https://github.com/AuroraEditor/AuroraEditor" className="block text-center">
                            <figure className="router-icon router-icon-github"></figure>
                            <p><strong>Source Code</strong></p>
                            <p className="typography-subbody">Wanna play around and discover how <b>Aurora Editor</b> was built? Check out the Github Repo to find out.</p>
                        </a>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Socials;
