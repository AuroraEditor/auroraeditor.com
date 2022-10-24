import React, { useState } from "react";
import "../../Assets/aurora/styles/Components/readmore.css"

/**
 * This cuts of text as soon as it reaches 150
 * characters.
 * 
 * Usage:
 * 
 * <ReadMore>
 * Random Text
 * </ReadMore>
 */
const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className="read-more-text">
            {isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
                {isReadMore ? "...Read more" : " Show less"}
            </span>
        </p>
    );
};