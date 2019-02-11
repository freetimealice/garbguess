// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

// import {combineReducers} from 'redux'
//action type

import axios from 'axios'
import {combineReducers} from 'redux'

//action type
const GOT_CAMPUSES = 'GOT_CAMPUSES'
const GOT_STUDENTS = 'GOT_STUDENTS'

//action creaters
export const gotCampuses = (campuses) => ({
  type: GOT_CAMPUSES,
  campuses
})

export const gotStudents = (students) => ({
  type: GOT_STUDENTS,
  students
})

//thunk creaters
export const fetchCampuses = () => {
  return async (dispatch) => {
    const {data} = await axios.get('/api/campuses')
    dispatch(gotCampuses(data))
  }
}

export const fetchStudents = () => {
  return async (dispatch) => {
    const {data} = await axios.get('/api/students')
    dispatch(gotStudents(data))
  }
}

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

const rootReducer = combineReducers({campuses, students})

export default rootReducer
