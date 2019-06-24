import React, { Component } from 'react'
import PostPreview from './post/postPreview';
import PostOverlay from './post/postOverlay';

  
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
  
  // Helpers
  openPost = (title, subtitle, content) => {
    this.setState({ title, subtitle, content, showPost: true})
  }

  closePost = () => {
    this.setState({showPost: false})
  }

  // Renderers
  renderFullPost = () => {
    const { title, subtitle, content } = {...this.state}
    if(this.state.showPost) {
      return (
        <PostOverlay
          title = { title }
          subtitle = { subtitle }
          content = { content }
          closePost = { this.closePost }
        />
      )
    }
  }

  render() {
    return (
      <div className={`feed feed-${this.state.showPost ? 'lock': 'scroll'}`}>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 1' openPost={this.openPost}/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 2' openPost={this.openPost}/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 3' openPost={this.openPost}/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 4' openPost={this.openPost}/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 5' openPost={this.openPost}/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 6' openPost={this.openPost}/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 6' openPost={this.openPost}/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 6' openPost={this.openPost}/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 6' openPost={this.openPost}/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 6' openPost={this.openPost}/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 6' openPost={this.openPost}/>
        <PostPreview title='Title' subtitle='Subtitle' content='Main Text 6' openPost={this.openPost}/>
        { this.renderFullPost() }
      </div>
    )
  }
}
