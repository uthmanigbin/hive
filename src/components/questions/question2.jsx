import React, { Component } from "react";
import ToggleAbleButton from "./ToggleAbleButton";

// icons
import { faCamera, faWater, faMicrophone, faShoppingBag, faBowlFood, faBaseball, faRunning, faPeace, faPaintBrush, faTrain, faHeadphones, faWarning } from "@fortawesome/free-solid-svg-icons";

class question2 extends Component {
    render() {
        return(
            <div className="question">
                <h2 style={{color: "#FDAD35", textAlign: 'left'}}><b>Your interests</b></h2>
                <p style={{width: "18em", textAlign: 'left'}}>Select a few of your interests and let everyone know what you're passionate about.</p>
                <div className="gridContainer">
                    <ToggleAbleButton icon={faCamera} text={"Photography"}/>
                    <ToggleAbleButton icon={faShoppingBag} text={"Shopping"}/>
                    <ToggleAbleButton icon={faMicrophone} text={"Karaoke"}/>
                    <ToggleAbleButton icon={faPeace} text={"Yoga"}/>
                    <ToggleAbleButton icon={faBowlFood} text={"Cooking"}/>
                    <ToggleAbleButton icon={faBaseball} text={"Tennis"}/>
                    <ToggleAbleButton icon={faRunning} text={"Running"}/>
                    <ToggleAbleButton icon={faWater} text={"Swimming"}/>
                    <ToggleAbleButton icon={faPaintBrush} text={"Art"}/>
                    <ToggleAbleButton icon={faTrain} text={"Traveling"}/>
                    <ToggleAbleButton icon={faWarning} text={"Extreme Sports"}/>
                    <ToggleAbleButton icon={faHeadphones} text={"Music"}/>
                </div>
            </div>
        )
    }
}

export default question2;