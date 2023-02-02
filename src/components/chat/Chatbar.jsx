import { Component } from "react";

import './Chatbar.css'

class Chatbar extends Component {
    
    onFormSubmitText = (e) => {
        e.preventDefault()
        let text = document.querySelector('#chatTextInput').value;
        document.querySelector('#chatTextInput').value = ""
        this.props.onChatMessage(text)
    }
    
    render() {
        return(
            <div className="Chatbar">
                <form onSubmit={this.onFormSubmitText}>
                    <input type="text" name="text" id="chatTextInput" placeholder="Type something here" className="textField"/>
                    <input type="submit" onClick={this.onFormSubmitText} value="Send" className="btnSend"/>
                </form>
            </div>
        )
    }
}

export default Chatbar;