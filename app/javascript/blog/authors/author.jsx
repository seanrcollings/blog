import React, { Component } from 'react'
import axios from 'axios'
import Feed from '../feed/feed';
import Profile from '../feed/profile';

export default class Author extends Component {
  constructor(props) {
    super(props)

    this.state = {
      author: {},
      posts: [],
      avatar: ''
    }
  }
  
  // Helpers
  componentWillMount() {
    axios.get(`/authors/${this.props.match.params.id}`)
      .then(res => {
        this.setState({author: res.data.author, avatar: res.data.avatar})
      })
  }

  componentDidMount() {
    axios.get(`/authors/${this.props.match.params.id}/posts`)
      .then(res => {
        this.setState({ posts: res.data })
      })
  }

  render() {
    return (
      <div className='author'>
        <div className='author-content'>
          {/* <Profile author={this.state.author} avatar={this.state.avatar}/> */}
          {/* <Feed posts={this.state.posts} author={this.state.author} avatar={this.state.avatar}/> */}
        </div>
      </div>
    )
  }
}
