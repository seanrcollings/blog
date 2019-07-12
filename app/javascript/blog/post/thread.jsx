import React, { Component } from 'react'
import Comment from './comment';
import MakeComment from './makeComment';

export default class Thread extends Component {
  
  renderComments = () => {
    return this.props.comments.map((comment, index) => {
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
