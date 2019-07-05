import React, { Component } from 'react';
import axios from 'axios';

import Feed from './feed/feed';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authors: []
    }
  }

  // Helpers
  componentWillMount() {
    axios.get('/authors/all').then(res => {
      this.setState({ authors: res.data})
    })
  } 

  render() {
    return (
      <div className='home'>
        <Feed authors={this.state.authors}/>
      </div>
    )
  }
}
