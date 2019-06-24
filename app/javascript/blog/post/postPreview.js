import React, { Component } from 'react'


export default class PostPreview extends Component {
  render() {
    return (
      <div onClick={() => this.props.openPost(this.props.title, this.props.subtitle, this.props.content)} className='post'>
        <h2>{this.props.title}</h2>
        <h4>{this.props.subtitle}</h4>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
