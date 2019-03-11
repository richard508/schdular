import React, { Component } from 'react'
import { connect } from "react-redux"
import {getPeople, updateAppt, updatePerson} from "../store/actions/scheduleActions"
import BootModal from './Modal'

class Scheduler extends Component {
  state = {
    openModal: false,
    id: '',
    currentAppt: Object,
    isAvailable: Boolean
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
      currentAppt: appt.person ? appt.person : Object,
      isAvailable: appt.isAvailable
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
    getPeople: () => dispatch(getPeople()),
    updateAppt: (id, payload) => dispatch(updateAppt(id, payload)),
    updatePerson: (id, payload) => dispatch(updatePerson(id, payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler)