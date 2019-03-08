import axios from 'axios'

export const getPeople = () => {
  return (dispatch) => {
    axios.get('/api/appointments').then(res => {
      dispatch({type: 'GET_APPT',res})
    })
    .catch(error => {
      dispatch({type: 'ERROR_APPT', error})
    })
  }
}