import React, { Component } from 'react'
import Navbar from './navbar'

export default function PageLayout(props) {
  return (
    <div className='page'>
      <Navbar/>
      <div className='page-content'>
        {props.children}
      </div>
    </div>
  )
}
