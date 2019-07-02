import React, { Component } from 'react';
import axios from 'axios';

import Feed from './feed/feed';
import Profile from './feed/profile';
import Post from './post/post';

export default class Home extends Component {
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

  render() {
    return (
      <div className='home-grid'>
        <div className='home-grid-content'>
          <Profile/>
          <Feed posts={this.state.posts}/>
        </div>
      </div>
    )
  }
}
