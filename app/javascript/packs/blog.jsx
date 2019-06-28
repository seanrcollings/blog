import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom';

// Other
import history from '../blog/history'
import apiSetup from '../blog/apiSetup'
import main from '../../assets/stylesheets/main.scss'

// Components
import Home from '../blog/home'
import Post from '../blog/post/post'
import NewPost from '../blog/post/newPost';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
		<Router history={history}>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/post/new' component={NewPost}/> 
        <Route path='/post/:id' component={Post}/>
      </Switch>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
