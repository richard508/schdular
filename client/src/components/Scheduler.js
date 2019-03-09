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
            className={appointment.isAvailable === true ? 'time' : 'time taken_time'}
            onClick={() => this.openTime(appointment._id)}
            key={i}
          >
            {appointment.time}
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