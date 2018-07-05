import React from 'react'

const RoomList = () => {
    return(
        <nav
        className="RoomList"
        /* style={styles.children} */
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