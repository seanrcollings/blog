import React from 'react'

export default function Profile(props) {
    return (
      <div className='profile'>
        <div className='profile-img-container'>
          <img className='profile-img' src={props.avatar}/>
        </div>
        <h3 className='profile-name'>{props.author.username}</h3>
        <h4 className='profile-name'>{props.author.email}</h4>
        {/* <div className='profile-links'>
          <a href='https://github.com/seanrcollings'>GitHub</a> | 
          <a href='https://seanrcollings.zapto.org'>Pi Site</a> | 
          <a href='https://moonshiver.herokuapp.com'>Moonshiver</a>
        </div> */}
        { gon.user !== null && gon.user.id === props.author.id ? <button>Edit</button> : null}
      </div>
    )
  }
