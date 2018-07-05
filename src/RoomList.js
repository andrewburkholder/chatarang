import React from 'react'

const RoomList = (props) => {
    return(
        <nav
        className="RoomList"
        style={props.styles.children}
        >
        <h2>Rooms</h2>
            <ul>
                <li><a href="#">general</a></li>
                <li><a href="#">random</a></li>
            </ul>
        </nav>
    )
}

export default RoomList