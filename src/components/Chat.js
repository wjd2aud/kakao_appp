import React from 'react'
import {Link , NavLink} from 'react-router-dom';

import './Chat.css';

function Chat() {
    return (
        <div className="chat_body">
            <header class="C_top_header">
        <div class="C_header_top">
            <div class="header_row">
                <i class="fas fa-plane"></i>
                <i class="fas fa-wifi"></i>
            </div>
            <div class="header_row">
                <span class="header_time">17:33</span>
            </div>
            <div class="header_row">
                <i class="far fa-moon"></i>
                <i class="fab fa-bluetooth-b"></i>
                <span class="header_battery">100% <i class="fas fa-battery-full"></i></span>
            </div>
        </div>
        <div class="C_header_bottom">
            <div class="header_row">
                <span class="C_header_txt"><Link to="/Chats"><i class="fas fa-angle-left"></i></Link></span>
            </div>
            <div class="header_row">
                <span class="C_header_txt">Friend Name</span>
            </div>
            <div class="header_row">
                <i class="fas fa-search"></i>
                <i class="fa fa-bars"></i>
            </div>
        </div>
    </header>
    <main class="chatting">
        <div class="chatting_date">
            <p>Wednesday, April 22, 2020</p>
        </div>
        <div class="chatting_me">
            <div class="me_chat"><p>Hello!</p></div>
            <div class="me_chat"><p>Hello! This is a text message.<br/>Hello!</p></div>
            <div class="me_chat"><p>This is a text message.</p><span>17:33</span></div>
        </div>
        <div class="chatting_friend">
            <div class="friend_profile">
                <img src="images/empty.jpg" alt="friendProfile"/>
            </div>
            <div class="friend_chats">
                <p>Friend Name</p>
                <div class="friend_chat"><p>And this is an answer</p></div>
                <div class="friend_chat"><p>And this is an answer And this is an answer</p></div>
                <div class="friend_chat"><p>And this is an answer</p><span>18:37</span></div>
            </div>
        </div>
    </main>
    <div class="chat_write">
        <div class="write_plus">
            <i class="fas fa-plus"></i>
        </div>
        <div class="write_txt">
            <input type="text"/>
            <i class="far fa-smile"></i>
            <a href="#"><i class="fas fa-microphone"></i></a>
        </div>
    </div>
        </div>
    )
}

export default Chat
