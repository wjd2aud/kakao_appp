import React from 'react'
import {Link, NavLink} from 'react-router-dom';

import './Navigation.css';


function Navigation() {
    return (
        <div className="nav"> 
            <NavLink to="/"  exact={true} activeClassName="active"><i class="fas fa-user"></i><span>Friends</span></NavLink>
            <NavLink to="/Chats" activeClassName="active"><i class="fas fa-comment"></i><span>Chats</span></NavLink>
            <NavLink to="/Find" activeClassName="active"><i class="fas fa-search"></i><span>Find</span></NavLink>
            <NavLink to="/More" activeClassName="active"><i class="fas fa-ellipsis-h"></i><span>More</span></NavLink>
        </div>
    )
}

export default Navigation
