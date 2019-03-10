const initState = {
  appointments: null
}

function updateAppt (appointments, data) {
  const newAppt = appointments.map(appointment => (
    appointment._id === data._id 
    ? {...appointment, isAvailable: false} 
    : appointment))
    return newAppt
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
        appointments: [...updateAppt(state.appointments, action.data)]
      }
    case 'ERROR_APPT':
      console.log('Error getting appointments')
      return state
    default:
      return state
  }
}

export default scheduleReducer