import React from 'react'

import Message from './Message'

const MessageList = () => {
    const messages = [
        {id: 1,
        user: {
            uid: 'kdjkjfkdjf',
            displayName: "Andrew",
            email: 'hi@andrew.vip'
        },
        body: 'Chatting up a storm, yo!'
        },

        {id: 2,
        user: {
            uid: 'kdj23jkdjf',
            displayName: "Davey",
            email: 'davey@fretless.com'
        },
        body: 'Too much chatting.'
        }
    ]

    return (
        <div className='MessageList'>
            { messages.map(msg => 
            <Message message={msg} key={msg.id}/>)}
        </div>
    )
}

export default MessageList