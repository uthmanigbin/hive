import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Chat from './components/Chat';
import Questionare from './components/Questionare';
import Discovery from './components/Discovery';
import Profile from './components/Profile';
import Login from './components/userAuth/login';
import Register from './components/userAuth/registration';
import Reset from './components/userAuth/reset'
import Dashboard from './components/userAuth/dashboard';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/profile" element={<Profile />}/>
          <Route exact path="/quest" element={<Questionare />}/>
          <Route exact path="/chat" element={<Chat />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/register" element={<Register />}/>
          <Route exact path="/reset" element={<Reset />}/>
          <Route exact path="/" element={<Discovery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
