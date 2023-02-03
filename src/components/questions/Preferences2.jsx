import React, { Component } from "react";
import ToggleAbleButton from "./ToggleAbleButton";
import { faSailboat, faKiwiBird, faRunning, faWater, faSmoking, faMountain } from "@fortawesome/free-solid-svg-icons";

class Preferences2 extends Component {
    render() {
        return(
            <div className="Preferences">
                <h2 className="yellow" style={{textAlign: "left", marginBottom: 0}}><b>Living Habits</b></h2>
                <p style={{width: "18em", textAlign: 'left', marginBottom: '3em'}}>Select your living habits.</p>
                <div className="gridContainer" style={{display: 'grid', gap: '0.5em', gridTemplateColumns: 'auto auto'}}>
                    <ToggleAbleButton icon={faSailboat} text={"Nightowl"} />
                    <ToggleAbleButton icon={faKiwiBird} text={"Early Bird"} />
                    <ToggleAbleButton icon={faRunning} text={"With Pets"} />
                    <ToggleAbleButton icon={faWater} text={"No Pets"} />
                    <ToggleAbleButton icon={faSmoking} text={"Smoker"} />
                    <ToggleAbleButton icon={faMountain} text={"Non Smoker"} />
                </div>
                <div>
                    <h4 style={{fontFamily: 'Tahoma', textAlign: 'left', marginLeft: '1.5em', marginTop: '2em'}}>Others</h4>
                    <input className="yellowInputForm" type="text" placeholder="Write other living habits you have"/>
                </div>
            </div>
        )
    }
}

export default Preferences2;