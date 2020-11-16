import React from 'react'
import { Link } from 'react-router-dom'

function FriendsList({id, name, img, text, bg}) {
    return (
             <Link to={{
                pathname : '/Profile',
                state : {id, name, img, bg}
                }} className="freinds_section_column">
                            <img src={img} alt="profileImg" />
                            <span>{name}</span>
                            <span className="profile_tag">{text}</span>
            </Link>
    )
}

export default FriendsList
