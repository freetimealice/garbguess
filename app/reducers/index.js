// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

// import {combineReducers} from 'redux'
//action type

import axios from 'axios'
import {combineReducers} from 'redux'
//initialState
const initialState = {
  campuses: [],
  students: []
}

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

//reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_CAMPUSES: {
      return {...state, campuses: action.campuses}
    }
    case GOT_STUDENTS: {
      return {...state, students: action.students}
    }
    default:
      return state
  }
}
// combineReducers({campuses: campusReducer, students: studentReducer})
export default rootReducer
