import React, { Component } from 'react'
import axios from 'axios';

import Chatitem from '../components/Chatitem';
import ImgJSON from '../data/imgJSON.json';
import Navigation from '../components/Navigation';


import './Chats.css';


export default class Chats extends Component {
    state = {
        names : [],
        comments : [],
    }

    getData = async () => {
        const {data : names} = await axios.get('https://jsonplaceholder.typicode.com/users');
        const {data : comments} = await axios.get('https://jsonplaceholder.typicode.com/comments');
        this.setState({names,comments})
    }
    componentDidMount(){
        this.getData();
    }
    
    render() {
        const {names,comments} = this.state;
        return (
            <div>
                <div>
        <header className="top_header">
        <div className="header_top">
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
        <div className="header_bottom">
            <div className="header_row">
                <span className="header_txt">Edit</span>
            </div>
            <div className="header_row">
                <span className="header_txt">Chats<em><i className="fas fa-caret-down"></i></em></span>
            </div>
            <div className="header_row">
            </div>
        </div>
    </header>
    <main className="chats">
        <div className="srch_bar">
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Find friends, chats, Plus Friends"/>
        </div>
        <div className="chats_section">
            <div className="chats_section_columns">
                {names.map((name, idx) => (
                                <Chatitem
                                id = {name.id}
                                name = {name.name}
                                comment = {comments[idx].name}
                                img = {ImgJSON[idx].img}
                                />  
                            ))}
            </div>
        </div>
        <div className="chat-btn">
            <i className="fa fa-comment"></i>
          </div>
    </main>
    <Navigation />
        </div>
            </div>
        )
    }
}
