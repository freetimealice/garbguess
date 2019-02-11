// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

// import {combineReducers} from 'redux'
//action type


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

export const fetchCampuses = (campuses) => ({
  type: GOT_CAMPUSES,
  campuses
})

export const fetchStudents = (students) => ({
  type: GOT_STUDENTS,
  students
})

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

export default rootReducer
