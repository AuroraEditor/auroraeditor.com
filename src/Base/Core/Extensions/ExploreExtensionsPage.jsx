import React from "react";

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
    ];

    const categoryItems = categories.map(category =>
        <li><a className="Link--muted filter-item py-2 mb-0">{category}</a></li>
    );

    const extensionItem = categories.map(category =>
        <a>
            <div>
                <div className="CircleBadge CircleBadge--small" style={{backgroundColor: "#ffffff"}}>
                    <img className="CircleBadge-icon"/>
                </div>
                <div className="px3">
                    <h4></h4>
                    <p className="color-fg-muted lh-condensed wb-break-word mb-0">
                        By Aurora Editor
                        <span className="tooltipped tooltipped-n">

                        </span>
                    </p>
                    <p className="color-fg-muted lh-condensed wb-break-word mb-0">A test description</p>
                    <span className="text-small color-fg-muted text-bold">6M Installs</span>
                </div>
            </div>
        </a>
        )

    return (
        <div className="explore-body">
            <div className="container-lg responsive clearfix">
                <div className="column-lg-0 float-lg-right">
                    <div className="d-sm-flex flex-items-center flex-md-justify-end mt-3 mt-md-0 table-list-header-toggle ml-n2 ml-md-0">
                        <div className="flex-auto min-width-0">

                        </div>
                    </div>
                </div>
                <nav className="d-none d-lg-block col-lg-3 float-lg-left pl-3 pl-md-0 pr-3 pr-md-5 pt-3 pt-md-2 pb-md-12">
                    <h4 className="text-mono mb-3 text-normal mt-6">Categories</h4>
                    <ul className="list-style-none" style={{ marginLeft: "-10px" }}>
                        {categoryItems}
                    </ul>
                </nav>
                <div className="col-lg-9 mt-1 mb-4 float-lg-right">
                    <h3>Recommended</h3>
                    <div className="d-md-flex flex-wrap mb-4">
                        {extensionItem}
                    </div>
                    <a className="f4 d-block mb-6" href="/marketplace?category=recommended">
                        View All
                    </a>
                    <h3>Aurora Editor Built</h3>
                    <div className="d-md-flex flex-wrap mb-4">
                        {extensionItem}
                    </div>
                    <a className="f4 d-block mb-6" href="/marketplace?author=auroraeditor">
                        View All
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ExploreExtensionsPage;