import React, { Component } from 'react'
import './App.css'
import Schedular from './components/Schedular'

class App extends Component {
  render() {
    return (
      <div className="App schedule">
        <h2 className="appointment">Select An Appointment</h2>
        <Schedular />
      </div>
    );
  }
}

export default App
