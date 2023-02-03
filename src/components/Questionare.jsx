import React, { Component } from "react";
import { Redirect } from "react-pages";
import { Navigate, useNavigate } from 'react-router-dom';
import Question1 from "./questions/question1";
import Question2 from "./questions/question2";
import Preferences from "./questions/Preferences";
import Preferences2 from "./questions/Preferences2";

import './Questionare.css';
import AboutMe from "./questions/AboutMe";

class Questionare extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            question_index: 0,
        }
    }

    onContinuePressed = () => {
        if (this.state.question_index === 4) {
            console.log("should change website")
            window.location.href = '/'
        }
        this.setState({
            question_index: this.state.question_index + 1
        })
    }

    onBackPressed = () => {
        if (this.state.question_index !== 0) {
            this.setState({
                question_index: this.state.question_index - 1
            })
        }
    }

    render() {
        return(
            <div className="Questionare">
                <button onClick={this.onBackPressed} className="backBtnYellow"><b>{"<"}</b></button>
                {this.state.question_index === 0 && <Question1 />}
                {this.state.question_index === 1 && <AboutMe />}
                {this.state.question_index === 2 && <Question2 />}
                {this.state.question_index === 3 && <Preferences />}
                {this.state.question_index === 4 && <Preferences2 />}
                <button onClick={this.onContinuePressed} className="btnSubmitYellow"><b>Continue</b></button>
            </div>
        )
    }
}

export default Questionare;