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
import Login from '../blog/user/login';
import SignUp from '../blog/user/signUp';
import PageLayout from '../blog/pageLayous';
import Authors from '../blog/authors/authors';
import Author from '../blog/authors/author';
import UserProfile from '../blog/user/userProfile';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
		<Router history={history}>
      <Switch>
        <PageLayout>
          <Route path='/' exact component={Home}/>
          
          <Route path='/new-post' exact component={NewPost}/> 
          <Route path='/posts/:id' component={Post}/>
          
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={SignUp}/>

          <Route path='/users/:id' component={UserProfile}/>

          <Route path='/authors/:id' component={Author}/>
          <Route path='/authors' exact component={Authors}/>
        </PageLayout>
      </Switch>
    </Router>,
    document.body.appendChild(document.createElement('div')),
  )
})
