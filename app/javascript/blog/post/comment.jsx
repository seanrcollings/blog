import React, { Component } from 'react'
import AnimateHeight from 'react-animate-height';
import axios from 'axios';

import UseComment from './useComment';


export default class Comment extends Component {
  state = {
    height: 0,
    replying: false,
    replies: []
  }

  // Helpers

  toggleHeight = () => {
    if (this.state.replies.length === 0) {
      axios.get(`/comments/${this.props.id}/replies`).then(res => {
        this.setState({replies: res.data})
      })
    }

    if (this.state.height === 0) {
      this.setState({height: 'auto'})
    } else {
      this.setState({ height: 0})
    }
  }

  // // Renderers
  renderReplies = () => {
    if (this.state.replies.length !== 0) {
      return this.state.replies.map((comment, index) => {
        return (
          <div className='comment-reply' key={index}>
            <UseComment {...comment} reply={true} parentCommentId={this.props.id} postId={this.props.postId}/>
          </div>
        )
      })
    } else {
      return (<h5>No Replies</h5>)
    }
  }

  renderReplyToggle = () => {
    if (this.state.height === 0) {
      return 'Show Replies'
    } else {
      return 'Hide Replies'
    }
  }

  

  render() {
    return (
      <div className='comment'>
        <UseComment {...this.props} renderReplyToggle={this.renderReplyToggle} toggleHeight={this.toggleHeight} reply={false}   parentCommentId={this.props.id}/>
        <AnimateHeight height={this.state.height} duration={200}>
          <div className='comment-replies'>{this.renderReplies()}</div>
        </AnimateHeight>
      </div>
    )
  }
}
