import React, { Component } from 'react'
import axios from 'axios'

export default class Authors extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authors: []
    }
  }
  
  // Helpers
  componentWillMount() {
    axios.get('/authors/all')
      .then(res => {
        this.setState({authors: res.data})
      })
  }

  // Renderers
  renderAuthors = () => {
    return this.state.authors.map(author=> {
      return (
        <div key={author.id}>
          <a href={`/author/${author.id}`}>{author.email}</a>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='authors'>
        { this.renderAuthors() }
      </div>
    )
  }
}
