import React from 'react'

export default function Profile() {
    return (
      <div className='profile'>
        <img className='profile-img' src='/assets/seancollings.png'/>
        <h3 className='profile-name'>Sean Collings</h3>
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
