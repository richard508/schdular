import React, { Component } from 'react'
import { connect } from "react-redux"
import {getPeople} from "../store/actions/scheduleActions"

class Scheduler extends Component {
  componentDidMount(){
    this.props.getPeople()
  }

  openTime = (id) =>{
    console.log(id)
  }
  render() {
    return (
      <div className="appointment_times time_font">
        {this.props.appointments && this.props.appointments.map((appointment, i) => (
          <div
            className="time"
            onClick={() => this.openTime(appointment._id)}
            key={i}
          >
            {appointment.isAvailable === true ? (
              appointment.time
            ) : (
              <div className="taken_time">{appointment.time}</div>
            )}
          </div>
        ))}
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler)