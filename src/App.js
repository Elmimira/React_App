import React from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Navbar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
