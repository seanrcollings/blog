import React, { Component } from 'react'
import Post from './post/post';

  
export default class Home extends Component {
  
  render() {
    return (
      <div className='home'>
        <Post title='Title' subtitle='Subtitle' content='Main Text'/>
        <Post title='Title' subtitle='Subtitle' content='Main Text'/>
        <Post title='Title' subtitle='Subtitle' content='Main Text'/>
        <Post title='Title' subtitle='Subtitle' content='Main Text'/>
        <Post title='Title' subtitle='Subtitle' content='Main Text'/>
        <Post title='Title' subtitle='Subtitle' content='Main Text'/>
      </div>
    )
  }
}
