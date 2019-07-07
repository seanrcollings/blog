import React, { Component } from 'react'
import axios from 'axios'
import Feed from '../feed/feed';
import Profile from '../feed/profile';
import Spinner from '../spinner';

export default class Author extends Component {
  constructor(props) {
    super(props)

    this.state = {
      author: {},
      avatar: '/assets/default',
      loaded: false
    }
  }
  
  // Helpers
  async componentWillMount() {
    await axios.get(`/authors/${this.props.match.params.id}`)
      .then(res => {
        this.setState({author: res.data.author, avatar: res.data.avatar, loaded: true})
      })
  }

  render() {
    return (
      <div className='author'>
        <div className='author-content'>
          <Profile author={this.state.author} avatar={this.state.avatar}/>
          {this.state.loaded ? <Feed authors={[this.state.author]} renderLink={false}/> : <Spinner/>}
        </div>
      </div>
    )
  }
}
