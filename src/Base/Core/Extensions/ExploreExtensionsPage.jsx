import React from "react";
import "../../../Assets/aurora/styles/Extensions/extension-explore.css"
import { fetchExtensions } from "../../Backend/Extensions/Explore";
import ExtensionItem from "./ExtensionItem";

function ExploreExtensionsPage() {
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

    const categoryItems = categories.map(category =>
        <li><a className="filter-item py-2 mb-0">{category}</a></li>
    );

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
                        <ExtensionItem />
                    </div>
                    <a className="f4 d-block mb-6" href="/marketplace?category=recommended">
                        View All
                        <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="chevron-right-icon ml-n2 mb-half">
                            <path fill-rule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"></path>
                        </svg>
                    </a>
                    <h3 className="mb-3">Aurora Editor Built</h3>
                    <div className="d-md-flex flex-wrap mb-4">
                        <ExtensionItem />
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