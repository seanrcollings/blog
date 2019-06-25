import React, { Component } from 'react'
import axios from 'axios'

export default class NewPost extends Component {

  submit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    axios.post('/posts', {
      post: {
        title: data.get('title'),
        subtitle: data.get('subtitle'),
        content: data.get('content')
      }
    })
    .then(res => {
      console.log(res.data)
    })
  }

  render() {
    return (
      <form onSubmit={this.submit} className='new-post'>
        <input className='new-post-input' type='text' name='title' placeholder='Post Title' required/><br/>
        <input className='new-post-input' type='text' name='subtitle' placeholder='Post Subtitle' required/><br/>
        <textarea className='new-post-content' name='content' placeholder='Blog Post' required/><br/>
        <input type='submit' className='new-post-button' value='Submit'/>
      </form>
    )
  }
}
