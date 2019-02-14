// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from 'redux';

import {
  GET_CAMPUSES,
  GET_STUDENTS,
  GET_ONE_CAMPUS,
  GET_ONE_STUDENT,
  GET_ENROLLED_STUDENTS,
} from '../actionCreators';

//CAMPUSES
export const allCampusReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES: {
      return action.campuses;
    }
    default:
      return state;
  }
};

export const singleCampusReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ONE_CAMPUS: {
      return action.campus;
    }
    default:
      return state;
  }
};

///////////////////////////
//STUDENTS

export const allStudentReducer = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS: {
      return action.students;
    }
    default:
      return state;
  }
};

export const singleStudentReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ONE_STUDENT: {
      return action.student;
    }
    default:
      return state;
  }
};

export const enrolledStudentsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ENROLLED_STUDENTS: {
      return action.students;
    }
    default:
      return state;
  }
};

///////////////////////////
//ROOT

const rootReducer = combineReducers({
  campuses: allCampusReducer,
  selectedCampus: singleCampusReducer,
  students: allStudentReducer,
  selectedStudent: singleStudentReducer,
  enrolledStudents: enrolledStudentsReducer
});

export default rootReducer;
