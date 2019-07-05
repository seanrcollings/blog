import React from 'react'

export default function Profile(props) {
    return (
      <div className='profile'>
        <img className='profile-img' src={props.avatar}/>
        <h3 className='profile-name'>{props.author.username}</h3>
        <div className='profile-links'>
          <a href='https://github.com/seanrcollings'>GitHub</a> | 
          <a href='seanrcollings.zapto.org'>Pi Site</a> | 
          <a href='https://moonshiver.herokuapp.com'>Moonshiver</a>
        </div>
        {/* <ul>
          <li>Web Developer</li>
          <li>Programmer</li>
          <li>IT Technician</li>
          <li>USU Student</li>
        </ul> */}
      </div>
    )
  }
