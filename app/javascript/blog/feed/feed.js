import React, { Component } from 'react'
import axios from 'axios';

import PostPreview from '../post/postPreview'
  
export default class Feed extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      posts: []
    }
  }

  // Helpers
  componentWillMount() {
    axios.get('/posts').then(res => {
      this.setState({ posts: res.data})
    })
  } 


  // Renderers
  renderPosts = () => {
    return this.state.posts.map(post => {
      return (
        <PostPreview key={post.id} {...post} changeContent={this.props.changeContent}/>
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
