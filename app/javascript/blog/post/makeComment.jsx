import React, { Component } from 'react';
import axios from 'axios';

export default class MakeComment extends Component {
  
  submit = (e) => {
    
    e.preventDefault()
    const data = new FormData(e.target)
    axios.post('/api/comments', {comment : {
      content: this.props.reply ? this.props.parentCommentUser + ', ' + data.get('content'): data.get('content'),
      post_id: this.props.postId,
      user_id: gon.user.id,
      parent_comment_id: this.props.reply ? this.props.parentCommentId : null 
    }})
      .then(res => {
        if (res.status === 200) {
          this.props.addNewComment(res.data)
        } else {
          window.alert('Something Went Wrong')
        }
      })
  }
  
  render() {
    return (
      <form className='make-comment' onSubmit={this.submit}>
        <textarea className='make-comment-content' name='content' placeholder={this.props.reply ? `Reply to ${this.props.parentCommentUser}` : 'Leave a Comment'} required/>
        {gon.user !== null ? <input type='submit' className='make-comment-button' value='Comment'/> : <span className='make-comment-info'>You must be logged in to leave a comment</span>}
      </form>
    )
  }
}