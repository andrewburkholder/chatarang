import React, { Component } from 'react'

class SignIn extends Component {
    constructor() {
        super()
        this.state = {
            displayName: '',
            email: '',
        }
    }
    handleChange = (event) => {
        const target = event.target
        const name = target.name

        this.setState({[name]: target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleLogin(this.state.displayName, this.state.email)
    }
    render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} value={this.state.displayName} name='displayName' type='text' placeholder='Enter your name' />
            <input onChange={this.handleChange} value={this.state.email} name='email' type='text' placeholder='Enter your email address'/>
            <input name='submit' type='submit'/>
        </form>
    );
}
}

export default SignIn