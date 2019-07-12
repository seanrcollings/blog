import React, { Component } from 'react'
import history from '../history'

export default class PostPreview extends Component {
  
  // Helpers
  getShortContent = () => { // Returns a piece of the start of the post
    let shortContent = this.props.content.split(/\r?\n/)[0] // By default it's just the first pargraph
    if (shortContent.length === this.props.content.length && shortContent.length >= 500) { // But if the whole post is only one paragraph, it shortens it down a bit
      shortContent = shortContent.slice(0, shortContent.length / 2)
    }
    return shortContent + '...'
  }

  openPost = () => {
    history.push(`/post/${this.props.id}`)
  }

  render() {
    const { title, subtitle } = { ...this.props }
    const shortContent = this.getShortContent()
    return (
      <div className='post-preview'>
        <div className='post-preview-text' onClick={this.openPost}>
          <h2>{title}</h2>  
          <h4>{subtitle}</h4>
          <p>{shortContent}</p>
        </div>
      </div>
    )
  }
}