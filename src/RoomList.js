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

const styles = {
    ".RoomList h2" : {
        fontSize: '1rem',
      },
      
      ".RoomList ul" : {
        listStyle: 'none',
        marginLeft: 0,
        paddingLeft: 0,
      },
      
      ".RoomList li" : {
        marginBottom: '0.5rem',
      },
      ".RoomList li a" : {
        display: 'block',
        color: 'whitesmoke',
        textDecoration: 'none',
      },
      ".RoomList li a::before" : {
        content: '# ',
      },
      ".RoomList li a:hover" : {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      },
      
}

export default RoomList