import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='navbar-left'>
          <a href='#' className='navbar-item'>Posts</a>
          <a href='#' className='navbar-item'>Authors</a>
        </div>
        <div className='navbar-right'>
          <a href='#' className='navbar-item'>Log In</a>
        </div>
      </div>
    )
  }
}
