import './App.css';
import React, {Component} from 'react';
import Main from './components/main/main';
import Header from './components/header/header'
import {BrowserRouter,Link, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route path="/"><Header></Header><Main></Main></Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
