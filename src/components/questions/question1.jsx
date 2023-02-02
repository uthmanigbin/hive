import React, { Component } from "react";

class question1 extends Component {
    render() {
        return(
            <div className="question">
                <h2 className="yellow">I am a</h2>
                <button className="btnYellow">Woman</button>
                <button className="btnYellow">Man</button>
                <button className="btnYellow">Other</button>
            </div>
        )
    }
}

export default question1;