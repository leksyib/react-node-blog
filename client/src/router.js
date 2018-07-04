import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Posts from './components/posts'
import Signin from './components/signin'
import Post from './components/post'
import Dashboard from './components/dashboard'

export const Router = () => (
    <div>
      <Switch>
        <Route exact path="/" component={ Posts } />
        <Route path="/signin" exact component={ Signin } />
        <Route path="/post" exact component={ Post } />
        <Route path="/dashboard" exact component= { Dashboard } />
        <Route path="/businesses/edit/:id" exact component={ Posts } />
        <Route path="/dashboard" exact component={ Posts } />
        <Route path="/signin" exact component={ Posts } />
      </Switch>
    </div>
);

export default Router