import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Chat from './components/Chat';
import Questionare from './components/Questionare';
import Signup from './components/Signup';
import Discovery from './components/Discovery';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/quest" element={<Questionare />}/>
          <Route exact path="/chat" element={<Chat />}/>
          <Route exact path="/signup" element={<Signup />}/>
          <Route exact path="/" element={<Discovery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
