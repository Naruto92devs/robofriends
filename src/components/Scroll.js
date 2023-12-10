import React from "react";

const Scroll = (props) => {
    return (
        <div style={{ height:"50vw", overflowY: "scroll",  }}>
            {props.children}
        </div>
    );
};

export default Scroll;