import React from "react";
import "./navbar.css";

function Navbar(props) {
    return (
        <div className="info-container">
        <div className="Current-Score">
        <h2>Your Score: {props.currentScore} </h2>
        </div>
        <div className="HighScore">
        <h2> High Score: {props.highscore}</h2>
</div>
        </div>

    )}

    export default Navbar;
