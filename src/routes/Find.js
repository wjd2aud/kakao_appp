import React from 'react'
import Navigation from '../components/Navigation';

import './Find.css';

function Find() {
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
                <span className="header_txt">Edit</span>
            </div>
            <div className="header_row">
                <span className="header_txt">Find</span>
            </div>
            <div className="header_row">
            </div>
        </div>
    </header>
    <main className="find">
        <section className="find_options">
            <div>
                <i className="fas fa-address-book"></i>
                <span>Find</span>
            </div>
            <div>
                <i className="fas fa-qrcode"></i>
                <span>QR Code</span>
            </div>
            <div>
                <i className="fas fa-mobile-alt"></i>
                <span>Shake</span>
            </div>
            <div>
                <i className="far fa-envelope"></i>
                <span>Invite via SMS</span>
            </div>
        </section>
        <div className="find_section">
            <header className="find_section_header">
                <h2>Recommended Friends</h2>
            </header>
            <div className="find_section_column">
                <span>You have no recommended friends.</span>
            </div>
        </div>

    </main>
    <Navigation />
        </div>
    )
}

export default Find