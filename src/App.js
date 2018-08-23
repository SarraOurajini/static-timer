import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <div className="time">00:30:00</div>
      <div className="hour-min-sec">
        <div>Hour</div>
        <div>Minute</div>
        <div>Second</div>
      </div>
    </div>    
    );
  }
}

export default App;
