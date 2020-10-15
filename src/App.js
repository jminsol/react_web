import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import {Nav} from './components'

import {UserLogin, UserRegister, UserRemove, UserUpdate} from './container/user'
import {BoardCreate, BoardRead, BoardUpdate, BoardDelete} from './container/board'
import {Board, Home, Item, User} from './templates'

const App = () => <>
  <Router>
    <Nav/>
    <Switch>
      <Route exact path='/home' component={Home}></Route>
      <Redirect exact from = {'/'} to={'/home'}/>
      <Route exact path='/user' component={User}></Route>
      <Route exact path='/board' component={Board}></Route>
      <Route path='/item' component={Item}></Route>
      <Route path='/user/signup' component={UserRegister}></Route>
      <Route path='/user/login' component={UserLogin}></Route>
      <Route path='/user/update' component={UserUpdate}></Route>
      <Route path='/user/remove' component={UserRemove}></Route>

      <Route path='/board/create' component={BoardCreate}></Route>
      <Route path='/board/read' component={BoardRead}></Route>
      <Route path='/board/edit' component={BoardUpdate}></Route>
      <Route path='/board/delete' component={BoardDelete}></Route>


    </Switch>
  </Router>

</>

export default App
