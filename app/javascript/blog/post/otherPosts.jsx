import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function OtherPosts() {
  const [author, setAuthor] = useState('this author')
  const [timePeriod, setTimePeriod] = useState('this author')

  useEffect(() => {
    //  axios.get()
  })

  return (
    <div className='other-posts'>
      <form className='other-posts-form'>
        <select className='other-posts-select' value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="this-author">This Author</option>
          <option value="any-author">All Authors</option>
        </select>
        <select className='other-posts-select' value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)}>
          <option value="24-hours">Last 24 Hours</option>
          <option value="last-week">Last Week</option>
          <option value="all-time">All Time</option>
        </select>
      </form>
    </div>
  )
}
