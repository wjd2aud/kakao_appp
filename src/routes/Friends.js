import React from 'react'
import {Link , NavLink} from 'react-router-dom';
import './Friends.css'

import imgA from '../images/empty.jpg';

function Friends() {
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
                        <Link to="Profile">
                            <img src={imgA} alt="profileImg" /><span>My Name</span>
                        </Link>
                    </div>
                    <div className="freinds_section_column">
                            <img src={imgA} alt="profileImg" />
                            <span>Friend's Names Display</span>
                    </div>
                </div>
            </div>
            <div className="friends_section">
                <header className="friends_section_header">
                    <h2>Friends</h2>
                </header>
                <div className="friends_section_columns">
                    <div className="friends_section_columns_tag">
                        <div className="freinds_section_column">
                            <img src={imgA} alt="profileImg" />
                            <span>Friend Name</span>
                            <span className="profile_tag">Have a good day. See you soon.</span>
                        </div>
                    </div>
                    <div className="friends_section_columns_tag">
                        <div className="freinds_section_column">
                            <img src={imgA} alt="profileImg" />
                            <span>Friend Name</span>
                            <span className="profile_tag">Have a good day. See you soon.</span>
                        </div>
                    </div>
                    <div className="friends_section_columns_tag">
                        <div className="freinds_section_column">
                            <img src={imgA} alt="profileImg" />
                            <span>Friend Name</span>
                            <span className="profile_tag">Have a good day. See you soon.</span>
                        </div>
                    </div>
                    <div className="friends_section_columns_tag">
                        <div className="freinds_section_column">
                            <img src={imgA} alt="profileImg" />
                            <span>Friend Name</span>
                            <span className="profile_tag">Have a good day. See you soon.</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
    )
}

export default Friends
