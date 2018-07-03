import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component {
    constructor () {
        super()

        this.state = {
            messages: [
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
        }
    }

    addMessage = (body) => {
        const messages = [...this.state.messages]
        const user = {
            uid: 'kdj090jkdjf',
            displayName: "Stefany",
            email: 'stephanie@singing.org'
        }

        messages.push({
            id: Date.now(),
            user,
            body,
        })

        this.setState({ messages })
    }

    render() {
    return (
      <div className="Chat">
        <ChatHeader />
        <MessageList messages={this.state.messages}/>
        <MessageForm addMessage={this.addMessage}/>
      </div>
    )
  }
}

export default Chat