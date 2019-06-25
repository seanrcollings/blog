import React, { Component } from 'react'
import axios from 'axios';

export default class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: null,
      subtitle: null,
      content: null
    }
  }

  componentDidMount() {
    axios.get(`/posts/${this.props.match.params.id}`).then(res => {
      this.setState({...res.data})
    })
  }

  render() {
    return (
      <div className='post'>
        <h2>{this.state.title}</h2>
        <h4>{this.state.subtitle}</h4>
        <p>{this.state.content}</p>
        <a href='/'>Close Post</a>
      </div>
    )
  }
}
