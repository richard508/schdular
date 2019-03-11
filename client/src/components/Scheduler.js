import React, { Component } from 'react'
import { connect } from "react-redux"
import {getAppt, updateAppt, updatePerson, cancelAppt} from "../store/actions/scheduleActions"
import BootModal from './Modal'

class Scheduler extends Component {
  state = {
    openModal: false,
    id: '',
    currentAppt: Object,
    isAvailable: Boolean,
    availableTimes: Array
  }
  componentDidMount(){
    this.props.getAppt()
  }

  openTime = (id) =>{
    const appt = this.props.appointments.find(appt => {
      return appt._id === id
    })
    const availTimes = this.props.appointments.filter(allAppt => {
      return allAppt.isAvailable === true && allAppt._id !== appt._id
    })
    const availableTimes = [appt, ...availTimes]
    
    this.setState({
      openModal: true,
      id,
      currentAppt: appt.person ? appt.person : Object,
      isAvailable: appt.isAvailable,
      availableTimes
    })
  }

  toggle = () =>{
    this.setState(prevState => ({
      openModal: !prevState.openModal
    }))
  }

  handleChange = (e) => {
    this.setState({
      currentAppt:{
        ...this.state.currentAppt,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const id = this.state.id
    const appt = this.props.appointments.find(appt => {
      return appt._id === id
    })
    const payload = this.state.currentAppt
    if (appt.person){
      const personID = appt.person._id
      this.props.updatePerson(personID, payload)
    } else this.props.updateAppt(id, payload)

    this.setState({
      openModal: false,
      id:''
    })
  }

  handleCancel = (e) => {
    e.preventDefault()
    const id = this.state.id
    const appt = this.props.appointments.find(appt => {
      return appt._id === id
    })
    const pid = appt.person._id
    delete appt.person
    appt.isAvailable = true
    this.props.cancelAppt(pid, appt)
    this.setState({
      openModal: false,
      id:''
    })
  }

  timeChange = (e) => {
    e.preventDefault()

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
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          isAvailable={this.state.isAvailable}
          currentAppt={this.state.currentAppt}
          handleCancel={this.handleCancel}
          availableTimes={this.state.availableTimes}
          timeChange={this.timeChange}
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
    getAppt: () => dispatch(getAppt()),
    updateAppt: (id, payload) => dispatch(updateAppt(id, payload)),
    updatePerson: (id, payload) => dispatch(updatePerson(id, payload)),
    cancelAppt: (pid, appt) => (dispatch(cancelAppt(pid, appt)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler)