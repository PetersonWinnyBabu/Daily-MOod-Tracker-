import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class LoginRoute extends Component {
  state = {
    userName: '',
    passWord: '',
    show: false,
    showErr: false,
    errorMsg: '',
  }

  onchangeUsername = e => {
    this.setState({userName: e.target.value})
  }

  onchangePassword = e => {
    this.setState({passWord: e.target.value})
  }

  onchangeshow = () => {
    this.setState(prev => ({show: !prev.show}))
  }

  onSuccess = token => {
    Cookies.set('jwt_token', token, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({showErr: true, errorMsg})
  }

  onFormSubmit = async event => {
    event.preventDefault()

    const {userName, passWord} = this.state
    const loginCreds = {
      username: userName,
      password: passWord,
    }

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(loginCreds),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  render() {
    const {userName, passWord, show, showErr, errorMsg} = this.state

    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div data-testid="loginBackground" className="login-background">
        <div data-testid="loginFormContainer" className="login-form-container">
          <h1 data-testid="loginFormHeading" className="login-form-heading">
            Daily Mood Tracker
          </h1>
          <form
            data-testid="loginForm"
            className="login-form"
            onSubmit={this.onFormSubmit}
          >
            <div
              data-testid="loginInputContainer"
              className="login-input-container"
            >
              <label
                data-testid="loginInputLabel"
                htmlFor="username"
                className="login-input-label"
              >
                USERNAME
              </label>
              <input
                data-testid="inputBox"
                id="username"
                value={userName}
                type="text"
                className="inputBox"
                placeholder="Username"
                onChange={this.onchangeUsername}
              />
            </div>
            <div
              data-testid="loginInputContainer"
              className="login-input-container"
            >
              <label
                data-testid="loginInputLabel"
                htmlFor="password"
                className="login-input-label"
              >
                PASSWORD
              </label>
              <input
                data-testid="inputBox"
                id="password"
                type={show ? 'text' : 'password'}
                className="inputBox"
                placeholder="Password"
                value={passWord}
                onChange={this.onchangePassword}
              />
            </div>
            <div data-testid="showPassword" className="show-password">
              <input
                data-testid="checkbox"
                id="showpassword"
                type="checkbox"
                className="checkbox"
                onChange={this.onchangeshow}
              />
              <label
                data-testid="checkboxLabel"
                htmlFor="showpassword"
                className="checkbox-label"
              >
                Show Password
              </label>
            </div>

            <button
              data-testid="loginButton"
              type="submit"
              className="login-button"
            >
              Login
            </button>
            {showErr && (
              <p data-testid="errorMessage" className="error-message">
                {errorMsg}
              </p>
            )}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginRoute
