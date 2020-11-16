import React,{useEffect} from 'react'
import Navigation from '../components/Navigation';


import imgA from '../images/myimg.jpg';
import imgB from '../images/kakaostory.png';
import imgC from '../images/path.png';
import imgD from '../images/kakaofriends.png';

import './More.css';

function More() {
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
            </div>
            <div className="header_row">
                <span className="header_txt">More</span>
            </div>
            <div className="header_row">
                <i className="fas fa-cog"></i>
            </div>
        </div>
    </header>
    <main className="more">
        <div className="more_profile">
                <img src={imgA} alt="profileImg"/>
                <div className="profile_name">
                    <span>Jeong Ho young<br/><em>Userid@gmail.com</em></span>
                </div>
                <div className="profile_chat"><i className="far fa-comment"></i></div>
        </div>
        <div className="more_option">
            <ul>
                <li>
                    <i className="far fa-grin"></i>
                    <span>Emoticons</span>
                </li>
                <li>
                    <i className="fas fa-paint-brush"></i>
                    <span>Themes</span>
                </li>
                <li>
                    <i className="far fa-hand-peace"></i>
                    <span>Plus Friend</span>
                </li>
                <li>
                    <i className="far fa-user-circle"></i>
                    <span>Account</span>
                </li>
            </ul>
        </div>
        <div className="more_Plus">
            <div className="Plus_top">
                <p>Plus Friends</p>
                <p><i className="fas fa-info-circle"></i>Learn More</p>
            </div>
            <div className="Plus_bottom">
                <ul>
                    <li>
                        <i className="fas fa-info-circle"></i>
                        <span>Order</span>
                    </li>
                    <li>
                        <i className="fas fa-home"></i>
                        <span>Store</span>
                    </li>
                    <li>
                        <i className="fas fa-tv"></i>
                        <span>TV Channel/Radio</span>
                    </li>
                    <li>
                        <i className="fas fa-pencil-alt"></i>
                        <span>Creation</span>
                    </li>
                    <li>
                        <i className="fas fa-graduation-cap"></i>
                        <span>Education</span>
                    </li>
                    <li>
                        <i className="fas fa-landmark"></i>
                        <span>Politics/Society</span>
                    </li>
                    <li>
                        <i className="fas fa-won-sign"></i>
                        <span>Finance</span>
                    </li>
                    <li>
                        <i className="fas fa-video"></i>
                        <span>Movies/Music</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="more_link">
            <ul>
                <li>
                    <img src={imgB} alt="카카오스토리"/>
                    <span>Kakao Story</span>
                </li>
                <li>
                    <img src={imgC} alt="Path"/>
                    <span>Path</span>
                </li>
                <li>
                    <img src={imgD} alt="카카오프렌즈"/>
                    <span>Kakao Friends</span>
                </li>
            </ul>
        </div>
    </main>
    <Navigation />
        </div>
    )
}

export default More
