import React, { Component } from 'react';
import './User.css'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Main from './Main';
import {Switch, Router, Route} from 'react-router-dom';


class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            signInNick: '',
            signInPass: '',
            email: '',
            logInNick: '',
            logInPass: '',
        }
        this.onChangeNickSignIn = this.onChangeNickSignIn.bind(this)
        this.onChangePassSignIn = this.onChangePassSignIn.bind(this)
        this.onChangeEmailSignIn = this.onChangeEmailSignIn.bind(this)
        this.onChangeNicLogIn = this.onChangeNicLogIn.bind(this)
        this.onChangePassLogIn = this.onChangePassLogIn.bind(this)
    }

    onChangeNickSignIn(event) {
        let newNickName = event.target.value
        this.setState({ signInNick: newNickName })
    }
    onChangePassSignIn(event) {
        let newPass = event.target.value
        this.setState({ signInPass: newPass })
    }

    onChangeEmailSignIn(event) {
        let email = event.target.value
        this.setState({ email: email })
    }

    onChangeNicLogIn(event) {
        let newNickName = event.target.value
        this.setState({ logInNick: newNickName })
    }
    onChangePassLogIn(event) {
        let newPass = event.target.value
        this.setState({ logInPass: newPass })
    }

    render() {
        console.log(this.props.data)
        let userS = JSON.parse(localStorage.getItem('user'))
        console.log(userS)
        if (!userS)
            return (
                <div className='user'>
                    <div className='SignIn'>
                        <h1> Sign In</h1>
                        <input type = 'text' placeholder = 'Nick' value = {this.state.nick} onChange = {this. onChangeNickSignIn} />
                        <input type = 'email' placeholder = 'E-mail' value = {this.state.email} onChange = {this.onChangeEmailSignIn} />
                        <input type = 'password' placeholder = 'Pass' value = {this.state.pass} onChange = {this.onChangePassSignIn} />
                        <button onClick={() => this.props.onSendSignin(this.state.signInNick, this.state.email, this.state.signInPass)}>Sign In</button>
                        <h3>{this.props.data.logInMessage.message}</h3>
                    </div>
                    <div className='LogIn'>
                        <h1> Log in</h1>
                        <input type='text' placeholder='Nick' value={this.state.nick} onChange={this.onChangeNicLogIn} />
                        <input type='password' placeholder='Pass' value={this.state.pass} onChange={this.onChangePassLogIn} />
                        <button onClick={() => this.props.onSendLogin(this.state.logInNick, this.state.logInPass)}>Log in</button>
                        {/* <h3>{this.props.data.logInMessage.message}</h3> */}
                    </div>
                </div>
            )
        // localStorage.setItem('user',JSON.stringify (this.props.data.logInMessage))
        return <Redirect to= {`/${userS.nick}`} /> 
    }
}

export default connect (state => ({data: state.users}))(User);