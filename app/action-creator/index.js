import axios from 'axios';

//action type
import * as actionTYpes from './actionTypes.js';
export const GOT_CAMPUSES = 'GOT_CAMPUSES';
export const GOT_STUDENTS = 'GOT_STUDENTS';
export const SELECTED_CAMPUS = 'SELECTED_CAMPUS';
export const SELECTED_STUDENT = 'SELECTED_STUDENT';
export const ADDED_CAMPUS = 'ADDED_CAMPUS';
export const ADDED_STUDENT = 'ADDED_STUDENT';
export const DELETED_CAMPUS = 'DELETED_CAMPUS';
export const DELETED_STUDENT = 'DELETED_STUDENT';
export const REQUESTING_DATA = 'REQUESTING_DATA'
export const UPDATED_STUDENT = 'UPDATED_STUDENT'
export const UPDATED_CAMPUS = 'UPDATED_CAMPUS'

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

export const deletedStudent = studentId => {
  return {
    type: DELETED_STUDENT,
    studentId,
  };
};

export const deletedCampus = campusId => {
  return {
    type: DELETED_CAMPUS,
    campusId,
  };
};

export const requestingData = () => {
  return {
    type: REQUESTING_DATA,
  };
};

export const updatedStudent  = student => {
  return {
    type: UPDATED_STUDENT,
    student,
  };
}

export const updatedCampus = campus => {
  return {
    type: UPDATED_CAMPUS,
    campus,
  };
};

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

export const deleteCampus = campusId => {
  return async dispatch => {
    await axios.delete(`/api/campuses/${campusId}`);
    dispatch(deletedCampus(campusId));
  };
};

export const deleteStudent = studentId => {
  return async dispatch => {
    await axios.delete(`/api/students/${studentId}`);
    dispatch(deletedStudent(studentId));
  };
};

export const updateCampus = (campus, campusId) => {
  return async dispatch => {
    const {data} = await axios.put(`/api/campuses/${campusId}`, campus);
    dispatch(updatedCampus(data));
  };
};

export const updateStudent = (student, studentId) => {
  return async dispatch => {
    const {data} = await axios.put(`/api/students/${studentId}`, studentId);
    dispatch(updatedStudent(data));
  };
};
