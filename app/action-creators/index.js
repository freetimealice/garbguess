import axios from 'axios';

//action type
export const GOT_CAMPUSES = 'GOT_CAMPUSES';
export const GOT_STUDENTS = 'GOT_STUDENTS';
export const SELECTED_CAMPUS = 'SELECTED_CAMPUS';
export const SELECTED_STUDENT = 'SELECTED_STUDENT';
export const ADDED_CAMPUS = 'ADDED_CAMPUS';
export const ADDED_STUDENT = 'ADDED_STUDENT';

//action creators
export const gotCampuses = campuses => ({
  type: GOT_CAMPUSES,
  campuses,
});

export const gotStudents = students => ({
  type: GOT_STUDENTS,
  students,
});

export const gotStudent = student => ({
  type: SELECTED_STUDENT,
  student,
});

export const gotCampus = campus => ({
  type: SELECTED_CAMPUS,
  campus,
});

export const addedStudent = student => ({
  type: ADDED_STUDENT,
  student,
});

export const addedCampus = campus => {
  return {
    type: ADDED_CAMPUS,
    campus,
  };
};

//thunks
export const fetchCampuses = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/campuses');
    dispatch(gotCampuses(data));
  };
};

export const fetchStudents = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/students');
    dispatch(gotStudents(data));
  };
};

export const fetchCampus = campusId => {
  return async dispatch => {
    const { data } = await axios.get(`/api/campuses/${campusId}`);
    dispatch(gotCampus(data));
  };
};

export const fetchStudent = studentId => {
  return async dispatch => {
    const { data } = await axios.get(`/api/students/${studentId}`);
    dispatch(gotStudent(data));
  };
};

export const addCampus = newCampus => {
  return async dispatch => {
    const { data } = await axios.post('/api/campuses', newCampus);
    dispatch(addedCampus(data));
  };
};

export const addStudent = newStudent => {
  
  return async dispatch => {
    const { data } = await axios.post('/api/students', newStudent);
    dispatch(addedStudent(data));
  };
};
