import React from "react";
import "../../../Assets/aurora/styles/Components/modal.css"

const VerifyAccountModal = ({ setIsOpen }) => {
    return (
        <>
            <div className="darkBG" onClick={() => setIsOpen(false)} />
            <div className="centered">
                <div className="modal">
                    <div className="modalHeader">
                        <h5 className="heading">Dialog</h5>
                    </div>
                    <button className="closeBtn" onClick={() => setIsOpen(false)}>
                    </button>
                    <div className="modalContent">
                        Are you sure you want to delete the item?
                    </div>
                    <div className="modalActions">
                        <div className="actionsContainer">
                            <button className="deleteBtn" onClick={() => setIsOpen(false)}>
                                Delete
                            </button>
                            <button
                                className="cancelBtn"
                                onClick={() => setIsOpen(false)}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VerifyAccountModal;