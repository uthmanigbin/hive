import React, { Component } from "react";
import Chatbar from "./chat/Chatbar";
import ChatText from "./chat/ChatText";
import io from 'socket.io-client';

import './Chat.css'

const socket = io('ws://172.19.153.19:3010')
const user_list = ['Alex', 'Steve']
user_list.sort((a, b) => 0.5 - Math.random());
const username = user_list.pop()

class Chat extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            isSocketConnected: false,
            list: []
        }
    }
    
    componentDidMount = () => {
        socket.on('connect', () => {
            console.log("socket is connected");
            this.setState({
                isSocketConnected: true,
            }, () => {
                socket.emit('get_text')
            })
        })

        socket.on('update_chat', (data) => {
            this.refreshChatTextList(data)
        })

        socket.on('disconnect', () => {
            this.setState({
                isSocketConnected: false
            })
        })
    }

    refreshChatTextList = (text_list) => {
        this.setState({
            list: text_list
        }, () => {
            const scrollingElement = (document.scrollingElement || document.body);
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
        })
    }

    onMessageSend = (text) => {
        let data_to_send = username + ": " + text
        socket.emit('send_text', data_to_send)
    }

    render() {
        return(
            <div className="container">
                <div className="chat">
                    <div className="topbar">

                    </div>
                    <div className="text_holder">
                        {this.state.list.map((i) =>
                            <ChatText text={i} />
                        )}
                    </div>
                    <Chatbar onChatMessage={this.onMessageSend}/>
                </div>
            </div>
        )
    }
}

export default Chat;