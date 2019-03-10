import React, { Component } from 'react'
import { connect } from "react-redux"
import {getPeople, updateAppt, updatePerson} from "../store/actions/scheduleActions"
import BootModal from './Modal'

class Scheduler extends Component {
  state = {
    openModal: false,
    id: '',
    first_name: '',
    last_name: '',
    phone: '',
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
      first_name: appt.person ? appt.person.first_name : '',
      last_name: appt.person ? appt.person.last_name : '',
      phone: appt.person ? appt.person.phone : '',
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
      [e.target.name]: e.target.value
    })
  }

  handleUpdate = () => {
    const appt = this.props.appointments.find(appt => {
      return appt._id === this.state.id
    })
    const personID = appt.person._id
    const payload = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone: this.state.phone
    }
    this.props.updatePerson(personID, payload)
    this.setState({openModal: false})
  }

  handleSubmit = () => {
    const id = this.state.id
    const payload = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone: this.state.phone
    }
    this.props.updateAppt(id, payload)
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
          handleUpdate={this.handleUpdate}
          first_name={this.state.first_name}
          last_name={this.state.last_name}
          phone={this.state.phone}
          isAvailable={this.state.isAvailable}
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