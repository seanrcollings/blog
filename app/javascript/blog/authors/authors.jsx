import React, { Component } from 'react'
import axios from 'axios'
import AuthorBox from './authorBox';

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
        <AuthorBox {...author} key={author.id}/>
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
