import React, { Component } from 'react'

export default class PostPreview extends Component {

  render() {
    let {title, subtitle, content} = {...this.props}
    const shortContent = content.split(/\r?\n/)[0] + '...'
    return (
      <div className='post-preview'>
        <a onClick={() => this.props.changeContent('post', {title, subtitle, content})} className='post-preview-link'>
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
          <p>{shortContent}</p>
        </a>
      </div>
    )
  }
}
