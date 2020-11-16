import React,{useState,useEffect} from 'react';
import axios from 'axios';
import ImgJSON from '../data/imgJSON.json';
import bgJSON from '../data/bgJSON.json';
import FriendsList from '../components/FriendsList';


import {Link , NavLink} from 'react-router-dom';
import Navigation from '../components/Navigation';
import './Friends.css';

import imgA from '../images/myimg.jpg';
import bgA from '../images/mybg.jpg';

function Friends() {

    const [names,setNames] = useState([]);
    const [comments,setComments] = useState([]);

    let getData = async () => {
        const {data : names} = await axios.get('https://jsonplaceholder.typicode.com/users');
        setNames(names);
    }
    useEffect(getData,[]);

    return (
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
                    <span className="header_txt">Manage</span>
                </div>
                <div className="header_row">
                    <span className="header_txt">Friends<em className="header_Num">1</em></span>
                </div>
                <div className="header_row">
                    <i className="fas fa-cog"></i>
                </div>
            </div>
        </header>
        <main className="freinds">
            <div className="srch_bar">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Find friends, chats, Plus Friends" />
            </div>
            <div className="friends_section">
                <header className="friends_section_header">
                    <h2>My Profile</h2>
                </header>
                <div className="freinds_section_columns">
                    <div className="freinds_section_column">
                        <Link to={{
                            pathname : "/Profile",
                            state : {id : 0, name: "Jeong Ho young", img : false, bg: false}
                            }}>
                            <img src={imgA} alt="profileImg" /><span>Jeong Ho young</span>
                        </Link>
                        
                    </div>
                    
                </div>
            </div>
            <div className="friends_section">
                <header className="friends_section_header">
                    <h2>Friends</h2>
                </header>
                <div className="friends_section_columns">
                    <div className="friends_section_columns_tag">
                        {names.map((name, idx)=>(
                            <FriendsList 
                                id = {name.id}
                                name = {name.name}
                                text = {name.company.catchPhrase}
                                img = {ImgJSON[idx].img}
                                bg = {bgJSON[idx].img}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </main>
        <Navigation />
    </div>
    )
}

export default Friends
