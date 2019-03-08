import axios from 'axios'

export const getPeople = () => {
  return (dispatch) => {
    axios.get('/api/appointments').then(res => {
      const data = res.data
      dispatch({type: 'GET_APPT',data})
    })
    .catch(error => {
      dispatch({type: 'ERROR_APPT', error})
    })
  }
}