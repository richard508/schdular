const initState = {
  appointments: null
}

function updateAppt (appointments, appt, person) {
  const newAppt = appointments.map(appointment => (
    appointment._id === appt._id 
    ? {...appointment, isAvailable: false, person: person} 
    : appointment))
    return newAppt
}

function updatePerson (appointments, data) {
  const updatedPerson = appointments.map(appointment => (
    appointment.person && appointment.person._id === data._id 
    ? {...appointment, 
      person: data
      } 
    : appointment))
    return updatedPerson
}

function cancelAppt (appointments, data) {
  const cancelAppt = appointments.map(appointment => (
    appointment._id === data._id 
    ? data
    : appointment))
    return cancelAppt
}

function updateTime (appointments, oldData, newData) {
  const updateTime = appointments.map(appointment => {
    if(appointment._id === oldData._id){
      return oldData
    } else if(appointment._id === newData._id){
      return newData
    } else {
      return appointment
    }
  })
  return updateTime
}

const scheduleReducer = (state = initState, action) =>{
  switch(action.type){
    case 'GET_APPT':
      return {
        appointments: action.data
      }
    case 'UPDATE_APPT':
      return {
        ...state,
        appointments: [...updateAppt(state.appointments, action.data, action.personPayload)]
      }
    case 'UPDATE_PERSON':
      return {
        ...state,
        appointments: [...updatePerson(state.appointments, action.data)]
      }
    case 'CANCEL_APPT':
      return {
        ...state,
        appointments: [...cancelAppt(state.appointments, action.data)]
      }
    case 'UPDATE_TIME':
      return {
        ...state,
        appointments: [...updateTime(state.appointments, action.oldData, action.newData)]
      }
    case 'ERROR_APPT':
      console.log('Error getting appointments')
      return state
    default:
      return state
  }
}

export default scheduleReducer