import React from 'react'

import './Find.css';

function Find() {
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
                <span class="header_txt">Edit</span>
            </div>
            <div class="header_row">
                <span class="header_txt">Find</span>
            </div>
            <div class="header_row">
            </div>
        </div>
    </header>
    <main class="find">
        <section class="find_options">
            <div>
                <i class="fas fa-address-book"></i>
                <span>Find</span>
            </div>
            <div>
                <i class="fas fa-qrcode"></i>
                <span>QR Code</span>
            </div>
            <div>
                <i class="fas fa-mobile-alt"></i>
                <span>Shake</span>
            </div>
            <div>
                <i class="far fa-envelope"></i>
                <span>Invite via SMS</span>
            </div>
        </section>
        <div class="find_section">
            <header class="find_section_header">
                <h2>Recommended Friends</h2>
            </header>
            <div class="find_section_column">
                <span>You have no recommended friends.</span>
            </div>
        </div>

    </main>
        </div>
    )
}

export default Find