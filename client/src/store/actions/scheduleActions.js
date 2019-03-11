import axios from 'axios'

export const getAppt = () => {
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

export const updatePerson = (id, payload) => {
  return (dispatch) => {
    axios.patch(`api/people/${id}`, payload).then(res => {
      const data = res.data
      dispatch({type: 'UPDATE_PERSON', data})
    })
    .catch(err =>{
      console.log('Failed to update person')
    })
  }
}

export const updateAppt = (id, payload) => {
  return (dispatch) => {
    axios.post(`api/people`, payload).then(res => {
      const updateAppt = {
        person: res.data._id,
        isAvailable: false
      }
      const personPayload = res.data
      axios.patch(`/api/appointments/${id}`, updateAppt).then(res => {
        const data = res.data
        dispatch({type: 'UPDATE_APPT',data, personPayload})
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

export const cancelAppt = (pid, appt) => {
  return (dispatch) => {
    axios.delete(`api/people/${pid}`).then(res => {
      axios.patch(`/api/appointments/${appt._id}`, appt).then(res => {
        const data = appt
        dispatch({type: 'CANCEL_APPT',data})
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

export const updateTime = (oldAppt, newAppt) => {
  return (dispatch) => {
    axios.patch(`/api/appointments/${oldAppt._id}`, oldAppt).then(resOld => {
      axios.patch(`/api/appointments/${newAppt._id}`, newAppt).then(resNew => {
        const oldData = resOld.data
        const newData = resNew.data
        dispatch({type: 'UPDATE_TIME', oldData, newData})
      })
      .catch(error => {
        dispatch({type: 'ERROR_APPT', error})
      })
    })
    .catch(error => {
      dispatch({type: 'ERROR_APPT', error})
    })
  }
}