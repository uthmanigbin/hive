import React, { Component } from "react";
import ToggleAbleButton from "./ToggleAbleButton";

class question2 extends Component {
    render() {
        return(
            <div className="question">
                <h2 style={{color: "#FDAD35", textAlign: 'left'}}><b>Your interests</b></h2>
                <p style={{width: "18em", textAlign: 'left'}}>Select a few of your interests and let everyone know what you're passionate about.</p>
                <div className="gridContainer">
                    <ToggleAbleButton text={"Photography"}/>
                    <ToggleAbleButton text={"Shopping"}/>
                    <ToggleAbleButton text={"Karaoke"}/>
                    <ToggleAbleButton text={"Yoga"}/>
                    <ToggleAbleButton text={"Cooking"}/>
                    <ToggleAbleButton text={"Tennis"}/>
                    <ToggleAbleButton text={"Run"}/>
                    <ToggleAbleButton text={"Swimming"}/>
                    <ToggleAbleButton text={"Art"}/>
                    <ToggleAbleButton text={"Traveling"}/>
                    <ToggleAbleButton text={"Extreme"}/>
                    <ToggleAbleButton text={"Music"}/>
                </div>
            </div>
        )
    }
}

export default question2;