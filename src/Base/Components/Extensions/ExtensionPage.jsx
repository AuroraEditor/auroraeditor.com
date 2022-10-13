import React from "react";
import "../../../Assets/aurora/styles/Extensions/extension-page.css"
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";

function ExtensionPage() {

    const markdown = `A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done
`

    return (
        <div className="extension-page">
            <div className="extension-container extension-responsive">
                <div className="clearfix extension-md-6">
                    <div className="col-md-3 float-md-left extension-md-5 mb-3 mb-md-0">
                        <div className="extension-icon extension-icon-large mx-auto color-shadow-large mt-1">
                            <img className="extension-image" alt="" src="https://user-images.githubusercontent.com/63672227/193885608-d6217c57-6a12-4470-a0c7-f1ecc80bc3f2.png" />
                        </div>
                    </div>
                    <div className="col-md-9 float-md-left pl-md-5 text-center text-md-left">
                        <h3 className="category-name text-muted">Editor Extension</h3>
                        <h1 className="f00-light mb-3">
                            Version Control Kit
                        </h1>
                        <input type="submit" name="commit" value="Get Extension" className="btn extension-btn btn-primary btn-block" />
                    </div>
                </div>
                <div className="clearfix content-flex flex-column flex-md-row flex-lg-row">
                    <div className="col-md-3 pr-md-5 pt-3 marketplace-listing-details-sidebar">
                        <ul className="list-style-none mt-1 mb-2">
                            <li className="pb-3 lh-condensed verified-text">
                                By Aurora Editor
                            </li>
                            <li className="pt-3 pb-3 lh-condensed">
                                <h5 className="mb-2 color-fg-muted sidebar-title">Categories</h5>
                                <a className="extension-tag extension-tag-link f6" href="/extensions/tag/editor">
                                    Editor
                                </a>
                                <a className="extension-tag extension-tag-link f6" href="/extensions/tag/version-control">
                                    Version Control
                                </a>
                                <a className="extension-tag extension-tag-link f6" href="/extensions/tag/source-control">
                                    Source Control
                                </a>
                                <a className="extension-tag extension-tag-link f6" href="/extensions/tag/free">
                                    Free
                                </a>
                            </li>

                            <li className="py-3 lh-condensed">
                                <h5 className="text-normal color-fg-muted mb-2 sidebar-title">Developer</h5>
                                <a className="d-flex flex-items-center css-truncate css-truncate-target extension-developer" href="/auroraeditor">
                                    <img className="avatar mr-2" src="https://avatars.githubusercontent.com/u/106490518?s=128&v=4" width="32" height="32" alt="@auroraeditor" />
                                    AuroraEditor
                                </a>
                            </li>
                            <li className="mt-2 mb-0 mt-md-0 mb-md-1">
                                <h5 className="text-normal color-fg-muted mb-2 sidebar-title">Works With:</h5>
                            </li><li className="works-with">
                                <strong>Universal</strong>
                            </li>

                            <li className="py-3 lh-condensed">
                                <h5 className="text-mono text-normal color-fg-muted mb-2 sidebar-title">Project Details</h5>
                                <ul className="list-style-none text-small">
                                    <li className="mb-1">
                                        <a rel="nofollow">GitHub Repo</a>
                                    </li>
                                    <li className="mb-1">
                                        <a rel="nofollow">No Pull Request</a>
                                    </li>
                                    <li className="mb-1">
                                        <a rel="nofollow">Last Commit: <a className="muted-text">10mins ago</a></a>
                                    </li>
                                    <li className="mb-1">
                                        <a rel="nofollow">Open Issues: <a className="muted-text">0 issues</a></a>
                                    </li>
                                </ul>
                            </li>

                            <li className="py-3 lh-condensed">
                                <h5 className="text-mono text-normal color-fg-muted mb-2 sidebar-title">Developer links</h5>
                                <ul className="list-style-none text-small">
                                    <li className="mb-1">
                                        <a rel="nofollow">Support</a>
                                    </li>
                                    <li className="mb-1">
                                        <a rel="nofollow">Status</a>
                                    </li>
                                    <li className="mb-1">
                                        <a rel="nofollow">Documentation</a>
                                    </li>
                                    <li className="mb-1">
                                        <a rel="nofollow">Privacy Policy</a>
                                    </li>
                                    <li className="mb-1 text-muted">
                                        <a rel="nofollow">Terms of Service</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="py-3 lh-condensed">
                                <ul className="list-style-none text-small">
                                    <li className="mb-1">
                                        <a rel="nofollow" className="text-muted">
                                            Report this extension
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-9 pl-md-5 pt-3 marketplace-listing-details-description">
                        <div className="Details markdown-body mb-4 js-details-container">
                            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExtensionPage;