import React, { Component } from "react";
import Navbar from "./Navbar";
import { faStar, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Discovery.css'

class Discovery extends Component {
    render() {
        return(
            <div className="discovery">
                <Navbar />
                <div>
                    <h4>Discovery</h4>
                    <p>Tallinn, Estonia</p>
                </div>
                <div className="userInfo">
                    <h4><b>About</b></h4>
                    <p>I am a local student, and would love to meet others to go for parties! My go-to drink is the Sparta Shot.</p>
                    <h5><b>Interests</b></h5>
                    <div className="interests">
                        <p>Extreme</p>
                        <p>Video Games</p>
                        <p>Drink</p>
                    </div>
                    <h5><b>Living Preference</b></h5>
                    <div className="interests">
                        <p>Night owl</p>
                        <p>No Pets</p>
                        <p>Smoker</p>
                    </div>
                    <p><b>Has a dorm already, but is looking for a roomie</b></p>
                    <div className="name">
                        <h3>Andero Ilmar Kõre</h3>
                        <p>Software Development Student</p>
                    </div>
                </div>
                <div className="buttons">
                    <button className="contentBtn"><FontAwesomeIcon icon={faX}/></button>
                    <button className="contentBtn"><FontAwesomeIcon icon={faStar} /></button>
                </div>
            </div>
        )
    }
}

export default Discovery;