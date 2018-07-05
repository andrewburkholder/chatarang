import React from 'react'

const Avatar = (props) => {
    const imageUrl = `https://api.adorable.io/avatars/40/${props.user.email}.png`
    return(
        <div
            className="Avatar"
            style={styles}
          ></div>
    )
}

const styles = {
    height: '40px',
    width: '40px',
    fontSize: '1rem',
    borderRadius: '20px',
    background: "url(https://api.adorable.io/avatars/32/davey@getfretless.com)",
}

export default Avatar