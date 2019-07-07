import React, { Component } from 'react'
import PostsContainer from '../post/postsContainer'
  
export default function Feed(props) { 

  // Renderers
  const renderPosts = () => {
    return props.authors.map((author, index) => {
      return <PostsContainer author={author} key={index} renderLink={props.renderLink}/> 
    })
  }

  return (
    <div className='feed'>
      { renderPosts() }
    </div>
  )
}
