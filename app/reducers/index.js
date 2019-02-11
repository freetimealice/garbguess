import {combineReducers} from 'redux'
import {GOT_CAMPUSES, GOT_STUDENTS, SELECTED_STUDENT, SELECTED_CAMPUS} from '../actionCreaters'

const campuses = (state = [], action) => {
  switch (action.type) {
    case GOT_CAMPUSES:
      return action.campuses
    default:
      return state
  }
}

const students = (state = [], action) => {
  switch (action.type) {
    case GOT_STUDENTS:
      return action.students
    default:
      return state
  }
}

const selectedStudent = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_STUDENT:
      return action.student
    default:
      return state
  }
}

const selectedCampus = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_CAMPUS:
      return action.campus
    default:
      return state
  }
}

const rootReducer = combineReducers({campuses, students, selectedStudent, selectedCampus})

export default rootReducer
