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
  REQUESTING_DATA,
  UPDATED_STUDENT,
  UPDATED_CAMPUS,
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
    case UPDATED_CAMPUS: {
      const newCampusArr = state.slice();
      const newState = newCampusArr.map(currCampus => {
        if (currCampus.id === action.campus.id) {
          return action.campus;
        } else {
          return currCampus;
        }
      });
      return newState;
    }
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
    case UPDATED_STUDENT:
      return state.map(currStudent => {
        if (currStudent.id === action.student.id) {
          return action.student;
        } else {
          return currStudent;
        }
      });
    default:
      return state;
  }
};

const selectedStudent = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_STUDENT:
      return action.student;
    case UPDATED_STUDENT:
      return action.student;
    default:
      return state;
  }
};

const selectedCampus = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_CAMPUS:
      return action.campus;
    case UPDATED_CAMPUS:
      return action.campus;
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return true;
    case GOT_CAMPUSES:
      return false;
    case GOT_STUDENTS:
      return false;
    case SELECTED_CAMPUS:
      return false;
    case SELECTED_STUDENT:
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
  isFetching,
});

export default rootReducer;
