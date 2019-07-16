import React, {useState, useEffect} from 'react'
import history from '../history'
import axios from 'axios'

export default function AuthorBox(props) {
  const [avatar, setAvatar] = useState('/assets/default.png') 
  
  useEffect(() => {
    axios.get(`/api/user/${props.id}/avatar`)
      .then(res => {
        setAvatar(res.data)
      })
  }, [])

  const openLink = () => {
    history.push(`/authors/${props.id}`)
  }


  let border
  if (gon.user !== null) { border = props.id === gon.user.id ? '1px solid white' : null }

  return (
    <div className='author-box' style={{border: border}} onClick={openLink}>
      <h2 className='author-box-name'>{props.username}</h2>
      <div className="author-box-img-container">
        <img className='author-box-img' src={avatar}/>
      </div>
      <div className='author-box-email'>{props.email}</div>
      <p className="author-box-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
    </div>
  )
}
