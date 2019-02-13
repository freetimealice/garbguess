import * as aTypes from './types';

export const gotCampuses = campuses => ({
  type: aTypes.GOT_CAMPUSES,
  campuses,
});

export const gotStudents = students => ({
  type: aTypes.GOT_STUDENTS,
  students,
});

export const gotStudent = student => ({
  type: aTypes.SELECTED_STUDENT,
  student,
});

export const gotCampus = campus => ({
  type: aTypes.SELECTED_CAMPUS,
  campus,
});

export const addedStudent = student => ({
  type: aTypes.ADDED_STUDENT,
  student,
});

export const addedCampus = campus => {
  return {
    type: aTypes.ADDED_CAMPUS,
    campus,
  };
};

export const deletedStudent = studentId => {
  return {
    type: aTypes.DELETED_STUDENT,
    studentId,
  };
};

export const deletedCampus = campusId => {
  return {
    type: aTypes.DELETED_CAMPUS,
    campusId,
  };
};

export const requestingData = () => {
  return {
    type: aTypes.REQUESTING_DATA,
  };
};

export const updatedStudent = student => {
  return {
    type: aTypes.UPDATED_STUDENT,
    student,
  };
};

export const updatedCampus = campus => {
  return {
    type: aTypes.UPDATED_CAMPUS,
    campus,
  };
};
