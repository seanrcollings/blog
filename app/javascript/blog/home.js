import React, { Component } from 'react'
import Feed from './feed/feed';
import Profile from './feed/profile';
import Post from './post/post';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: <Feed changeContent={this.changeContent}/>
    }
  }

  changeContent = (component, data) => {
    switch(component) {
      case 'post':
        this.setState({ content: <Post {...data} changeContent={this.changeContent}/>  })
        break;
      case 'feed':
        this.setState ({content: <Feed changeContent={this.changeContent}/>})
        break;
      default:
        this.setState ({content: <Feed changeContent={this.changeContent}/>})
    }
  }

  render() {
    return (
      <div className='home-grid'>
        <Profile/>
          {this.state.content}
      </div>
    )
  }
}
