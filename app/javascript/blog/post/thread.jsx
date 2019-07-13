import React, { Component } from 'react'
import axios from 'axios';

import Comment from './comment';
import MakeComment from './makeComment';

export default class Thread extends Component {
  state = { comments: [] }

  // Helpers
  componentWillMount() {
    axios.get(`/api/posts/${this.props.id}/comments`).then(res => {
      this.setState({ comments: res.data})
    })
  }

  // Renderers
  renderComments = () => {
    return this.state.comments.map((comment, index) => {
      return <Comment {...comment} key={index} postId={this.props.id}/>
    })
  }

  render() {
    return (
      <div className='thread'>
        <MakeComment reply={false} postId={this.props.id}/>
        {this.renderComments()}
      </div>
    )
  }
}
