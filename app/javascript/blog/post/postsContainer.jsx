import React, { Component } from 'react'
import axios from 'axios';
import AuthorLink from '../post/authorLink'
import PostPreview from './postPreview';

export default class PostsContainer extends Component {
  state = {
    posts: [],
    avatar: '/assets/default.png'
  }

  componentWillMount() {
    axios.get(`/authors/${this.props.author.id}/posts`)
      .then(res => {
        this.setState({posts: res.data})
      })
  }

  componentDidMount() {
    axios.get(`/user/${this.props.author.id}/avatar`)
      .then(res => {
        this.setState({avatar: res.data})
      })
  }

  // Renderers
  renderContent = () => {
    return this.state.posts.map((post, index) => {
      return <PostPreview {...post} key={index}/>
    })
  }

  render() {
    return (
      <div className='post-container'>
        <div className='post-container-header'>
          <AuthorLink author={this.props.author} avatar={this.state.avatar}/>
        </div>
        <div className='post-container-content'>
          { this.renderContent() }
        </div>
      </div>
    )
  }
}
