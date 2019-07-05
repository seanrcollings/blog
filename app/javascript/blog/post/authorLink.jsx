import React, { Component } from 'react';
import history from '../history'

export default function AuthorLink(props) {
  
  const openAuthor = () => {
    history.push(`/author/${props.author.id}`)
  }
  
  // const formatDate = () => {
  //   const date = new Date (props.createdAt)
  //   const day = date.getDay() 
  //   const month = date.getMonth()
  //   const year = date.getYear()
  //   return day + ' / ' + month //+ ' / ' + year
  // }
  
  const {email, username, id} = {...props.author}
  // const date = formatDate()
  return (
    <div  className='post-preview-header-author' onClick={openAuthor} >
      <img className='post-preview-header-author-image' src={props.avatar}/>
      <div className='post-preview-header-author-items'>
        <div className='post-preview-header-author-item'>{username}</div>
        <div className='post-preview-header-author-item'>{email}</div>
        {/* <div className='post-preview-header-author-item'>{date}</div> */}
      </div>
    </div>
  )
}