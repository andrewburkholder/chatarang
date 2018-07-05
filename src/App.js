import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import SignIn from './SignIn';

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: {
        uid: '',
        displayName: '',
        email: '',
      }
    }

  }

  handleLogin = (displayName, email) => {
    const user = {...this.state.user}
    user.uid = 1
    user.displayName = displayName
    user.email = email
    this.setState({user})
  }

  render() {
    if (this.state.user.displayName) {return (
      <div className="App">
        <Main user={this.state.user}/>
      </div>
    );}

    else {return (
      <SignIn handleLogin={this.handleLogin}/>
    )
    }
  }
}

export default App;
