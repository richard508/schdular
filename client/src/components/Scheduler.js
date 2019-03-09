import React, { Component } from 'react'
import { connect } from "react-redux"
import {getPeople} from "../store/actions/scheduleActions"
import BootModal from './Modal'

class Scheduler extends Component {
  state = {
    openModal: false,
    id: '',
    currentAppt: Object
  }
  componentDidMount(){
    this.props.getPeople()
  }

  openTime = (id) =>{
    const appt = this.props.appointments.find(appt => {
      return appt._id === id
    })
    this.setState({
      openModal: true,
      id,
      currentAppt: appt
    })
  }

  toggle = () =>{
    this.setState(prevState => ({
      openModal: !prevState.openModal
    }))
  }

  handleSubmit = (payload) => {
    console.log(payload)
    this.setState({
      openModal: false,
      id:'',
      currentAppt: {}
    })
  }

  render() {
    return (
      <div>
        <div className="appointment_times time_font">
          {this.props.appointments && this.props.appointments.map((appointment, i) => (
            <div
              className={appointment.isAvailable === true ? 'time' : 'time taken_time'}
              onClick={() => this.openTime(appointment._id)}
              key={i}
            >
              {appointment.time}
            </div>
          ))}
        <BootModal 
          show={this.state.openModal} 
          onHide={this.toggle} 
          currentAppt={this.state.currentAppt}
          handleSubmit={this.handleSubmit}
        />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    appointments: state.appt.appointments
  } 
}

const mapDispatchToProps = dispatch => {
  return {
    getPeople: () => dispatch(getPeople())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler)