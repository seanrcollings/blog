import React, { Component } from 'react'
import axios from 'axios';

import PostPreview from './postPreview';
import Spinner from '../spinner';

export default class OtherPosts extends Component {
  state = {
    author: this.props.authorId,
    time: 'day',
    posts: null,
    loaded: false
  }
  
  // Helpers
  
  componentDidMount = () => { this.sort() } 

  setAuthor = (e) => { 
    this.setState({ author: e.target.data }, () => {
      this.sort()
    })
  }

  setTime = (e) => { 
    this.setState({ time: e.target.data }, () => {
      this.sort()
    })
  }

  sort = () => {
    axios.get(`/api/posts/${this.state.author}/sort/?author=${this.state.author}&time=${this.state.time}`) // &stat=${stat}
      .then(res => {
        this.setState({ posts: res.data, loaded: true})
      })
  }

  // Renderers
  renderContent = () => {
    if (this.state.loaded) {
      if (this.state.posts.length > 0) {
        return this.state.posts.map((post, index) => {
          return <PostPreview {...post} key={index}/>
        })
      } else {
        return <div className='other-posts-none'>No posts match your filters</div>
      }
    } else {
      return <Spinner/>
    }
  }

  render() {
    return (
      <div className='other-posts'>
        <div className='other-posts-form'>
          <div>Sort By</div>
          <select className='other-posts-select' value={this.state.author} onChange={this.setAuthor}>
            <option className='other-posts-option' value={this.props.authorId}>This Author</option>
            <option value="all">All Authors</option>
          </select>
          <select className='other-posts-select' value={this.state.time} onChange={this.setTime}>
            <option value="day">Last 24 Hours</option>
            <option value="week">Last Week</option>
            <option value="month">Last Month</option>
            <option value="year">Last Year</option>
          </select>
          {/* <select className='other-posts-select' value={stat} onChange={(e) => setStat(e.target.value)}>
            <option value="most_popular">Most Popular</option>
            <option value="most_viewed">Most Viewed</option>
          </select> */}
          {/* <button onClick={sort}>Sort</button> */}
        </div>
        <div className='other-posts-content'>
          { this.renderContent() }
        </div>
      </div>
    )
  }
}