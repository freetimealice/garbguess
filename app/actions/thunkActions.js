import axios from 'axios';
import * as action from './normalActions';

export const fetchCampuses = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/campuses');
    dispatch(action.gotCampuses(data));
  };
};

export const fetchStudents = () => {
  return async dispatch => {
    const { data } = await axios.get('/api/students');
    dispatch(action.gotStudents(data));
  };
};

export const fetchCampus = campusId => {
  return async dispatch => {
    const { data } = await axios.get(`/api/campuses/${campusId}`);
    dispatch(action.gotCampus(data));
  };
};

export const fetchStudent = studentId => {
  return async dispatch => {
    const { data } = await axios.get(`/api/students/${studentId}`);
    dispatch(action.gotStudent(data));
  };
};

export const addCampus = (newCampus, history) => {
  return async dispatch => {
    const { data } = await axios.post('/api/campuses', newCampus);
    dispatch(action.addedCampus(data));
    history.push(`/campuses/${data.id}`);
  };
};

export const addStudent = (newStudent, history) => {
  return async dispatch => {
    const { data } = await axios.post('/api/students', newStudent);
    dispatch(action.addedStudent(data));
    history.push(`/students/${data.id}`);
  };
};

export const deleteCampus = campusId => {
  return async dispatch => {
    await axios.delete(`/api/campuses/${campusId}`);
    dispatch(action.deletedCampus(campusId));
  };
};

export const deleteStudent = studentId => {
  return async dispatch => {
    await axios.delete(`/api/students/${studentId}`);
    dispatch(action.deletedStudent(studentId));
  };
};

export const updateCampus = (campus, campusId) => {
  return async dispatch => {
    const { data } = await axios.put(`/api/campuses/${campusId}`, campus);
    dispatch(action.updatedCampus(data));
  };
};

export const updateStudent = (student, studentId) => {
  return async dispatch => {
    const { data } = await axios.put(`/api/students/${studentId}`, student);
    dispatch(action.updatedStudent(data));
  };
};
