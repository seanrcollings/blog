import React, { Component } from 'react'
import axios from 'axios'
import ActiveStorageUploader from './activeStorage';
import AvatarModal from './avatarModal';

export default class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      avatarId: null,
      avatar: null
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
        avatar: this.state.avatarId
      }
    })
      .then(res => {
        console.log(res)
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
            <input className='signUp-input' id="email" placeholder="Email"/>
            <input className='signUp-input' id="username" placeholder="Username"/>
          </div>
          <div className='signUp-input-wrapper'>
            <input className='signUp-input' id="password" type='password' placeholder="Password"/>
            <input className='signUp-input' id="password_confirmation" type='password' placeholder="Retype Password"/>
          </div>
          {/* <ActiveStorageUploader 
            text='Upload Avatar'
            handleAttachement={(signedIds) => this.setState({avatarId: signedIds[0]})}
          /> */}
          <input type='file' onChange={this.handleChange}/>
          <input type='submit' className='post-new-button' value='Submit'/>
        </form>
        <AvatarModal avatar={this.state.avatar}/>
      </div>
    )
  }
}
