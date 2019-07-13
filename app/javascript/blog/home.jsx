import React, { Component } from 'react';
import axios from 'axios';

import Feed from './feed/feed';
import Spinner from './spinner';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      authors: [],
      loaded: false
    }
  }

  // Helpers
  async componentDidMount() {
    await axios.get('/api/authors').then(res => {
      this.setState({ authors: res.data, loaded: true})
    })
  } 

  render() {
    return (
      <div className='home'>
        {this.state.loaded ? <Feed authors={this.state.authors} renderLink={true}/> : <Spinner/>}
      </div>
    )
  }
}
