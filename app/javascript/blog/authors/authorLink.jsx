import React, { Component } from 'react';
import history from '../history'

export default function AuthorLink(props) {
  
  const openAuthor = () => {
    history.push(`/authors/${props.author.id}`)
  }
  
  const {email, username, id} = {...props.author}
  return (
    <div className={`post-preview-header-author ${props.className}`} onClick={openAuthor} >
      <div className='post-preview-header-author-img-container'>
        <img className='post-preview-header-author-img' src={props.avatar}/>
      </div>
      <div className='post-preview-header-author-items'>
        <div className='post-preview-header-author-item'>{username}</div>
        <div className='post-preview-header-author-item'>{email}</div>
      </div>
    </div>
  )
}