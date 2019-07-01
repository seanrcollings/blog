import React, { Component } from 'react'
import axios from 'axios'

export default class SignUp extends Component {
  submit = (e) => {
    e.preventDefault()

    axios.post('/users', {user: {
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      password_confirmation: document.getElementById('password_confirmation').value
    }})
      .then(res => {
        console.log(res)
      })
  }

  render() {
    return (
      <div className='signUp'>
        <form className='signUp-form' onSubmit={this.submit}>
          <div className='signUp-input-wrapper'>
            <input className='signUp-input' id="email" placeholder="Email"/>
            <input className='signUp-input' id="username" placeholder="Username"/>
          </div>
          <div className='signUp-input-wrapper'>
            <input className='signUp-input' id="password" type='password' placeholder="Password"/>
            <input className='signUp-input' id="password_confirmation" type='password' placeholder="Retype Password"/>
          </div>
          <input type='submit' className='post-new-button' value='Submit'/>
        </form>
      </div>
    )
  }
}
