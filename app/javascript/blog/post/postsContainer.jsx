import React, { Component } from 'react'
import axios from 'axios';
import AuthorLink from '../authors/authorLink'
import PostPreview from './postPreview';

export default class PostsContainer extends Component {
  state = {
    posts: [],
    avatar: '/assets/default.png'
  }

  async componentDidMount() {  
    await axios.get(`/api/authors/${this.props.author.id}/posts/?include=avatar`)
      .then(res => {
        this.setState({posts: res.data.posts, avatar: res.data.avatar})
      }) 
  }

  // Renderers
  renderContent = () => {
    return this.state.posts.map((post, index) => {
      return <PostPreview {...post} key={index}/>
    })
  }

  render() {
    if (this.state.posts.length > 0) {
      return (
        <div className='post-container'>
          <div className='post-container-header'>
            { this.props.renderLink ? <AuthorLink author={this.props.author} avatar={this.state.avatar}/> : null }
          </div>
          <div className='post-container-content'>
            { this.renderContent() }
          </div>
        </div>
      )
    } else { return null }
  }
}
