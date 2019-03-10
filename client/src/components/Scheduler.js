import React, { Component } from 'react'
import { connect } from "react-redux"
import {getPeople, updateAppt} from "../store/actions/scheduleActions"
import BootModal from './Modal'

class Scheduler extends Component {
  state = {
    openModal: false,
    id: '',
    currentAppt: Object,
    first_name: '',
    last_name: '',
    phone: ''
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
      phone: appt.person ? appt.person.phone : ''
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
      id:'',
      currentAppt: Object
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
          handleChange={this.handleChange}
          first_name={this.state.first_name}
          last_name={this.state.last_name}
          phone={this.state.phone}
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
    updateAppt: (id, payload) => dispatch(updateAppt(id, payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scheduler)