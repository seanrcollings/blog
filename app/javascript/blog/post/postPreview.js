import React, { Component } from 'react'

export default class PostPreview extends Component {

  render() {
    console.log(this.props)
    return (
      <div className='post-preview'>
        <a className='post-preview-link' href={`/post/${this.props.id}`}>
          <h2>{this.props.title}</h2>
          <h4>{this.props.subtitle}</h4>
          <p>{this.props.content}</p>
        </a>
      </div>
    )
  }
}
