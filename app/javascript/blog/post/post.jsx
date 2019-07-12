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
      title: null,
      subtitle: null,
      content: null,
      id: null,
      user_id: null,
      authorData: {},
      comments: [],
      editing: false,
      extra: 'thread'
    }
  }

  // Helpers
  componentWillMount() {
    axios.get(`/posts/${this.props.match.params.id}`).then(res => {
      this.setState({...res.data}, () => {this.fetchUser()})
    })
  }

  fetchUser() {
    axios.get(`/authors/${this.state.user_id}`).then(res => {
      this.setState({authorData: res.data})
    })
  }

  deletePost = () => {
    axios.delete(`/posts/${this.state.id}`)
      .then(res => {
        history.push('/')
      })
  }

  editPost = event => {
    event.preventDefault()
    axios.put(`/posts/${this.state.id}`, { post: {
      title: document.getElementById('title').value,
      subtitle: document.getElementById('subtitle').value,
      content: document.getElementById('content').value,
    }})
    .then(res => {
      if(res.status === 200){ 
        this.setState({ ...res.data})
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

  handleScroll = () => {
    console.log('hi')
  }

  // Renderers
  renderPost = () => {
    if (this.state.editing){
      return (
        <div className='post'>
          { this.renderAdminControls() }
          <form className='post-edit'>
            <input id='title' className='post-edit-input' type='text' name='title' placeholder='Post Title' defaultValue={this.state.title} required/><br/>
            <input id='subtitle' className='post-edit-input' type='text' name='subtitle' placeholder='Post Subtitle' defaultValue={this.state.subtitle} required/><br/>
            <textarea id='content' className='post-edit-content' type='text' name='content' placeholder='Blog Post' defaultValue={this.state.content} required/><br/>
          </form>
        </div>
      )
    }
    else {
      if (this.state.title !== null) {
        return (
          <div className='post'>
            { this.renderAdminControls() }
            <div className='post-author'>
              <AuthorLink author={this.state.authorData.author} avatar={this.state.authorData.avatar} className={'post-author-link'}/>
            </div>
            <h2>{this.state.title}</h2>
            <h4>{this.state.subtitle}</h4>
            { this.renderContent() }
            <a className='post-close' href='/'>Close Post</a>
            <PostExtras extra={this.state.extra} comments={this.state.comments} id={this.state.id}/>
          </div>
        )
      } else {
        return(<Spinner/>)
      }
    }
  }

  renderContent = () => {
    if (this.state.content !== null) {
      const splitContent = this.state.content.split(/\r?\n/)
      return splitContent.map((paragraph, index) => {
        if (paragraph.length >= 1) {
          return <p key={index}>{paragraph}</p>
        } else {
          return <br key={index}/>
        }
      })
    }
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
    return (
      <div className='post-grid'>
        { this.renderPost() }
      </div>
    )
  }
}
