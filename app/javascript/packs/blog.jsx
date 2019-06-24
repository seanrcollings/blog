import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom';

// Other
import history from '../blog/history'
import apiSetup from '../blog/apiSetup'
import main from '../../assets/stylesheets/main.scss'

// Components
import Feed from '../blog/feed'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
		<Router history={history}>
      <Switch>
        <Route path='/' exact component={Feed}/>
      </Switch>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
