import React, { Component } from 'react'
import axios from 'axios';

export default class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: null,
      subtitle: null,
      content: null
    }
  }

  // Helpers
  componentWillMount() {
    if(this.props.match !== undefined){
      axios.get(`/posts/${this.props.match.params.id}`).then(res => {
        this.setState({...res.data})
      })
    } else {
      let {title, subtitle, content} = {...this.props} 
      this.setState({ title, subtitle, content })
    }
  }

  // Renderers
  renderContent = () => {
    const splitContent = this.state.content.split(/\r?\n/)
    return splitContent.map((paragraph, index) => {
      if (paragraph.length >= 1) {
        return <p key={index}>{paragraph}</p>
      } else {
        return <br key={index}/>
      }
    })
  }

  render() {
    return (
      <div className='post'>
        <h2>{this.state.title}</h2>
        <h4>{this.state.subtitle}</h4>
        { this.renderContent() }
        <a href='/'>Close Post</a>
      </div>
    )
  }
}
