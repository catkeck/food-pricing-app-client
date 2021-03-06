import React from 'react'
import AuthAdapter from '../adapters/authAdapter'
import swal from 'sweetalert'

class Signup extends React.Component {
	constructor() {
		super()
		this.state = {
			username: "",
			password: "",
			passwordConfirmation: ""
		}
	}

	handleUsernameChange = (event) => {
		this.setState({username: event.target.value})
	}

	handlePasswordChange = (event) => {
		this.setState({password: event.target.value})
	}

	handlePasswordConfirmationChange = (event) => {
		this.setState({passwordConfirmation: event.target.value})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if (this.state.password === this.state.passwordConfirmation) {
			const userParams = {
			username: this.state.username,
			password: this.state.password
			}
			AuthAdapter.signup(userParams)
				.then((user) => {
					this.setState({username: "", password: ""})
					
					localStorage.setItem("token", user.jwt)
					console.log(this.props.history)
					this.props.history.replace("/")
				})
			this.props.handleLoginAndSignup()
		}
		else {
      swal('Your password and password confirmation do not match', 'Please try again.', 'error')
		}
		
	}

	render() {
		return (
		  <div className="login-page">
		  	<div className="form">
					<form className="register-form" onSubmit={this.handleSubmit}>
						<input value={this.state.username} onChange={this.handleUsernameChange} type="text" placeholder="email" />
						<input value={this.state.password} onChange={this.handlePasswordChange} type='password' placeholder="password" />
						<input value={this.state.passwordConfirmation} onChange={this.handlePasswordConfirmationChange} type='password' placeholder="password confirmation" />
						<input type="submit"/>
					</form>
				</div>
			</div>
		)
	}
}

export default Signup