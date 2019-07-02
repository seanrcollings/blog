import React, { Component } from 'react';
import axios from 'axios';

import Feed from './feed/feed';
import Profile from './feed/profile';
import Post from './post/post';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [], // For rendering the feed
      post: {}, // For rendering a single post
      content: 'feed' // Checking what is supposed to be rendered
    }
  }

  // Helpers
  componentWillMount() {
    axios.get('/posts').then(res => {
      this.setState({ posts: res.data})
    })
  } 

  changeContent = (component, data) => {
    this.setState({ content: component, post: data})
  }

  // Renderers
  renderContent = () => {
    switch(this.state.content) {
      case 'post':
        return  <Post {...this.state.post} changeContent={this.changeContent}/>
      case 'feed':
        return <Feed posts={this.state.posts} changeContent={this.changeContent}/>
      default:
        return <Feed posts={this.state.posts} changeContent={this.changeContent}/>
    }
  }

  render() {
    return (
      <div className='home-grid'>
        <div className='home-grid-content'>
          <Profile/>
          { this.renderContent() }
        </div>
      </div>
    )
  }
}
