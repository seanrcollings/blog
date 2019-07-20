import React, { Component } from 'react'
import axios from 'axios';
import history from '../history'
import Spinner from '../spinner';
import PostExtras from './postExtras';
import AuthorLink from '../authors/authorLink';

export default class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: null,
      author: null,
      editing: false,
      extra: 'thread',
      loading: true
    }
  }

  // Helpers
  componentWillMount() {
    axios.get(`/api/posts/${this.props.match.params.id}/?include=author`).then(res => {
      this.setState({loading: false, post: res.data.post, author: res.data.author})
    })
  }

  deletePost = () => {
    axios.delete(`/api/posts/${this.state.id}`)
      .then(res => {
        history.push('/')
      })
  }

  editPost = event => {
    event.preventDefault()
    axios.put(`/api/posts/${this.state.post.id}`, { post: {
      title: document.getElementById('title').value,
      subtitle: document.getElementById('subtitle').value,
      content: document.getElementById('content').value,
    }})
    .then(res => {
      if(res.status === 200){ 
        this.setState({ post: res.data})
        this.swapMode()
      } else {
        window.alert('Something went wrong! ')
      }
    })
  }

  swapMode = () => {
    if (this.state.editing) {
      this.setState({ editing: false})
    } else{
      this.setState({ editing: true})
    }
  }

  // Renderers
  renderPost = () => {
    if (this.state.editing){
      return (
        <div className='post'>
          { this.renderAdminControls() }
          <form className='post-edit'>
            <input id='title' className='post-edit-input' type='text' name='title' placeholder='Post Title' defaultValue={this.state.post.title} required/><br/>
            <input id='subtitle' className='post-edit-input' type='text' name='subtitle' placeholder='Post Subtitle' defaultValue={this.state.post.subtitle} required/><br/>
            <textarea id='content' className='post-edit-content' type='text' name='content' placeholder='Blog Post' defaultValue={this.state.post.content} required/><br/>
          </form>
        </div>
      )
    }
    else {
      return (
        <div className='post'>
          { this.renderAdminControls() }
          <div className='post-author'>
            <AuthorLink author={this.state.author} avatar={this.state.author.avatar_url} className={'post-author-link'}/>
          </div>
          <h2>{this.state.post.title}</h2>
          <h4>{this.state.post.subtitle}</h4>
          { this.renderContent() }
          <a className='post-close' href='/'>Close Post</a>            
          <PostExtras extra={this.state.extra} postId={this.state.post.id} authorId={this.state.author.id}/>
        </div>
      )
    } 
  }

  renderContent = () => {
    const splitContent = this.state.post.content.split(/\r?\n/)
    return splitContent.map((paragraph, index) => {
      if (paragraph.length >= 1) {
        return <p key={index}>{paragraph}</p>
      } else {
        return <br key={index}/>
      }
    })
  }

  renderAdminControls = () => {
    if (gon.user !== null && gon.user.author){
      let editButtons;
      if(this.state.editing) {
        editButtons = (
        <span>
          <button className='post-admin-button' onClick={this.editPost}>Save Edits</button>
          <button className='post-admin-button' onClick={this.swapMode}>Discard Edits</button>
          <button className='post-admin-button' onClick={this.deletePost}>Delete Post</button>
        </span>
        ) 
      } else {
        editButtons = <button className='post-admin-button' onClick={this.swapMode}>Edit Post</button>
      }
      return(
        <div className='post-admin'>
          { editButtons }
        </div>
      )
    }
  }

  render() {
    if(this.state.loading) {
      return <Spinner/>
    } else {
      return (
        <div className='post-grid'>
          { this.renderPost() }
        </div>
      )
    }
  }
}
