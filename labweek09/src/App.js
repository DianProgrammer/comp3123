
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [student] = useState({
    studentId: '101475855',
    name: 'Kiana Sepasian',
    college: 'George Brown College, Toronto'
  });

  return (
    <div className="App">
      <div className="content-box">
        <img src={logo} className="App-logo" alt="React Logo" />

        <h1>Welcome to Fullstack Development - I</h1>
        <h2>React JS Programming Week09 Lab exercise</h2>

        <h3>{student.studentId}</h3>
        <h4>{student.name}</h4>
        <h5>{student.college}</h5>
      </div>
    </div>
  );
}

export default App;
