import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Spinner from '../spinner';

export default function UserProfile(props) {
  const [user, setUser] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const [loaded, setLoaded] = useState(false)

 useEffect(() => {
    axios.get(`/api/user/${props.match.params.id}/?include=avatar`)
      .then (res => {
        setUser(res.data.user)
        setAvatar(res.data.avatar)
        setLoaded(true)
      })
  }, [])


  if (loaded) {
    return (
      <div className='user-profile'>
        
      </div>
    )
  } else {
    return <Spinner/>
  }
}
