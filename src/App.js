import React, {useState} from 'react';
import { Link, Route, Switch } from 'wouter';

import Register from './pages/Register';
import './App.css';


function App() {

  return (
    <div>
      <Switch>
        <Route component={Register} path="/register"></Route>
      </Switch>
      
    </div>
  );
}

export default App;
