import React, { Component } from 'react'
import axios from 'axios'
import Feed from '../feed/feed';

export default class Author extends Component {
  constructor(props) {
    super(props)

    this.state = {
      author: {},
      posts: []
    }
  }
  
  // Helpers
  componentWillMount() {
    axios.get(`/authors/${this.props.match.params.id}`)
      .then(res => {
        this.setState({author: res.data})
      })
  }

  componentDidMount() {
    axios.get(`/authors/${this.props.match.params.id}/posts`)
      .then(res => {
        this.setState({ posts: res.data })
      })
  }

  render() {
    return (
      <div className='author'>
        <Feed posts={this.state.posts}/>
      </div>
    )
  }
}
