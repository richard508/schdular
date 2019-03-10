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

export const updateAppt = (id, payload) => {
  return (dispatch) => {
    axios.post(`api/people`, payload).then(res => {
      const personPayload = {
        person: res.data._id,
        isAvailable: false
      }
      axios.patch(`/api/appointments/${id}`, personPayload).then(res => {
        const data = res.data
        dispatch({type: 'UPDATE_APPT',data})
      })
      .catch(error => {
        dispatch({type: 'ERROR_APPT', error})
      })
    })
    .catch(error => {
      dispatch({type: 'ERROR_PERSON', error})
    })
  }
}