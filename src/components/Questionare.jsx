import React, { Component } from "react";
import Question1 from "./questions/question1";
import Question2 from "./questions/question2";

import './Questionare.css';

class Questionare extends Component {
    render() {
        return(
            <div className="Questionare">
                <button className="backBtnYellow"><b>{"<"}</b></button>
                <Question2 />
                <button className="btnSubmitYellow"><b>Continue</b></button>
            </div>
        )
    }
}

export default Questionare;