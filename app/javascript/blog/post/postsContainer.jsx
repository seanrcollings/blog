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
    let posts, avatar;
    await axios.get(`/authors/${this.props.author.id}/posts`)
      .then(res => {
        posts = res.data
      })
    if (this.props.renderLink){
      await axios.get(`/user/${this.props.author.id}/avatar`)
      .then(res => {
        avatar = res.data
      })
    }
    this.setState({posts, avatar})
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
