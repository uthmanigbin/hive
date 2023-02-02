import React, { Component } from "react";

import './ChatText.css'

class ChatText extends Component {
    render() {
        return(
            <div className="ChatText">
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default ChatText;