import React, { Component } from 'react'
import axios from 'axios'
import history from '../history'

export default class Login extends Component {
  submit = (e) => {
    e.preventDefault()

    axios.post('/users/sign_in', {user: {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
    }})
      .then(res => {
        history.push('/')
        location.reload()
      })
  }

  render() {
    return (
      <div className='login'>
        <form className='login-form' onSubmit={this.submit}>
          <input id='email' className='login-input' type="text" name="email" placeholder='Email'/><br/>
          <input id='password' className='login-input' type="password" name="password" placeholder='Password'/><br/>
          <input type='submit' className='post-new-button' value='Submit'/>
        </form>
      </div>
    )
  }
}
