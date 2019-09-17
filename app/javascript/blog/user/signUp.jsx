import React, { Component } from 'react'
import axios from 'axios'
import history from '../history';

import ActiveStorageUploader from './activeStorage';
import AvatarModal from './avatarModal';
import ErrorBox from '../errorBox';

export default class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      avatarId: null,
      avatar: null,
      error: null,
      renderError: false
    }
  }

  submit = (e) => {
    e.preventDefault()
    axios.post('/users', {
      user: {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        password_confirmation: document.getElementById('password_confirmation').value,
        bio: document.getElementById('bio').value,
        avatar: this.state.avatarId
      }
    })
      .then(res => {
        axios.post('/users/sign_in', {user: {
          email: document.getElementById('email').value,
          password: document.getElementById('password').value,
        }})
          .then(res => {
            history.push('/')
            location.reload()
          })
      })
      .catch(error => {
        this.setState({ error: 'Sign up failed, please try again later', renderError: true })
      })
  }

  handleChange = (event) => {
    this.setState({ avatar: URL.createObjectURL(event.target.files[0]) })
  }

  render() {
    return (
      <div className='signUp'>
        <form className='signUp-form' onSubmit={this.submit}>
          <div className='signUp-input-wrapper'>
            <input className='signUp-input' id="email" placeholder="Email" required/>
            <input className='signUp-input' id="username" placeholder="Username" required/>
          </div>
          <div className='signUp-input-wrapper'>
            <input className='signUp-input' id="password" type='password' placeholder="Password" required/>
            <input className='signUp-input' id="password_confirmation" type='password' placeholder="Retype Password" required/>
          </div>
          <textarea className='signUp-bio' id='bio' placeholder='User Bio' required/>
          <ActiveStorageUploader 
            text='Upload Avatar'
            handleAttachement={(signedIds) => this.setState({avatarId: signedIds[0]})}
          />
          {/* <input type='file' onChange={this.handleChange}/> */}
          <input type='submit' className='signUp-button' value='Submit'/>
        </form>
        <ErrorBox error={this.state.error} render={this.state.renderError}/>
        {/* <AvatarModal avatar={this.state.avatar}/> */}
      </div>
    )
  }
}
