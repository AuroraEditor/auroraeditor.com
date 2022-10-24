import axios from "axios";
import React, { Component } from "react";
import * as Constants from "../../Backend/Constants"

export default class ExtensionItem extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        extensions: []
    }

    componentDidMount() {
        axios
            .get(Constants.baseApiURL + Constants.extensions)
            .then((response) => {
                const extensions = response.data.map(extension => ({
                    extensionId: extension.id,
                    extensionName: extension.extensionName,
                    extensionDescription: extension.extensionDescription,
                    creatorName: extension.creator.creator_name
                }));
                this.setState({ extensions });
            })
    }

    render() {
        return (
            this.state.extensions.splice(0, 8).map((extension) => {
                return (
                    <a className="col-md-6 mb-4 d-flex no-underline extension-item" href={"/#/marketplace/" + extension.extensionId}>
                        <div>
                            <div className="extension-icon extension-icon-small" style={{ backgroundColor: "#ffffff" }}>
                                <img className="extension-image" alt="" src="https://user-images.githubusercontent.com/63672227/193885608-d6217c57-6a12-4470-a0c7-f1ecc80bc3f2.png" />
                            </div>
                        </div>
                        <div className="px-3">
                            <h4 className="extension-name">{extension.extensionName}</h4>
                            <p className="text-muted lh-condensed wb-break-word mb-0 extension-author">
                                {extension.creatorName}
                                <span className="tooltipped tooltipped-n">
                                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="verified verified-badge verified-badge-color ml-n2">
                                        <path fill-rule="evenodd" d="M9.585.52a2.678 2.678 0 00-3.17 0l-.928.68a1.178 1.178 0 01-.518.215L3.83 1.59a2.678 2.678 0 00-2.24 2.24l-.175 1.14a1.178 1.178 0 01-.215.518l-.68.928a2.678 2.678 0 000 3.17l.68.928c.113.153.186.33.215.518l.175 1.138a2.678 2.678 0 002.24 2.24l1.138.175c.187.029.365.102.518.215l.928.68a2.678 2.678 0 003.17 0l.928-.68a1.17 1.17 0 01.518-.215l1.138-.175a2.678 2.678 0 002.241-2.241l.175-1.138c.029-.187.102-.365.215-.518l.68-.928a2.678 2.678 0 000-3.17l-.68-.928a1.179 1.179 0 01-.215-.518L14.41 3.83a2.678 2.678 0 00-2.24-2.24l-1.138-.175a1.179 1.179 0 01-.518-.215L9.585.52zM7.303 1.728c.415-.305.98-.305 1.394 0l.928.68c.348.256.752.423 1.18.489l1.136.174c.51.078.909.478.987.987l.174 1.137c.066.427.233.831.489 1.18l.68.927c.305.415.305.98 0 1.394l-.68.928a2.678 2.678 0 00-.489 1.18l-.174 1.136a1.178 1.178 0 01-.987.987l-1.137.174a2.678 2.678 0 00-1.18.489l-.927.68c-.415.305-.98.305-1.394 0l-.928-.68a2.678 2.678 0 00-1.18-.489l-1.136-.174a1.178 1.178 0 01-.987-.987l-.174-1.137a2.678 2.678 0 00-.489-1.18l-.68-.927a1.178 1.178 0 010-1.394l.68-.928c.256-.348.423-.752.489-1.18l.174-1.136c.078-.51.478-.909.987-.987l1.137-.174a2.678 2.678 0 001.18-.489l.927-.68zM11.28 6.78a.75.75 0 00-1.06-1.06L7 8.94 5.78 7.72a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06 0l3.75-3.75z"></path>
                                    </svg>
                                </span>
                            </p>
                            <p className="text-muted lh-condensed wb-break-word mb-0 extension-description">{extension.extensionDescription}
                            </p>
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="download-icon color-fg-muted extension-download">
                                <path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path>
                            </svg>
                            <span className="text-small text-muted text-bold extension-download">6M Installs</span>
                        </div>
                    </a >
                )
            })
        )
    }
}