import React, { Component } from 'react';
import './Signup.css';

class Signup extends Component {
    render () {
        return (
            <form>
                <h1>Tell us about yourself</h1>
                <input type="text" name="text" id="firstNameTextInput"  placeholder="First Name" className="firstName"/>
                <input type="text" name="text" id="lastNameTextInput" placeholder="Last Name" className="lastName"/>
                <input type="date" name="birthday" className="birthdayDropDown" />
                <input type="submit" placeholder="Confirm" className="signupSend"/>
            </form>
        )
    }
}

export default Signup;