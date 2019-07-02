import React, { Component } from 'react'

export default class PostPreview extends Component {

  render() {
    let {title, subtitle, content, id} = {...this.props}
    const shortContent = content.split(/\r?\n/)[0] + '...' // Gets only the first paragraph and adds ... after it for the preview
    return (
      <div className='post-preview'>
        <a href={`/post/${id}`} className='post-preview-link'>
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
          <p>{shortContent}</p>
        </a>
      </div>
    )
  }
}
