import React, { Component } from 'react'
import axios from 'axios';

import Comment from './comment';
import MakeComment from './makeComment';
import Spinner from '../spinner';

export default class Thread extends Component {
  state = { comments: null, loading: true }

  // Helpers
  componentWillMount() {
    axios.get(`/api/comments/${this.props.postId}`).then(res => {
      this.setState({ comments: res.data, loading: false})
    })
  }

  addNewComment = (newComment) => {
    this.setState({comments:  [newComment, ...this.state.comments]})
  }

  // Renderers
  renderComments = () => {
    return this.state.comments.map((comment, index) => {
      return <Comment {...comment} key={index} postId={this.props.postId}/>
    })
  }

  render() {      
    if (this.state.loading) {
      return <Spinner/>
    } else {
      return (
        <div className='thread'>
          <MakeComment reply={false} postId={this.props.postId} addNewComment={this.addNewComment}/>
          {this.renderComments()}
        </div>
      )
    }
  }
}
