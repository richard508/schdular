import React, { Component } from 'react'
import './App.css'
import Scheduler from './components/Scheduler'

class App extends Component {
  render() {
    return (
      <div className="App schedule">
        <h2 className="appointment">Select An Appointment</h2>
        <Scheduler />
      </div>
    );
  }
}

export default App
