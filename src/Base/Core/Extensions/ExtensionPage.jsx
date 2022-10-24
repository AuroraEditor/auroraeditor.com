import React, { useState } from "react";
import "../../../Assets/aurora/styles/Extensions/extension-page.css"
import { useParams } from "react-router-dom";
import * as Constants from "../../Backend/Constants"
import axios from "axios";
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import { getOS, openAuroraEditor } from "../../Utils/DeviceDetection";


function ExtensionPage() {

    console.log(process.env.API_URL)

    const [extensionData, setExtensionData] = useState({})
    const [tags, setTags] = useState([])
    const [creatorData, setCreatorData] = useState({})
    const [githubLinks, setGithubLinks] = useState({})
    const [developerLinks, setDeveloperLinks] = useState({})

    const platform = getOS()

    const { id } = useParams();

    axios
        .get(Constants.baseApiURL + Constants.extensionFindID + id)
        .then((response) => {
            setExtensionData(response.data)
            setTags(response.data.tags)
            setCreatorData(response.data.creator)
            setGithubLinks(response.data.githubLinks)
            setDeveloperLinks(response.data.developerLinks)
        })

    const extensionTags = tags.map(tag =>
        <a className="extension-tag extension-tag-link f6" href={"/extensions/tag/" + tag}>
            {tag}
        </a>
    );

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
                        <h3 className="category-name text-muted">{extensionData.category} Extension</h3>
                        <h1 className="f00-light mb-3">
                            {extensionData.extensionName}
                        </h1>
                        {
                            platform === "macos" ? <input type="submit" name="commit" value="Get Extension" className="btn extension-btn btn-primary btn-block" onClick={openAuroraEditor}/> : null
                        }
                    </div>
                </div>
                <div className="clearfix content-flex flex-column flex-md-row flex-lg-row">
                    <div className="col-md-3 pr-md-5 pt-3 marketplace-listing-details-sidebar">
                        <ul className="list-style-none mt-1 mb-2">
                            <li class="pb-3 lh-condensed verified-creator">
                                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="verified verified-badge verified-badge-color mr-2">
                                    <path fill-rule="evenodd" d="M9.585.52a2.678 2.678 0 00-3.17 0l-.928.68a1.178 1.178 0 01-.518.215L3.83 1.59a2.678 2.678 0 00-2.24 2.24l-.175 1.14a1.178 1.178 0 01-.215.518l-.68.928a2.678 2.678 0 000 3.17l.68.928c.113.153.186.33.215.518l.175 1.138a2.678 2.678 0 002.24 2.24l1.138.175c.187.029.365.102.518.215l.928.68a2.678 2.678 0 003.17 0l.928-.68a1.17 1.17 0 01.518-.215l1.138-.175a2.678 2.678 0 002.241-2.241l.175-1.138c.029-.187.102-.365.215-.518l.68-.928a2.678 2.678 0 000-3.17l-.68-.928a1.179 1.179 0 01-.215-.518L14.41 3.83a2.678 2.678 0 00-2.24-2.24l-1.138-.175a1.179 1.179 0 01-.518-.215L9.585.52zM7.303 1.728c.415-.305.98-.305 1.394 0l.928.68c.348.256.752.423 1.18.489l1.136.174c.51.078.909.478.987.987l.174 1.137c.066.427.233.831.489 1.18l.68.927c.305.415.305.98 0 1.394l-.68.928a2.678 2.678 0 00-.489 1.18l-.174 1.136a1.178 1.178 0 01-.987.987l-1.137.174a2.678 2.678 0 00-1.18.489l-.927.68c-.415.305-.98.305-1.394 0l-.928-.68a2.678 2.678 0 00-1.18-.489l-1.136-.174a1.178 1.178 0 01-.987-.987l-.174-1.137a2.678 2.678 0 00-.489-1.18l-.68-.927a1.178 1.178 0 010-1.394l.68-.928c.256-.348.423-.752.489-1.18l.174-1.136c.078-.51.478-.909.987-.987l1.137-.174a2.678 2.678 0 001.18-.489l.927-.68zM11.28 6.78a.75.75 0 00-1.06-1.06L7 8.94 5.78 7.72a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06 0l3.75-3.75z"></path>
                                </svg>By {creatorData.creator_name}
                                <p class="note">
                                    AuroraEditor owns and operates this app.
                                </p>
                            </li>
                            <li className="pt-3 pb-3 lh-condensed extension-page-link">
                                <h5 className="mb-2 color-fg-muted sidebar-title">Categories</h5>
                                {extensionTags}
                            </li>

                            <li className="py-3 lh-condensed extension-page-link">
                                <h5 className="color-fg-muted mb-2 sidebar-title">Developer</h5>
                                <a className="d-flex flex-items-center css-truncate css-truncate-target extension-developer" href="/auroraeditor">
                                    <img className="avatar mr-2" src={creatorData.creator_profile_image} width="32" height="32" alt="@auroraeditor" />
                                    {creatorData.creator_username}
                                </a>
                            </li>
                            <li className="mt-2 mb-0 mt-md-0 mb-md-1">
                                <h5 className="color-fg-muted mb-2 sidebar-title">Works With:</h5>
                            </li>
                            <li className="works-with mb-2">
                                <p>{extensionData.editorSupportVersion}</p>
                            </li>

                            <li className="py-3 lh-condensed">
                                <h5 className="color-fg-muted mb-2 sidebar-title">Project Details</h5>
                                <ul className="list-style-none text-small">
                                    <li className="mb-1 project-details-item-repo extension-page-link">
                                        <a rel="nofollow" href={githubLinks.github_repo_link}>GitHub Repo</a>
                                    </li>
                                    <li className="mb-1 project-details-item extension-page-link">
                                        <a rel="nofollow" href={githubLinks.github_repo_link}>No Pull Request</a>
                                    </li>
                                    <li className="mb-1 project-details-item extension-page-link">
                                        <span className="muted-text"><a href={githubLinks.github_repo_link}>Last Commit: </a>10 mins ago</span>
                                    </li>
                                    <li className="mb-1 project-details-item extension-page-link">
                                        <span className="muted-text"><a href={githubLinks.github_repo_link}>Open Issues: </a>0 issues</span>
                                    </li>
                                </ul>
                            </li>

                            <li className="py-3 lh-condensed">
                                <h5 className="color-fg-muted mb-2 sidebar-title">Developer links</h5>
                                <ul className="list-style-none text-small">
                                    <li className="mb-1 developer-links-item extension-page-link">
                                        <a rel="nofollow" href={extensionData.githubRepoLink}>Support</a>
                                    </li>
                                    <li className="mb-1 developer-links-item extension-page-link">
                                        <a rel="nofollow" href={extensionData.githubRepoLink}>Status</a>
                                    </li>
                                    <li className="mb-1 developer-links-item extension-page-link">
                                        <a rel="nofollow" href={extensionData.githubRepoLink}>Documentation</a>
                                    </li>
                                    <li className="mb-1 developer-links-item extension-page-link">
                                        <a rel="nofollow" href={developerLinks.privacy_policy}>Privacy Policy</a>
                                    </li>
                                    <li className="mb-1 developer-links-item extension-page-link">
                                        <a rel="nofollow" href={developerLinks.terms_of_service}>Terms of Service</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="py-3 lh-condensed">
                                <ul className="list-style-none text-small">
                                    <li className="mb-1 text-muted-link">
                                        <a rel="nofollow" href="/report">
                                            Report this extension
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-9 pl-md-5 pt-3 marketplace-listing-details-description">
                        <div className="details markdown-body mb-4 js-details-container">
                            <ReactMarkdown children={extensionData.extensionDescription} remarkPlugins={[remarkGfm]} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExtensionPage;