import React, { Component } from "react";
import { BsHouseFill } from "react-icons/bs";
import Navbar from './Navbar';

import './Profile.css'

class Profile extends Component {
    render() {
        return(
            <div className="profile">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
                <div className="info">
                    <div className="icon">
                        <BsHouseFill className="BsHouseIcon"/>
                    </div>
                    <h2>Alex mason, 19</h2>
                    <p>Cuzzmedia Student</p>
                    <h4><b>Location</b></h4>
                    <p>Tallinn, Estonia</p>
                    <h4><b>About</b></h4>
                    <p>Hey There :) I am DK, all the way from Singapore, super new to Tallinn, and am looking for a room mate...</p>
                    <a><b>Read More</b></a>
                    <h4><b>Interests</b></h4>
                    <div className="interests">
                        <p>Traveling</p>
                        <p>Sports</p>
                        <p>Music</p>
                        <p>Dancing</p>
                        <p>Shopping</p>
                    </div>
                    <h4><b>Living Habits</b></h4>
                    <div className="interests">
                        <p>Early Bird</p>
                        <p>With Pets</p>
                        <p>Non-smoker</p>
                    </div>
                    <h4><b>Gallery</b></h4>
                    <div className="gallery">

                    </div>
                </div>
                <Navbar />
            </div>
        )
    }
}

export default Profile;