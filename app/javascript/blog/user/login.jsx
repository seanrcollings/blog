import React, { Component } from 'react'
import axios from 'axios'
import history from '../history'
import ErrorBox from '../errorBox';

export default class Login extends Component {
  state = {
    error: null,
    renderError: false
  }

  submit = (e) => {
    e.preventDefault()

    axios.post('/users/sign_in', {user: {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    }})
      .then(res => {
        if (res.status === 200){
          history.push('/')
          location.reload()
        } else {
          this.setState({ renderError: true, error: res.data.errors})
        }
      })
  }

  checkLoggedIn = () => {
    if (gon.user !== null) {
      history.push('/')
    }
  }

  render() {
    this.checkLoggedIn()
    return (
      <div className='login'>
        <form className='login-form' onSubmit={this.submit}>
          <input id='email' className='login-input' type="text" name="email" placeholder='Email'/>
          <input id='password' className='login-input' type="password" name="password" placeholder='Password'/>
          <input type='submit' className='login-button' value='Submit'/>
        </form>
        <p> <a href='/signup'>Don't have an account? Sign Up Here!</a></p>
        <ErrorBox error={this.state.error} render={this.state.renderError}/>
      </div>
    )
  }
}
