import React from 'react'

const UserInfo = (props) => {
    return(
        <div
        className="UserInfo"
        style={props.styles.children}
      >
        <div className="Avatar"></div>
        <div className="user">
          {props.user.displayName}
        </div>
        <a href="#">
          <i className="fas fa-sign-out-alt"></i>
        </a>
      </div>
    )
}

export default UserInfo