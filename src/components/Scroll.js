import React from "react";
import './Card.css';

const Scroll = (props) => {
    return (
        <div className="scroll" style={{ height:"80vh", overflowY: "auto",  }}>
            {props.children}
        </div>
    );
};

export default Scroll;