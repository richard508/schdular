const initState = {}
const scheduleReducer = (state = initState, action) =>{
  switch(action.type){
    case 'GET_APPT':
      console.log(action)
      return {
        appointments: [...state.appointments, action.survey]
      }
    case 'ERROR_APPT':
      console.log('Error getting appointments')
      return state
    default:
      return state
  }
}

export default scheduleReducer