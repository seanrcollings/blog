import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='navbar-left'>
          <a href='/' className='navbar-item'>Posts</a>
          <a href='/authors' className='navbar-item'>Authors</a>
        </div>
        <div className='navbar-right'>
          {gon.user !== null ? <a href='/post/new' className='navbar-item'>Write Post</a> : ''}
          {gon.user === null ? <a href='/login' className='navbar-item'>Log In</a> : <a href='/users/sign_out' className='navbar-item'>Log Out</a>}
        </div>
      </div>
    )
  }
}
