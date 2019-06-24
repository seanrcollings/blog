import React, { Component } from 'react'


export default class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      class: 'post-preview'
    }
  }

  swapClass = () => {
    if (this.state.class === 'post-preview') {
      this.setState({ class: 'post-show' })
    } else {
      this.setState({ class: 'post-preview' })
    }
  }

  render() {
    return (
      <div onClick={() => this.swapClass()} className={`post ${this.state.class}`}>
        <h2>{this.props.title}</h2>
        <h4>{this.props.subtitle}</h4>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
