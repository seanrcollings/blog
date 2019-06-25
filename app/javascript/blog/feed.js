import React, { Component } from 'react'
import PostPreview from './post/postPreview';

  
export default class Feed extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: null,
      subtitle: null,
      content: null,
      showPost: false,
    }
  }

  render() {
    return (
      <div className={`feed feed-${this.state.showPost ? 'lock': 'scroll'}`}>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 1'/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 2'/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 3'/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 4'/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 5'/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 6'/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 6'/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 6'/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 6'/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 6'/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 6'/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 6'/>
      </div>
    )
  }
}
