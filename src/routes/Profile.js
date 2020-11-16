import React,{useEffect} from 'react'
import {Link , NavLink} from 'react-router-dom';
import imgA from '../images/myimg.jpg';
import bgA from '../images/mybg.jpg';

import './Profile.css';


function Profile(props) {
    const {location, history} = props;
    const redirect = () => {
        if(location.state === undefined){
            history.push('/');
        }
    }
    useEffect(redirect,[]);
    if(location.state){
        const {id, name, img, bg, myimg, mybg} = location.state;
        console.log(id, name, img, bg);

    return (
        <div>
            <header className="p_top_header" >
        <div className="p_header_top">
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
        <div className="p_header_bottom">
            <div className="header_row">
                <span className="p_header_txt"><Link to="/"><i className="fas fa-times"></i></Link></span>
            </div>
            <div className="header_row">
            </div>
            <div className="header_row">
                <i className="fas fa-user"></i>
            </div>
            
        </div>
         <div className="bg">
                <img src={bg ? bg : bgA} />
            </div>
    </header>
   
    <div className="profile_info">
        <div className="profile_photo">
            <img src={img ? img : imgA} alt="프로필사진"/>
        </div>
        <p className="Name">{name}</p>
        <input type="text" placeholder="Userid@gmail.com"/>
        <div className="info_option">
            <Link to={{
                pathname : '/Chat',
                state : {id, name, img}
            }}>
                <p><i className="fas fa-comment"></i></p>
                <p>My Chatroom</p>
            </Link>
            <a href="#">
                <p><i className="fas fa-pencil-alt"></i></p>
                <p>Edit Profile</p>
            </a>
        </div>
    </div>
        </div>
    )}else{return null;}
}

export default Profile
