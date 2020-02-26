import React from "react";

function Jumbotron({ children }) {
    return (
        <div
            style={{
                height: "auto",
                paddingTop: 10,
                textAlign: "center",
                borderTop: "solid red 25px",
                opacity: ".75",
                margin: "20px",
            }}
            className="jumbotron"
        >
            {children}
        </div>
    );
}

export default Jumbotron;
