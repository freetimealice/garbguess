
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

