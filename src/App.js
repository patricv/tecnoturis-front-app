import React, {useState,useEffect} from 'react';
import { Link, Route, Switch } from 'wouter';

import Register from './pages/Register';
import LogIn from './pages/Login';
import Home from './pages/Home'
import HotelsPage from './pages/Hotels'
import HotelDetailsPage from './pages/HotelDetails'
import {setToken, setTokenTecnoturist} from './services/hotels'
import './App.css';


function App() {

  useEffect(() => {
    const userJSON = window.localStorage.getItem('user')
    if (userJSON) {
      const user = JSON.parse(userJSON)
      setToken(user.token)
    }
  }, [])

  useEffect(() => {
    const tokenJSON = window.localStorage.getItem('token')
    if (tokenJSON) {
      const token = JSON.parse(tokenJSON)
      setTokenTecnoturist(token.token)
    }
  }, [])

  return (
    <div>
      <Switch>
        <Route component={Home} path="/"></Route>
        <Route component={Register} path="/register"></Route>
        <Route component={LogIn} path="/login"></Route>
        <Route component={HotelsPage} path="/hotels"></Route>
        <Route component={HotelDetailsPage} path="/hotel/:id" />
      </Switch>
      
    </div>
  );
}

export default App;
