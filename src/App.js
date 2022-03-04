import React, {useState} from 'react';
import { Link, Route, Switch } from 'wouter';

import Register from './pages/Register';
import Home from './pages/Home'
import './App.css';


function App() {

  return (
    <div>
      <Switch>
        <Route component={Home} path="/"></Route>
        <Route component={Register} path="/register"></Route>
      </Switch>
      
    </div>
  );
}

export default App;
