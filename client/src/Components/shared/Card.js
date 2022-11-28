import React from "react";

const Card = ({children, reverse = false}) => {
    //const reverse = false;

    return (
        <div className={`card ${reverse && 'reverse'}`}>{children}</div>
    )
};

export default Card;