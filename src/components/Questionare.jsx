import React, { Component } from "react";

import './Questionare.css';

class Questionare extends Component {
    render() {
        return(
            <div className="Questionare">
                <button className="backBtnYellow">{">"}</button>

                <button className="btnYellow">Continue</button>
            </div>
        )
    }
}

export default Questionare;