import React from 'react'
import Avatar from './Avatar';
import Metadata from './Metadata';

const Message = (props) => {
    return (
        <div className="Message">
            <Avatar />
            <div className='details'>
                <Metadata displayName={props.message.user.displayName}/>
                {props.message.body}
            </div>
        </div>
    )
}

export default Message