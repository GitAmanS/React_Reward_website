import React, { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/Auth.js';
import Challenges from './components/Challenges.js';
import Rewards from './components/Rewards.js';
import Challenge from './components/Challenge.js'
import Navbar from './components/Navbar.js';
const AuthContext = createContext(null);

const App = () => {
  const [authState, setAuthState] = useState(null); // User authentication state

  return (
    <AuthContext.Provider value={authState}>
      <div className='bg-black min-h-screen'>
        <Navbar/>
        <Router>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/challenges/:challengeId" element={<Challenge />} />
            <Route path="/rewards" element={<Rewards />} />
          </Routes>
        </Router>
      </div>

    </AuthContext.Provider>
  );
};

export default App;
