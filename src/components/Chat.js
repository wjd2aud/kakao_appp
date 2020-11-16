import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';
import imgA from '../images/myimg.jpg';


import './Chat.css';

function Chat(props,{}) {

    const{history, location} = props;

    const redirect = () => {
        if(location.state === undefined){
            history.push('/Chats');
        }
    }

    useEffect(redirect,[]);
    
    if(location.state){
    return (
        <div className="chat_body">
            <header className="C_top_header">
        <div className="C_header_top">
            <div className="header_row">
                <i className="fas fa-plane"></i>
                <i className="fas fa-wifi"></i>
            </div>
            <div className="header_row">
                <span className="header_time">17:33</span>
            </div>
            <div className="header_row">
                <i className="far fa-moon"></i>
                <i className="fab fa-bluetooth-b"></i>
                <span className="header_battery">100% <i className="fas fa-battery-full"></i></span>
            </div>
        </div>
        <div className="C_header_bottom">
            <div className="header_row">
                <span className="C_header_txt"><a href="javascript:history.back();"><i className="fas fa-angle-left"></i></a></span>
            </div>
            <div className="header_row">
                <span className="C_header_txt">{location.state.name}</span>
            </div>
            <div className="header_row">
                <i className="fas fa-search"></i>
                <i className="fa fa-bars"></i>
            </div>
        </div>
    </header>
    <main className="chatting">
        <div className="chatting_date">
            <p>Wednesday, April 22, 2020</p>
        </div>
        <div className="chatting_me">
            <div className="me_chat"><p>Hello!</p></div>
            <div className="me_chat"><p>Hello! This is a text message.<br/>Hello!</p></div>
            <div className="me_chat"><p>This is a text message.</p><span>17:33</span></div>
        </div>
        <div className="chatting_friend">
            <div className="friend_profile">
                <img src={location.state.img ? location.state.img : imgA} alt="friendProfile"/>
            </div>
            <div className="friend_chats">
                <p>{location.state.name}</p>
                <div className="friend_chat"><p>And this is an answer</p></div>
                <div className="friend_chat"><p>And this is an answer And this is an answer</p></div>
                <div className="friend_chat"><p>And this is an answer</p><span>18:37</span></div>
            </div>
        </div>
    </main>
    <div className="chat_write">
        <div className="write_plus">
            <i className="fas fa-plus"></i>
        </div>
        <div className="write_txt">
            <input type="text"/>
            <i className="far fa-smile"></i>
            <a href="#"><i className="fas fa-microphone"></i></a>
        </div>
    </div>
        </div>
    )}else{return null;}
}

export default Chat
