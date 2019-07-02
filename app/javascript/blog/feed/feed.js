import React, { Component } from 'react'
import PostPreview from '../post/postPreview'
  
export default class Feed extends Component { 

  // Renderers
  renderPosts = () => {
    return this.props.posts.map(post => {
      return (
        <PostPreview key={post.id} {...post}/>
      )
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
