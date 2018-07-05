import React from 'react'

const Metadata = (props) => {
    return(
        <div className="Metadata" style={styles[".Metadata"]}>
            <div className="user" style={styles[".Metadata .user"]}>{props.displayName}</div>
            <div className="time" style={styles[".Metadata .time"]}>1:10 PM</div>
        </div>
    )
}

const styles = {
    '.Metadata' : {
        display: 'flex',
        alignItems: 'baseline',
      },
      
      '.Metadata .user' : {
        fontWeight: 'bold',
        marginRight: '0.5rem',
      },
      
      '.Metadata .time' : {
        color: '#999',
        fontSize: '0.8rem',
      },
      
}
export default Metadata