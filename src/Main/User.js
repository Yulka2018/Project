import React, { Component } from 'react';
import './User.css'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


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
                <div className='user' >
                    <form className='NewUser'>
                        <h1> Sign In</h1>
                        <input type='text' placeholder='Nick' value={this.state.nick} onChange={this.onChangeNickSignIn}  required/>
                        <input type='email' placeholder='E-mail' value={this.state.email} onChange={this.onChangeEmailSignIn} required/>
                        <input type='password' placeholder='Pass' value={this.state.pass} onChange={this.onChangePassSignIn}  required/>
                        <button onClick={(event) =>this.state.signInNick && this.state.signInPass && this.state.email &&
                            this.props.onSendSignin(this.state.signInNick, this.state.email, this.state.signInPass, event)} > Sign up</button>
                        <h3>{this.props.data.signInMessage.message}</h3>
                    </form>
                    <form className='NewUser' >
                        <h1> Log in</h1>
                        <input type='text' placeholder='Nick' value={this.state.nick} onChange={this.onChangeNicLogIn} required/>
                        <input type='password' placeholder='Pass' value={this.state.pass} onChange={this.onChangePassLogIn} required/>
                        <button onClick={(event) => this.state.logInNick && this.state.logInPass && 
                            this.props.onSendLogin(this.state.logInNick, this.state.logInPass, event)}>Log in</button>
                        <h3>{this.props.data.logInMessage.message}</h3>
                    </form>
                </div>
            )
        return <Redirect to={`/${userS.nick}`} />
    }
}

export default connect(state => ({ data: state.users }))(User);