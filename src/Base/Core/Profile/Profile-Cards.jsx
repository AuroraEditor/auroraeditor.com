function ProfileCards() {
    return (
        <div className="section">
            <div className="row-card">
                { /** Aurora ID Card */}
                <div className="card-column large-6 medium-12">
                    <div className="section-item">
                        <div className="card-button card-button-bare card-button-expand card-button-rounded-rectangle">
                            <div className="card card-theme-module card-border card-no-wrap card-rounded card-shadow">
                                <div className="content-center">
                                    <div className="content-top">
                                        <div className="card-header">
                                            <h3 className="card-title">Aurora ID</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="card-line">
                                                <span className="account-id">
                                                    <span className="text">
                                                        jane@example.com
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-trailing">
                                    <div className="card-trailing-element">
                                        {/** Add Images */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-column large-6 medium-12">
                    <div className="section-item">
                        <div className="card-button card-button-bare card-button-expand card-button-rounded-rectangle">
                            <div className="card card-theme-module card-border card-no-wrap card-rounded card-shadow">
                                <div className="content-center">
                                    <div className="content-top">
                                        <div className="card-header">
                                            <h3 className="card-title">Password</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="card-line">
                                                <span className="account-id">
                                                    <span className="text">
                                                        Hasn't been updated yet
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-trailing">
                                    <div className="card-trailing-element">
                                        {/** Add Images */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-column large-6 medium-12">
                    <div className="section-item">
                        <div className="card-button card-button-bare card-button-expand card-button-rounded-rectangle">
                            <div className="card card-theme-module card-border card-no-wrap card-rounded card-shadow">
                                <div className="content-center">
                                    <div className="content-top">
                                        <div className="card-header">
                                            <h3 className="card-title">Account Security</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="card-line">
                                                <span className="account-id">
                                                    <span className="text">
                                                        Two-factor Authentications Disabled
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-trailing">
                                    <div className="card-trailing-element">
                                        {/** Add Images */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-column large-6 medium-12">
                    <div className="section-item">
                        <div className="card-button card-button-bare card-button-expand card-button-rounded-rectangle">
                            <div className="card card-theme-module card-border card-no-wrap card-rounded card-shadow">
                                <div className="content-center">
                                    <div className="content-top">
                                        <div className="card-header">
                                            <h3 className="card-title">Signed In</h3>
                                        </div>
                                        <div className="card-body">
                                            <div className="card-line">
                                                <span className="account-id">
                                                    <span className="text">
                                                        You are currently not signed in.
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-trailing">
                                    <div className="card-trailing-element">
                                        {/** Add Images */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCards;
