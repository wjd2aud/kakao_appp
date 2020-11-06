import React from 'react'
import {Link , NavLink} from 'react-router-dom';

import './Profile.css';


function Profile() {
    return (
        <div>
            <header class="p_top_header">
        <div class="p_header_top">
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
        <div class="p_header_bottom">
            <div class="header_row">
                <span class="p_header_txt"><Link to="/Friends"><i class="fas fa-times"></i></Link></span>
            </div>
            <div class="header_row">
            </div>
            <div class="header_row">
                <i class="fas fa-user"></i>
            </div>
        </div>
         <div class="profile_photo">
            <img src="images/empty.jpg" alt="프로필사진"/>
        </div>
    </header>
   
    <div class="profile_info">
        <p class="Name">My Name</p>
        <input type="text" placeholder="Userid@gmail.com"/>
        <div class="info_option">
            <a href="#">
                <p><i class="fas fa-comment"></i></p>
                <p>My Chatroom</p>
            </a>
            <a href="#">
                <p><i class="fas fa-pencil-alt"></i></p>
                <p>Edit Profile</p>
            </a>
        </div>
    </div>
        </div>
    )
}

export default Profile
