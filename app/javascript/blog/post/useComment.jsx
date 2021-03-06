import React, {useState, useEffect} from 'react'
import axios from 'axios';
import MakeComment from './makeComment';
import formatDate from './formatDate';

export default function UseComment(props) {
  const [avatar, setAvatar] = useState('/assets/default.png') 
  const [username, setUsername] = useState('Loading...')
  const [showReply, setShowReply] = useState(false)

  // Helpers
  useEffect(() => { 
    axios.get(`/api/user/${props.user_id}/?include=avatar`)
      .then(res => {
        setAvatar(res.data.avatar) 
        setUsername(res.data.user.username)
      })
  }, [])

  const deleteComment = () => {
    axios.delete(`/api/comments/${props.id}`).then(res => {
      location.reload()
    })
  }

  // Renderers
  const renderReply = () => {
    if(showReply) {
      return (
        <div className='comment-make-reply'>
          <MakeComment reply={true} parentCommentId={props.parentCommentId} parentCommentUser={username} postId={props.postId}/>
        </div>
      )
    } else {
      return null
    }
  }

  return (
    <div>
      <div className='comment-user'>
        <div className='comment-user-img-container'>
          <img className='comment-user-img' src={avatar}/>
        </div>
        <h4 className='comment-user-name'>{username}</h4>
        <div className='comment-timestamp'>{formatDate(props.created_at)}</div>
      </div>
      <p className='comment-content'>{props.content}</p>
      <div className='comment-action comment-reply-show' onClick={() => setShowReply(!showReply)}>Reply</div>
      {renderReply()}
      {props.reply ? '' : <div className='comment-action comment-replies-show' onClick={props.toggleHeight}>{props.renderReplyToggle()}</div>}
      <div className='comment-action comment-destroy' onClick={deleteComment}>Delete Comment</div>
    </div>
  )
}
