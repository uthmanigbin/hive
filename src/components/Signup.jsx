import { Component } from 'react';
import './Signup.css';

class Signup extends Component {
    render () {
        return (
            <form>
                <input type="text" name="text" id="firstNameTextInput"  placeholder="First Name" className="firstName"/>
                <input type="text" name="text" id="lastNameTextInput" placeholder="Last Name" className="lastName"/>
                <button><i className="fa-solid fa-calendar-days"></i> Choose your birthday</button>
                <input type="submit" placeholder="Confirm" className="signupSend"/>
            </form>
        )
    }
}

export default Signup;