import React, {useState, useEffect} from 'react'
import axios from 'axios';
import MakeComment from './makeComment';

export default function UseComment(props) {
  const [avatar, setAvatar] = useState('/assets/default.png') 
  const [username, setUsername] = useState('Loading...')
  const [showReply, setShowReply] = useState(false)


  useEffect(() => {
    axios.get(`/user/${props.user_id}/avatar`) 
      .then(res => {
        setAvatar(res.data)
      })
    axios.get(`/user/${props.user_id}`)
      .then(res => {
        setUsername(res.data.username) 
      })
  }, [])

  const formatDate = () => {
    const date = new Date (props.created_at)
    const day = date.getDate() 
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime + ' ' + day + '/' + month + '/' + year 
  }

  const renderReply = () => {
    console.log(props.parentCommentId)
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
        <div className='comment-timestamp'>{formatDate()}</div>
      </div>
      <p className='comment-content'>{props.content}</p>
      <div className='comment-action comment-reply-show' onClick={() => setShowReply(!showReply)}>Reply</div>
      {renderReply()}
      {props.reply ? '' : <div className='comment-action comment-replies-show' onClick={props.toggleHeight}>{props.renderReplyToggle()}</div>}
    </div>
  )
}
