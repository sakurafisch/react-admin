import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';
import './App.css';

import Home from './views/Home'
import About from './views/About'

export default function App() {
  return (
    <HashRouter>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={About} path="/about" />
      </Switch>
    </HashRouter>
  );
}
