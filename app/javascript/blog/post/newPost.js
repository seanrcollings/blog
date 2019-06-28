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
      <form onSubmit={this.submit} className='post-new'>
        <h2>Write up a new Blog Post here</h2>
        <h4>Possibly add images and link functionality</h4>
        <input className='post-new-input' type='text' name='title' placeholder='Post Title' required/><br/>
        <input className='post-new-input' type='text' name='subtitle' placeholder='Post Subtitle' required/><br/>
        <textarea className='post-new-content' type='text' name='content' placeholder='Blog Post' required/><br/>
        <input type='submit' className='post-new-button' value='Submit'/>
      </form>
    )
  }
}
