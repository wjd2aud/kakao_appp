import React,{useState,useEffect} from 'react'
import {Link , NavLink} from 'react-router-dom';


function Chatitem({id, name, comment, img}) {

    return (
            <Link to={{
                pathname:'/Chat',
                state:{id, name, comment, img}
            }} className="chats_section_column">
                    <img src={img} alt={name} />
                        <div class="chats_name">
                            <span>{name}<br/><em>{comment}</em></span>
                        </div>
                        <div class="chats_time"><span>17:33</span></div>
            </Link>
            
    )
}

export default Chatitem
