import React, { Component } from 'react'

export default class PostOverlay extends Component {
  render() {
    return (
      <div className='post-overlay-wrapper'>
        <div className='post-overlay'>
          <h2>{this.props.title}</h2>
          <h4>{this.props.subtitle}</h4>
          <p>{this.props.content}</p>
          <button onClick={this.props.closePost}>Close Post</button>
        </div>
      </div>
    )
  }
}
