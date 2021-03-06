import React, { useState } from 'react';
import Sidebar from "./Sidebar";
import './App.css';
import Chat from './Chat';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {

  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      <h1>WHATSAPP CLONE </h1>
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
        <Router>
        <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat/>
            </Route>
            <Route path="/">
              <Chat/>
            </Route> 
          </Switch>
        </Router>
      </div>
      )}
    </div>
  );
};


export default App;
