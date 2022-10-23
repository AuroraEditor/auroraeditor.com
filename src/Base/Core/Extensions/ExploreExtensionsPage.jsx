import React from "react";
import "../../../Assets/aurora/styles/Extensions/extension-explore.css"
import { fetchExtensions } from "../../Backend/Extensions/Explore";

function ExploreExtensionsPage() {

    fetchExtensions()

    const categories = [
        'Code Quality',
        'Code Review',
        'Deployment',
        'Learning',
        'Localization',
        'Monitoring',
        'Project Management',
        'Publishing',
        'Recently Added',
        'Security',
        'Support',
        'Testing',
        'Utilities',
        'Version Control',
    ].sort();

    // Limit the list to 8 items max
    const extensions = [
        'Code Quality',
        'Code Review',
        'Deployment',
        'Learning',
        'Localization',
        'Monitoring',
        'Project Management',
        'Publishing',
        'Recently Added',
        'Security',
        'Support',
        'Testing',
        'Utilities',
        'Version Control',
    ].splice(0, 8);

    const categoryItems = categories.map(category =>
        <li><a className="filter-item py-2 mb-0">{category}</a></li>
    );

    const extensionItem = extensions.map(category =>
        <a className="col-md-6 mb-4 d-flex no-underline extension-item" href="/marketplace/63672227">
            <div>
                <div className="extension-icon extension-icon-small" style={{ backgroundColor: "#ffffff" }}>
                    <img className="extension-image" alt="" src="https://user-images.githubusercontent.com/63672227/193885608-d6217c57-6a12-4470-a0c7-f1ecc80bc3f2.png" />
                </div>
            </div>
            <div className="px-3">
                <h4 className="extension-name">Version Control Kit</h4>
                <p className="text-muted lh-condensed wb-break-word mb-0 extension-author">
                    By Aurora Editor
                    <span className="tooltipped tooltipped-n">
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="verified verified-badge verified-badge-color ml-n2">
                            <path fill-rule="evenodd" d="M9.585.52a2.678 2.678 0 00-3.17 0l-.928.68a1.178 1.178 0 01-.518.215L3.83 1.59a2.678 2.678 0 00-2.24 2.24l-.175 1.14a1.178 1.178 0 01-.215.518l-.68.928a2.678 2.678 0 000 3.17l.68.928c.113.153.186.33.215.518l.175 1.138a2.678 2.678 0 002.24 2.24l1.138.175c.187.029.365.102.518.215l.928.68a2.678 2.678 0 003.17 0l.928-.68a1.17 1.17 0 01.518-.215l1.138-.175a2.678 2.678 0 002.241-2.241l.175-1.138c.029-.187.102-.365.215-.518l.68-.928a2.678 2.678 0 000-3.17l-.68-.928a1.179 1.179 0 01-.215-.518L14.41 3.83a2.678 2.678 0 00-2.24-2.24l-1.138-.175a1.179 1.179 0 01-.518-.215L9.585.52zM7.303 1.728c.415-.305.98-.305 1.394 0l.928.68c.348.256.752.423 1.18.489l1.136.174c.51.078.909.478.987.987l.174 1.137c.066.427.233.831.489 1.18l.68.927c.305.415.305.98 0 1.394l-.68.928a2.678 2.678 0 00-.489 1.18l-.174 1.136a1.178 1.178 0 01-.987.987l-1.137.174a2.678 2.678 0 00-1.18.489l-.927.68c-.415.305-.98.305-1.394 0l-.928-.68a2.678 2.678 0 00-1.18-.489l-1.136-.174a1.178 1.178 0 01-.987-.987l-.174-1.137a2.678 2.678 0 00-.489-1.18l-.68-.927a1.178 1.178 0 010-1.394l.68-.928c.256-.348.423-.752.489-1.18l.174-1.136c.078-.51.478-.909.987-.987l1.137-.174a2.678 2.678 0 001.18-.489l.927-.68zM11.28 6.78a.75.75 0 00-1.06-1.06L7 8.94 5.78 7.72a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06 0l3.75-3.75z"></path>
                        </svg>
                    </span>
                </p>
                <p className="text-muted lh-condensed wb-break-word mb-0 extension-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="download-icon color-fg-muted extension-download">
                    <path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>
                </svg>
                <span className="text-small text-muted text-bold extension-download">6M Installs</span>
            </div>
        </a>
    )

    return (
        <div className="explore-body">
            <div className="container-lg responsive clearfix">
                <div className="col-lg-9 float-lg-right mt-6">
                    <div className="d-sm-flex flex-items-center flex-md-justify-end mt-3 mt-md-0 table-list-header-toggle ml-n2 ml-md-0">
                        <div className="flex-auto min-width-0">
                            <form className="position-relative mb-3">
                                <input id="explore-input" placeholder="Search for extensions" autoComplete="off" className="form-textbox flex-auto" type="text" style={{ paddingLeft: "40px", paddingTop: "12px", paddingBottom: "12px" }} />
                                <svg style={{ marginTop: "15px", left: "15px" }} aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="search-icon color-fg-default position-absolute">
                                    <path fill-rule="evenodd" d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"></path>
                                </svg>
                            </form>
                        </div>
                    </div>
                </div>
                <nav className="d-none d-lg-block col-lg-3 float-lg-left pl-3 pl-md-0 pr-3 pr-md-5 pt-3 pt-md-2 pb-md-12">
                    <h4 className="text-mono mb-3 text-normal mt-6">Categories</h4>
                    <ul className="list-style-none" style={{ marginLeft: "-10px" }}>
                        {categoryItems}
                    </ul>
                </nav>
                <div className="col-lg-9 pt-3 mb-4 float-lg-right">
                    <h3 className="mb-3">Recommended</h3>
                    <div className="d-md-flex flex-wrap mb-4">
                        {extensionItem}
                    </div>
                    <a className="f4 d-block mb-6" href="/marketplace?category=recommended">
                        View All
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="chevron-right-icon ml-n2 mb-half">
                            <path fill-rule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"></path>
                        </svg>
                    </a>
                    <h3 className="mb-3">Aurora Editor Built</h3>
                    <div className="d-md-flex flex-wrap mb-4">
                        {extensionItem}
                    </div>
                    <a className="f4 d-block mb-6" href="/marketplace?author=auroraeditor">
                        View All
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="chevron-right-icon ml-n2 mb-half">
                            <path fill-rule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ExploreExtensionsPage;