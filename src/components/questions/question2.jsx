import React, { Component } from "react";

class question2 extends Component {
    render() {
        return(
            <div className="question">
                <h2 style={{color: "#FDAD35", textAlign: 'left'}}><b>Your interests</b></h2>
                <p style={{width: "18em", textAlign: 'left'}}>Select a few of your interests and let everyone know what you're passionate about.</p>
                <div className="gridContainer">
                    <button>Photography</button>
                    <button>Shopping</button>
                    <button>Karaoke</button>
                    <button>Yoga</button>
                    <button>Cooking</button>
                    <button>Tennis</button>
                </div>
            </div>
        )
    }
}

export default question2;