import axios from 'axios'
import {combineReducers} from 'redux'


const initialState = {
  campuses: [],
  students: [],
  selectedStudent: {},
  selectedCampus: {}
}
//action type
const GOT_CAMPUSES = 'GOT_CAMPUSES'
const GOT_STUDENTS = 'GOT_STUDENTS'
const SELECTED_CAMPUS = 'SELECTED_CAMPUS'
const SELECTED_STUDENT = 'SELECTED_STUDENT'

//action creaters
export const gotCampuses = (campuses) => ({
  type: GOT_CAMPUSES,
  campuses
})

export const gotStudents = (students) => ({
  type: GOT_STUDENTS,
  students
})

export const gotStudent = (student) => ({
  type: SELECTED_STUDENT,
  student
})

export const gotCampus = (campus) => ({
  type: SELECTED_CAMPUS,
  campus
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

export const fetchCampus = (campusId) => {
  return async (dispatch) => {
    const {data} = await axios.get(`/api/campus/${campusId}`)
    dispatch(gotCampus(data))
  }
}

export const fetchStudent = (studentId) => {
  return async (dispatch) => {
    const {data} = await axios.get(`/api/students/${studentId}`)
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

const selectedStudent = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_STUDENT:
      return action.campus
    default:
      return state
  }
}

const selectedCampus = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_CAMPUS:
      return action.student
    default:
      return state
  }
}

const rootReducer = combineReducers({campuses, students, selectedStudent, selectedCampus})

export default rootReducer
