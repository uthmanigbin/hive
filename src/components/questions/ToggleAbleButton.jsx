import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";

import './ToggleAbleButton.css'

class ToggleAbleButton extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            toggled: false,
            class: "toggleButton__default",
        }
    }

    onToggleButton = (e) => {
        this.setState({
            toggled: !this.state.toggled
        }, () => {
            if (this.state.toggled)
                this.setState({
                    class: "toggleButton__toggled"
                })
            else
                this.setState({
                    class: "toggleButton__default"
                })
        })
    }

    render() {
        return(
            <button onClick={this.onToggleButton} className={this.state.class}> <FontAwesomeIcon className="icon" icon={this.props.icon} />{" " + this.props.text}</button>
        )
    }
}

export default ToggleAbleButton;

