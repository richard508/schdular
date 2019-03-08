import {combineReducers} from 'redux'
import scheduleReducer from './scheduleReducer'
const rootReducer = combineReducers({
  appt: scheduleReducer
})
export default rootReducer

