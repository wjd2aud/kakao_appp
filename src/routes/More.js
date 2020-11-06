import React from 'react'

import './More.css';

function More() {
    return (
        <div>
            <header class="top_header">
        <div class="header_top">
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
        <div class="header_bottom">
            <div class="header_row">
            </div>
            <div class="header_row">
                <span class="header_txt">More</span>
            </div>
            <div class="header_row">
                <i class="fas fa-cog"></i>
            </div>
        </div>
    </header>
    <main class="more">
        <div class="more_profile">
                <img src="images/empty.jpg" alt="profileImg"/>
                <div class="profile_name">
                    <span>My Name<br/><em>UserId@gmail.com</em></span>
                </div>
                <div class="profile_chat"><i class="far fa-comment"></i></div>
        </div>
        <div class="more_option">
            <ul>
                <li>
                    <i class="far fa-grin"></i>
                    <span>Emoticons</span>
                </li>
                <li>
                    <i class="fas fa-paint-brush"></i>
                    <span>Themes</span>
                </li>
                <li>
                    <i class="far fa-hand-peace"></i>
                    <span>Plus Friend</span>
                </li>
                <li>
                    <i class="far fa-user-circle"></i>
                    <span>Account</span>
                </li>
            </ul>
        </div>
        <div class="more_Plus">
            <div class="Plus_top">
                <p>Plus Friends</p>
                <p><i class="fas fa-info-circle"></i>Learn More</p>
            </div>
            <div class="Plus_bottom">
                <ul>
                    <li>
                        <i class="fas fa-info-circle"></i>
                        <span>Order</span>
                    </li>
                    <li>
                        <i class="fas fa-home"></i>
                        <span>Store</span>
                    </li>
                    <li>
                        <i class="fas fa-tv"></i>
                        <span>TV Channel/Radio</span>
                    </li>
                    <li>
                        <i class="fas fa-pencil-alt"></i>
                        <span>Creation</span>
                    </li>
                    <li>
                        <i class="fas fa-graduation-cap"></i>
                        <span>Education</span>
                    </li>
                    <li>
                        <i class="fas fa-landmark"></i>
                        <span>Politics/Society</span>
                    </li>
                    <li>
                        <i class="fas fa-won-sign"></i>
                        <span>Finance</span>
                    </li>
                    <li>
                        <i class="fas fa-video"></i>
                        <span>Movies/Music</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="more_link">
            <ul>
                <li>
                    <img src="images/kakaostory.png" alt="카카오스토리"/>
                    <span>Kakao Story</span>
                </li>
                <li>
                    <img src="images/path.png" alt="Path"/>
                    <span>Path</span>
                </li>
                <li>
                    <img src="images/kakaofriends.png" alt="카카오프렌즈"/>
                    <span>Kakao Friends</span>
                </li>
            </ul>
        </div>
    </main>
        </div>
    )
}

export default More
