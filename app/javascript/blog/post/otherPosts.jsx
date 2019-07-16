import React, { useState, useEffect } from 'react'
import axios from 'axios';

import PostPreview from './postPreview';

export default function OtherPosts(props) {
  const [author, setAuthor] = useState(props.authorId)
  const [timePeriod, setTimePeriod] = useState('day')
  // const [stat, setStat] = useState('most-popular')
  const [posts, setPosts] = useState([])
  
  // Helpers
  useEffect(() => {
    axios.get(`/api/posts/${author}/sort/?author=${author}&time=${timePeriod}`) // &stat=${stat}
      .then(res => {
        setPosts(res.data)
      })
  }, [])

  const sort = (e) => {
    e.preventDefault()
    axios.get(`/api/posts/${author}/sort/?author=${author}&time=${timePeriod}`) // &stat=${stat}
      .then(res => {
        console.log(timePeriod)
        setPosts(res.data)
      })
  }

  // Renderers
  const renderContent = () => {
    return posts.map((post, index) => {
      return <PostPreview {...post} key={index}/>
    })
  }

  return (
    <div className='other-posts'>
      <form className='other-posts-form'>
        <h4>Sort By</h4>
        <select className='other-posts-select' value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option className='other-posts-option' value={props.authorId}>This Author</option>
          <option value="all">All Authors</option>
        </select>
        <select className='other-posts-select' value={timePeriod} onChange={(e) => setTimePeriod(e.target.value)}>
          <option value="day">Last 24 Hours</option>
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
          <option value="year">Last Year</option>
        </select>
        {/* <select className='other-posts-select' value={stat} onChange={(e) => setStat(e.target.value)}>
          <option value="most_popular">Most Popular</option>
          <option value="most_viewed">Most Viewed</option>
        </select> */}
        <button onClick={sort}>Sort</button>
      </form>
      <div className='other-posts-content'>
        { renderContent() }
      </div>
    </div>
  )
}