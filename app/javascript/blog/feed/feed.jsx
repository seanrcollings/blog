import React, { Component } from 'react'
import PostsContainer from '../post/postsContainer'
  
export default class Feed extends Component { 

  // Renderers
  renderPosts = () => {
    console.log(this.props.authors)
    return this.props.authors.map((author, index) => {
      return <PostsContainer author={author} key={index}/> 
    })
  }

  render() {
    return (
      <div className='feed'>
        { this.renderPosts() }
      </div>
    )
  }
}
