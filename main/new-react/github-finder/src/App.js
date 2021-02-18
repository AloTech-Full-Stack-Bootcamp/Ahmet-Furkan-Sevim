import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Search from './components/Search';
import Alert from './components/Alert';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Users from './components/Users';
import UserDatails from './components/UserDatails';
import GithubState from './context/github/githubState';
import AlertState from './context/alert/alertState';

import About from './components/About';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar title="GitHub Finder" />
          <Alert />
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <>
                  <Search />
                  <Users />
                </>
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/user/:login" component={UserDatails} />
          </Switch>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
