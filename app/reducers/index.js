import { combineReducers } from 'redux';

import {
  GOT_CAMPUSES,
  GOT_STUDENTS,
  SELECTED_STUDENT,
  SELECTED_CAMPUS,
  ADDED_CAMPUS,
  ADDED_STUDENT,
  DELETED_CAMPUS,
  DELETED_STUDENT,
  REQUEST_CAMPUSES,
  REQUEST_STUDENTS,
} from '../action-creator';

const campuses = (state = [], action) => {
  switch (action.type) {
    case GOT_CAMPUSES:
      return action.campuses;
    case ADDED_CAMPUS:
      return [...state, action.campus];
    case DELETED_CAMPUS:
      return state
        .slice()
        .filter(currCampus => currCampus.id !== action.campusId);
    default:
      return state;
  }
};

const students = (state = [], action) => {
  switch (action.type) {
    case GOT_STUDENTS:
      return action.students;
    case ADDED_STUDENT:
      return [...state, action.student];
    case DELETED_STUDENT:
      return state
        .slice()
        .filter(currStudent => currStudent.id !== action.studentId);
    default:
      return state;
  }
};

const selectedStudent = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_STUDENT:
      return action.student;
    default:
      return state;
  }
};

const selectedCampus = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_CAMPUS:
      return action.campus;
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQUEST_CAMPUSES:
      return true;
    case REQUEST_STUDENTS:
      return true;
    case GOT_CAMPUSES:
      return false;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  campuses,
  students,
  selectedStudent,
  selectedCampus,
  isFetching
});

export default rootReducer;
