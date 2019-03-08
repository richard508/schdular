import React, { Component } from 'react'
import { connect } from "react-redux"
import {getPeople} from "../store/actions/scheduleActions"

class Scheduler extends Component {
  componentDidMount(){
    this.props.getPeople()
  }
  render() {
    return (
      <div className="appointment_card">
        {this.props.appointments && this.props.appointments.map((appointment, i) => (
          <div
            className="time_list"
            onClick={() => this.openTime(appointment._id)}
            key={i}
          >
            {appointment.isAvailable === true ? (
              appointment.time
            ) : (
              <div style={{backgroundColor: 'red'}}>{appointment.time}</div>
            )}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  return{
    appointments: state.appt.appointments
  } 
}

const mapDispatchToProps = dispatch => {
  return {
    getPeople: () => dispatch(getPeople())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler)