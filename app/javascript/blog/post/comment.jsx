import React, { Component } from 'react'
import AnimateHeight from 'react-animate-height';
import axios from 'axios';

import UseComment from './useComment';


export default class Comment extends Component {
  state = {
    height: 0,
    replies: null,
    replying: false,
  }

  // Helpers
  toggleHeight = () => {
    if (this.state.replies === null) {
      axios.get(`/api/comments/${this.props.id}/replies`).then(res => {
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
    if (this.state.replies !== null) {
      return this.state.replies.map((reply, index) => {
        return (
          <div className='comment-reply' key={index}>
            <UseComment {...reply} reply={true} parentCommentId={this.props.id} postId={this.props.postId}/>
          </div>
        )
      })
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
