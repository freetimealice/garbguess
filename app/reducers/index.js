import { combineReducers } from 'redux';

import * as aTypes from '../actions';

const campuses = (state = [], action) => {
  switch (action.type) {
    case aTypes.GOT_CAMPUSES:
      return action.campuses;
    case aTypes.ADDED_CAMPUS:
      return [...state, action.campus];
    case aTypes.DELETED_CAMPUS:
      return state
        .slice()
        .filter(currCampus => currCampus.id !== action.campusId);
    case aTypes.UPDATED_CAMPUS: {
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
    case aTypes.GOT_STUDENTS:
      return action.students;
    case aTypes.ADDED_STUDENT:
      return [...state, action.student];
    case aTypes.DELETED_STUDENT:
      return state
        .slice()
        .filter(currStudent => currStudent.id !== action.studentId);
    case aTypes.UPDATED_STUDENT:
    console.log(state)
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
    case aTypes.SELECTED_STUDENT:
      return action.student;
    case aTypes.UPDATED_STUDENT:
      return action.student;
    default:
      return state;
  }
};

const selectedCampus = (state = {}, action) => {
  switch (action.type) {
    case aTypes.SELECTED_CAMPUS:
      return action.campus;
    case aTypes.UPDATED_CAMPUS:
      return action.campus;
    default:
      return state;
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case aTypes.REQUESTING_DATA:
      return true;
    case aTypes.GOT_CAMPUSES:
      return false;
    case aTypes.GOT_STUDENTS:
      return false;
    case aTypes.SELECTED_CAMPUS:
      return false;
    case aTypes.SELECTED_STUDENT:
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
