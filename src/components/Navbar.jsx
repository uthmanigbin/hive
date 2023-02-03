import React, { Component } from "react";
import { faVcard, faBarChart, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from 'react-icons/gi'
import { GiCardExchange } from "react-icons/gi";
import { BsFillChatFill } from "react-icons/bs"
import { BsFillPersonFill } from "react-icons/bs";

import './Navbar.css'
import { Link } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <ul>
                    <li><GiCardExchange /></li>
                    <Link to={"/chat"}>
                        <li><BsFillChatFill /></li>
                    </Link>
                    <li><BsFillPersonFill /></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;
